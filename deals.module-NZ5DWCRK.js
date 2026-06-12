import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-ZLUBY3U3.js";
import {
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  Fu,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatRipple,
  MatRippleModule,
  NgModule,
  OrganisationService,
  Output,
  Router,
  RouterModule,
  SettingsService,
  TranslatePipe,
  combineLatest,
  filter,
  firstTruthyValueFrom,
  inject,
  map,
  output,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  tap,
  unique,
  ɵsetClassDebugInfo,
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
} from "./chunk-S4NKVKWG.js";

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
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.deals$ = combineLatest([
      this._org.active_building
    ]).pipe(filter(([b]) => !!b?.id), switchMap(([bld]) => {
      this.loading.set(true);
      return Fu(bld.id, "deals-n-offers").catch(() => ({
        details: []
      }));
    }), map(({ details }) => details instanceof Array ? details : []), tap(() => this.loading.set(false)), startWith([]), shareReplay(1));
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
  }], null, null);
})();

// apps/workplace/src/app/deals/deals.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ({ date: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DealsComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function DealsComponent_For_13_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.type.next(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-100", ctx_r2.type.value === t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2, " ");
  }
}
function DealsComponent_For_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const deal_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", deal_r5.image);
  }
}
function DealsComponent_For_37_Conditional_4_Template(rf, ctx) {
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
function DealsComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 13);
    \u0275\u0275listener("click", function DealsComponent_For_37_Template_button_click_1_listener() {
      const deal_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(deal_r5));
    });
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275conditionalCreate(3, DealsComponent_For_37_Conditional_3_Template, 1, 1, "img", 15);
    \u0275\u0275conditionalCreate(4, DealsComponent_For_37_Conditional_4_Template, 2, 1, "div", 16);
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
function DealsComponent_Conditional_38_Template(rf, ctx) {
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
    this.deals$ = this._service.deals$;
    this.types = this._service.deals$.pipe(map((deals) => unique(deals.map((_) => _.type).sort((a, b) => a.localeCompare(b)))));
    this.type = new BehaviorSubject("");
    this.sort_type = new BehaviorSubject("");
    this.filtered_deals$ = combineLatest([
      this.deals$,
      this.type,
      this.sort_type
    ]).pipe(map(([deals, type, sort_type]) => deals.filter((deal) => !type || deal.type === type).sort((a, b) => sort_type === "date_asc" ? a.expires_at - b.expires_at : sort_type === "date_desc" ? b.expires_at - a.expires_at : 0)));
    this.view = (d) => this._service.viewDeal(d);
  }
  sort(type) {
    this.sort_type.next(type);
  }
  async ngOnInit() {
    await firstTruthyValueFrom(this._org.initialised);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsComponent, selectors: [["deals-n-offers"]], decls: 40, vars: 30, consts: [["sortMenu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col", "overflow-auto"], [1, "bg-base-200", "flex", "h-1/2", "min-h-1/2", "flex-1", "flex-col", "overflow-auto", "px-4"], [1, "bg-base-200", "sticky", "top-0", "z-20", "mx-auto", "mb-2", "w-160", "max-w-full", "px-2", "pt-2"], [1, "-mx-2", "flex", "flex-wrap", "py-2"], ["matRipple", "", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-1", 3, "click"], ["matRipple", "", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-1", 3, "bg-base-100"], [1, "flex", "items-center", "justify-between", "text-base"], ["matRipple", "", 1, "flex", "items-center", "rounded-sm", "p-2", 3, "matMenuTriggerFor"], [1, "ml-2", "text-xl"], ["mat-menu-item", "", 3, "click"], [1, "mx-auto", "mb-4", "grid", "w-160", "max-w-full", "grid-cols-1", "gap-4", "px-2", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "bg-base-200", "col-span-6", "flex", "w-full", "flex-col", "items-center", "justify-center", "rounded-lg", "p-16"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "flex-col", "items-center", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "click"], [1, "bg-base-300", "relative", "h-48", "w-full", "max-w-full", "overflow-hidden", "rounded-b-lg"], ["auth", "", "alt", "Deal Image", 1, "h-full", "w-full", "object-cover", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "bottom-2", "left-2", "max-w-full", "truncate", "rounded-sm", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "w-full", "px-4", "py-2", "text-left"], [1, "truncate", "font-bold"], [1, "text-sm", "opacity-50"], ["src", "assets/icons/no-deals.svg", "alt", "No Deals or Offers Available", 1, "mb-8", "w-48"], [1, "flex", "flex-col", "items-center", "space-y-4", "text-center"], [1, "text-lg", "font-bold"], ["btn", "", "matRipple", ""]], template: function DealsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "topbar");
        \u0275\u0275elementStart(2, "main", 2);
        \u0275\u0275declareLet(3);
        \u0275\u0275pipe(4, "async");
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
        \u0275\u0275declareLet(7);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function DealsComponent_Template_button_click_9_listener() {
          return ctx.type.next("");
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(12, DealsComponent_For_13_Template, 2, 3, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "div");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 8)(19, "div");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "icon", 9);
        \u0275\u0275text(23, "keyboard_arrow_down");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "mat-menu", null, 0)(26, "button", 10);
        \u0275\u0275listener("click", function DealsComponent_Template_button_click_26_listener() {
          return ctx.sort("relevance");
        });
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 10);
        \u0275\u0275listener("click", function DealsComponent_Template_button_click_29_listener() {
          return ctx.sort("date_desc");
        });
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 10);
        \u0275\u0275listener("click", function DealsComponent_Template_button_click_32_listener() {
          return ctx.sort("date_asc");
        });
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(35, "div", 11);
        \u0275\u0275repeaterCreate(36, DealsComponent_For_37_Template, 12, 12, "div", null, _forTrack0);
        \u0275\u0275conditionalCreate(38, DealsComponent_Conditional_38_Template, 15, 9, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(39, "footer-menu");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const sortMenu_r6 = \u0275\u0275reference(25);
        const deal_list_r7 = \u0275\u0275pipeBind1(4, 10, ctx.filtered_deals$);
        const type_list_r8 = \u0275\u0275pipeBind1(8, 12, ctx.types);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("bg-base-100", ctx.type.value === "");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "COMMON.ALL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(type_list_r8);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(17, 16, "APP.WORKPLACE.DEAL_COUNT", \u0275\u0275pureFunction1(28, _c0, deal_list_r7.length), deal_list_r7.length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", sortMenu_r6);
        const sort_t_r9 = ctx.sort_type.getValue();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 20, sort_t_r9 === "date_desc" ? "APP.WORKPLACE.SORT_BY_DATE_DESC" : sort_t_r9 === "date_asc" ? "APP.WORKPLACE.SORT_BY_DATE_ASC" : "APP.WORKPLACE.SORT_BY_RELEVANCE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 22, "APP.WORKPLACE.SORT_BY_RELEVANCE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 24, "APP.WORKPLACE.SORT_BY_DATE_DESC"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 26, "APP.WORKPLACE.SORT_BY_DATE_ASC"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(deal_list_r7);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((deal_list_r7 == null ? null : deal_list_r7.length) <= 0 ? 38 : -1);
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
      AuthenticatedImageDirective,
      AsyncPipe,
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
                @let deal_list = filtered_deals$ | async;
                <div
                    class="bg-base-200 sticky top-0 z-20 mx-auto mb-2 w-160 max-w-full px-2 pt-2"
                >
                    <div class="-mx-2 flex flex-wrap py-2">
                        @let type_list = types | async;
                        <button
                            matRipple
                            class="border-base-300 m-1 rounded-full border px-4 py-1"
                            [class.bg-base-100]="type.value === ''"
                            (click)="type.next('')"
                        >
                            {{ 'COMMON.ALL' | translate }}
                        </button>
                        @for (t of type_list; track t) {
                            <button
                                matRipple
                                class="border-base-300 m-1 rounded-full border px-4 py-1"
                                [class.bg-base-100]="type.value === t"
                                (click)="type.next(t)"
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
                                @let sort_t = sort_type.getValue();
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
                                            alt="Deal Image"
                                            class="h-full w-full object-cover"
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
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsComponent, { className: "DealsComponent", filePath: "apps/workplace/src/app/deals/deals.component.ts", lineNumber: 203 });
})();

// apps/workplace/src/app/deals/deals.module.ts
var ROUTES = [
  { path: "", component: DealsComponent, title: "Deals & Offers" }
];
var DealsModule = class _DealsModule {
  static {
    this.\u0275fac = function DealsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DealsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DealsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [DealsComponent, RouterModule.forChild(ROUTES)] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [DealsComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  DealsModule
};
//# sourceMappingURL=deals.module-NZ5DWCRK.js.map
