import {
  VirtualConciergeButtonComponent
} from "./chunk-LUIPEHT2.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-IY4LPDTW.js";
import "./chunk-UODLNYTJ.js";
import "./chunk-2GRBD76Z.js";
import "./chunk-H2DZYM74.js";
import "./chunk-HHH2GUUY.js";
import "./chunk-MZN7WG5R.js";
import "./chunk-6GIBONXV.js";
import "./chunk-TC3NM2KE.js";
import "./chunk-HEWP2W5O.js";
import {
  AuthenticatedImageDirective
} from "./chunk-D3VYGJ6G.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-RVKWVUYC.js";
import "./chunk-U66A4PGJ.js";
import "./chunk-I3OEOK2P.js";
import "./chunk-56C27J3X.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-IVWYWRG7.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-YEF7L372.js";
import "./chunk-2QAVTKHL.js";
import "./chunk-GBEZ2XD5.js";
import "./chunk-N4IXGM4A.js";
import "./chunk-DVFRHLZI.js";
import "./chunk-I5IZZO3Z.js";
import "./chunk-AFTIF56Q.js";
import "./chunk-5XMRXOYP.js";
import "./chunk-CRZDCPNP.js";
import "./chunk-7VF5TD5Y.js";
import {
  TranslatePipe
} from "./chunk-VZSWYXPT.js";
import "./chunk-IB6WR7JO.js";
import "./chunk-JZU6NIMO.js";
import {
  OrganisationService,
  SettingsService
} from "./chunk-KTADYPHH.js";
import {
  IconComponent
} from "./chunk-3ZDLFGP6.js";
import "./chunk-2FYBYRLM.js";
import {
  ac,
  firstTruthyValueFrom,
  unique
} from "./chunk-LSVIIU5S.js";
import "./chunk-3E4LH6FR.js";
import "./chunk-CL7UDZVD.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FFDIHN6G.js";
import "./chunk-CENZX4JC.js";
import "./chunk-WWAEQFU7.js";
import {
  Router,
  RouterModule
} from "./chunk-ZTX66HDZ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
} from "./chunk-6OEACKVR.js";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealDetailsModalComponent, selectors: [["deal-details-modal"]], decls: 29, vars: 21, consts: [[1, "bg-base-100", "relative", "w-lg", "max-w-[calc(100vw-2rem)]"], [1, "bg-base-300", "relative", "h-48", "w-lg", "max-w-full", "overflow-hidden", "rounded-b-lg"], ["auth", "", "alt", "Deal Image", 1, "h-full", "w-full", "object-cover", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "bottom-2", "left-2", "max-w-full", "truncate", "rounded-sm", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "flex", "space-x-2", "p-2"], [1, "w-auto", "px-2", "text-xl", "font-medium"], [1, "flex-1"], [1, "max-h-[60vh]", "space-y-2", "overflow-auto", "p-4"], [1, "font-medium"], [1, "pb-4", "text-sm"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-100", "absolute", "top-2", "right-2"]], template: function DealDetailsModalComponent_Template(rf, ctx) {
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
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 9);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "h4", 8);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 9);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 10);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementStart(27, "icon");
        \u0275\u0275text(28, "close");
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "COMMON.DESCRIPTION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.deal.description);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 12, "COMMON.VALID_UNTIL"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 14, ctx.deal.expires_at, "mediumDate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 17, "COMMON.TERMS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.deal.terms);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(26, 19, "COMMON.CLOSE"));
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
            </header>
            <div class="max-h-[60vh] space-y-2 overflow-auto p-4">
                <h4 class="font-medium">
                    {{ 'COMMON.DESCRIPTION' | translate }}
                </h4>
                <p class="pb-4 text-sm">{{ deal.description }}</p>
                <h4 class="font-medium">
                    {{ 'COMMON.VALID_UNTIL' | translate }}
                </h4>
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
                [attr.aria-label]="'COMMON.CLOSE' | translate"
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealDetailsModalComponent, { className: "DealDetailsModalComponent", filePath: "apps/workplace/src/app/deals/deal-details-modal.component.ts", lineNumber: 79 });
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
    this.failed = signal(
      false,
      ...ngDevMode ? [{ debugName: "failed" }] : (
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
    this._reload = signal(
      0,
      ...ngDevMode ? [{ debugName: "_reload" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(async () => {
      const bld = this._org.active_building();
      this._reload();
      if (!bld?.id) {
        this.deals.set([]);
        return;
      }
      this.loading.set(true);
      this.failed.set(false);
      const { details } = await ac(bld.id, "deals-n-offers").catch(() => {
        this.failed.set(true);
        return { details: [] };
      });
      this.deals.set(details instanceof Array ? details : []);
      this.loading.set(false);
    });
  }
  /** Load the deals of the active building again */
  reload() {
    this._reload.update((count) => count + 1);
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
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const deal_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", deal_r5.image)("alt", deal_r5.name + " [Image]");
  }
}
function DealsComponent_For_33_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
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
    \u0275\u0275elementStart(0, "div")(1, "button", 15);
    \u0275\u0275listener("click", function DealsComponent_For_33_Template_button_click_1_listener() {
      const deal_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(deal_r5));
    });
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275conditionalCreate(3, DealsComponent_For_33_Conditional_3_Template, 1, 2, "img", 17);
    \u0275\u0275conditionalCreate(4, DealsComponent_For_33_Conditional_4_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "h3", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 21);
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
    \u0275\u0275element(1, "mat-spinner", 22);
    \u0275\u0275elementStart(2, "p", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.LOADING"), "... ");
  }
}
function DealsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "icon", 24);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 25);
    \u0275\u0275listener("click", function DealsComponent_Conditional_35_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reload());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "COMMON.LOAD_ERROR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 4, "COMMON.RETRY"));
  }
}
function DealsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 25);
    \u0275\u0275listener("click", function DealsComponent_Conditional_36_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reload());
    });
    \u0275\u0275elementStart(10, "icon");
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
    this.loading = this._service.loading;
    this.failed = this._service.failed;
    this.reload = () => this._service.reload();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsComponent, selectors: [["deals-n-offers"]], decls: 39, vars: 26, consts: [["sortMenu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col", "overflow-auto"], [1, "bg-base-200", "flex", "h-1/2", "min-h-1/2", "flex-1", "flex-col", "overflow-auto", "px-4"], [1, "bg-base-200", "sticky", "top-0", "z-20", "mx-auto", "mb-2", "w-160", "max-w-full", "px-2", "pt-2"], [1, "-mx-2", "flex", "flex-wrap", "py-2"], ["matRipple", "", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-1", 3, "click"], ["matRipple", "", 1, "border-base-300", "m-1", "rounded-full", "border", "px-4", "py-1", 3, "bg-base-100"], [1, "flex", "items-center", "justify-between", "text-base"], ["matRipple", "", 1, "flex", "items-center", "rounded-sm", "p-2", 3, "matMenuTriggerFor"], [1, "ml-2", "text-xl"], ["mat-menu-item", "", 3, "click"], [1, "mx-auto", "mb-4", "grid", "w-160", "max-w-full", "grid-cols-1", "gap-4", "px-2", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "col-span-6", "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-16"], ["role", "alert", 1, "col-span-6", "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-16", "text-center"], [1, "bg-base-200", "col-span-6", "flex", "w-full", "flex-col", "items-center", "justify-center", "rounded-lg", "p-16"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "flex-col", "items-center", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "click"], [1, "bg-base-300", "relative", "h-48", "w-full", "max-w-full", "overflow-hidden", "rounded-b-lg"], ["auth", "", 1, "text-base-content/50", "flex", "h-full", "w-full", "items-center", "justify-center", "object-cover", 3, "source", "alt"], [1, "bg-info", "text-info-content", "absolute", "bottom-2", "left-2", "max-w-[calc(100%-1rem)]", "truncate", "rounded-sm", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "w-full", "px-4", "py-2", "text-left"], [1, "truncate", "font-bold"], [1, "text-sm", "opacity-50"], [3, "diameter"], [1, "opacity-60"], [1, "text-5xl", "opacity-60"], ["btn", "", "matRipple", "", 3, "click"], ["src", "assets/icons/no-deals.svg", "alt", "", 1, "mb-8", "w-48"], [1, "flex", "flex-col", "items-center", "space-y-4", "text-center"], [1, "text-lg", "font-bold"]], template: function DealsComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(34, DealsComponent_Conditional_34_Template, 5, 4, "div", 12)(35, DealsComponent_Conditional_35_Template, 12, 6, "div", 13)(36, DealsComponent_Conditional_36_Template, 15, 9, "div", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(37, "virtual-concierge-button")(38, "footer-menu");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const sortMenu_r8 = \u0275\u0275reference(21);
        const deal_list_r9 = ctx.filtered_deals();
        const type_list_r10 = ctx.types();
        \u0275\u0275advance(5);
        \u0275\u0275classProp("bg-base-100", ctx.type() === "");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "COMMON.ALL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(type_list_r10);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 12, "APP.WORKPLACE.DEAL_COUNT", \u0275\u0275pureFunction1(24, _c0, deal_list_r9.length), deal_list_r9.length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", sortMenu_r8);
        const sort_t_r11 = ctx.sort_type();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 16, sort_t_r11 === "date_desc" ? "APP.WORKPLACE.SORT_BY_DATE_DESC" : sort_t_r11 === "date_asc" ? "APP.WORKPLACE.SORT_BY_DATE_ASC" : "APP.WORKPLACE.SORT_BY_RELEVANCE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 18, "APP.WORKPLACE.SORT_BY_RELEVANCE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 20, "APP.WORKPLACE.SORT_BY_DATE_DESC"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 22, "APP.WORKPLACE.SORT_BY_DATE_ASC"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(deal_list_r9);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(deal_list_r9?.length <= 0 && ctx.loading() ? 34 : deal_list_r9?.length <= 0 && ctx.failed() ? 35 : deal_list_r9?.length <= 0 ? 36 : -1);
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
      MatProgressSpinnerModule,
      MatProgressSpinner,
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
                    @if (deal_list?.length <= 0 && loading()) {
                        <div
                            class="col-span-6 flex w-full flex-col items-center justify-center space-y-4 p-16"
                        >
                            <mat-spinner [diameter]="32"></mat-spinner>
                            <p class="opacity-60">
                                {{ 'COMMON.LOADING' | translate }}...
                            </p>
                        </div>
                    } @else if (deal_list?.length <= 0 && failed()) {
                        <div
                            role="alert"
                            class="col-span-6 flex w-full flex-col items-center justify-center space-y-4 p-16 text-center"
                        >
                            <icon class="text-5xl opacity-60">error</icon>
                            <p>{{ 'COMMON.LOAD_ERROR' | translate }}</p>
                            <button btn matRipple (click)="reload()">
                                <icon>refresh</icon>
                                <div>{{ 'COMMON.RETRY' | translate }}</div>
                            </button>
                        </div>
                    } @else if (deal_list?.length <= 0) {
                        <div
                            class="bg-base-200 col-span-6 flex w-full flex-col items-center justify-center rounded-lg p-16"
                        >
                            <img
                                src="assets/icons/no-deals.svg"
                                alt=""
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
                                <button btn matRipple (click)="reload()">
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
      MatProgressSpinnerModule,
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsComponent, { className: "DealsComponent", filePath: "apps/workplace/src/app/deals/deals.component.ts", lineNumber: 228 });
})();

// apps/workplace/src/app/deals/deals.routes.ts
var ROUTES = [
  { path: "", component: DealsComponent, title: "Deals & Offers" }
];
export {
  ROUTES
};
//# debugId=bf52f60e-0281-5cea-96d0-38fd5b9c20b3
//# sourceMappingURL=deals.routes-XXRFMKOR.js.map
