import {
  AsyncHandler,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  ElementRef,
  IconComponent,
  MAP_FEATURE_DATA,
  TranslatePipe,
  UpperCasePipe,
  computed,
  inject,
  isSameDay,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BR6UWVYE.js";

// libs/explore/src/lib/explore-desk-info.component.ts
function ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.display_user(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.department(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "uppercase");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("text-light border-base-100 rounded-sm border p-1 px-2 capitalize shadow-sm " + ctx_r0.status());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx_r0.status() === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(3, 3, ctx_r0.status())), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "alarm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Free ", ctx_r0.current_booking() ? "at" : "until", " ", \u0275\u0275pipeBind2(5, 2, ctx_r0.current_booking() ? ctx_r0.current_booking().date_end : ctx_r0.next_booking().date, "shortTime"), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "h4", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template, 2, 1, "p", 8);
    \u0275\u0275conditionalCreate(8, ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template, 5, 7, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template, 6, 5, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bg-base-100 pointer-events-none absolute top-0 left-0 w-64 p-1 shadow-sm " + ctx_r0.x_pos() + " " + ctx_r0.y_pos());
    \u0275\u0275property("id", ctx_r0.map_id());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.name() || ctx_r0.map_id() || ctx_r0.id(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.display_user() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.display_user() && ctx_r0.department() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.status() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.next_booking() || ctx_r0.current_booking() ? 10 : -1);
  }
}
var ExploreDeskInfoComponent = class _ExploreDeskInfoComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this.status = computed(
      () => this._details.status?.(),
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.id = signal(
      this._details.id,
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_id = signal(
      this._details.map_id,
      ...ngDevMode ? [{ debugName: "map_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.name = signal(
      this._details.name,
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = this._details.user;
    this.start = signal(
      this._details.start,
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end = signal(
      this._details.end,
      ...ngDevMode ? [{ debugName: "end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.department = signal(
      this._details.department,
      ...ngDevMode ? [{ debugName: "department" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = this._details.bookings;
    this.date = signal(
      this._details.date || Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_time = computed(
      () => isSameDay(this.date(), Date.now()) ? this.now() : this.date(),
      ...ngDevMode ? [{ debugName: "active_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.next_booking = computed(
      () => this.bookings?.().filter((booking) => booking.date > this.active_time() && isSameDay(booking.date, this.date())).sort((a, b) => a.date - b.date)[0],
      ...ngDevMode ? [{ debugName: "next_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_booking = computed(
      () => this.bookings?.().find((booking) => this.active_time() >= booking.date && this.active_time() < booking.date_end),
      ...ngDevMode ? [{ debugName: "current_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_booking = computed(
      () => this.next_booking() || null,
      ...ngDevMode ? [{ debugName: "display_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_user = computed(
      () => this.display_booking()?.user_name || this.display_booking()?.booked_by_name || this.user?.(),
      ...ngDevMode ? [{ debugName: "display_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_start = computed(
      () => this.display_booking()?.date || this.start(),
      ...ngDevMode ? [{ debugName: "display_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_end = computed(
      () => this.display_booking()?.date_end || this.end(),
      ...ngDevMode ? [{ debugName: "display_end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.y_pos = signal(
      "top",
      ...ngDevMode ? [{ debugName: "y_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.x_pos = signal(
      "left",
      ...ngDevMode ? [{ debugName: "x_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => this.updatePosition(), 200);
    this.interval("time", () => this.now.set(Date.now()), 5e3);
  }
  updatePosition(tries = 0) {
    const parent = this._element.nativeElement.parentElement?.parentElement;
    if (!parent)
      return setTimeout(() => this.updatePosition(++tries), 200);
    const box = parent?.getBoundingClientRect();
    const wbox = document.body?.getBoundingClientRect();
    this.y_pos.set(box.y >= wbox.height / 2 ? "bottom" : "top");
    this.x_pos.set(box.x >= wbox.width / 2 ? "right" : "left");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ExploreDeskInfoComponent_BaseFactory;
      return function ExploreDeskInfoComponent_Factory(__ngFactoryType__) {
        return (\u0275ExploreDeskInfoComponent_BaseFactory || (\u0275ExploreDeskInfoComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreDeskInfoComponent)))(__ngFactoryType__ || _ExploreDeskInfoComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeskInfoComponent, selectors: [["explore-desk-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 8, consts: [["desk_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "z-20", "h-full", "w-full", 3, "mouseenter", "touchdown", "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "border-base-200", "rounded-md", "border", "p-1"], [1, "triangle", "absolute"], [1, "flex", "w-full", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col", "px-2", "py-1"], ["map-id", "", 1, "m-0", "truncate", "font-medium"], ["user", "", 1, "text-xs"], [1, "relative", "flex", "flex-wrap", "text-sm"], [1, "mt-1", "flex", "items-center", "space-x-2", "px-2", "pb-2", "text-sm"], ["status", ""]], template: function ExploreDeskInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("mouseenter", function ExploreDeskInfoComponent_Template_div_mouseenter_0_listener() {
          return ctx.updatePosition();
        })("touchdown", function ExploreDeskInfoComponent_Template_div_touchdown_0_listener() {
          return ctx.updatePosition();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(1, ExploreDeskInfoComponent_ng_template_1_Template, 11, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const desk_tooltip_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("content", desk_tooltip_r2)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
        \u0275\u0275attribute("id", ctx.id())("map_id", ctx.map_id());
      }
    }, dependencies: [
      CommonModule,
      CustomTooltipComponent,
      IconComponent,
      UpperCasePipe,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.top.left[_ngcontent-%COMP%] {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status][_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeskInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-desk-info", template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="pointer-events-auto relative z-20 h-full w-full"
            [attr.id]="id()"
            [attr.map_id]="map_id()"
            (mouseenter)="updatePosition()"
            (touchdown)="updatePosition()"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id()"
                [class]="
                    'bg-base-100 pointer-events-none absolute top-0 left-0 w-64 p-1 shadow-sm ' +
                    x_pos() +
                    ' ' +
                    y_pos()
                "
            >
                <div class="border-base-200 rounded-md border p-1">
                    <div class="triangle absolute"></div>
                    <div class="flex w-full items-center space-x-4">
                        <div class="flex flex-1 flex-col px-2 py-1">
                            <h4 map-id class="m-0 truncate font-medium">
                                {{ name() || map_id() || id() }}
                            </h4>
                            @if (display_user()) {
                                <p user class="text-xs">
                                    {{ display_user() }}
                                </p>
                            }
                            @if (display_user() && department()) {
                                <p user class="text-xs">
                                    {{ department() }}
                                </p>
                            }
                        </div>
                        @if (status()) {
                            <div class="relative flex flex-wrap text-sm">
                                <div
                                    status
                                    [class]="
                                        'text-light border-base-100 rounded-sm border p-1 px-2 capitalize shadow-sm ' +
                                        status()
                                    "
                                >
                                    {{
                                        (status() === 'not-bookable'
                                            ? 'COMMON.STATUS_NOT_BOOKABLE'
                                            : 'COMMON.STATUS_' +
                                              (status() | uppercase)
                                        ) | translate
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                    @if (next_booking() || current_booking()) {
                        <div
                            class="mt-1 flex items-center space-x-2 px-2 pb-2 text-sm"
                        >
                            <icon>alarm</icon>
                            <div>
                                Free
                                {{ current_booking() ? 'at' : 'until' }}
                                {{
                                    (current_booking()
                                        ? current_booking().date_end
                                        : next_booking().date
                                    ) | date: 'shortTime'
                                }}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      CustomTooltipComponent,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;be9e427f23d2cfa533bc3f1a2b3a60abe03093f3828dce67e30b4276b95b0771;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-desk-info.component.ts */\n.top.left {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left .triangle {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right .triangle {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left .triangle {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right .triangle {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeskInfoComponent, { className: "ExploreDeskInfoComponent", filePath: "libs/explore/src/lib/explore-desk-info.component.ts", lineNumber: 220 });
})();

export {
  ExploreDeskInfoComponent
};
//# sourceMappingURL=chunk-C67DGRSJ.js.map
