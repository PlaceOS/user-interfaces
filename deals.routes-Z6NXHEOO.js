import {
  UploadButtonComponent
} from "./chunk-JTHSWDZV.js";
import {
  toSignal
} from "./chunk-OZQ7QHED.js";
import {
  DateFieldComponent
} from "./chunk-KZDZFIVE.js";
import "./chunk-SAI7TC3T.js";
import {
  openConfirmModal
} from "./chunk-LNOJ6XQY.js";
import {
  SimpleTableComponent
} from "./chunk-4EAV2GUH.js";
import "./chunk-DZLP6NNM.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AuthenticatedImageDirective,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule
} from "./chunk-OFJN4OYD.js";
import {
  ActivatedRoute,
  AsyncHandler,
  CommonModule,
  Component,
  DatePipe,
  FormField,
  FormsModule,
  IconComponent,
  Injectable,
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
  MatOption,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  Output,
  Qu,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  TranslatePipe,
  Wu,
  addMonths,
  computed,
  effect,
  endOfMonth,
  form,
  getInvalidSignalFields,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  output,
  randomString,
  required,
  resource,
  setClassMetadata,
  signal,
  startOfDay,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GGSGOQ6N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/deals/deals.component.ts
var DealsComponent = class _DealsComponent extends AsyncHandler {
  constructor() {
    super();
    this._router = inject(Router);
    this._url = signal(
      null,
      ...ngDevMode ? [{ debugName: "_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.path = computed(
      () => {
        this._url();
        const parts = this._router.url.split("/");
        return parts[parts.length - 1].split("?")[0];
      },
      ...ngDevMode ? [{ debugName: "path" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("router", this._router.events.subscribe((event) => this._url.set(event)));
  }
  static {
    this.\u0275fac = function DealsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DealsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsComponent, selectors: [["", "app-deals", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function DealsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule,
      RouterOutlet
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=deals.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsComponent, [{
    type: Component,
    args: [{ selector: "[app-deals]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/deals/deals.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=deals.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsComponent, { className: "DealsComponent", filePath: "apps/concierge/src/app/deals/deals.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/deals/deal-modal.component.ts
var _c0 = (a0) => ["/deals-n-offers", "manage", a0];
function DealModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.deal.image);
  }
}
function DealModalComponent_Conditional_3_Template(rf, ctx) {
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
var DealModalComponent = class _DealModalComponent {
  constructor() {
    this.deal = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.remove = output();
  }
  close() {
    this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function DealModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DealModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealModalComponent, selectors: [["app-deal-modal"]], outputs: { remove: "remove" }, decls: 39, vars: 24, consts: [[1, "bg-base-100", "relative", "w-lg", "max-w-[80vw]"], [1, "bg-base-300", "relative", "h-48", "w-lg", "max-w-full", "overflow-hidden", "rounded-b-lg"], ["auth", "", "alt", "Deal Image", 1, "h-full", "w-full", "object-cover", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "bottom-2", "left-2", "max-w-full", "truncate", "rounded-sm", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "flex", "space-x-2", "p-2"], [1, "w-auto", "px-2", "text-xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click", "routerLink"], [1, "text-2xl"], [1, "pr-2"], ["btn", "", "matRipple", "", 1, "inverse", "error", "space-x-2", 3, "click"], [1, "text-error", "text-2xl"], [1, "max-h-[60vh]", "space-y-2", "overflow-auto", "p-4"], [1, "font-medium"], [1, "max-w-[]", "pb-4", "text-sm"], [1, "pb-4", "text-sm"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-100", "absolute", "top-2", "right-2"]], template: function DealModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, DealModalComponent_Conditional_2_Template, 1, 1, "img", 2);
        \u0275\u0275conditionalCreate(3, DealModalComponent_Conditional_3_Template, 2, 1, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "header", 4)(5, "h3", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "div", 6);
        \u0275\u0275elementStart(8, "a", 7);
        \u0275\u0275listener("click", function DealModalComponent_Template_a_click_8_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(9, "icon", 8);
        \u0275\u0275text(10, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 10);
        \u0275\u0275listener("click", function DealModalComponent_Template_button_click_14_listener() {
          return ctx.remove.emit();
        });
        \u0275\u0275elementStart(15, "icon", 11);
        \u0275\u0275text(16, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "h4", 13);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 14);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h4", 13);
        \u0275\u0275text(27, "Validity Period");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 15);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "h4", 13);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p", 15);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 16)(37, "icon");
        \u0275\u0275text(38, "close");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.deal.image ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.deal.details ? 3 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.deal.name);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, ctx.deal.id));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "COMMON.EDIT"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "COMMON.REMOVE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 15, "COMMON.DESCRIPTION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.deal.description);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 17, ctx.deal.expires_at, "mediumDate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 20, "COMMON.TERMS"));
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
      RouterLink,
      MatRippleModule,
      MatRipple,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealModalComponent, [{
    type: Component,
    args: [{ selector: "app-deal-modal", template: `
        <div class="bg-base-100 relative w-lg max-w-[80vw]">
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
                <a
                    btn
                    matRipple
                    class="space-x-2"
                    [routerLink]="['/deals-n-offers', 'manage', deal.id]"
                    (click)="close()"
                >
                    <icon class="text-2xl">edit</icon>
                    <div class="pr-2">{{ 'COMMON.EDIT' | translate }}</div>
                </a>
                <button
                    btn
                    matRipple
                    class="inverse error space-x-2"
                    (click)="remove.emit()"
                >
                    <icon class="text-error text-2xl">delete</icon>
                    <div class="pr-2">{{ 'COMMON.REMOVE' | translate }}</div>
                </button>
            </header>
            <div class="max-h-[60vh] space-y-2 overflow-auto p-4">
                <h4 class="font-medium">
                    {{ 'COMMON.DESCRIPTION' | translate }}
                </h4>
                <p class="max-w-[] pb-4 text-sm">{{ deal.description }}</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealModalComponent, { className: "DealModalComponent", filePath: "apps/concierge/src/app/deals/deal-modal.component.ts", lineNumber: 95 });
})();

// apps/concierge/src/app/deals/deals.service.ts
var DealsService = class _DealsService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._changed = signal(
      0,
      ...ngDevMode ? [{ debugName: "_changed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._deals = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_deals" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        building: this._org.active_building()?.id,
        change: this._changed()
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        if (!params.building)
          return [];
        this.loading.set(true);
        const metadata = await Wu(params.building, "deals-n-offers").catch(() => ({ details: [] }));
        this.loading.set(false);
        return metadata?.details instanceof Array ? metadata.details : [];
      }
    }));
    this.deals = this._deals.value;
  }
  /** Fetch the current list of deals directly from metadata */
  async getDeals() {
    const metadata = await Wu(this._org.building.id, "deals-n-offers").catch(() => null);
    return metadata?.details instanceof Array ? metadata.details : [];
  }
  async saveDeal(deal) {
    const metadata = await Wu(this._org.building.id, "deals-n-offers").catch(() => null);
    let deals = metadata?.details instanceof Array ? metadata.details : [];
    if (deal.id) {
      deals = deals.filter((d) => d.id !== deal.id);
    } else
      deal.id = `deal-${randomString(8)}`;
    deals.push(deal);
    await Qu(this._org.building.id, {
      name: "deals-n-offers",
      description: "List of deals and offers",
      details: deals
    });
    this._changed.set(Date.now());
    return deal;
  }
  async removeDeal(deal, confirm = true) {
    if (confirm) {
      const result = await openConfirmModal({
        title: i18n("APP.CONCIERGE.DEALS_REMOVE_TITLE"),
        content: i18n("APP.CONCIERGE.DEALS_REMOVE_BODY"),
        confirm_text: i18n("COMMON.REMOVE"),
        icon: { content: "delete" }
      }, this._dialog);
      if (result?.reason !== "done")
        return false;
      result.close();
    }
    const metadata = await Wu(this._org.building.id, "deals-n-offers").catch(() => null);
    let deals = metadata?.details instanceof Array ? metadata.details : [];
    deals = deals.filter((d) => d.id !== deal.id);
    await Qu(this._org.building.id, {
      name: "deals-n-offers",
      description: "List of deals and offers",
      details: deals
    });
    this._changed.set(Date.now());
    return true;
  }
  viewDeal(deal) {
    const ref = this._dialog.open(DealModalComponent, { data: deal });
    this.subscription("view_remove", ref.componentInstance.remove.subscribe(() => {
      this.removeDeal(deal).then((s) => s ? ref.close() : "");
    }));
    ref.afterClosed().subscribe(() => this.unsub("view_remove"));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DealsService_BaseFactory;
      return function DealsService_Factory(__ngFactoryType__) {
        return (\u0275DealsService_BaseFactory || (\u0275DealsService_BaseFactory = \u0275\u0275getInheritedFactory(_DealsService)))(__ngFactoryType__ || _DealsService);
      };
    })();
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

// apps/concierge/src/app/deals/deals-list.component.ts
var _c02 = () => ["/deals-n-offers", "manage"];
var _c1 = (a0) => ({ date: a0 });
var _c2 = (a0, a1) => ({ key: "image", name: a0, content: a1, size: "5.5rem", sortable: false });
var _c3 = (a0) => ({ key: "name", name: a0 });
var _c4 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "expires_at", name: a0, content: a1 });
var _c6 = (a0, a1) => ({ key: "terms", name: a0, content: a1 });
var _c7 = (a0) => ({ key: "actions", name: " ", size: "3.25rem", content: a0, sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c9 = (a0) => ["/deals-n-offers", "manage", a0];
var _forTrack0 = ($index, $item) => $item.id;
function DealsListComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1);
  }
}
function DealsListComponent_Conditional_44_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const deal_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", deal_r3.image);
  }
}
function DealsListComponent_Conditional_44_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", deal_r3.details, " ");
  }
}
function DealsListComponent_Conditional_44_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 24);
    \u0275\u0275listener("click", function DealsListComponent_Conditional_44_For_2_Template_button_click_1_listener() {
      const deal_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.view(deal_r3));
    });
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275conditionalCreate(3, DealsListComponent_Conditional_44_For_2_Conditional_3_Template, 1, 1, "img", 26);
    \u0275\u0275conditionalCreate(4, DealsListComponent_Conditional_44_For_2_Conditional_4_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28)(6, "h3", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 30);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const deal_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(deal_r3.image ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(deal_r3.details ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", deal_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 7, "COMMON.VALID_UNTIL_DATE", \u0275\u0275pureFunction1(10, _c1, \u0275\u0275pipeBind2(10, 4, deal_r3.expires_at, "mediumDate"))), " ");
  }
}
function DealsListComponent_Conditional_44_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "img", 31);
    \u0275\u0275elementStart(2, "div", 32)(3, "p", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 30);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275text(10, " Add a Deal or Offer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "APP.CONCIERGE.DEALS_EMPTY_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.DEALS_EMPTY_BODY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c02));
  }
}
function DealsListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, DealsListComponent_Conditional_44_For_2_Template, 12, 12, "div", null, _forTrack0);
    \u0275\u0275conditionalCreate(3, DealsListComponent_Conditional_44_Conditional_3_Template, 11, 8, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.deals());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.deals().length <= 0 ? 3 : -1);
  }
}
function DealsListComponent_Conditional_45_ng_template_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 38);
  }
  if (rf & 2) {
    const deal_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275property("alt", \u0275\u0275interpolate(deal_r5.name))("source", deal_r5.image);
  }
}
function DealsListComponent_Conditional_45_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275conditionalCreate(2, DealsListComponent_Conditional_45_ng_template_7_Conditional_2_Template, 1, 3, "img", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const deal_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(deal_r5.image ? 2 : -1);
  }
}
function DealsListComponent_Conditional_45_ng_template_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "No description available");
    \u0275\u0275elementEnd();
  }
}
function DealsListComponent_Conditional_45_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DealsListComponent_Conditional_45_ng_template_9_Conditional_3_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r6 ? 3 : -1);
  }
}
function DealsListComponent_Conditional_45_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r7 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, date_r7, "mediumDate"), " ");
  }
}
function DealsListComponent_Conditional_45_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "mat-menu", null, 4)(6, "button", 45);
    \u0275\u0275listener("click", function DealsListComponent_Conditional_45_ng_template_13_Template_button_click_6_listener() {
      const deal_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.view(deal_r9));
    });
    \u0275\u0275elementStart(7, "div", 46)(8, "icon", 10);
    \u0275\u0275text(9, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "a", 47)(14, "div", 46)(15, "icon", 10);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 48);
    \u0275\u0275listener("click", function DealsListComponent_Conditional_45_ng_template_13_Template_button_click_20_listener() {
      const deal_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.remove(deal_r9));
    });
    \u0275\u0275elementStart(21, "div", 46)(22, "icon", 49);
    \u0275\u0275text(23, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const deal_r9 = ctx.row;
    const menu_r10 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 5, "APP.CONCIERGE.DEALS_VIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c9, deal_r9.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 7, "APP.CONCIERGE.DEALS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 9, "APP.CONCIERGE.DEALS_REMOVE"), " ");
  }
}
function DealsListComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "simple-table", 35);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DealsListComponent_Conditional_45_ng_template_7_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, DealsListComponent_Conditional_45_ng_template_9_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, DealsListComponent_Conditional_45_ng_template_11_Template, 3, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, DealsListComponent_Conditional_45_ng_template_13_Template, 27, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const image_template_r11 = \u0275\u0275reference(8);
    const description_template_r12 = \u0275\u0275reference(10);
    const valid_until_template_r13 = \u0275\u0275reference(12);
    const actions_template_r14 = \u0275\u0275reference(14);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r3.filtered_deals())("sortable", true)("columns", \u0275\u0275pureFunction6(29, _c8, \u0275\u0275pureFunction2(13, _c2, \u0275\u0275pipeBind1(2, 3, "COMMON.IMAGE"), image_template_r11), \u0275\u0275pureFunction1(16, _c3, \u0275\u0275pipeBind1(3, 5, "FORM.NAME")), \u0275\u0275pureFunction2(18, _c4, \u0275\u0275pipeBind1(4, 7, "COMMON.DESCRIPTION"), description_template_r12), \u0275\u0275pureFunction2(21, _c5, \u0275\u0275pipeBind1(5, 9, "COMMON.VALID_UNTIL"), valid_until_template_r13), \u0275\u0275pureFunction2(24, _c6, \u0275\u0275pipeBind1(6, 11, "COMMON.TERMS"), description_template_r12), \u0275\u0275pureFunction1(27, _c7, actions_template_r14)));
  }
}
var DealsListComponent = class _DealsListComponent {
  constructor() {
    this._deals = inject(DealsService);
    this.display = signal(
      "list",
      ...ngDevMode ? [{ debugName: "display" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expires = signal(
      0,
      ...ngDevMode ? [{ debugName: "expires" }] : (
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
    this.deals = this._deals.deals;
    this.types = computed(
      () => unique(this.deals().map((d) => d.type)).filter((type) => !!type),
      ...ngDevMode ? [{ debugName: "types" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_deals = computed(
      () => {
        const expires = this.expires();
        const type = this.type();
        let deal_list = this.deals();
        if (expires > 0) {
          const start = startOfDay(Date.now()).valueOf();
          const end = endOfMonth(addMonths(Date.now(), expires)).valueOf();
          deal_list = deal_list.filter((deal) => deal.expires_at >= start && deal.expires_at < end);
        } else if (expires < 0) {
          deal_list = deal_list.filter((deal) => deal.expires_at < Date.now());
        }
        if (type) {
          deal_list = deal_list.filter((deal) => deal.type === type);
        }
        return deal_list;
      },
      ...ngDevMode ? [{ debugName: "filtered_deals" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = Date.now();
    this.remove = (deal) => this._deals.removeDeal(deal);
    this.view = (d) => this._deals.viewDeal(d);
  }
  static {
    this.\u0275fac = function DealsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DealsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsListComponent, selectors: [["deals-list"]], decls: 46, vars: 28, consts: [["image_template", ""], ["description_template", ""], ["valid_until_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-8", "py-4", "pt-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], ["filters", "", 1, "flex", "space-x-2", "px-8", "pb-4"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "deals-list", 1, "rounded-l", "rounded-r-none", "px-2", 3, "click", "matTooltip"], ["btn", "", "matRipple", "", "name", "deals-grid", 1, "rounded-l-none", "rounded-r", "px-2", 3, "click", "matTooltip"], ["appearance", "outline", 1, "no-subscript"], ["placeholder", "All Deals", 3, "ngModelChange", "ngModel"], [3, "value"], ["placeholder", "All Types", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "capitalize", 3, "value"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "grid", "grid-cols-2", "gap-4", "md:grid-cols-3", "lg:grid-cols-4", "xl:grid-cols-5"], [1, "bg-base-200", "col-span-6", "flex", "w-full", "flex-col", "items-center", "justify-center", "rounded-lg", "p-16"], [1, "border-base-300", "bg-base-100", "mx-auto", "flex", "flex-col", "items-center", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "click"], [1, "bg-base-200", "relative", "h-36", "w-48", "max-w-full", "overflow-hidden", "rounded-b-lg"], ["auth", "", "alt", "Deal Image", 1, "h-full", "w-full", "object-cover", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "bottom-2", "left-2", "max-w-full", "truncate", "rounded-sm", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "w-full", "px-4", "py-2", "text-left"], [1, "truncate", "font-bold"], [1, "text-sm", "opacity-50"], ["src", "assets/icons/no-deals.svg", "alt", "No Deals or Offers Available", 1, "mb-8", "w-48"], [1, "flex", "flex-col", "items-center", "space-y-4", "text-center"], [1, "text-lg", "font-bold"], [1, "mb-4", "min-w-7xl"], [1, "text-sm", 3, "data", "sortable", "columns"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "p-2"], [1, "bg-base-200", "h-16", "w-16", "rounded-sm", "object-cover"], ["auth", "", 1, "bg-base-200", "h-16", "w-16", "rounded-sm", "object-cover", 3, "source", "alt"], [1, "flex", "max-h-24", "overflow-hidden", "px-4", "py-2", "text-sm"], [1, "line-clamp-4"], [1, "opacity-30"], [1, "flex", "p-4"], [1, "flex", "h-full", "w-full", "items-center", "justify-end", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 1, "min-w-48", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "text-2xl"]], template: function DealsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h2", 7);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 8)(6, "div", 9);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "icon", 10);
        \u0275\u0275text(10, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "button", 13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275listener("click", function DealsListComponent_Template_button_click_13_listener() {
          return ctx.display.set("list");
        });
        \u0275\u0275elementStart(15, "icon", 10);
        \u0275\u0275text(16, "list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 14);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275listener("click", function DealsListComponent_Template_button_click_17_listener() {
          return ctx.display.set("grid");
        });
        \u0275\u0275elementStart(19, "icon", 10);
        \u0275\u0275text(20, "browse");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "mat-form-field", 15)(22, "mat-select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function DealsListComponent_Template_mat_select_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.expires, $event) || (ctx.expires = $event);
          return $event;
        });
        \u0275\u0275elementStart(23, "mat-option", 17);
        \u0275\u0275text(24, "All Deals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-option", 17);
        \u0275\u0275text(26, "Expired Deals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-option", 17);
        \u0275\u0275text(28, "Expires next month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-option", 17);
        \u0275\u0275text(30, "Expires in 2 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-option", 17);
        \u0275\u0275text(32, "Expires in 3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-option", 17);
        \u0275\u0275text(34, "Expires in 6 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-option", 17);
        \u0275\u0275text(36, "Expires in 12 months");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-form-field", 15)(38, "mat-select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function DealsListComponent_Template_mat_select_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.type, $event) || (ctx.type = $event);
          return $event;
        });
        \u0275\u0275elementStart(39, "mat-option", 19);
        \u0275\u0275text(40, "All Types");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(41, DealsListComponent_For_42_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 21);
        \u0275\u0275conditionalCreate(44, DealsListComponent_Conditional_44_Template, 4, 1, "div", 22)(45, DealsListComponent_Conditional_45_Template, 15, 36);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 19, "APP.CONCIERGE.DEALS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 21, "APP.CONCIERGE.DEALS_ADD"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("inverse", ctx.display() !== "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 23, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("inverse", ctx.display() !== "grid");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 25, "COMMON.GRID"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.expires);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("value", 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 6);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 12);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.type);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.types());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.display() === "grid" ? 44 : 45);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      SimpleTableComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsListComponent, [{
    type: Component,
    args: [{ selector: `deals-list`, template: `
        <div class="absolute inset-0 flex flex-col">
            <div class="flex items-center justify-between px-8 py-4 pt-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.DEALS_HEADER' | translate }}
                </h2>
                <a btn matRipple [routerLink]="['/deals-n-offers', 'manage']">
                    <div class="ml-2">
                        {{ 'APP.CONCIERGE.DEALS_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </a>
            </div>
            <div filters class="flex space-x-2 px-8 pb-4">
                <div class="flex items-center">
                    <button
                        btn
                        matRipple
                        name="deals-list"
                        class="rounded-l rounded-r-none px-2"
                        [class.inverse]="display() !== 'list'"
                        (click)="display.set('list')"
                        [matTooltip]="'COMMON.LIST' | translate"
                    >
                        <icon class="text-2xl">list</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        name="deals-grid"
                        class="rounded-l-none rounded-r px-2"
                        [class.inverse]="display() !== 'grid'"
                        (click)="display.set('grid')"
                        [matTooltip]="'COMMON.GRID' | translate"
                    >
                        <icon class="text-2xl">browse</icon>
                    </button>
                </div>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select [(ngModel)]="expires" placeholder="All Deals">
                        <mat-option [value]="0">All Deals</mat-option>
                        <mat-option [value]="-1">Expired Deals</mat-option>
                        <mat-option [value]="1">Expires next month</mat-option>
                        <mat-option [value]="2">Expires in 2 months</mat-option>
                        <mat-option [value]="3">Expires in 3 months</mat-option>
                        <mat-option [value]="6">Expires in 6 months</mat-option>
                        <mat-option [value]="12"
                            >Expires in 12 months</mat-option
                        >
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select [(ngModel)]="type" placeholder="All Types">
                        <mat-option value="">All Types</mat-option>
                        @for (t of types(); track t) {
                            <mat-option [value]="t" class="capitalize">{{
                                t
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                @if (display() === 'grid') {
                    <div
                        class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                    >
                        @for (deal of deals(); track deal.id) {
                            <div>
                                <button
                                    class="border-base-300 bg-base-100 mx-auto flex flex-col items-center overflow-hidden rounded-lg border shadow-sm"
                                    (click)="view(deal)"
                                >
                                    <div
                                        class="bg-base-200 relative h-36 w-48 max-w-full overflow-hidden rounded-b-lg"
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
                        @if (deals().length <= 0) {
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
                                            'APP.CONCIERGE.DEALS_EMPTY_TITLE'
                                                | translate
                                        }}
                                    </p>
                                    <p class="text-sm opacity-50">
                                        {{
                                            'APP.CONCIERGE.DEALS_EMPTY_BODY'
                                                | translate
                                        }}
                                    </p>
                                    <button
                                        btn
                                        matRipple
                                        [routerLink]="[
                                            '/deals-n-offers',
                                            'manage',
                                        ]"
                                    >
                                        Add a Deal or Offer
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                } @else {
                    <div class="mb-4 min-w-7xl">
                        <simple-table
                            [data]="filtered_deals()"
                            class="text-sm"
                            [sortable]="true"
                            [columns]="[
                                {
                                    key: 'image',
                                    name: 'COMMON.IMAGE' | translate,
                                    content: image_template,
                                    size: '5.5rem',
                                    sortable: false,
                                },
                                {
                                    key: 'name',
                                    name: 'FORM.NAME' | translate,
                                },
                                {
                                    key: 'description',
                                    name: 'COMMON.DESCRIPTION' | translate,
                                    content: description_template,
                                },
                                {
                                    key: 'expires_at',
                                    name: 'COMMON.VALID_UNTIL' | translate,
                                    content: valid_until_template,
                                },
                                {
                                    key: 'terms',
                                    name: 'COMMON.TERMS' | translate,
                                    content: description_template,
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    size: '3.25rem',
                                    content: actions_template,
                                    sortable: false,
                                },
                            ]"
                        ></simple-table>
                    </div>
                    <ng-template #image_template let-deal="row">
                        <div
                            class="flex h-full w-full items-center justify-center p-2"
                        >
                            <div
                                class="bg-base-200 h-16 w-16 rounded-sm object-cover"
                            >
                                @if (deal.image) {
                                    <img
                                        auth
                                        class="bg-base-200 h-16 w-16 rounded-sm object-cover"
                                        [source]="deal.image"
                                        alt="{{ deal.name }}"
                                    />
                                }
                            </div>
                        </div>
                    </ng-template>
                    <ng-template #description_template let-data="data">
                        <div
                            class="flex max-h-24 overflow-hidden px-4 py-2 text-sm"
                        >
                            <div class="line-clamp-4">{{ data }}</div>
                            @if (!data) {
                                <span class="opacity-30"
                                    >No description available</span
                                >
                            }
                        </div>
                    </ng-template>
                    <ng-template #valid_until_template let-date="data">
                        <div class="flex p-4">
                            {{ date | date: 'mediumDate' }}
                        </div>
                    </ng-template>
                    <ng-template #actions_template let-deal="row">
                        <div
                            class="flex h-full w-full items-center justify-end p-2"
                        >
                            <button
                                icon
                                default
                                matRipple
                                [matMenuTriggerFor]="menu"
                            >
                                <icon>more_vert</icon>
                            </button>
                        </div>
                        <mat-menu #menu="matMenu">
                            <button
                                mat-menu-item
                                class="min-w-48"
                                (click)="view(deal)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">visibility</icon>
                                    <div>
                                        {{
                                            'APP.CONCIERGE.DEALS_VIEW'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <a
                                mat-menu-item
                                [routerLink]="[
                                    '/deals-n-offers',
                                    'manage',
                                    deal.id,
                                ]"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">edit</icon>
                                    <div>
                                        {{
                                            'APP.CONCIERGE.DEALS_EDIT'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button mat-menu-item (click)="remove(deal)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-error text-2xl"
                                        >delete</icon
                                    >
                                    <div>
                                        {{
                                            'APP.CONCIERGE.DEALS_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </ng-template>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      RouterModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule,
      SimpleTableComponent,
      MatMenuModule,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsListComponent, { className: "DealsListComponent", filePath: "apps/concierge/src/app/deals/deals-list.component.ts", lineNumber: 333 });
})();

// apps/concierge/src/app/deals/deals-manage.component.ts
var _c03 = () => ({ standalone: true });
var _c12 = () => ["/deals-n-offers"];
function DealsManageComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c12));
  }
}
function DealsManageComponent_Conditional_0_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 27)(1, "button", 28);
    \u0275\u0275listener("click", function DealsManageComponent_Conditional_0_Conditional_56_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
function DealsManageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DealsManageComponent_Conditional_0_Conditional_5_Template, 3, 2, "a", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 5)(7, "label", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "span", 7);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-form-field", 8);
    \u0275\u0275element(13, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(14, "mat-error");
    \u0275\u0275text(15, "Name is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span", 7);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 8);
    \u0275\u0275element(22, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24, "Type is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "label", 12);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 8);
    \u0275\u0275element(29, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 14);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 8);
    \u0275\u0275element(34, "textarea", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "label", 16);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-form-field", 8);
    \u0275\u0275element(39, "textarea", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 18);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-form-field", 8);
    \u0275\u0275element(44, "input", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "label", 20);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 21)(49, "mat-form-field", 22);
    \u0275\u0275element(50, "input", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "upload-button", 24);
    \u0275\u0275listener("ngModelChange", function DealsManageComponent_Conditional_0_Template_upload_button_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { image: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "label", 25);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "a-date-field", 26);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(56, DealsManageComponent_Conditional_0_Conditional_56_Template, 4, 3, "footer", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 21, ctx_r1.model().id ? "APP.CONCIERGE.DEALS_EDIT" : "APP.CONCIERGE.DEALS_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.loading() ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 23, "FORM.NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 25, "COMMON.TYPE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.type);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 27, "COMMON.DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.details);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 29, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.description);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 31, "COMMON.TERMS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.terms);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 33, "COMMON.CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.code);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 35, "COMMON.IMAGE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.image);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(39, _c03))("matTooltip", "Upload Image");
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 37, "FORM.EXPIRES_AT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.expires_at);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.loading() ? 56 : -1);
  }
}
function DealsManageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DEALS_SAVING"));
  }
}
var DealsManageComponent = class _DealsManageComponent extends AsyncHandler {
  constructor() {
    super();
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._service = inject(DealsService);
    this._params = toSignal(this._route.paramMap, {
      initialValue: this._route.snapshot.paramMap
    });
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        id: "",
        name: "",
        type: "",
        details: "",
        description: "",
        terms: "",
        code: "",
        image: "",
        expires_at: addMonths(Date.now(), 1).valueOf()
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.type);
    });
    effect(() => {
      if (!this._ready())
        return;
      const id = this._params().get("id");
      if (id)
        this._loadDeal(id);
    });
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this._ready.set(true);
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model)
      }));
    }
    this.loading.set("APP.CONCIERGE.DEALS_SAVING");
    await this._service.saveDeal(this.model()).catch((e) => {
      this.loading.set("");
      notifyError(i18n("APP.CONCIERGE.DEALS_SAVE_ERROR", { error: e }));
      throw e;
    });
    this.loading.set("");
    notifySuccess(i18n("APP.CONCIERGE.DEALS_SAVED"));
    this._router.navigate(["/deals-n-offers"]);
  }
  async _loadDeal(id) {
    this.loading.set("APP.CONCIERGE.DEALS_LOAD_EXISTING");
    const deal_list = await this._service.getDeals();
    const deal = deal_list.find((deal2) => deal2.id === id);
    if (deal) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        id: deal.id ?? m.id,
        name: deal.name ?? m.name,
        type: deal.type ?? m.type,
        details: deal.details ?? m.details,
        description: deal.description ?? m.description,
        terms: deal.terms ?? m.terms,
        code: deal.code ?? m.code,
        image: deal.image ?? m.image,
        expires_at: deal.expires_at ?? m.expires_at
      }));
    } else {
      notifyError(i18n("APP.CONCIERGE.DEALS_NOT_FOUND", { id }));
      this._router.navigate(["/deals-n-offers"]);
    }
    this.loading.set("");
  }
  static {
    this.\u0275fac = function DealsManageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DealsManageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsManageComponent, selectors: [["deals-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "bg-base-100", "absolute", "inset-0", "overflow-auto"], [1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "mx-auto", "my-2", "flex", "w-160", "max-w-full", "flex-col", "px-4", "pb-16"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "Name of the deal or offer", 3, "formField"], ["for", "type"], ["matInput", "", "placeholder", "Type of the deal or offer", 3, "formField"], ["for", "details"], ["matInput", "", "placeholder", "Summary of the deal or offer", 3, "formField"], ["for", "description"], ["matInput", "", "placeholder", "Description of the deal or offer", 3, "formField"], ["for", "terms"], ["matInput", "", "placeholder", "Terms and conditions of the deal or offer", 3, "formField"], ["for", "code"], ["matInput", "", "placeholder", "Deal/Offer Code", 3, "formField"], ["for", "image"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "placeholder", "Image URL", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions", "matTooltip"], ["for", "expires_at"], [3, "formField"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["diameter", "48"]], template: function DealsManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DealsManageComponent_Conditional_0_Template, 57, 40, "div", 0)(1, DealsManageComponent_Conditional_1_Template, 5, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [
      FormField,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      RouterModule,
      RouterLink,
      IconComponent,
      DateFieldComponent,
      UploadButtonComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsManageComponent, [{
    type: Component,
    args: [{ selector: `deals-manage`, template: `
        @if (!loading()) {
            <div class="bg-base-100 absolute inset-0 overflow-auto">
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[640px] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{
                            (model().id
                                ? 'APP.CONCIERGE.DEALS_EDIT'
                                : 'APP.CONCIERGE.DEALS_NEW'
                            ) | translate
                        }}
                    </h2>
                    @if (!loading()) {
                        <a icon matRipple [routerLink]="['/deals-n-offers']">
                            <icon>close</icon>
                        </a>
                    }
                </header>
                <form
                    class="mx-auto my-2 flex w-160 max-w-full flex-col px-4 pb-16"
                >
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.name"
                            placeholder="Name of the deal or offer"
                        />
                        <mat-error>Name is required</mat-error>
                    </mat-form-field>
                    <label for="type"
                        >{{ 'COMMON.TYPE' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.type"
                            placeholder="Type of the deal or offer"
                        />
                        <mat-error>Type is required</mat-error>
                    </mat-form-field>
                    <label for="details">{{
                        'COMMON.DETAILS' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.details"
                            placeholder="Summary of the deal or offer"
                        />
                    </mat-form-field>
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            [formField]="form.description"
                            placeholder="Description of the deal or offer"
                        ></textarea>
                    </mat-form-field>
                    <label for="terms">{{ 'COMMON.TERMS' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            [formField]="form.terms"
                            placeholder="Terms and conditions of the deal or offer"
                        ></textarea>
                    </mat-form-field>
                    <label for="code">{{ 'COMMON.CODE' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.code"
                            placeholder="Deal/Offer Code"
                        />
                    </mat-form-field>
                    <label for="image">{{ 'COMMON.IMAGE' | translate }}</label>
                    <div class="mb-4 flex items-center space-x-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <input
                                matInput
                                [formField]="form.image"
                                placeholder="Image URL"
                            />
                        </mat-form-field>
                        <upload-button
                            ngModel
                            (ngModelChange)="
                                model.update((m) => ({ ...m, image: $event }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [matTooltip]="'Upload Image'"
                        />
                    </div>

                    <label for="expires_at">{{
                        'FORM.EXPIRES_AT' | translate
                    }}</label>
                    <a-date-field [formField]="form.expires_at" />
                </form>
                @if (!loading()) {
                    <footer
                        class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded-sm border-none px-4 py-2"
                    >
                        <button btn matRipple class="w-32" (click)="save()">
                            {{ 'COMMON.SAVE' | translate }}
                        </button>
                    </footer>
                }
            </div>
        } @else {
            <div
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.DEALS_SAVING' | translate }}</p>
            </div>
        }
    `, imports: [
      FormField,
      FormsModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      RouterModule,
      IconComponent,
      DateFieldComponent,
      UploadButtonComponent,
      MatTooltipModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsManageComponent, { className: "DealsManageComponent", filePath: "apps/concierge/src/app/deals/deals-manage.component.ts", lineNumber: 174 });
})();

// apps/concierge/src/app/deals/deals.routes.ts
var ROUTES = [
  {
    path: "",
    component: DealsComponent,
    children: [
      {
        path: "",
        component: DealsListComponent,
        title: "Deals & Offers"
      }
    ]
  },
  { path: "manage", component: DealsManageComponent, title: "Manage Deal" },
  {
    path: "manage/:id",
    component: DealsManageComponent,
    title: "Manage Deal"
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=deals.routes-Z6NXHEOO.js.map
