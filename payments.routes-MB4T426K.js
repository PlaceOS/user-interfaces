import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-IL3J7PD4.js";
import {
  PaymentDetailsModalComponent,
  PaymentStatusComponent
} from "./chunk-GFJKKVRV.js";
import {
  UserSearchFieldComponent
} from "./chunk-PLF4C7FS.js";
import "./chunk-EMJ7GIVV.js";
import "./chunk-TPQLCXDN.js";
import {
  ApplicationSidebarComponent,
  PaymentAmountPipe,
  PaymentsService,
  toMajorUnits,
  toMinorUnits,
  unitKey
} from "./chunk-5KLOXZNT.js";
import "./chunk-SGLZSRRG.js";
import "./chunk-66ZO7DIJ.js";
import "./chunk-WS45JNB2.js";
import "./chunk-MCSRXBGB.js";
import "./chunk-7WCOAUW7.js";
import "./chunk-XVNIGS42.js";
import "./chunk-EAJY44AS.js";
import "./chunk-JCIM3Z37.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-W553UMS4.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-D6IG36GJ.js";
import "./chunk-L5J7YFH4.js";
import "./chunk-FZLP2XOD.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-DRODO4M4.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-LPEK236K.js";
import "./chunk-IU2VY3EB.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-6ES3TW4D.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatPrefix
} from "./chunk-LOS3TMSZ.js";
import "./chunk-YB4E2T4F.js";
import "./chunk-B7DXSOI2.js";
import "./chunk-ULBCHKDT.js";
import {
  MatOption
} from "./chunk-KXLDQQFL.js";
import "./chunk-4S73GIOG.js";
import "./chunk-SIBLYMIF.js";
import "./chunk-2RKC74IR.js";
import {
  TranslatePipe
} from "./chunk-7FOGR4KR.js";
import {
  IconComponent
} from "./chunk-XHLNZTFA.js";
import "./chunk-JWZ62QCO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  OrganisationService,
  RequiredValidator
} from "./chunk-23FKJ3RM.js";
import {
  AsyncHandler,
  errorMessage,
  i18n,
  notifyError,
  notifySuccess
} from "./chunk-BJRVZNVW.js";
import "./chunk-KSPAXPMQ.js";
import "./chunk-LWUSUNNB.js";
import {
  MatRippleModule
} from "./chunk-GVTMIID5.js";
import {
  MatRipple
} from "./chunk-NOLYPWCK.js";
import "./chunk-THGATZR4.js";
import "./chunk-O6LGXEN6.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-647F7C2X.js";
import {
  Component,
  DatePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵariaProperty,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WP37UGIF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/payments/invoice-create-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function InvoiceCreateModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function InvoiceCreateModalComponent_Conditional_9_For_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "amount");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", product_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", product_r5.name, " \xB7 ", \u0275\u0275pipeBind2(2, 4, product_r5.unit_amount, product_r5.currency), " ", \u0275\u0275pipeBind1(3, 7, ctx_r1.unit_key(product_r5.unit)), " ");
  }
}
function InvoiceCreateModalComponent_Conditional_9_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-form-field", 23)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 17);
    \u0275\u0275listener("ngModelChange", function InvoiceCreateModalComponent_Conditional_9_For_9_Template_mat_select_ngModelChange_5_listener($event) {
      const \u0275$index_31_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateRow(\u0275$index_31_r4, { product_id: $event }));
    });
    \u0275\u0275repeaterCreate(6, InvoiceCreateModalComponent_Conditional_9_For_9_For_7_Template, 4, 9, "mat-option", 24, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 25)(9, "input", 26);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("ngModelChange", function InvoiceCreateModalComponent_Conditional_9_For_9_Template_input_ngModelChange_9_listener($event) {
      const \u0275$index_31_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateRow(\u0275$index_31_r4, { quantity: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 27);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function InvoiceCreateModalComponent_Conditional_9_For_9_Template_button_click_11_listener() {
      const \u0275$index_31_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeRow(\u0275$index_31_r4));
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "PAYMENTS.SELECT_PRODUCT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r6.product_id);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", row_r6.quantity);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 7, "PAYMENTS.QUANTITY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 9, "COMMON.REMOVE"));
  }
}
function InvoiceCreateModalComponent_Conditional_9_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "amount");
  }
  if (rf & 2) {
    const q_r7 = ctx;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, q_r7.total, q_r7.currency), " ");
  }
}
function InvoiceCreateModalComponent_Conditional_9_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2013 ");
  }
}
function InvoiceCreateModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-user-search-field", 7);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceCreateModalComponent_Conditional_9_Template_a_user_search_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.user, $event) || (ctx_r1.user = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, InvoiceCreateModalComponent_Conditional_9_For_9_Template, 15, 11, "div", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(10, "button", 10);
    \u0275\u0275listener("click", function InvoiceCreateModalComponent_Conditional_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRow());
    });
    \u0275\u0275elementStart(11, "icon", 11);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 12)(16, "mat-label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 13);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceCreateModalComponent_Conditional_9_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.memo, $event) || (ctx_r1.memo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14)(21, "mat-form-field", 15)(22, "mat-label");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceCreateModalComponent_Conditional_9_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.due_days, $event) || (ctx_r1.due_days = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-checkbox", 17);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceCreateModalComponent_Conditional_9_Template_mat_checkbox_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.send, $event) || (ctx_r1.send = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18)(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 19);
    \u0275\u0275conditionalCreate(34, InvoiceCreateModalComponent_Conditional_9_Conditional_34_Template, 2, 4)(35, InvoiceCreateModalComponent_Conditional_9_Conditional_35_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "footer", 20)(37, "button", 21);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 22);
    \u0275\u0275listener("click", function InvoiceCreateModalComponent_Conditional_9_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_18_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 16, "PAYMENTS.USER"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.user);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 18, "PAYMENTS.ITEMS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.rows());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.rows().length >= ctx_r1.max_rows);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 20, "PAYMENTS.ADD_ITEM"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 22, "PAYMENTS.MEMO"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.memo);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 24, "PAYMENTS.DUE_DAYS"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.due_days);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.send);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 26, "PAYMENTS.SEND_NOW"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 28, "PAYMENTS.TOTAL"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_18_0 = ctx_r1.quote()) ? 34 : 35, tmp_18_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 30, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.valid());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 32, ctx_r1.send() ? "PAYMENTS.SEND_INVOICE" : "PAYMENTS.SAVE_DRAFT"), " ");
  }
}
var MAX_ROWS = 50;
var InvoiceCreateModalComponent = class _InvoiceCreateModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._payments = inject(PaymentsService);
    this._ref = inject(MatDialogRef);
    this.max_rows = MAX_ROWS;
    this.unit_key = unitKey;
    this.user = signal(
      null,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.products = signal(
      [],
      ...ngDevMode ? [{ debugName: "products" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rows = signal(
      [
        { product_id: "", quantity: 1 }
      ],
      ...ngDevMode ? [{ debugName: "rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.memo = signal(
      "",
      ...ngDevMode ? [{ debugName: "memo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.due_days = signal(
      14,
      ...ngDevMode ? [{ debugName: "due_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.send = signal(
      true,
      ...ngDevMode ? [{ debugName: "send" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.quote = signal(
      null,
      ...ngDevMode ? [{ debugName: "quote" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = signal(
      false,
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.items = computed(
      () => this.rows().flatMap((row) => {
        const product = this.products().find((_) => _.id === row.product_id);
        if (!product || !(row.quantity > 0))
          return [];
        return [
          {
            resource_type: product.resource_type,
            product_id: product.id,
            quantity: Math.floor(row.quantity)
          }
        ];
      }),
      ...ngDevMode ? [{ debugName: "items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valid = computed(
      () => !!this.user()?.email && this.items().length > 0 && this.due_days() >= 0 && (this.quote()?.total || 0) > 0,
      ...ngDevMode ? [{ debugName: "valid" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    this.products.set(await this._payments.call("list_products", {}).catch((e) => {
      notifyError(errorMessage(e) || i18n("PAYMENTS.ACTION_FAILED"));
      return [];
    }));
  }
  addRow() {
    if (this.rows().length >= MAX_ROWS)
      return;
    this.rows.update((rows) => [...rows, { product_id: "", quantity: 1 }]);
    this._updateQuote();
  }
  removeRow(index) {
    this.rows.update((rows) => rows.filter((_, i) => i !== index));
    this._updateQuote();
  }
  updateRow(index, changes) {
    this.rows.update((rows) => rows.map((row, i) => i === index ? __spreadValues(__spreadValues({}, row), changes) : row));
    this._updateQuote();
  }
  async save() {
    const user = this.user();
    if (!this.valid() || !user)
      return;
    this.saving.set(true);
    this._ref.disableClose = true;
    try {
      await this._payments.call("create_invoice", {
        user_email: user.email,
        user_name: user.name,
        items: this.items(),
        memo: this.memo() || void 0,
        due_days: Math.floor(this.due_days()),
        send: this.send()
      });
      notifySuccess(i18n(this.send() ? "PAYMENTS.INVOICE_SENT" : "PAYMENTS.INVOICE_SAVED"));
      this._ref.close(true);
    } catch (e) {
      notifyError(errorMessage(e) || i18n("PAYMENTS.ACTION_FAILED"));
      this.saving.set(false);
      this._ref.disableClose = false;
    }
  }
  /** Ask the driver for the total after the items stop changing */
  _updateQuote() {
    this.quote.set(null);
    this.timeout("quote", async () => {
      const items = this.items();
      const quote = items.length ? await this._payments.call("quote", items).catch((e) => {
        notifyError(errorMessage(e) || i18n("PAYMENTS.ACTION_FAILED"));
        return null;
      }) : null;
      if (items === this.items())
        this.quote.set(quote);
    });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275InvoiceCreateModalComponent_BaseFactory;
      return function InvoiceCreateModalComponent_Factory(__ngFactoryType__) {
        return (\u0275InvoiceCreateModalComponent_BaseFactory || (\u0275InvoiceCreateModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_InvoiceCreateModalComponent)))(__ngFactoryType__ || _InvoiceCreateModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceCreateModalComponent, selectors: [["invoice-create-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 7, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "rounded-sm", "p-2"], ["mat-dialog-title", "", 1, "flex-1", "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-48", "w-lg", "max-w-[85vw]", "items-center", "justify-center"], ["diameter", "32"], [1, "w-lg", "max-w-[85vw]", "space-y-2", "p-4"], ["id", "invoice-user-label", 1, "text-sm", "font-medium"], ["labelled_by", "invoice-user-label", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-medium"], [1, "flex", "items-center", "gap-2"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", 3, "click", "disabled"], [1, "mr-2", "text-xl"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-4"], ["appearance", "outline", 1, "w-36"], ["matInput", "", "type", "number", "min", "0", "max", "365", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [1, "bg-base-200", "flex", "justify-between", "rounded-sm", "p-2", "font-medium"], ["total", "", "aria-live", "polite"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "gap-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", "name", "save-invoice", 1, "flex-1", 3, "click", "disabled"], ["appearance", "outline", 1, "no-subscript", "flex-1"], [3, "value"], ["appearance", "outline", 1, "no-subscript", "w-24"], ["matInput", "", "type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", 3, "click"]], template: function InvoiceCreateModalComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(8, InvoiceCreateModalComponent_Conditional_8_Template, 2, 0, "main", 3)(9, InvoiceCreateModalComponent_Conditional_9_Template, 43, 34);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "PAYMENTS.NEW_INVOICE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 5, "COMMON.CLOSE"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.saving() ? 8 : 9);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      MinValidator,
      MaxValidator,
      NgModel,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      UserSearchFieldComponent,
      PaymentAmountPipe,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=invoice-create-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceCreateModalComponent, [{
    type: Component,
    args: [{ selector: "invoice-create-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm p-2"
        >
            <h2 mat-dialog-title class="flex-1 px-2 text-xl font-medium">
                {{ 'PAYMENTS.NEW_INVOICE' | translate }}
            </h2>
            <button
                icon
                matRipple
                mat-dialog-close
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        @if (saving()) {
            <main
                class="flex h-48 w-lg max-w-[85vw] items-center justify-center"
            >
                <mat-spinner diameter="32"></mat-spinner>
            </main>
        } @else {
            <main class="w-lg max-w-[85vw] space-y-2 p-4">
                <label id="invoice-user-label" class="text-sm font-medium">{{
                    'PAYMENTS.USER' | translate
                }}</label>
                <a-user-search-field
                    labelled_by="invoice-user-label"
                    [(ngModel)]="user"
                ></a-user-search-field>
                <div class="text-sm font-medium">
                    {{ 'PAYMENTS.ITEMS' | translate }}
                </div>
                @for (row of rows(); track $index; let i = $index) {
                    <div class="flex items-center gap-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript flex-1"
                        >
                            <mat-label>{{
                                'PAYMENTS.SELECT_PRODUCT' | translate
                            }}</mat-label>
                            <mat-select
                                [ngModel]="row.product_id"
                                (ngModelChange)="
                                    updateRow(i, { product_id: $event })
                                "
                            >
                                @for (product of products(); track product.id) {
                                    <mat-option [value]="product.id">
                                        {{ product.name }} \xB7
                                        {{
                                            product.unit_amount
                                                | amount: product.currency
                                        }}
                                        {{ unit_key(product.unit) | translate }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-24"
                        >
                            <input
                                matInput
                                type="number"
                                min="1"
                                [attr.aria-label]="
                                    'PAYMENTS.QUANTITY' | translate
                                "
                                [ngModel]="row.quantity"
                                (ngModelChange)="
                                    updateRow(i, { quantity: $event })
                                "
                            />
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            [attr.aria-label]="'COMMON.REMOVE' | translate"
                            (click)="removeRow(i)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                }
                <button
                    btn
                    matRipple
                    class="inverse w-full"
                    [disabled]="rows().length >= max_rows"
                    (click)="addRow()"
                >
                    <icon class="mr-2 text-xl">add</icon>
                    {{ 'PAYMENTS.ADD_ITEM' | translate }}
                </button>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'PAYMENTS.MEMO' | translate }}</mat-label>
                    <textarea matInput rows="2" [(ngModel)]="memo"></textarea>
                </mat-form-field>
                <div class="flex items-center gap-4">
                    <mat-form-field appearance="outline" class="w-36">
                        <mat-label>{{
                            'PAYMENTS.DUE_DAYS' | translate
                        }}</mat-label>
                        <input
                            matInput
                            type="number"
                            min="0"
                            max="365"
                            [(ngModel)]="due_days"
                        />
                    </mat-form-field>
                    <mat-checkbox [(ngModel)]="send">
                        {{ 'PAYMENTS.SEND_NOW' | translate }}
                    </mat-checkbox>
                </div>
                <div
                    class="bg-base-200 flex justify-between rounded-sm p-2 font-medium"
                >
                    <span>{{ 'PAYMENTS.TOTAL' | translate }}</span>
                    <span total aria-live="polite">
                        @if (quote(); as q) {
                            {{ q.total | amount: q.currency }}
                        } @else {
                            \u2013
                        }
                    </span>
                </div>
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex gap-2 rounded-sm p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="save-invoice"
                    class="flex-1"
                    [disabled]="!valid()"
                    (click)="save()"
                >
                    {{
                        (send()
                            ? 'PAYMENTS.SEND_INVOICE'
                            : 'PAYMENTS.SAVE_DRAFT'
                        ) | translate
                    }}
                </button>
            </footer>
        }
    `, imports: [
      FormsModule,
      IconComponent,
      MatCheckboxModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatSelectModule,
      PaymentAmountPipe,
      TranslatePipe,
      UserSearchFieldComponent
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/payments/invoice-create-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=invoice-create-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceCreateModalComponent, { className: "InvoiceCreateModalComponent", filePath: "apps/concierge/src/app/payments/invoice-create-modal.component.ts", lineNumber: 225 });
})();

// apps/concierge/src/app/payments/invoices-list.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function InvoicesListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r1.status_key(item_r1)));
  }
}
function InvoicesListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function InvoicesListComponent_Conditional_23_For_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", item_r3.billing?.company, " ");
  }
}
function InvoicesListComponent_Conditional_23_For_19_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function InvoicesListComponent_Conditional_23_For_19_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.send(item_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", "send-" + item_r3.id)("disabled", ctx_r1.sending().includes(item_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "PAYMENTS.SEND"), " ");
  }
}
function InvoicesListComponent_Conditional_23_For_19_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", item_r3.pdf_url || item_r3.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "PAYMENTS.VIEW_INVOICE"));
  }
}
function InvoicesListComponent_Conditional_23_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22)(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275conditionalCreate(11, InvoicesListComponent_Conditional_23_For_19_Conditional_11_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20);
    \u0275\u0275element(16, "payment-status", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 27);
    \u0275\u0275conditionalCreate(18, InvoicesListComponent_Conditional_23_For_19_Conditional_18_Template, 3, 5, "button", 28);
    \u0275\u0275conditionalCreate(19, InvoicesListComponent_Conditional_23_For_19_Conditional_19_Template, 4, 4, "a", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 9, item_r3.created_at * 1e3, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r3.number || "\u2013", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.user_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.billing?.email || item_r3.user_email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.billing?.company ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 12, item_r3.amount, item_r3.currency), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("status", item_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r3.status === "requested" || item_r3.status === "draft" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.pdf_url || item_r3.url ? 19 : -1);
  }
}
function InvoicesListComponent_Conditional_23_ForEmpty_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.EMPTY_INVOICES"), " ");
  }
}
function InvoicesListComponent_Conditional_23_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InvoicesListComponent_Conditional_23_ForEmpty_20_Conditional_0_Template, 3, 3, "div", 31);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.loading() ? 0 : -1);
  }
}
function InvoicesListComponent_Conditional_23_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275elementEnd();
  }
}
function InvoicesListComponent_Conditional_23_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function InvoicesListComponent_Conditional_23_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.load(true));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.LOAD_MORE"), " ");
  }
}
function InvoicesListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, InvoicesListComponent_Conditional_23_For_19_Template, 20, 15, "div", 17, _forTrack02, false, InvoicesListComponent_Conditional_23_ForEmpty_20_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, InvoicesListComponent_Conditional_23_Conditional_21_Template, 2, 0, "div", 18)(22, InvoicesListComponent_Conditional_23_Conditional_22_Template, 3, 3, "button", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "PAYMENTS.DATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "PAYMENTS.NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "PAYMENTS.USER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "PAYMENTS.AMOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "PAYMENTS.STATUS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.invoices());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 21 : ctx_r1.cursor() ? 22 : -1);
  }
}
var PAGE_SIZE = 50;
var STATUSES = [
  "requested",
  "draft",
  "open",
  "paid",
  "void"
];
var InvoicesListComponent = class _InvoicesListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._payments = inject(PaymentsService);
    this._dialog = inject(MatDialog);
    this._load_id = 0;
    this._sent = /* @__PURE__ */ new Map();
    this.statuses = STATUSES;
    this.user_email = signal(
      "",
      ...ngDevMode ? [{ debugName: "user_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status = signal(
      "",
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.invoices = signal(
      [],
      ...ngDevMode ? [{ debugName: "invoices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.sending = signal(
      [],
      ...ngDevMode ? [{ debugName: "sending" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cursor = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "cursor" }] : (
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
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status_key = (status) => `PAYMENTS.STATUS_${status.toUpperCase()}`;
  }
  ngOnInit() {
    this.load();
  }
  reload(debounce = false) {
    if (debounce)
      this.timeout("reload", () => this.load(), 400);
    else
      this.load();
  }
  async load(more = false) {
    const id = ++this._load_id;
    this.loading.set(true);
    this.error.set("");
    try {
      const page = await this._payments.call("list_invoices", {
        user_email: this.user_email().trim() || void 0,
        status: this.status() || void 0,
        limit: PAGE_SIZE,
        cursor: more ? this.cursor() : void 0
      });
      if (id !== this._load_id)
        return;
      const items = page.items.map((item) => isUnsent(item) ? this._sent.get(item.id) || item : item);
      this.invoices.update((list) => more ? [...list, ...items] : items);
      this.cursor.set(page.next_cursor);
    } catch (e) {
      if (id !== this._load_id)
        return;
      this.error.set(i18n("PAYMENTS.LOAD_ERROR", { error: errorMessage(e) || e }));
    } finally {
      if (id === this._load_id)
        this.loading.set(false);
    }
  }
  async send(invoice) {
    if (this.sending().includes(invoice.id))
      return;
    this.sending.update((ids) => [...ids, invoice.id]);
    try {
      const sent = await this._payments.call("send_invoice", invoice.id, null);
      this._sent.set(sent.id, sent);
      this.invoices.update((list) => list.map((item) => item.id === sent.id ? sent : item));
      notifySuccess(i18n("PAYMENTS.INVOICE_SENT"));
    } catch (e) {
      notifyError(errorMessage(e) || i18n("PAYMENTS.ACTION_FAILED"));
    } finally {
      this.sending.update((ids) => ids.filter((_) => _ !== invoice.id));
    }
  }
  create() {
    this._dialog.open(InvoiceCreateModalComponent).afterClosed().subscribe((done) => done ? this.load() : null);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275InvoicesListComponent_BaseFactory;
      return function InvoicesListComponent_Factory(__ngFactoryType__) {
        return (\u0275InvoicesListComponent_BaseFactory || (\u0275InvoicesListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_InvoicesListComponent)))(__ngFactoryType__ || _InvoicesListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesListComponent, selectors: [["invoices-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 24, vars: 21, consts: [[1, "flex", "flex-wrap", "items-center", "gap-2", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-72"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "type", "email", 3, "ngModelChange", "placeholder", "ngModel"], ["appearance", "outline", 1, "no-subscript", "w-48"], [3, "ngModelChange", "ngModel", "aria-label", "placeholder"], ["value", ""], [3, "value"], [1, "flex-1"], ["btn", "", "matRipple", "", "name", "new-invoice", "data-shortcut", "new", 3, "click"], [1, "mr-2", "text-xl"], [1, "bg-base-200", "rounded-lg", "p-8", "text-center"], ["role", "table", 1, "border-base-200", "overflow-x-auto", "rounded-lg", "border", "text-sm"], ["role", "row", 1, "bg-base-200", "grid", "min-w-[52rem]", "grid-cols-[8rem_8rem_1fr_8rem_8rem_9rem]", "items-center", "font-medium"], ["role", "columnheader", 1, "p-3"], ["role", "columnheader", 1, "p-3", "text-right"], ["role", "columnheader"], ["role", "row", 1, "border-base-200", "grid", "min-w-[52rem]", "grid-cols-[8rem_8rem_1fr_8rem_8rem_9rem]", "items-center", "border-t"], [1, "flex", "justify-center", "p-4"], ["btn", "", "matRipple", "", 1, "inverse", "my-4", "w-full"], ["role", "cell", 1, "p-3"], ["role", "cell", 1, "truncate", "p-3", "font-mono", "text-xs"], ["role", "cell", 1, "min-w-0", "p-3"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-70"], ["role", "cell", 1, "p-3", "text-right"], [3, "status"], ["role", "cell", 1, "flex", "justify-end", "gap-1", "p-1"], ["btn", "", "matRipple", "", 1, "inverse", 3, "name", "disabled"], ["icon", "", "matRipple", "", "target", "_blank", "rel", "noopener", 3, "href"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click", "name", "disabled"], [1, "p-8", "text-center", "opacity-70"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "inverse", "my-4", "w-full", 3, "click"]], template: function InvoicesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "icon", 2);
        \u0275\u0275text(3, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 3);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("ngModelChange", function InvoicesListComponent_Template_input_ngModelChange_4_listener($event) {
          ctx.user_email.set($event);
          return ctx.reload(true);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-form-field", 4)(8, "mat-select", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275listener("ngModelChange", function InvoicesListComponent_Template_mat_select_ngModelChange_8_listener($event) {
          ctx.status.set($event);
          return ctx.reload();
        });
        \u0275\u0275elementStart(11, "mat-option", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, InvoicesListComponent_For_15_Template, 3, 4, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "div", 8);
        \u0275\u0275elementStart(17, "button", 9);
        \u0275\u0275listener("click", function InvoicesListComponent_Template_button_click_17_listener() {
          return ctx.create();
        });
        \u0275\u0275elementStart(18, "icon", 10);
        \u0275\u0275text(19, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, InvoicesListComponent_Conditional_22_Template, 2, 1, "div", 11)(23, InvoicesListComponent_Conditional_23_Template, 23, 17);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 9, "PAYMENTS.FILTER_USER"))("ngModel", ctx.user_email());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 11, "PAYMENTS.FILTER_USER"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.status());
        \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(9, 13, "PAYMENTS.STATUS"));
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 15, "PAYMENTS.ALL_STATUSES"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 17, "PAYMENTS.ALL_STATUSES"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 19, "PAYMENTS.NEW_INVOICE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 22 : 23);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      PaymentStatusComponent,
      DatePipe,
      PaymentAmountPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoicesListComponent, [{
    type: Component,
    args: [{
      selector: "invoices-list",
      template: `
        <div class="flex flex-wrap items-center gap-2 pb-4">
            <mat-form-field appearance="outline" class="no-subscript w-72">
                <icon matPrefix class="text-xl">search</icon>
                <input
                    matInput
                    type="email"
                    [attr.aria-label]="'PAYMENTS.FILTER_USER' | translate"
                    [placeholder]="'PAYMENTS.FILTER_USER' | translate"
                    [ngModel]="user_email()"
                    (ngModelChange)="user_email.set($event); reload(true)"
                />
            </mat-form-field>
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    [ngModel]="status()"
                    (ngModelChange)="status.set($event); reload()"
                    [aria-label]="'PAYMENTS.STATUS' | translate"
                    [placeholder]="'PAYMENTS.ALL_STATUSES' | translate"
                >
                    <mat-option value="">{{
                        'PAYMENTS.ALL_STATUSES' | translate
                    }}</mat-option>
                    @for (item of statuses; track item) {
                        <mat-option [value]="item">{{
                            status_key(item) | translate
                        }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <div class="flex-1"></div>
            <button
                btn
                matRipple
                name="new-invoice"
                data-shortcut="new"
                (click)="create()"
            >
                <icon class="mr-2 text-xl">add</icon>
                {{ 'PAYMENTS.NEW_INVOICE' | translate }}
            </button>
        </div>
        @if (error()) {
            <div class="bg-base-200 rounded-lg p-8 text-center">
                {{ error() }}
            </div>
        } @else {
            <div
                class="border-base-200 overflow-x-auto rounded-lg border text-sm"
                role="table"
            >
                <div
                    role="row"
                    class="bg-base-200 grid min-w-[52rem] grid-cols-[8rem_8rem_1fr_8rem_8rem_9rem] items-center font-medium"
                >
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.DATE' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.NUMBER' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.USER' | translate }}
                    </div>
                    <div role="columnheader" class="p-3 text-right">
                        {{ 'PAYMENTS.AMOUNT' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.STATUS' | translate }}
                    </div>
                    <div role="columnheader"></div>
                </div>
                @for (item of invoices(); track item.id) {
                    <div
                        role="row"
                        class="border-base-200 grid min-w-[52rem] grid-cols-[8rem_8rem_1fr_8rem_8rem_9rem] items-center border-t"
                    >
                        <div role="cell" class="p-3">
                            {{ item.created_at * 1000 | date: 'mediumDate' }}
                        </div>
                        <div role="cell" class="truncate p-3 font-mono text-xs">
                            {{ item.number || '\u2013' }}
                        </div>
                        <div role="cell" class="min-w-0 p-3">
                            <div class="truncate">{{ item.user_name }}</div>
                            <div class="truncate text-xs opacity-70">
                                {{ item.billing?.email || item.user_email }}
                                @if (item.billing?.company) {
                                    \xB7 {{ item.billing?.company }}
                                }
                            </div>
                        </div>
                        <div role="cell" class="p-3 text-right">
                            {{ item.amount | amount: item.currency }}
                        </div>
                        <div role="cell" class="p-3">
                            <payment-status [status]="item.status" />
                        </div>
                        <div role="cell" class="flex justify-end gap-1 p-1">
                            @if (
                                item.status === 'requested' ||
                                item.status === 'draft'
                            ) {
                                <button
                                    btn
                                    matRipple
                                    class="inverse"
                                    [name]="'send-' + item.id"
                                    [disabled]="sending().includes(item.id)"
                                    (click)="send(item)"
                                >
                                    {{ 'PAYMENTS.SEND' | translate }}
                                </button>
                            }
                            @if (item.pdf_url || item.url) {
                                <a
                                    icon
                                    matRipple
                                    target="_blank"
                                    rel="noopener"
                                    [href]="item.pdf_url || item.url"
                                    [attr.aria-label]="
                                        'PAYMENTS.VIEW_INVOICE' | translate
                                    "
                                >
                                    <icon>open_in_new</icon>
                                </a>
                            }
                        </div>
                    </div>
                } @empty {
                    @if (!loading()) {
                        <div class="p-8 text-center opacity-70">
                            {{ 'PAYMENTS.EMPTY_INVOICES' | translate }}
                        </div>
                    }
                }
            </div>
            @if (loading()) {
                <div class="flex justify-center p-4">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
            } @else if (cursor()) {
                <button
                    btn
                    matRipple
                    class="inverse my-4 w-full"
                    (click)="load(true)"
                >
                    {{ 'PAYMENTS.LOAD_MORE' | translate }}
                </button>
            }
        }
    `,
      imports: [
        DatePipe,
        FormsModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        PaymentAmountPipe,
        PaymentStatusComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesListComponent, { className: "InvoicesListComponent", filePath: "apps/concierge/src/app/payments/invoices-list.component.ts", lineNumber: 212 });
})();
function isUnsent(invoice) {
  return invoice.status === "requested" || invoice.status === "draft";
}

// apps/concierge/src/app/payments/payments-list.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack03 = ($index, $item) => $item.id;
function PaymentsListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r1.status_key(item_r1)));
  }
}
function PaymentsListComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const days_r3 = ctx.$implicit;
    \u0275\u0275property("value", days_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, days_r3 ? "PAYMENTS.PERIOD_DAYS" : "PAYMENTS.PERIOD_ALL", \u0275\u0275pureFunction1(5, _c0, days_r3)), " ");
  }
}
function PaymentsListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function PaymentsListComponent_Conditional_27_For_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "amount");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2212", \u0275\u0275pipeBind2(2, 1, item_r5.amount_refunded, item_r5.currency), " ");
  }
}
function PaymentsListComponent_Conditional_27_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 25);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "amount");
    \u0275\u0275conditionalCreate(14, PaymentsListComponent_Conditional_27_For_19_Conditional_14_Template, 3, 4, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20);
    \u0275\u0275element(16, "payment-status", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 28)(18, "button", 10);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("click", function PaymentsListComponent_Conditional_27_For_19_Template_button_click_18_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.view(item_r5));
    });
    \u0275\u0275elementStart(20, "icon");
    \u0275\u0275text(21, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 8, item_r5.created_at * 1e3, "short"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.user_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.user_email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 11, item_r5.amount, item_r5.currency), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r5.amount_refunded ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", item_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 14, "PAYMENTS.VIEW_PAYMENT"));
  }
}
function PaymentsListComponent_Conditional_27_ForEmpty_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.EMPTY_PAYMENTS"), " ");
  }
}
function PaymentsListComponent_Conditional_27_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentsListComponent_Conditional_27_ForEmpty_20_Conditional_0_Template, 3, 3, "div", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.loading() ? 0 : -1);
  }
}
function PaymentsListComponent_Conditional_27_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 30);
    \u0275\u0275elementEnd();
  }
}
function PaymentsListComponent_Conditional_27_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function PaymentsListComponent_Conditional_27_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.load(true));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.LOAD_MORE"), " ");
  }
}
function PaymentsListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, PaymentsListComponent_Conditional_27_For_19_Template, 22, 16, "div", 17, _forTrack03, false, PaymentsListComponent_Conditional_27_ForEmpty_20_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, PaymentsListComponent_Conditional_27_Conditional_21_Template, 2, 0, "div", 18)(22, PaymentsListComponent_Conditional_27_Conditional_22_Template, 3, 3, "button", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "PAYMENTS.DATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "PAYMENTS.USER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "PAYMENTS.DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "PAYMENTS.AMOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "PAYMENTS.STATUS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.payments());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 21 : ctx_r1.cursor() ? 22 : -1);
  }
}
var PAGE_SIZE2 = 50;
var STATUSES2 = [
  "succeeded",
  "authorized",
  "pending",
  "requires_action",
  "partially_refunded",
  "refunded",
  "cancelled",
  "failed"
];
var PERIODS = [7, 30, 90, 365, 0];
var PaymentsListComponent = class _PaymentsListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._payments = inject(PaymentsService);
    this._dialog = inject(MatDialog);
    this._load_id = 0;
    this.statuses = STATUSES2;
    this.periods = PERIODS;
    this.user_email = signal(
      "",
      ...ngDevMode ? [{ debugName: "user_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status = signal(
      "",
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period = signal(
      30,
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.payments = signal(
      [],
      ...ngDevMode ? [{ debugName: "payments" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cursor = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "cursor" }] : (
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
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status_key = (status) => `PAYMENTS.STATUS_${status.toUpperCase()}`;
  }
  ngOnInit() {
    this.load();
  }
  /** Load the first page again. `debounce` waits for the user to stop typing */
  reload(debounce = false) {
    if (debounce)
      this.timeout("reload", () => this.load(), 400);
    else
      this.load();
  }
  async load(more = false) {
    const id = ++this._load_id;
    const days = this.period();
    const query = {
      user_email: this.user_email().trim() || void 0,
      status: this.status() || void 0,
      period_start: days ? Math.floor(Date.now() / 1e3) - days * 24 * 60 * 60 : void 0,
      limit: PAGE_SIZE2,
      cursor: more ? this.cursor() : void 0
    };
    this.loading.set(true);
    this.error.set("");
    try {
      const page = await this._payments.call("list_payments", query);
      if (id !== this._load_id)
        return;
      this.payments.update((list) => more ? [...list, ...page.items] : page.items);
      this.cursor.set(page.next_cursor);
    } catch (e) {
      if (id !== this._load_id)
        return;
      this.error.set(i18n("PAYMENTS.LOAD_ERROR", { error: errorMessage(e) || e }));
    } finally {
      if (id === this._load_id)
        this.loading.set(false);
    }
  }
  view(payment) {
    this._dialog.open(PaymentDetailsModalComponent, { data: { payment } }).afterClosed().subscribe(() => this.load());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PaymentsListComponent_BaseFactory;
      return function PaymentsListComponent_Factory(__ngFactoryType__) {
        return (\u0275PaymentsListComponent_BaseFactory || (\u0275PaymentsListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PaymentsListComponent)))(__ngFactoryType__ || _PaymentsListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentsListComponent, selectors: [["payments-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 25, consts: [[1, "flex", "flex-wrap", "items-center", "gap-2", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-72"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "name", "user-email", "type", "email", 3, "ngModelChange", "placeholder", "ngModel"], ["appearance", "outline", 1, "no-subscript", "w-48"], [3, "ngModelChange", "ngModel", "aria-label", "placeholder"], ["value", ""], [3, "value"], [3, "ngModelChange", "ngModel", "aria-label"], [1, "flex-1"], ["icon", "", "matRipple", "", 3, "click"], [1, "bg-base-200", "rounded-lg", "p-8", "text-center"], ["role", "table", 1, "border-base-200", "overflow-x-auto", "rounded-lg", "border", "text-sm"], ["role", "row", 1, "bg-base-200", "grid", "min-w-[48rem]", "grid-cols-[10rem_1fr_1fr_8rem_9rem_3rem]", "items-center", "font-medium"], ["role", "columnheader", 1, "p-3"], ["role", "columnheader", 1, "p-3", "text-right"], ["role", "columnheader"], ["role", "row", 1, "border-base-200", "hover:bg-base-200", "grid", "min-w-[48rem]", "grid-cols-[10rem_1fr_1fr_8rem_9rem_3rem]", "items-center", "border-t"], [1, "flex", "justify-center", "p-4"], ["btn", "", "matRipple", "", 1, "inverse", "my-4", "w-full"], ["role", "cell", 1, "p-3"], ["role", "cell", 1, "min-w-0", "p-3"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-70"], ["role", "cell", 1, "truncate", "p-3"], ["role", "cell", 1, "p-3", "text-right"], [1, "text-xs", "opacity-70"], [3, "status"], ["role", "cell"], [1, "p-8", "text-center", "opacity-70"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "inverse", "my-4", "w-full", 3, "click"]], template: function PaymentsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "icon", 2);
        \u0275\u0275text(3, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 3);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("ngModelChange", function PaymentsListComponent_Template_input_ngModelChange_4_listener($event) {
          ctx.user_email.set($event);
          return ctx.reload(true);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-form-field", 4)(8, "mat-select", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275listener("ngModelChange", function PaymentsListComponent_Template_mat_select_ngModelChange_8_listener($event) {
          ctx.status.set($event);
          return ctx.reload();
        });
        \u0275\u0275elementStart(11, "mat-option", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, PaymentsListComponent_For_15_Template, 3, 4, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-form-field", 4)(17, "mat-select", 8);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275listener("ngModelChange", function PaymentsListComponent_Template_mat_select_ngModelChange_17_listener($event) {
          ctx.period.set($event);
          return ctx.reload();
        });
        \u0275\u0275repeaterCreate(19, PaymentsListComponent_For_20_Template, 3, 7, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "div", 9);
        \u0275\u0275elementStart(22, "button", 10);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275listener("click", function PaymentsListComponent_Template_button_click_22_listener() {
          return ctx.reload();
        });
        \u0275\u0275elementStart(24, "icon");
        \u0275\u0275text(25, "refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(26, PaymentsListComponent_Conditional_26_Template, 2, 1, "div", 11)(27, PaymentsListComponent_Conditional_27_Template, 23, 17);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 11, "PAYMENTS.FILTER_USER"))("ngModel", ctx.user_email());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 13, "PAYMENTS.FILTER_USER"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.status());
        \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(9, 15, "PAYMENTS.STATUS"));
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 17, "PAYMENTS.ALL_STATUSES"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 19, "PAYMENTS.ALL_STATUSES"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.period());
        \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(18, 21, "FORM.PERIOD"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.periods);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 23, "COMMON.REFRESH"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.error() ? 26 : 27);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      PaymentStatusComponent,
      DatePipe,
      PaymentAmountPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsListComponent, [{
    type: Component,
    args: [{
      selector: "payments-list",
      template: `
        <div class="flex flex-wrap items-center gap-2 pb-4">
            <mat-form-field appearance="outline" class="no-subscript w-72">
                <icon matPrefix class="text-xl">search</icon>
                <input
                    matInput
                    name="user-email"
                    type="email"
                    [attr.aria-label]="'PAYMENTS.FILTER_USER' | translate"
                    [placeholder]="'PAYMENTS.FILTER_USER' | translate"
                    [ngModel]="user_email()"
                    (ngModelChange)="user_email.set($event); reload(true)"
                />
            </mat-form-field>
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    [ngModel]="status()"
                    (ngModelChange)="status.set($event); reload()"
                    [aria-label]="'PAYMENTS.STATUS' | translate"
                    [placeholder]="'PAYMENTS.ALL_STATUSES' | translate"
                >
                    <mat-option value="">{{
                        'PAYMENTS.ALL_STATUSES' | translate
                    }}</mat-option>
                    @for (item of statuses; track item) {
                        <mat-option [value]="item">{{
                            status_key(item) | translate
                        }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    [ngModel]="period()"
                    (ngModelChange)="period.set($event); reload()"
                    [aria-label]="'FORM.PERIOD' | translate"
                >
                    @for (days of periods; track days) {
                        <mat-option [value]="days">
                            {{
                                (days
                                    ? 'PAYMENTS.PERIOD_DAYS'
                                    : 'PAYMENTS.PERIOD_ALL'
                                ) | translate: { count: days }
                            }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                [attr.aria-label]="'COMMON.REFRESH' | translate"
                (click)="reload()"
            >
                <icon>refresh</icon>
            </button>
        </div>
        @if (error()) {
            <div class="bg-base-200 rounded-lg p-8 text-center">
                {{ error() }}
            </div>
        } @else {
            <div
                class="border-base-200 overflow-x-auto rounded-lg border text-sm"
                role="table"
            >
                <div
                    role="row"
                    class="bg-base-200 grid min-w-[48rem] grid-cols-[10rem_1fr_1fr_8rem_9rem_3rem] items-center font-medium"
                >
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.DATE' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.USER' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.DESCRIPTION' | translate }}
                    </div>
                    <div role="columnheader" class="p-3 text-right">
                        {{ 'PAYMENTS.AMOUNT' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.STATUS' | translate }}
                    </div>
                    <div role="columnheader"></div>
                </div>
                @for (item of payments(); track item.id) {
                    <div
                        role="row"
                        class="border-base-200 hover:bg-base-200 grid min-w-[48rem] grid-cols-[10rem_1fr_1fr_8rem_9rem_3rem] items-center border-t"
                    >
                        <div role="cell" class="p-3">
                            {{ item.created_at * 1000 | date: 'short' }}
                        </div>
                        <div role="cell" class="min-w-0 p-3">
                            <div class="truncate">{{ item.user_name }}</div>
                            <div class="truncate text-xs opacity-70">
                                {{ item.user_email }}
                            </div>
                        </div>
                        <div role="cell" class="truncate p-3">
                            {{ item.description }}
                        </div>
                        <div role="cell" class="p-3 text-right">
                            {{ item.amount | amount: item.currency }}
                            @if (item.amount_refunded) {
                                <div class="text-xs opacity-70">
                                    \u2212{{
                                        item.amount_refunded
                                            | amount: item.currency
                                    }}
                                </div>
                            }
                        </div>
                        <div role="cell" class="p-3">
                            <payment-status [status]="item.status" />
                        </div>
                        <div role="cell">
                            <button
                                icon
                                matRipple
                                [attr.aria-label]="
                                    'PAYMENTS.VIEW_PAYMENT' | translate
                                "
                                (click)="view(item)"
                            >
                                <icon>chevron_right</icon>
                            </button>
                        </div>
                    </div>
                } @empty {
                    @if (!loading()) {
                        <div class="p-8 text-center opacity-70">
                            {{ 'PAYMENTS.EMPTY_PAYMENTS' | translate }}
                        </div>
                    }
                }
            </div>
            @if (loading()) {
                <div class="flex justify-center p-4">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
            } @else if (cursor()) {
                <button
                    btn
                    matRipple
                    class="inverse my-4 w-full"
                    (click)="load(true)"
                >
                    {{ 'PAYMENTS.LOAD_MORE' | translate }}
                </button>
            }
        }
    `,
      imports: [
        DatePipe,
        FormsModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        PaymentAmountPipe,
        PaymentStatusComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentsListComponent, { className: "PaymentsListComponent", filePath: "apps/concierge/src/app/payments/payments-list.component.ts", lineNumber: 214 });
})();

// apps/concierge/src/app/payments/payments.component.ts
var _c02 = (a0) => ["/payments", a0];
var _forTrack04 = ($index, $item) => $item.route;
function PaymentsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 8);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "PAYMENTS.NOT_ENABLED"));
  }
}
function PaymentsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 8);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.config_error());
  }
}
function PaymentsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function PaymentsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 8);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "PAYMENTS.NO_ACCESS"));
  }
}
function PaymentsComponent_Conditional_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13, 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const rla_r3 = \u0275\u0275reference(1);
    \u0275\u0275property("active", rla_r3.isActive)("routerLink", \u0275\u0275pureFunction1(5, _c02, page_r2.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, page_r2.name), " ");
  }
}
function PaymentsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "nav", 12);
    \u0275\u0275repeaterCreate(3, PaymentsComponent_Conditional_11_For_4_Template, 4, 7, "a", 13, _forTrack04);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "mat-tab-nav-panel", 14, 0);
    \u0275\u0275element(7, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const panel_r4 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("tabPanel", panel_r4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pages());
  }
}
var PAYMENT_PAGES = [
  { route: "list", name: "PAYMENTS.TAB_PAYMENTS" },
  { route: "invoices", name: "PAYMENTS.TAB_INVOICES" },
  { route: "products", name: "PAYMENTS.TAB_PRODUCTS" }
];
var PaymentsComponent = class _PaymentsComponent {
  constructor() {
    this._payments = inject(PaymentsService);
    this.pages = computed(
      () => PAYMENT_PAGES.filter((page) => page.route !== "invoices" || this._payments.hasCapability("invoices")),
      ...ngDevMode ? [{ debugName: "pages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.enabled = this._payments.is_enabled;
    this.config = this._payments.config;
    this.config_error = this._payments.config_error;
    this.privileged = this._payments.privileged;
  }
  static {
    this.\u0275fac = function PaymentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentsComponent, selectors: [["app-payments"]], decls: 12, vars: 4, consts: [["panel", ""], ["rla", "routerLinkActive"], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "h-20", "items-center", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "m-8", "flex", "flex-col", "items-center", "gap-2", "rounded-lg", "p-16", "text-center", "opacity-70"], [1, "flex", "justify-center", "p-16"], [1, "text-5xl"], ["diameter", "32"], [1, "mb-4", "px-8"], [1, "bg-base-200", "overflow-hidden", "rounded-sm"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "routerLink"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"]], template: function PaymentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 3)(3, "header", 4)(4, "h2", 5);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, PaymentsComponent_Conditional_7_Template, 6, 3, "div", 6)(8, PaymentsComponent_Conditional_8_Template, 5, 1, "div", 6)(9, PaymentsComponent_Conditional_9_Template, 2, 0, "div", 7)(10, PaymentsComponent_Conditional_10_Template, 6, 3, "div", 6)(11, PaymentsComponent_Conditional_11_Template, 8, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "PAYMENTS.HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.enabled() ? 7 : ctx.config_error() ? 8 : !ctx.config() ? 9 : !ctx.privileged() ? 10 : 11);
      }
    }, dependencies: [
      ApplicationSidebarComponent,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTabsModule,
      MatTabNav,
      MatTabNavPanel,
      MatTabLink,
      RouterModule,
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--%NS%base-100);\n}\n/*# sourceMappingURL=payments.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsComponent, [{
    type: Component,
    args: [{ selector: "app-payments", template: `
        <div class="flex h-px flex-1">
            <app-sidebar />
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header class="flex h-20 items-center px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{ 'PAYMENTS.HEADER' | translate }}
                    </h2>
                </header>
                @if (!enabled()) {
                    <div
                        class="m-8 flex flex-col items-center gap-2 rounded-lg p-16 text-center opacity-70"
                    >
                        <icon class="text-5xl">payments</icon>
                        <p>{{ 'PAYMENTS.NOT_ENABLED' | translate }}</p>
                    </div>
                } @else if (config_error()) {
                    <div
                        class="m-8 flex flex-col items-center gap-2 rounded-lg p-16 text-center opacity-70"
                    >
                        <icon class="text-5xl">error</icon>
                        <p>{{ config_error() }}</p>
                    </div>
                } @else if (!config()) {
                    <div class="flex justify-center p-16">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                } @else if (!privileged()) {
                    <div
                        class="m-8 flex flex-col items-center gap-2 rounded-lg p-16 text-center opacity-70"
                    >
                        <icon class="text-5xl">lock</icon>
                        <p>{{ 'PAYMENTS.NO_ACCESS' | translate }}</p>
                    </div>
                } @else {
                    <div class="mb-4 px-8">
                        <div class="bg-base-200 overflow-hidden rounded-sm">
                            <nav mat-tab-nav-bar [tabPanel]="panel">
                                @for (page of pages(); track page.route) {
                                    <a
                                        mat-tab-link
                                        routerLinkActive
                                        #rla="routerLinkActive"
                                        [active]="rla.isActive"
                                        [routerLink]="['/payments', page.route]"
                                    >
                                        {{ page.name | translate }}
                                    </a>
                                }
                            </nav>
                        </div>
                    </div>
                    <mat-tab-nav-panel
                        #panel
                        class="relative h-1/2 w-full flex-1 overflow-auto px-8"
                    >
                        <router-outlet />
                    </mat-tab-nav-panel>
                }
            </main>
        </div>
    `, imports: [
      ApplicationSidebarComponent,
      IconComponent,
      MatProgressSpinnerModule,
      MatTabsModule,
      RouterModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/payments/payments.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=payments.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentsComponent, { className: "PaymentsComponent", filePath: "apps/concierge/src/app/payments/payments.component.ts", lineNumber: 105 });
})();

// apps/concierge/src/app/payments/product-modal.component.ts
var _forTrack05 = ($index, $item) => $item.id;
function ProductModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function ProductModalComponent_Conditional_9_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", type_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r1.type_key(type_r3)));
  }
}
function ProductModalComponent_Conditional_9_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", item_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r1.unit_key(item_r4)));
  }
}
function ProductModalComponent_Conditional_9_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r5 = ctx.$implicit;
    \u0275\u0275property("value", zone_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(zone_r5.name);
  }
}
function ProductModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5)(1, "mat-form-field", 6)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function ProductModalComponent_Conditional_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 6)(7, "mat-label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ProductModalComponent_Conditional_9_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.description, $event) || (ctx_r1.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9)(12, "mat-form-field", 10)(13, "mat-label");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ProductModalComponent_Conditional_9_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource_type, $event) || (ctx_r1.resource_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(17, ProductModalComponent_Conditional_9_For_18_Template, 3, 4, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 13)(20, "mat-label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ProductModalComponent_Conditional_9_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.price, $event) || (ctx_r1.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 16)(27, "mat-label");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ProductModalComponent_Conditional_9_Template_mat_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.unit, $event) || (ctx_r1.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(31, ProductModalComponent_Conditional_9_For_32_Template, 3, 4, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 6)(34, "mat-label");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ProductModalComponent_Conditional_9_Template_mat_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.zone_ids, $event) || (ctx_r1.zone_ids = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(38, ProductModalComponent_Conditional_9_For_39_Template, 2, 2, "mat-option", 12, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(40, "mat-hint");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-form-field", 6)(44, "mat-label");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ProductModalComponent_Conditional_9_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource_ids, $event) || (ctx_r1.resource_ids = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(48, "mat-hint");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "mat-checkbox", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ProductModalComponent_Conditional_9_Template_mat_checkbox_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.active, $event) || (ctx_r1.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "footer", 21)(55, "button", 22);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 23);
    \u0275\u0275listener("click", function ProductModalComponent_Conditional_9_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 22, "FORM.NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 24, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.description);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 26, "PAYMENTS.RESOURCE_TYPE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource_type);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.resource_types);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 28, "PAYMENTS.PRICE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.currency, "\xA0");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.price);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 30, "PAYMENTS.UNIT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.unit);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.units);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 32, "PAYMENTS.ZONES"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.zone_ids);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.zones());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 34, "PAYMENTS.ZONES_HINT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 36, "PAYMENTS.RESOURCE_IDS"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource_ids);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 38, "PAYMENTS.RESOURCE_IDS_HINT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 40, "PAYMENTS.ACTIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 42, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.valid());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 44, "COMMON.SAVE"), " ");
  }
}
var PRODUCT_RESOURCE_TYPES = [
  "room",
  "desk",
  "parking",
  "locker",
  "asset",
  "service"
];
var UNITS = ["booking", "hour", "day", "item"];
var ProductModalComponent = class _ProductModalComponent {
  constructor() {
    this._payments = inject(PaymentsService);
    this._org = inject(OrganisationService);
    this._ref = inject(MatDialogRef);
    this.product = inject(MAT_DIALOG_DATA, {
      optional: true
    });
    this.currency = this.product?.currency || this._payments.currency();
    this.resource_types = PRODUCT_RESOURCE_TYPES;
    this.units = UNITS;
    this.unit_key = unitKey;
    this.type_key = (type) => `PAYMENTS.TYPE_${type.toUpperCase()}`;
    this.name = signal(
      this.product?.name || "",
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.description = signal(
      this.product?.description || "",
      ...ngDevMode ? [{ debugName: "description" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_type = signal(
      this.product?.resource_type || "room",
      ...ngDevMode ? [{ debugName: "resource_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.unit = signal(
      this.product?.unit || "hour",
      ...ngDevMode ? [{ debugName: "unit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.price = signal(
      this.product ? toMajorUnits(this.product.unit_amount, this.currency) : null,
      ...ngDevMode ? [{ debugName: "price" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_ids = signal(
      this.product?.zone_ids || [],
      ...ngDevMode ? [{ debugName: "zone_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_ids = signal(
      (this.product?.resource_ids || []).join(", "),
      ...ngDevMode ? [{ debugName: "resource_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = signal(
      this.product?.active ?? true,
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = signal(
      false,
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zones = computed(
      () => [
        ...this._org.buildings.map((_) => ({
          id: _.id,
          name: _.display_name || _.name
        })),
        ...this._org.levels.map((_) => ({
          id: _.id,
          name: `${this._org.buildings.find((b) => b.id === _.parent_id)?.name || ""} \u2013 ${_.display_name || _.name}`
        }))
      ],
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valid = computed(
      () => {
        const price = this.price();
        return !!this.name().trim() && price !== null && price >= 0;
      },
      ...ngDevMode ? [{ debugName: "valid" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async save() {
    if (!this.valid())
      return;
    const input = {
      id: this.product?.id,
      name: this.name().trim(),
      description: this.description().trim(),
      active: this.active(),
      resource_type: this.resource_type(),
      resource_ids: this.resource_ids().split(",").map((_) => _.trim()).filter((_) => !!_),
      zone_ids: this.zone_ids(),
      unit: this.unit(),
      unit_amount: toMinorUnits(this.price() || 0, this.currency),
      currency: this.currency
    };
    this.saving.set(true);
    this._ref.disableClose = true;
    try {
      this._ref.close(await this._payments.call("save_product", input));
    } catch (e) {
      notifyError(errorMessage(e) || i18n("PAYMENTS.ACTION_FAILED"));
      this.saving.set(false);
      this._ref.disableClose = false;
    }
  }
  static {
    this.\u0275fac = function ProductModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductModalComponent, selectors: [["product-modal"]], decls: 10, vars: 7, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "rounded-sm", "p-2"], ["mat-dialog-title", "", 1, "flex-1", "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-48", "w-lg", "max-w-[85vw]", "items-center", "justify-center"], ["diameter", "32"], [1, "w-lg", "max-w-[85vw]", "space-y-1", "p-4"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "required", "", "name", "name", 3, "ngModelChange", "ngModel"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2"], ["appearance", "outline", 1, "flex-1"], ["name", "resource-type", 3, "ngModelChange", "ngModel"], [3, "value"], ["appearance", "outline", 1, "w-32"], ["matTextPrefix", ""], ["matInput", "", "required", "", "name", "price", "type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "w-36"], ["name", "unit", 3, "ngModelChange", "ngModel"], ["multiple", "", 3, "ngModelChange", "ngModel"], ["matInput", "", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "gap-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", "name", "save-product", 1, "flex-1", 3, "click", "disabled"]], template: function ProductModalComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(8, ProductModalComponent_Conditional_8_Template, 2, 0, "main", 3)(9, ProductModalComponent_Conditional_9_Template, 61, 46);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, ctx.product ? "PAYMENTS.EDIT_PRODUCT" : "PAYMENTS.NEW_PRODUCT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 5, "COMMON.CLOSE"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.saving() ? 8 : 9);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      RequiredValidator,
      MinValidator,
      NgModel,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=product-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductModalComponent, [{
    type: Component,
    args: [{ selector: "product-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm p-2"
        >
            <h2 mat-dialog-title class="flex-1 px-2 text-xl font-medium">
                {{
                    (product ? 'PAYMENTS.EDIT_PRODUCT' : 'PAYMENTS.NEW_PRODUCT')
                        | translate
                }}
            </h2>
            <button
                icon
                matRipple
                mat-dialog-close
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        @if (saving()) {
            <main
                class="flex h-48 w-lg max-w-[85vw] items-center justify-center"
            >
                <mat-spinner diameter="32"></mat-spinner>
            </main>
        } @else {
            <main class="w-lg max-w-[85vw] space-y-1 p-4">
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'FORM.NAME' | translate }}</mat-label>
                    <input matInput required name="name" [(ngModel)]="name" />
                </mat-form-field>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{
                        'COMMON.DESCRIPTION' | translate
                    }}</mat-label>
                    <textarea
                        matInput
                        rows="2"
                        [(ngModel)]="description"
                    ></textarea>
                </mat-form-field>
                <div class="flex gap-2">
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-label>{{
                            'PAYMENTS.RESOURCE_TYPE' | translate
                        }}</mat-label>
                        <mat-select
                            name="resource-type"
                            [(ngModel)]="resource_type"
                        >
                            @for (type of resource_types; track type) {
                                <mat-option [value]="type">{{
                                    type_key(type) | translate
                                }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="w-32">
                        <mat-label>{{
                            'PAYMENTS.PRICE' | translate
                        }}</mat-label>
                        <span matTextPrefix>{{ currency }}&nbsp;</span>
                        <input
                            matInput
                            required
                            name="price"
                            type="number"
                            min="0"
                            [(ngModel)]="price"
                        />
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="w-36">
                        <mat-label>{{ 'PAYMENTS.UNIT' | translate }}</mat-label>
                        <mat-select name="unit" [(ngModel)]="unit">
                            @for (item of units; track item) {
                                <mat-option [value]="item">{{
                                    unit_key(item) | translate
                                }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'PAYMENTS.ZONES' | translate }}</mat-label>
                    <mat-select multiple [(ngModel)]="zone_ids">
                        @for (zone of zones(); track zone.id) {
                            <mat-option [value]="zone.id">{{
                                zone.name
                            }}</mat-option>
                        }
                    </mat-select>
                    <mat-hint>{{ 'PAYMENTS.ZONES_HINT' | translate }}</mat-hint>
                </mat-form-field>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{
                        'PAYMENTS.RESOURCE_IDS' | translate
                    }}</mat-label>
                    <input matInput [(ngModel)]="resource_ids" />
                    <mat-hint>{{
                        'PAYMENTS.RESOURCE_IDS_HINT' | translate
                    }}</mat-hint>
                </mat-form-field>
                <mat-checkbox [(ngModel)]="active">
                    {{ 'PAYMENTS.ACTIVE' | translate }}
                </mat-checkbox>
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex gap-2 rounded-sm p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="save-product"
                    class="flex-1"
                    [disabled]="!valid()"
                    (click)="save()"
                >
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      FormsModule,
      IconComponent,
      MatCheckboxModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatSelectModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/payments/product-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=product-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductModalComponent, { className: "ProductModalComponent", filePath: "apps/concierge/src/app/payments/product-modal.component.ts", lineNumber: 196 });
})();

// apps/concierge/src/app/payments/products-list.component.ts
var _c03 = (a0, a1) => ({ resources: a0, zones: a1 });
var _forTrack06 = ($index, $item) => $item.id;
function ProductsListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r1.type_key(item_r1)));
  }
}
function ProductsListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function ProductsListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementEnd();
  }
}
function ProductsListComponent_Conditional_21_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "amount");
    \u0275\u0275elementStart(12, "span", 23);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 24);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 24);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 25)(23, "button", 26);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_21_For_19_Template_button_click_23_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.edit(item_r4));
    });
    \u0275\u0275elementStart(25, "icon");
    \u0275\u0275text(26, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 26);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function ProductsListComponent_Conditional_21_For_19_Template_button_click_27_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(item_r4));
    });
    \u0275\u0275elementStart(29, "icon");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-60", !item_r4.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 12, ctx_r1.type_key(item_r4.resource_type)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 14, item_r4.unit_amount, item_r4.currency), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, ctx_r1.unit_key(item_r4.unit)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r4.resource_ids.length || item_r4.zone_ids.length ? \u0275\u0275pipeBind2(17, 19, "PAYMENTS.APPLIES_TO_COUNT", \u0275\u0275pureFunction2(30, _c03, item_r4.resource_ids.length, item_r4.zone_ids.length)) : \u0275\u0275pipeBind1(18, 22, "PAYMENTS.APPLIES_TO_ALL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 24, item_r4.active ? "PAYMENTS.ACTIVE" : "PAYMENTS.INACTIVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 26, "PAYMENTS.EDIT_PRODUCT"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(28, 28, item_r4.active ? "PAYMENTS.ARCHIVE_PRODUCT" : "PAYMENTS.RESTORE_PRODUCT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.active ? "archive" : "unarchive");
  }
}
function ProductsListComponent_Conditional_21_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.EMPTY_PRODUCTS"), " ");
  }
}
function ProductsListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, ProductsListComponent_Conditional_21_For_19_Template, 31, 33, "div", 16, _forTrack06, false, ProductsListComponent_Conditional_21_ForEmpty_20_Template, 3, 3, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "FORM.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "PAYMENTS.RESOURCE_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "PAYMENTS.PRICE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "PAYMENTS.APPLIES_TO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "PAYMENTS.STATUS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var ProductsListComponent = class _ProductsListComponent {
  constructor() {
    this._payments = inject(PaymentsService);
    this._dialog = inject(MatDialog);
    this.types = PRODUCT_RESOURCE_TYPES;
    this.unit_key = unitKey;
    this.type_key = (type) => `PAYMENTS.TYPE_${type.toUpperCase()}`;
    this.type = signal(
      "",
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_inactive = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_inactive" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.products = signal(
      [],
      ...ngDevMode ? [{ debugName: "products" }] : (
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
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered = computed(
      () => {
        const type = this.type();
        return this.products().filter((p) => !type || p.resource_type === type);
      },
      ...ngDevMode ? [{ debugName: "filtered" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.load();
  }
  async load() {
    this.loading.set(true);
    this.error.set("");
    try {
      this.products.set(await this._payments.call("list_products", {
        include_inactive: this.show_inactive()
      }));
    } catch (e) {
      this.error.set(i18n("PAYMENTS.LOAD_ERROR", { error: errorMessage(e) || e }));
    } finally {
      this.loading.set(false);
    }
  }
  edit(product) {
    this._dialog.open(ProductModalComponent, { data: product ?? null }).afterClosed().subscribe((saved) => saved ? this.load() : null);
  }
  /** Archive an active product, or restore an archived one */
  async toggleActive(product) {
    try {
      await this._payments.call("save_product", __spreadProps(__spreadValues({}, product), {
        active: !product.active
      }));
      await this.load();
    } catch (e) {
      notifyError(errorMessage(e) || i18n("PAYMENTS.ACTION_FAILED"));
    }
  }
  static {
    this.\u0275fac = function ProductsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsListComponent, selectors: [["products-list"]], decls: 22, vars: 18, consts: [[1, "flex", "flex-wrap", "items-center", "gap-2", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-48"], [3, "ngModelChange", "ngModel", "aria-label", "placeholder"], ["value", ""], [3, "value"], [3, "ngModelChange", "ngModel"], [1, "flex-1"], ["btn", "", "matRipple", "", "name", "new-product", "data-shortcut", "new", 3, "click"], [1, "mr-2", "text-xl"], [1, "bg-base-200", "rounded-lg", "p-8", "text-center"], [1, "flex", "justify-center", "p-4"], ["role", "table", 1, "border-base-200", "overflow-x-auto", "rounded-lg", "border", "text-sm"], ["diameter", "32"], ["role", "row", 1, "bg-base-200", "grid", "min-w-[52rem]", "grid-cols-[1fr_8rem_10rem_10rem_6rem_6.5rem]", "items-center", "font-medium"], ["role", "columnheader", 1, "p-3"], ["role", "columnheader"], ["role", "row", 1, "border-base-200", "grid", "min-w-[52rem]", "grid-cols-[1fr_8rem_10rem_10rem_6rem_6.5rem]", "items-center", "border-t", 3, "opacity-60"], [1, "p-8", "text-center", "opacity-70"], ["role", "row", 1, "border-base-200", "grid", "min-w-[52rem]", "grid-cols-[1fr_8rem_10rem_10rem_6rem_6.5rem]", "items-center", "border-t"], ["role", "cell", 1, "min-w-0", "p-3"], [1, "truncate", "font-medium"], [1, "truncate", "text-xs", "opacity-70"], ["role", "cell", 1, "p-3"], [1, "opacity-70"], ["role", "cell", 1, "p-3", "text-xs"], ["role", "cell", 1, "flex", "justify-end", "gap-1", "p-1"], ["icon", "", "matRipple", "", 3, "click"]], template: function ProductsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function ProductsListComponent_Template_mat_select_ngModelChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.type, $event) || (ctx.type = $event);
          return $event;
        });
        \u0275\u0275elementStart(5, "mat-option", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(8, ProductsListComponent_For_9_Template, 3, 4, "mat-option", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-checkbox", 5);
        \u0275\u0275listener("ngModelChange", function ProductsListComponent_Template_mat_checkbox_ngModelChange_10_listener($event) {
          ctx.show_inactive.set($event);
          return ctx.load();
        });
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275element(13, "div", 6);
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275listener("click", function ProductsListComponent_Template_button_click_14_listener() {
          return ctx.edit();
        });
        \u0275\u0275elementStart(15, "icon", 8);
        \u0275\u0275text(16, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(19, ProductsListComponent_Conditional_19_Template, 2, 1, "div", 9)(20, ProductsListComponent_Conditional_20_Template, 2, 0, "div", 10)(21, ProductsListComponent_Conditional_21_Template, 21, 16, "div", 11);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.type);
        \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(3, 8, "PAYMENTS.RESOURCE_TYPE"));
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 10, "PAYMENTS.ALL_TYPES"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, "PAYMENTS.ALL_TYPES"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.types);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.show_inactive());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "PAYMENTS.SHOW_INACTIVE"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 16, "PAYMENTS.NEW_PRODUCT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 19 : ctx.loading() ? 20 : 21);
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      MatFormFieldModule,
      MatFormField,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      PaymentAmountPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsListComponent, [{
    type: Component,
    args: [{
      selector: "products-list",
      template: `
        <div class="flex flex-wrap items-center gap-2 pb-4">
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    [(ngModel)]="type"
                    [aria-label]="'PAYMENTS.RESOURCE_TYPE' | translate"
                    [placeholder]="'PAYMENTS.ALL_TYPES' | translate"
                >
                    <mat-option value="">{{
                        'PAYMENTS.ALL_TYPES' | translate
                    }}</mat-option>
                    @for (item of types; track item) {
                        <mat-option [value]="item">{{
                            type_key(item) | translate
                        }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-checkbox
                [ngModel]="show_inactive()"
                (ngModelChange)="show_inactive.set($event); load()"
            >
                {{ 'PAYMENTS.SHOW_INACTIVE' | translate }}
            </mat-checkbox>
            <div class="flex-1"></div>
            <button
                btn
                matRipple
                name="new-product"
                data-shortcut="new"
                (click)="edit()"
            >
                <icon class="mr-2 text-xl">add</icon>
                {{ 'PAYMENTS.NEW_PRODUCT' | translate }}
            </button>
        </div>
        @if (error()) {
            <div class="bg-base-200 rounded-lg p-8 text-center">
                {{ error() }}
            </div>
        } @else if (loading()) {
            <div class="flex justify-center p-4">
                <mat-spinner diameter="32"></mat-spinner>
            </div>
        } @else {
            <div
                class="border-base-200 overflow-x-auto rounded-lg border text-sm"
                role="table"
            >
                <div
                    role="row"
                    class="bg-base-200 grid min-w-[52rem] grid-cols-[1fr_8rem_10rem_10rem_6rem_6.5rem] items-center font-medium"
                >
                    <div role="columnheader" class="p-3">
                        {{ 'FORM.NAME' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.RESOURCE_TYPE' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.PRICE' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.APPLIES_TO' | translate }}
                    </div>
                    <div role="columnheader" class="p-3">
                        {{ 'PAYMENTS.STATUS' | translate }}
                    </div>
                    <div role="columnheader"></div>
                </div>
                @for (item of filtered(); track item.id) {
                    <div
                        role="row"
                        class="border-base-200 grid min-w-[52rem] grid-cols-[1fr_8rem_10rem_10rem_6rem_6.5rem] items-center border-t"
                        [class.opacity-60]="!item.active"
                    >
                        <div role="cell" class="min-w-0 p-3">
                            <div class="truncate font-medium">
                                {{ item.name }}
                            </div>
                            <div class="truncate text-xs opacity-70">
                                {{ item.description }}
                            </div>
                        </div>
                        <div role="cell" class="p-3">
                            {{ type_key(item.resource_type) | translate }}
                        </div>
                        <div role="cell" class="p-3">
                            {{ item.unit_amount | amount: item.currency }}
                            <span class="opacity-70">{{
                                unit_key(item.unit) | translate
                            }}</span>
                        </div>
                        <div role="cell" class="p-3 text-xs">
                            {{
                                item.resource_ids.length || item.zone_ids.length
                                    ? ('PAYMENTS.APPLIES_TO_COUNT'
                                      | translate
                                          : {
                                                resources:
                                                    item.resource_ids.length,
                                                zones: item.zone_ids.length,
                                            })
                                    : ('PAYMENTS.APPLIES_TO_ALL' | translate)
                            }}
                        </div>
                        <div role="cell" class="p-3 text-xs">
                            {{
                                (item.active
                                    ? 'PAYMENTS.ACTIVE'
                                    : 'PAYMENTS.INACTIVE'
                                ) | translate
                            }}
                        </div>
                        <div role="cell" class="flex justify-end gap-1 p-1">
                            <button
                                icon
                                matRipple
                                [attr.aria-label]="
                                    'PAYMENTS.EDIT_PRODUCT' | translate
                                "
                                (click)="edit(item)"
                            >
                                <icon>edit</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [attr.aria-label]="
                                    (item.active
                                        ? 'PAYMENTS.ARCHIVE_PRODUCT'
                                        : 'PAYMENTS.RESTORE_PRODUCT'
                                    ) | translate
                                "
                                (click)="toggleActive(item)"
                            >
                                <icon>{{
                                    item.active ? 'archive' : 'unarchive'
                                }}</icon>
                            </button>
                        </div>
                    </div>
                } @empty {
                    <div class="p-8 text-center opacity-70">
                        {{ 'PAYMENTS.EMPTY_PRODUCTS' | translate }}
                    </div>
                }
            </div>
        }
    `,
      imports: [
        FormsModule,
        IconComponent,
        MatCheckboxModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        PaymentAmountPipe,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsListComponent, { className: "ProductsListComponent", filePath: "apps/concierge/src/app/payments/products-list.component.ts", lineNumber: 192 });
})();

// apps/concierge/src/app/payments/payments.routes.ts
var ROUTES = [
  {
    path: "",
    component: PaymentsComponent,
    children: [
      {
        path: "list",
        component: PaymentsListComponent,
        title: "Payments"
      },
      {
        path: "invoices",
        component: InvoicesListComponent,
        title: "Invoices"
      },
      {
        path: "products",
        component: ProductsListComponent,
        title: "Products & Services"
      },
      { path: "**", redirectTo: "list" }
    ]
  }
];
export {
  ROUTES
};
//# debugId=597f6776-6557-5b3a-9a60-fd601b96eae7
//# sourceMappingURL=payments.routes-MB4T426K.js.map
