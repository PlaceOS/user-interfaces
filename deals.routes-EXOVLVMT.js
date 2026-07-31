import {
  VirtualConciergeButtonComponent
} from "./chunk-TOWMDYDP.js";
import "./chunk-JH57CSBH.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-HBMRFSJA.js";
import "./chunk-ZAMM4SZX.js";
import "./chunk-KEYTM7JH.js";
import "./chunk-SZ5GBDDM.js";
import "./chunk-5ZSUQA3R.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-W4AN7G44.js";
import "./chunk-JLEHAM3Q.js";
import "./chunk-DGQVL4EH.js";
import "./chunk-52FAPDJ7.js";
import "./chunk-Z5LOGPD2.js";
import "./chunk-ZJDKMA6X.js";
import {
  AuthenticatedImageDirective
} from "./chunk-JCGQECHU.js";
import "./chunk-6DYTNHPO.js";
import {
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  OrganisationService,
  SettingsService
} from "./chunk-PUG6UMFT.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  MatRipple,
  MatRippleModule,
  Output,
  Router,
  RouterModule,
  TranslatePipe,
  Wu,
  computed,
  effect,
  firstTruthyValueFrom,
  inject,
  output,
  setClassMetadata,
  signal,
  unique,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CUTJ2QPZ.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/deals/deal-details-modal.component.ts
function DealDetailsModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.deal.image);
  }
}
function DealDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.deal.details, " ");
  }
}
var DealDetailsModalComponent = class _DealDetailsModalComponent {
  constructor() {
    this.deal = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.remove = output();
  }
  close() {
    this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function DealDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DealDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealDetailsModalComponent, selectors: [["deal-details-modal"]], outputs: { remove: "remove" }, decls: 27, vars: 15, consts: [[1, "bg-base-100", "relative", "w-lg", "max-w-[calc(100vw-2rem)]"], [1, "bg-base-300", "relative", "h-48", "w-lg", "max-w-full", "overflow-hidden", "rounded-b-lg"], ["auth", "", "alt", "Deal Image", 1, "h-full", "w-full", "object-cover", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "bottom-2", "left-2", "max-w-full", "truncate", "rounded-sm", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "flex", "space-x-2", "p-2"], [1, "w-auto", "px-2", "text-xl", "font-medium"], [1, "flex-1"], [1, "max-h-[60vh]", "space-y-2", "overflow-auto", "p-4"], [1, "font-medium"], [1, "pb-4", "text-sm"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-100", "absolute", "top-2", "right-2"]], template: function DealDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, DealDetailsModalComponent_Conditional_2_Template, 1, 1, "img", 2);
        \u0275\u0275conditionalCreate(3, DealDetailsModalComponent_Conditional_3_Template, 2, 1, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "header", 4)(5, "h3", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "h4", 8);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h4", 8);
        \u0275\u0275text(15, "Validity Period");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "h4", 8);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 9);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "button", 10)(25, "icon");
        \u0275\u0275text(26, "close");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.deal.image ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.deal.details ? 3 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.deal.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "COMMON.DESCRIPTION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.deal.description);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 10, ctx.deal.expires_at, "mediumDate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 13, "COMMON.TERMS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.deal.terms);
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatDialogClose,
      AuthenticatedImageDirective,
      IconComponent,
      RouterModule,
      MatRippleModule,
      MatRipple,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "deal-details-modal", template: `
        <div class="bg-base-100 relative w-lg max-w-[calc(100vw-2rem)]">
            <div
                class="bg-base-300 relative h-48 w-lg max-w-full overflow-hidden rounded-b-lg"
            >
                @if (deal.image) {
                    <img
                        class="h-full w-full object-cover"
                        auth
                        [source]="deal.image"
                        alt="Deal Image"
                    />
                }
                @if (deal.details) {
                    <div
                        class="bg-info text-info-content absolute bottom-2 left-2 max-w-full truncate rounded-sm px-2 py-1 text-xs shadow-sm"
                    >
                        {{ deal.details }}
                    </div>
                }
            </div>
            <header class="flex space-x-2 p-2">
                <h3 class="w-auto px-2 text-xl font-medium">{{ deal.name }}</h3>
                <div class="flex-1"></div>
                <!-- <button
                    btn
                    matRipple
                    class="inverse error space-x-2"
                    (click)="remove.emit()"
                >
                    <icon class="text-2xl text-error">delete</icon>
                    <div class="pr-2">{{ 'COMMON.REMOVE' | translate }}</div>
                </button> -->
            </header>
            <div class="max-h-[60vh] space-y-2 overflow-auto p-4">
                <h4 class="font-medium">
                    {{ 'COMMON.DESCRIPTION' | translate }}
                </h4>
                <p class="pb-4 text-sm">{{ deal.description }}</p>
                <h4 class="font-medium">Validity Period</h4>
                <p class="pb-4 text-sm">
                    {{ deal.expires_at | date: 'mediumDate' }}
                </p>
                <h4 class="font-medium">{{ 'COMMON.TERMS' | translate }}</h4>
                <p class="pb-4 text-sm">{{ deal.terms }}</p>
            </div>
            <button
                icon
                matRipple
                mat-dialog-close
                class="bg-base-100 absolute top-2 right-2"
            >
                <icon>close</icon>
            </button>
        </div>
    `, imports: [
      CommonModule,
      MatDialogModule,
      AuthenticatedImageDirective,
      TranslatePipe,
      IconComponent,
      RouterModule,
      MatRippleModule
    ] }]
  }], null, { remove: [{ type: Output, args: ["remove"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealDetailsModalComponent, { className: "DealDetailsModalComponent", filePath: "apps/workplace/src/app/deals/deal-details-modal.component.ts", lineNumber: 85 });
})();

// apps/workplace/src/app/deals/deals.service.ts
var DealsService = class _DealsService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deals = signal(
      [],
      ...ngDevMode ? [{ debugName: "deals" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(async () => {
      const bld = this._org.active_building();
      if (!bld?.id) {
        this.deals.set([]);
        return;
      }
      this.loading.set(true);
      const { details } = await Wu(bld.id, "deals-n-offers").catch(() => ({ details: [] }));
      this.deals.set(details instanceof Array ? details : []);
      this.loading.set(false);
    });
  }
  viewDeal(deal) {
    this._dialog.open(DealDetailsModalComponent, { data: deal });
  }
  static {
    this.\u0275fac = function DealsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DealsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DealsService, factory: _DealsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/workplace/src/app/deals/deals.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ({ date: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DealsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function DealsComponent_For_9_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.type.set(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-100", ctx_r2.type() === t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2, " ");
  }
}
function DealsComponent_For_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const deal_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", deal_r5.image)("alt", deal_r5.name + " [Image]");
  }
}
function DealsComponent_For_33_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", deal_r5.details, " ");
  }
}
function DealsComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 13);
    \u0275\u0275listener("click", function DealsComponent_For_33_Template_button_click_1_listener() {
      const deal_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(deal_r5));
    });
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275conditionalCreate(3, DealsComponent_For_33_Conditional_3_Template, 1, 2, "img", 15);
    \u0275\u0275conditionalCreate(4, DealsComponent_For_33_Conditional_4_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "h3", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 19);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const deal_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(deal_r5.image ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(deal_r5.details ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", deal_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 7, "COMMON.VALID_UNTIL_DATE", \u0275\u0275pureFunction1(10, _c1, \u0275\u0275pipeBind2(10, 4, deal_r5.expires_at, "mediumDate"))), " ");
  }
}
function DealsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementStart(2, "div", 21)(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 23)(10, "icon");
    \u0275\u0275text(11, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "APP.WORKPLACE.DEALS_EMPTY_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.WORKPLACE.DEALS_EMPTY_BODY"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 7, "COMMON.REFRESH"), " ");
  }
}
var DealsComponent = class _DealsComponent {
  constructor() {
    this._service = inject(DealsService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this.deals = computed(
      () => this._service.deals().filter((_) => _.expires_at > Date.now()),
      ...ngDevMode ? [{ debugName: "deals" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.types = computed(
      () => unique(this.deals().map((_) => _.type).sort((a, b) => a.localeCompare(b))),
      ...ngDevMode ? [{ debugName: "types" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.type = signal(
      "",
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.sort_type = signal(
      "",
      ...ngDevMode ? [{ debugName: "sort_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_deals = computed(
      () => this.deals().filter((deal) => !this.type() || deal.type === this.type()).sort((a, b) => this.sort_type() === "date_asc" ? a.expires_at - b.expires_at : this.sort_type() === "date_desc" ? b.expires_at - a.expires_at : 0),
      ...ngDevMode ? [{ debugName: "filtered_deals" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = (d) => this._service.viewDeal(d);
  }
  sort(type) {
    this.sort_type.set(type);
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    await firstTruthyValueFrom(this._settings.initialised);
    const has_deals = (this._settings.get("app.features") || []).includes("deals-n-offers");
    if (!has_deals)
      this._router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function DealsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DealsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsComponent, selectors: [["deals-n-offers"]], decls: 37, vars: 26, consts: [["sortMenu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col", "overflow-auto"], [1, "bg-base-200", "flex", "h-1/2", "min-h-1/2", "flex-1", "flex-col", "overflow-auto", "px-4"], [1, "bg-base-200", "sticky", "top-0", "z-20", "mx-auto", "mb-2", "w-160", "max-w-full", "px-2", "pt-2"], [1, "-mx-2", "flex", "flex-wrap", "py-2"], ["matRipple", "", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-1", 3, "click"], ["matRipple", "", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-1", 3, "bg-base-100"], [1, "flex", "items-center", "justify-between", "text-base"], ["matRipple", "", 1, "flex", "items-center", "rounded-sm", "p-2", 3, "matMenuTriggerFor"], [1, "ml-2", "text-xl"], ["mat-menu-item", "", 3, "click"], [1, "mx-auto", "mb-4", "grid", "w-160", "max-w-full", "grid-cols-1", "gap-4", "px-2", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "bg-base-200", "col-span-6", "flex", "w-full", "flex-col", "items-center", "justify-center", "rounded-lg", "p-16"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "flex-col", "items-center", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "click"], [1, "bg-base-300", "relative", "h-48", "w-full", "max-w-full", "overflow-hidden", "rounded-b-lg"], ["auth", "", 1, "text-base-content/50", "flex", "h-full", "w-full", "items-center", "justify-center", "object-cover", 3, "source", "alt"], [1, "bg-info", "text-info-content", "absolute", "bottom-2", "left-2", "max-w-[calc(100%-1rem)]", "truncate", "rounded-sm", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "w-full", "px-4", "py-2", "text-left"], [1, "truncate", "font-bold"], [1, "text-sm", "opacity-50"], ["src", "assets/icons/no-deals.svg", "alt", "No Deals or Offers Available", 1, "mb-8", "w-48"], [1, "flex", "flex-col", "items-center", "space-y-4", "text-center"], [1, "text-lg", "font-bold"], ["btn", "", "matRipple", ""]], template: function DealsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "topbar");
        \u0275\u0275elementStart(2, "main", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
        \u0275\u0275listener("click", function DealsComponent_Template_button_click_5_listener() {
          return ctx.type.set("");
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(8, DealsComponent_For_9_Template, 2, 3, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "div");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 8)(15, "div");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "icon", 9);
        \u0275\u0275text(19, "keyboard_arrow_down");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "mat-menu", null, 0)(22, "button", 10);
        \u0275\u0275listener("click", function DealsComponent_Template_button_click_22_listener() {
          return ctx.sort("relevance");
        });
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 10);
        \u0275\u0275listener("click", function DealsComponent_Template_button_click_25_listener() {
          return ctx.sort("date_desc");
        });
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 10);
        \u0275\u0275listener("click", function DealsComponent_Template_button_click_28_listener() {
          return ctx.sort("date_asc");
        });
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 11);
        \u0275\u0275repeaterCreate(32, DealsComponent_For_33_Template, 12, 12, "div", null, _forTrack0);
        \u0275\u0275conditionalCreate(34, DealsComponent_Conditional_34_Template, 15, 9, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(35, "virtual-concierge-button")(36, "footer-menu");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const sortMenu_r6 = \u0275\u0275reference(21);
        const deal_list_r7 = ctx.filtered_deals();
        const type_list_r8 = ctx.types();
        \u0275\u0275advance(5);
        \u0275\u0275classProp("bg-base-100", ctx.type() === "");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "COMMON.ALL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(type_list_r8);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 12, "APP.WORKPLACE.DEAL_COUNT", \u0275\u0275pureFunction1(24, _c0, deal_list_r7.length), deal_list_r7.length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", sortMenu_r6);
        const sort_t_r9 = ctx.sort_type();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 16, sort_t_r9 === "date_desc" ? "APP.WORKPLACE.SORT_BY_DATE_DESC" : sort_t_r9 === "date_asc" ? "APP.WORKPLACE.SORT_BY_DATE_ASC" : "APP.WORKPLACE.SORT_BY_RELEVANCE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 18, "APP.WORKPLACE.SORT_BY_RELEVANCE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 20, "APP.WORKPLACE.SORT_BY_DATE_DESC"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 22, "APP.WORKPLACE.SORT_BY_DATE_ASC"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(deal_list_r7);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(deal_list_r7?.length <= 0 ? 34 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsComponent, [{
    type: Component,
    args: [{ selector: "deals-n-offers", template: `
        <div class="absolute inset-0 flex flex-col overflow-auto">
            <topbar />
            <main
                class="bg-base-200 flex h-1/2 min-h-1/2 flex-1 flex-col overflow-auto px-4"
            >
                @let deal_list = filtered_deals();
                <div
                    class="bg-base-200 sticky top-0 z-20 mx-auto mb-2 w-160 max-w-full px-2 pt-2"
                >
                    <div class="-mx-2 flex flex-wrap py-2">
                        @let type_list = types();
                        <button
                            matRipple
                            class="border-base-300 m-1 rounded-full border px-4 py-1"
                            [class.bg-base-100]="type() === ''"
                            (click)="type.set('')"
                        >
                            {{ 'COMMON.ALL' | translate }}
                        </button>
                        @for (t of type_list; track t) {
                            <button
                                matRipple
                                class="border-base-300 m-1 rounded-full border px-4 py-1"
                                [class.bg-base-100]="type() === t"
                                (click)="type.set(t)"
                            >
                                {{ t }}
                            </button>
                        }
                    </div>
                    <div class="flex items-center justify-between text-base">
                        <div>
                            {{
                                'APP.WORKPLACE.DEAL_COUNT'
                                    | translate
                                        : { count: deal_list.length }
                                        : deal_list.length
                            }}
                        </div>
                        <button
                            matRipple
                            class="flex items-center rounded-sm p-2"
                            [matMenuTriggerFor]="sortMenu"
                        >
                            <div>
                                @let sort_t = sort_type();
                                {{
                                    (sort_t === 'date_desc'
                                        ? 'APP.WORKPLACE.SORT_BY_DATE_DESC'
                                        : sort_t === 'date_asc'
                                          ? 'APP.WORKPLACE.SORT_BY_DATE_ASC'
                                          : 'APP.WORKPLACE.SORT_BY_RELEVANCE'
                                    ) | translate
                                }}
                            </div>
                            <icon class="ml-2 text-xl"
                                >keyboard_arrow_down</icon
                            >
                        </button>
                        <mat-menu #sortMenu="matMenu">
                            <button mat-menu-item (click)="sort('relevance')">
                                {{
                                    'APP.WORKPLACE.SORT_BY_RELEVANCE'
                                        | translate
                                }}
                            </button>
                            <button mat-menu-item (click)="sort('date_desc')">
                                {{
                                    'APP.WORKPLACE.SORT_BY_DATE_DESC'
                                        | translate
                                }}
                            </button>
                            <button mat-menu-item (click)="sort('date_asc')">
                                {{
                                    'APP.WORKPLACE.SORT_BY_DATE_ASC' | translate
                                }}
                            </button>
                        </mat-menu>
                    </div>
                </div>
                <div
                    class="mx-auto mb-4 grid w-160 max-w-full grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3"
                >
                    @for (deal of deal_list; track deal.id) {
                        <div>
                            <button
                                class="border-base-300 bg-base-100 flex w-full flex-col items-center overflow-hidden rounded-lg border shadow-sm"
                                (click)="view(deal)"
                            >
                                <div
                                    class="bg-base-300 relative h-48 w-full max-w-full overflow-hidden rounded-b-lg"
                                >
                                    @if (deal.image) {
                                        <img
                                            auth
                                            [source]="deal.image"
                                            [alt]="deal.name + ' [Image]'"
                                            class="text-base-content/50 flex h-full w-full items-center justify-center object-cover"
                                        />
                                    }
                                    @if (deal.details) {
                                        <div
                                            class="bg-info text-info-content absolute bottom-2 left-2 max-w-[calc(100%-1rem)] truncate rounded-sm px-2 py-1 text-xs shadow-sm"
                                        >
                                            {{ deal.details }}
                                        </div>
                                    }
                                </div>
                                <div class="w-full px-4 py-2 text-left">
                                    <h3 class="truncate font-bold">
                                        {{ deal.name }}
                                    </h3>
                                    <p class="text-sm opacity-50">
                                        {{
                                            'COMMON.VALID_UNTIL_DATE'
                                                | translate
                                                    : {
                                                          date:
                                                              deal.expires_at
                                                              | date
                                                                  : 'mediumDate',
                                                      }
                                        }}
                                    </p>
                                </div>
                            </button>
                        </div>
                    }
                    @if (deal_list?.length <= 0) {
                        <div
                            class="bg-base-200 col-span-6 flex w-full flex-col items-center justify-center rounded-lg p-16"
                        >
                            <img
                                src="assets/icons/no-deals.svg"
                                alt="No Deals or Offers Available"
                                class="mb-8 w-48"
                            />
                            <div
                                class="flex flex-col items-center space-y-4 text-center"
                            >
                                <p class="text-lg font-bold">
                                    {{
                                        'APP.WORKPLACE.DEALS_EMPTY_TITLE'
                                            | translate
                                    }}
                                </p>
                                <p class="text-sm opacity-50">
                                    {{
                                        'APP.WORKPLACE.DEALS_EMPTY_BODY'
                                            | translate
                                    }}
                                </p>
                                <button btn matRipple>
                                    <icon>refresh</icon>
                                    <div>
                                        {{ 'COMMON.REFRESH' | translate }}
                                    </div>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </main>
            <virtual-concierge-button />
            <footer-menu />
        </div>
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatMenuModule,
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsComponent, { className: "DealsComponent", filePath: "apps/workplace/src/app/deals/deals.component.ts", lineNumber: 205 });
})();

// apps/workplace/src/app/deals/deals.routes.ts
var ROUTES = [
  { path: "", component: DealsComponent, title: "Deals & Offers" }
];
export {
  ROUTES
};
//# sourceMappingURL=deals.routes-EXOVLVMT.js.map
