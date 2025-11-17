import {
  DesksStateService
} from "./chunk-2K3EVIC6.js";
import {
  AsyncHandler,
  AsyncPipe,
  Clipboard,
  CommonModule,
  Component,
  CustomTooltipComponent,
  Desk,
  ElementRef,
  IconComponent,
  MatDialog,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  OrganisationService,
  PrintableComponent,
  Pu,
  SafePipe,
  SettingsService,
  SimpleTableComponent,
  TranslatePipe,
  __spreadProps,
  __spreadValues,
  csvToJson,
  generateQRCode,
  i18n,
  inject,
  loadTextFileFromInputEvent,
  nextValueFrom,
  notifyError,
  notifySuccess,
  openConfirmModal,
  randomInt,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpureFunction7,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JMWE3Z3Z.js";

// apps/concierge/src/app/desks/desks-manage.component.ts
var _c0 = (a0, a1) => ({ key: "id", name: a0, content: a1, size: "10rem" });
var _c1 = (a0) => ({ key: "name", name: a0 });
var _c2 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c3 = (a0, a1) => ({ key: "features", name: a0, content: a1 });
var _c4 = (a0) => ({ key: "security", name: a0 });
var _c5 = (a0, a1) => ({ key: "bookable", name: a0, content: a1, size: "5.5rem" });
var _c6 = (a0) => ({ key: "actions", name: " ", content: a0, size: "8.5rem", sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function DesksManageComponent_ng_template_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.map_id, " ");
  }
}
function DesksManageComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_10_Template_button_click_0_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(row_r3.map_id || row_r3.id));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DesksManageComponent_ng_template_10_Conditional_3_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.id || row_r3.map_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.id && row_r3.map_id !== row_r3.id ? 3 : -1);
  }
}
function DesksManageComponent_ng_template_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5, " ");
  }
}
function DesksManageComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, DesksManageComponent_ng_template_12_For_2_Template, 2, 1, "span", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r6);
  }
}
function DesksManageComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r7)("bg-success", data_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7 ? "done" : "close");
  }
}
function DesksManageComponent_ng_template_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function DesksManageComponent_ng_template_16_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r9, " ");
  }
}
function DesksManageComponent_ng_template_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_16_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const data_r9 = \u0275\u0275nextContext().data;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r9, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DesksManageComponent_ng_template_16_Conditional_1_Conditional_3_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const row_r11 = ctx_r9.row;
    const data_r9 = ctx_r9.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.assigned_name || data_r9);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r11.assigned_name ? 3 : -1);
  }
}
function DesksManageComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DesksManageComponent_ng_template_16_Conditional_0_Template, 3, 3, "div", 16);
    \u0275\u0275conditionalCreate(1, DesksManageComponent_ng_template_16_Conditional_1_Template, 4, 2, "button", 17);
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275conditional(!data_r9 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r9 ? 1 : -1);
  }
}
function DesksManageComponent_ng_template_18_ng_template_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275element(2, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext(2).row;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, row_r13.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", row_r13.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r13.name || row_r13.id, " ");
  }
}
function DesksManageComponent_ng_template_18_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275template(2, DesksManageComponent_ng_template_18_ng_template_13_ng_template_2_Template, 5, 6, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 26);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_ng_template_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.print());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const print_content_r15 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", print_content_r15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR"), " ");
  }
}
function DesksManageComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_Template_button_click_1_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadQrCode(row_r13));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_Template_button_click_5_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editDesk(row_r13));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_Template_button_click_9_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeDesk(row_r13));
    });
    \u0275\u0275elementStart(11, "icon", 23);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, DesksManageComponent_ng_template_18_ng_template_13_Template, 7, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qr_menu_r16 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("content", qr_menu_r16)("matTooltip", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.DESKS_ACTION_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 8, "APP.CONCIERGE.DESKS_ACTION_REMOVE"));
  }
}
function DesksManageComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 30);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.loading);
  }
}
function DesksManageComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 31)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 33);
    \u0275\u0275listener("change", function DesksManageComponent_Conditional_21_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_DROP_TEMPLATE"), " ");
  }
}
var _DesksManageComponent = class _DesksManageComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(DesksStateService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._element = inject(ElementRef);
    this._clipboard = inject(Clipboard);
    this.dragging = false;
    this.filters = this._state.filters;
    this.desks = this._state.desks;
    this.editDesk = (desk) => this._state.editDesk(desk);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.DESKS_ID_COPIED"));
    };
  }
  async removeDesk(desk) {
    const resp = await openConfirmModal({
      title: i18n("APP.CONCIERGE.DESKS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.DESKS_REMOVE_MSG", {
        name: desk.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.close();
    const desks = await nextValueFrom(this.desks);
    const updated_desks = desks.filter((_) => _.id !== desk.id);
    const filters = await nextValueFrom(this.filters);
    const level = this._org.levelWithID(filters.zones);
    this.loading = i18n("APP.CONCIERGE.DESKS_REMOVE_LOADING");
    await Pu(level.id, {
      name: "desks",
      description: "desks",
      details: updated_desks
    }).toPromise().catch((e) => {
      this.loading = "";
      notifyError(i18n("APP.CONCIERGE.DESKS_REMOVE_ERROR", {
        error: e.message || e
      }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_REMOVE_SUCCESS"));
    this._state.setFilters({});
    this.loading = "";
  }
  get kiosk_url() {
    const path = this._settings.get("app.workplace_url_path") || "/workplace";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
  }
  print() {
    window.print();
  }
  async loadCSVData(event) {
    this.loading = i18n("APP.CONCIERGE.DESKS_UPLOADING");
    this.dragging = false;
    const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
      notifyError(m);
      throw e;
    });
    try {
      const list = csvToJson(data) || [];
      this._state.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
        id: _.id || `desk-${randomInt(999999)}`
      }))));
    } catch (e) {
      console.error(e);
    }
    this.loading = "";
  }
  handleDrag(type, event) {
    this.dragging = type === "enter";
  }
};
_DesksManageComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DesksManageComponent_BaseFactory;
  return function DesksManageComponent_Factory(__ngFactoryType__) {
    return (\u0275DesksManageComponent_BaseFactory || (\u0275DesksManageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DesksManageComponent)))(__ngFactoryType__ || _DesksManageComponent);
  };
})();
_DesksManageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksManageComponent, selectors: [["desks-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 48, consts: [["name_template", ""], ["item_list_template", ""], ["bool_template", ""], ["assigned_template", ""], ["action_template", ""], ["qr_menu", ""], ["print_content", ""], [1, "h-full", "w-full", "overflow-auto", "px-8", "pb-4", 3, "dragenter", "dragend"], [1, "block", "w-full", "min-w-[72rem]", "text-sm", 3, "filter", "data", "columns", "sortable", "empty_message"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "bg-base-100", "bg-opacity-60"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-neutral"], [1, "flex", "flex-col", "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "flex-wrap", "p-2"], [1, "m-1", "rounded-2xl", "bg-info", "px-2", "py-1", "font-mono", "text-xs", "text-info-content"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl", "text-white"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content", "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"], [1, "rounded", "bg-base-100", "py-2", "shadow"], ["printable", "", 1, "", 3, "content"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", 3, "href"], [1, "w-48", 3, "src"], [1, "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded", "bg-base-200", "p-2", "text-center", "font-mono", "text-sm"], ["diameter", "32"], [1, "rounded", "bg-base-100", "p-4", "shadow"], [1, "flex", "h-64", "w-64", "flex-col", "items-center", "justify-center", "rounded", "border-4", "border-dashed", "border-base-200"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function DesksManageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("dragenter", function DesksManageComponent_Template_div_dragenter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleDrag("enter", $event));
    })("dragend", function DesksManageComponent_Template_div_dragend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleDrag("end", $event));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275element(1, "simple-table", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275template(10, DesksManageComponent_ng_template_10_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, DesksManageComponent_ng_template_12_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, DesksManageComponent_ng_template_14_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, DesksManageComponent_ng_template_16_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, DesksManageComponent_ng_template_18_Template, 15, 10, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275conditionalCreate(20, DesksManageComponent_Conditional_20_Template, 4, 1, "div", 9);
    \u0275\u0275conditionalCreate(21, DesksManageComponent_Conditional_21_Template, 6, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_9_0;
    const name_template_r18 = \u0275\u0275reference(11);
    const item_list_template_r19 = \u0275\u0275reference(13);
    const bool_template_r20 = \u0275\u0275reference(15);
    const assigned_template_r21 = \u0275\u0275reference(17);
    const action_template_r22 = \u0275\u0275reference(19);
    \u0275\u0275advance();
    \u0275\u0275property("filter", (tmp_5_0 = \u0275\u0275pipeBind1(2, 7, ctx.filters)) == null ? null : tmp_5_0.search)("data", ctx.desks)("columns", \u0275\u0275pureFunction7(40, _c7, \u0275\u0275pureFunction2(23, _c0, \u0275\u0275pipeBind1(3, 9, "APP.CONCIERGE.DESKS_ID"), name_template_r18), \u0275\u0275pureFunction1(26, _c1, \u0275\u0275pipeBind1(4, 11, "APP.CONCIERGE.DESKS_NAME")), \u0275\u0275pureFunction1(28, _c2, assigned_template_r21), \u0275\u0275pureFunction2(30, _c3, \u0275\u0275pipeBind1(5, 13, "COMMON.FEATURES"), item_list_template_r19), \u0275\u0275pureFunction1(33, _c4, \u0275\u0275pipeBind1(6, 15, "APP.CONCIERGE.DESKS_SECURITY")), \u0275\u0275pureFunction2(35, _c5, \u0275\u0275pipeBind1(7, 17, "COMMON.BOOKABLE"), bool_template_r20), \u0275\u0275pureFunction1(38, _c6, action_template_r22)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(9, 21, ((tmp_9_0 = \u0275\u0275pipeBind1(8, 19, ctx.filters)) == null ? null : tmp_9_0.search) ? "APP.CONCIERGE.DESKS_MANAGE_SEARCH_EMPTY" : "APP.CONCIERGE.DESKS_MANAGE_EMPTY"));
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx.loading ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dragging ? 21 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  SimpleTableComponent,
  TranslatePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  CustomTooltipComponent,
  PrintableComponent,
  SafePipe
], encapsulation: 2 });
var DesksManageComponent = _DesksManageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksManageComponent, [{
    type: Component,
    args: [{ selector: "desks-manage", template: `
        <div
            class="h-full w-full overflow-auto px-8 pb-4"
            (dragenter)="handleDrag('enter', $event)"
            (window:dragend)="handleDrag('end', $event)"
        >
            <simple-table
                class="block w-full min-w-[72rem] text-sm"
                [filter]="(filters | async)?.search"
                [data]="desks"
                [columns]="[
                    {
                        key: 'id',
                        name: 'APP.CONCIERGE.DESKS_ID' | translate,
                        content: name_template,
                        size: '10rem',
                    },
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.DESKS_NAME' | translate,
                    },
                    {
                        key: 'assigned_to',
                        name: 'Assigned',
                        content: assigned_template,
                    },
                    {
                        key: 'features',
                        name: 'COMMON.FEATURES' | translate,
                        content: item_list_template,
                    },
                    {
                        key: 'security',
                        name: 'APP.CONCIERGE.DESKS_SECURITY' | translate,
                    },
                    {
                        key: 'bookable',
                        name: 'COMMON.BOOKABLE' | translate,
                        content: bool_template,
                        size: '5.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '8.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                [empty_message]="
                    ((filters | async)?.search
                        ? 'APP.CONCIERGE.DESKS_MANAGE_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.DESKS_MANAGE_EMPTY'
                    ) | translate
                "
            ></simple-table>
            <ng-template #name_template let-row="row">
                <button
                    class="flex flex-col px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.map_id || row.id)"
                >
                    <div>{{ row.id || row.map_id }}</div>
                    @if (row.id && row.map_id !== row.id) {
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.map_id }}
                        </div>
                    }
                </button>
            </ng-template>
            <ng-template #item_list_template let-data="data">
                <div class="flex flex-wrap p-2">
                    @for (item of data; track item) {
                        <span
                            class="m-1 rounded-2xl bg-info px-2 py-1 font-mono text-xs text-info-content"
                        >
                            {{ item }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #bool_template let-data="data">
                <div
                    [class.bg-error]="!data"
                    [class.bg-success]="data"
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl text-white"
                >
                    <icon>{{ data ? 'done' : 'close' }}</icon>
                </div>
            </ng-template>
            <ng-template #assigned_template let-row="row" let-data="data">
                @if (!data) {
                    <div class="p-4 opacity-30">
                        {{ 'APP.CONCIERGE.UNASSIGNED' | translate }}
                    </div>
                }
                @if (data) {
                    <button
                        class="px-4 py-2 text-left leading-tight"
                        (click)="copyToClipboard(data, 'assigned')"
                    >
                        <div class="">{{ row.assigned_name || data }}</div>
                        @if (row.assigned_name) {
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ data }}
                            </div>
                        }
                    </button>
                }
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="flex items-center justify-end space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [content]="qr_menu"
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_PRINT_QR' | translate
                        "
                        (click)="loadQrCode(row)"
                    >
                        <icon>qr_code</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_EDIT' | translate
                        "
                        (click)="editDesk(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_REMOVE' | translate
                        "
                        (click)="removeDesk(row)"
                    >
                        <icon class="text-error">delete</icon>
                    </button>
                    <ng-template #qr_menu>
                        <div class="rounded bg-base-100 py-2 shadow">
                            <div class="" printable [content]="print_content">
                                <ng-template #print_content>
                                    <a
                                        [href]="row.qr_link | safe: 'url'"
                                        target="_blank"
                                        ref="noopener noreferrer"
                                        class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                                    >
                                        <img class="w-48" [src]="row.qr_code" />
                                    </a>
                                    <div
                                        class="mx-4 mt-2 w-[calc(100%-2rem)] rounded bg-base-200 p-2 text-center font-mono text-sm"
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
                                {{
                                    'APP.CONCIERGE.DESKS_ACTION_PRINT_QR'
                                        | translate
                                }}
                            </button>
                        </div>
                    </ng-template>
                </div>
            </ng-template>
            @if (loading) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100 bg-opacity-60"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            }
            @if (dragging) {
                <div
                    class="absolute inset-0 flex items-center justify-center bg-neutral"
                >
                    <div class="rounded bg-base-100 p-4 shadow">
                        <div
                            class="flex h-64 w-64 flex-col items-center justify-center rounded border-4 border-dashed border-base-200"
                        >
                            {{
                                'APP.CONCIERGE.DESKS_DROP_TEMPLATE' | translate
                            }}
                        </div>
                    </div>
                    <input
                        type="file"
                        class="absolute inset-0 opacity-0"
                        (change)="loadCSVData($event)"
                    />
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      IconComponent,
      MatTooltipModule,
      CustomTooltipComponent,
      PrintableComponent,
      SafePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksManageComponent, { className: "DesksManageComponent", filePath: "apps/concierge/src/app/desks/desks-manage.component.ts", lineNumber: 260 });
})();

export {
  DesksManageComponent
};
//# sourceMappingURL=chunk-CD2FQOFA.js.map
