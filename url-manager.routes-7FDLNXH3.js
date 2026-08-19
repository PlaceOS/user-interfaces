import {
  PrintableComponent
} from "./chunk-UKMBPBBK.js";
import {
  openConfirmModal
} from "./chunk-BW26NN5P.js";
import {
  SimpleTableComponent
} from "./chunk-CXAVFJJB.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  FullscreenModalShellComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  RichTextInputComponent,
  SettingsToggleComponent
} from "./chunk-EZ4LWYB3.js";
import {
  AsyncHandler,
  Component,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormField,
  FormsModule,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  SafePipe,
  SettingsService,
  TranslatePipe,
  deleteShortURL,
  effect,
  form,
  getInvalidSignalFields,
  getShortUrlQRCode,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  queryShortURLs,
  required,
  saveShortURL,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L5KBQUZV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/url-management/url-modal.component.ts
var ShortUrlModalComponent = class _ShortUrlModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        id: this._data?.id || "",
        name: this._data?.name || "",
        description: this._data?.description || "",
        uri: this._data?.uri || "",
        enabled: this._data?.enabled ?? true
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.uri);
    });
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(`Some form fields are invalid. [${getInvalidSignalFields(this.form, this.model).join(", ")}]`);
    }
    const data = this.model();
    this.loading.set(true);
    const resp = await saveShortURL(data).catch((e) => notifyError(`Error saving Short URL: ${e.message}`));
    if (resp.id)
      this._dialog_ref.close(resp);
    this.loading.set(false);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ShortUrlModalComponent_BaseFactory;
      return function ShortUrlModalComponent_Factory(__ngFactoryType__) {
        return (\u0275ShortUrlModalComponent_BaseFactory || (\u0275ShortUrlModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ShortUrlModalComponent)))(__ngFactoryType__ || _ShortUrlModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShortUrlModalComponent, selectors: [["short-url-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 30, vars: 25, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name", 3, "formField"], ["for", "uri"], ["matInput", "", 3, "placeholder", "formField"], ["for", "description"], ["placeholder", "URL description...", 3, "formField"], [1, "item-center", "flex", "space-x-4", "py-4"], [1, "flex-1", 3, "label", "formField"], [1, "flex-1"]], template: function ShortUrlModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function ShortUrlModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form")(4, "div", 1)(5, "label", 2);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-form-field", 3);
        \u0275\u0275element(11, "input", 4);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 1)(13, "label", 5);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "mat-form-field", 3);
        \u0275\u0275element(19, "input", 6);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 1)(22, "label", 7);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "rich-text-input", 8);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 9);
        \u0275\u0275element(27, "settings-toggle", 10);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275element(29, "div", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 11, ctx.model().id ? "APP.CONCIERGE.URLS_EDIT" : "APP.CONCIERGE.URLS_ADD"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 13, "APP.CONCIERGE.URLS_SAVING") : "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 15, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 17, "APP.CONCIERGE.URLS_URI"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 19, "APP.CONCIERGE.URLS_URI"))("formField", ctx.form.uri);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 21, "COMMON.DESCRIPTION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(28, 23, "COMMON.ENABLED"))("formField", ctx.form.enabled);
        \u0275\u0275control();
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      RichTextInputComponent,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      FormField,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShortUrlModalComponent, [{
    type: Component,
    args: [{ selector: "short-url-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.URLS_EDIT'
                    : 'APP.CONCIERGE.URLS_ADD'
                ) | translate
            "
            (confirm)="save()"
            [loading]="
                loading() ? ('APP.CONCIERGE.URLS_SAVING' | translate) : ''
            "
        >
            <form>
                <div class="flex flex-col">
                    <label for="name">
                        {{ 'FORM.NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            placeholder="Name"
                            [formField]="form.name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="uri">
                        {{ 'APP.CONCIERGE.URLS_URI' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'APP.CONCIERGE.URLS_URI' | translate"
                            [formField]="form.uri"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="description">
                        {{ 'COMMON.DESCRIPTION' | translate }}
                    </label>
                    <rich-text-input
                        [formField]="form.description"
                        placeholder="URL description..."
                    ></rich-text-input>
                </div>
                <div class="item-center flex space-x-4 py-4">
                    <settings-toggle
                        class="flex-1"
                        [label]="'COMMON.ENABLED' | translate"
                        [formField]="form.enabled"
                    >
                    </settings-toggle>
                    <div class="flex-1"></div>
                </div>
                <!-- <div class="flex flex-col" *ngIf="form.controls.valid_from">
            <label for="uri" >{{ 'APP.CONCIERGE.VALID_FROM' | translate }}</label>
            <a-date-field formControlName="valid_from"></a-date-field>
          </div>
          <div class="flex flex-col" *ngIf="form.controls.valid_to">
            <label for="uri" >
              {{'COMMON.VALID_UNTIL' | translate}}<span>*</span>
            </label>
            <a-date-field
              formControlName="valid_until"
              [from]="form.value.valid_from"
            ></a-date-field>
          </div> -->
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      RichTextInputComponent,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      FormField
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShortUrlModalComponent, { className: "ShortUrlModalComponent", filePath: "apps/concierge/src/app/url-management/url-modal.component.ts", lineNumber: 105 });
})();

// apps/concierge/src/app/url-management/url-management.service.ts
var UrlManagementService = class _UrlManagementService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = signal(
      {},
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.url_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "url_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.qr_codes = signal(
      {},
      ...ngDevMode ? [{ debugName: "qr_codes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this._org.active_building();
      const { search } = this.options();
      this._change();
      this.timeout("load", () => this._load(search), 300);
    });
  }
  setFilters(options) {
    this.options.set(__spreadValues(__spreadValues({}, this.options()), options));
  }
  setSearchString(search) {
    this.options.set(__spreadProps(__spreadValues({}, this.options()), { search }));
  }
  editURL(url) {
    const ref = this._dialog.open(ShortUrlModalComponent, {
      data: url
    });
    ref.afterClosed().subscribe(() => this._change.set(Date.now()));
  }
  async removeURL(url) {
    const ref = await openConfirmModal({
      title: i18n("APP.CONCIERGE.URLS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.URLS_REMOVE_MSG", {
        name: url.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (ref.reason !== "done")
      return ref.close();
    ref.loading(i18n("APP.CONCIERGE.URLS_REMOVE_LOADING"));
    await deleteShortURL(url.id).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.URLS_REMOVE_ERROR", {
        error: e.message || e
      }));
      ref.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.URLS_REMOVE_SUCCESS"));
    ref.close();
    this._change.set(Date.now());
  }
  async loadQrCode(item) {
    if (this.qr_codes()[item.id])
      return;
    const code = await getShortUrlQRCode(item.id);
    this.qr_codes.update((codes) => __spreadProps(__spreadValues({}, codes), {
      [item.id]: code
    }));
  }
  async _load(search) {
    const list = await queryShortURLs({ q: search, limit: 1e3 });
    this.url_list.set(list);
    for (const item of list) {
      this.loadQrCode(item);
    }
  }
  static {
    this.\u0275fac = function UrlManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UrlManagementService, factory: _UrlManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/url-management/url-list.component.ts
var _c0 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "uri", name: a0, content: a1, size: "24rem" });
var _c2 = (a0) => ({ key: "user_name", name: a0 });
var _c3 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function UrlListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275property("href", data_r1, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1, " ");
  }
}
function UrlListComponent_ng_template_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.NO_DESCRIPTION"), " ");
  }
}
function UrlListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, UrlListComponent_ng_template_9_Conditional_2_Template, 3, 3, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r2 ? 2 : -1);
  }
}
function UrlListComponent_ng_template_11_ng_template_4_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(3).row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind2(1, 1, ctx_r4.qr_codes()[row_r4.id] || "", "resource"), \u0275\u0275sanitizeUrl);
  }
}
function UrlListComponent_ng_template_11_ng_template_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275conditionalCreate(2, UrlListComponent_ng_template_11_ng_template_4_ng_template_2_Conditional_2_Template, 2, 4, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(2).row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, "/r/" + row_r4.id.split("-")[1], "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.qr_codes()[row_r4.id] ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.name || row_r4.id, " ");
  }
}
function UrlListComponent_ng_template_11_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275template(2, UrlListComponent_ng_template_11_ng_template_4_ng_template_2_Template, 5, 6, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_ng_template_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.print());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const print_content_r7 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", print_content_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.CONCIERGE.URLS_PRINT_QR"), " ");
  }
}
function UrlListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadQrCode(row_r4));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UrlListComponent_ng_template_11_ng_template_4_Template, 7, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 14)(7, "icon");
    \u0275\u0275text(8, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-menu", null, 4)(11, "button", 15);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_11_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.edit(row_r4));
    });
    \u0275\u0275elementStart(12, "div", 16)(13, "icon");
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 15);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(row_r4));
    });
    \u0275\u0275elementStart(19, "div", 17)(20, "icon", 18);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const qr_menu_r8 = \u0275\u0275reference(5);
    const menu_r9 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("content", qr_menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", menu_r9);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 4, "APP.CONCIERGE.URLS_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 6, "APP.CONCIERGE.URLS_REMOVE"));
  }
}
var UrlListComponent = class _UrlListComponent {
  constructor() {
    this._manager = inject(UrlManagementService);
    this._settings = inject(SettingsService);
    this.features = this._manager.url_list;
    this.qr_codes = this._manager.qr_codes;
    this.edit = (region) => this._manager.editURL(region);
    this.remove = (region) => this._manager.removeURL(region);
    this.loadQrCode = (item) => this._manager.loadQrCode(item);
  }
  get kiosk_url() {
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    return `${window.location.origin}${path}`;
  }
  print() {
    window.print();
  }
  static {
    this.\u0275fac = function UrlListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlListComponent, selectors: [["short-url-list"]], decls: 13, vars: 29, consts: [["url_template", ""], ["desc_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], ["print_content", ""], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-12", "w-full"], ["link", "", 1, "w-full", "overflow-hidden", "p-4", "text-xs", "wrap-break-word", 3, "href"], [1, "p-4", "text-xs"], [1, "opacity-30"], [1, "mx-auto", "flex", "gap-2", "p-2"], ["icon", "", "default", "", "matRipple", "", "customTooltip", "", 3, "click", "content"], ["btn", "", "icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error"], [1, "bg-base-100", "rounded-sm", "py-2", "shadow-sm"], ["printable", "", 1, "", 3, "content"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"], ["target", "_blank", "ref", "noopener noreferrer", 1, "border-base-200", "bg-base-100", "mx-4", "my-2", "block", "rounded-lg", "border", "p-2", 3, "href"], [1, "mx-auto", "w-48", 3, "src"], [1, "bg-base-200", "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded-sm", "p-2", "text-center", "font-mono", "text-sm"]], template: function UrlListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6);
        \u0275\u0275element(1, "simple-table", 7);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275element(6, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, UrlListComponent_ng_template_7_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, UrlListComponent_ng_template_9_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, UrlListComponent_ng_template_11_Template, 25, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const url_template_r10 = \u0275\u0275reference(8);
        const desc_template_r11 = \u0275\u0275reference(10);
        const action_template_r12 = \u0275\u0275reference(12);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.features())("columns", \u0275\u0275pureFunction5(23, _c5, \u0275\u0275pureFunction1(11, _c0, \u0275\u0275pipeBind1(2, 3, "FORM.NAME")), \u0275\u0275pureFunction2(13, _c1, \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.URLS_URI"), url_template_r10), \u0275\u0275pureFunction1(16, _c2, \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.URLS_USER_NAME")), \u0275\u0275pureFunction2(18, _c3, \u0275\u0275pipeBind1(5, 9, "COMMON.DESCRIPTION"), desc_template_r11), \u0275\u0275pureFunction1(21, _c4, action_template_r12)))("sortable", true);
      }
    }, dependencies: [
      SimpleTableComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      MatRippleModule,
      MatRipple,
      CustomTooltipComponent,
      PrintableComponent,
      TranslatePipe,
      SafePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlListComponent, [{
    type: Component,
    args: [{ selector: "short-url-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-5xl text-sm"
                [data]="features()"
                empty_message="No Points of Interest found."
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'uri',
                        name: 'APP.CONCIERGE.URLS_URI' | translate,
                        content: url_template,
                        size: '24rem',
                    },
                    {
                        key: 'user_name',
                        name: 'APP.CONCIERGE.URLS_USER_NAME' | translate,
                    },
                    {
                        key: 'description',
                        name: 'COMMON.DESCRIPTION' | translate,
                        content: desc_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '6rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-12 w-full"></div>
        </div>
        <ng-template #url_template let-data="data">
            <a
                link
                [href]="data"
                class="w-full overflow-hidden p-4 text-xs wrap-break-word"
            >
                {{ data }}
            </a>
        </ng-template>
        <ng-template #desc_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.NO_DESCRIPTION' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex gap-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    customTooltip
                    [content]="qr_menu"
                    (click)="loadQrCode(row)"
                >
                    <icon>qr_code</icon>
                </button>
                <ng-template #qr_menu>
                    <div class="bg-base-100 rounded-sm py-2 shadow-sm">
                        <div class="" printable [content]="print_content">
                            <ng-template #print_content>
                                <a
                                    [href]="
                                        '/r/' + row.id.split('-')[1]
                                            | safe: 'url'
                                    "
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="border-base-200 bg-base-100 mx-4 my-2 block rounded-lg border p-2"
                                >
                                    @if (qr_codes()[row.id]) {
                                        <img
                                            class="mx-auto w-48"
                                            [src]="
                                                qr_codes()[row.id] || ''
                                                    | safe: 'resource'
                                            "
                                        />
                                    }
                                </a>
                                <div
                                    class="bg-base-200 mx-4 mt-2 w-[calc(100%-2rem)] rounded-sm p-2 text-center font-mono text-sm"
                                >
                                    {{ row.name || row.id }}
                                </div>
                            </ng-template>
                        </div>
                        <button
                            btn
                            matRipple
                            class="mx-4 my-2 w-[calc(100%-2rem)]"
                            (click)="print()"
                        >
                            {{ 'APP.CONCIERGE.URLS_PRINT_QR' | translate }}
                        </button>
                    </div>
                </ng-template>
                <button btn icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="edit(row)">
                        <div class="flex items-center space-x-2">
                            <icon>edit</icon>
                            <span>{{
                                'APP.CONCIERGE.URLS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.URLS_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      MatMenuModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      CustomTooltipComponent,
      SafePipe,
      PrintableComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlListComponent, { className: "UrlListComponent", filePath: "apps/concierge/src/app/url-management/url-list.component.ts", lineNumber: 159 });
})();

// apps/concierge/src/app/url-management/url-manager.component.ts
var UrlManagerComponent = class _UrlManagerComponent {
  constructor() {
    this._state = inject(UrlManagementService);
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.new = () => this._state.editURL();
  }
  updateSearch(value) {
    this._state.setSearchString(value);
  }
  static {
    this.\u0275fac = function UrlManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlManagerComponent, selectors: [["", "app-short-url-manager", ""]], decls: 15, vars: 7, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "justify-end", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "placeholder", "Search", 3, "ngModelChange", "ngModel"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"]], template: function UrlManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2)(4, "header", 3)(5, "h2", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275listener("click", function UrlManagerComponent_Template_button_click_8_listener() {
          return ctx.new();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "mat-form-field", 7)(13, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function UrlManagerComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search_term, $event) || (ctx.search_term = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function UrlManagerComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.updateSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275element(14, "short-url-list", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "APP.CONCIERGE.URLS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.CONCIERGE.URLS_ADD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.search_term);
        \u0275\u0275control();
      }
    }, dependencies: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      UrlListComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=url-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-short-url-manager]", template: `
        <app-topbar class="print:hidden" />
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pt-4 pb-2"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.URLS_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="new()">
                        {{ 'APP.CONCIERGE.URLS_ADD' | translate }}
                    </button>
                </header>
                <div class="flex justify-end px-8 pb-4">
                    <mat-form-field appearance="outline" class="no-subscript">
                        <input
                            matInput
                            placeholder="Search"
                            [(ngModel)]="search_term"
                            (ngModelChange)="updateSearch($event)"
                        />
                    </mat-form-field>
                </div>
                <short-url-list
                    class="relative block h-1/2 w-full flex-1"
                ></short-url-list>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      TranslatePipe,
      UrlListComponent
    ], styles: ["/* angular:styles/component:css;c3c4e43489fa049a08c22bf31fd7fb879b1769192f7684fb69867d5e4ca38a37;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/url-management/url-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar {\n  height: 100%;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=url-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlManagerComponent, { className: "UrlManagerComponent", filePath: "apps/concierge/src/app/url-management/url-manager.component.ts", lineNumber: 77 });
})();

// apps/concierge/src/app/url-management/url-manager.routes.ts
var ROUTES = [
  { path: "", component: UrlManagerComponent, title: "URL Management" }
];
export {
  ROUTES
};
//# sourceMappingURL=url-manager.routes-7FDLNXH3.js.map
