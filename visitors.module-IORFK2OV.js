import {
  ParkingStateService
} from "./chunk-QMWCBLYI.js";
import {
  SearchbarComponent
} from "./chunk-D3SE7XF5.js";
import {
  VisitorInviteFormComponent,
  VisitorInviteSuccessComponent
} from "./chunk-N52OI5VK.js";
import {
  DateOptionsComponent
} from "./chunk-OK74H257.js";
import "./chunk-RLRWKTVS.js";
import {
  BookingFormService
} from "./chunk-322PMJ6Y.js";
import "./chunk-M7S62NTX.js";
import "./chunk-NRKN2AIT.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-YC55532I.js";
import "./chunk-KDJMFGPN.js";
import {
  UserLabelModalComponent,
  approveBooking,
  checkinBooking,
  queryBookings,
  rejectBooking,
  saveBooking,
  updateBooking,
  updateBookingInductionStatus
} from "./chunk-XM4GP554.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  BuildingPipe,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressBarModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterModule,
  SettingsService,
  SimpleTableComponent,
  TranslatePipe,
  User,
  addDays,
  catchError,
  combineLatest,
  debounceTime,
  downloadFile,
  filter,
  format,
  generateQRCode,
  getTimezoneOffsetString,
  getUnixTime,
  i18n,
  inject,
  jsonToCsv,
  lastValueFrom,
  map,
  nc,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CABWWIQI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// apps/concierge/src/app/visitors/visitor-induction-modal.component.ts
var _VisitorInductionModalComponent = class _VisitorInductionModalComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.agree = false;
  }
  get induction_details() {
    return this._settings.get("app.induction_details");
  }
  get is_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
};
_VisitorInductionModalComponent.\u0275fac = function VisitorInductionModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorInductionModalComponent)();
};
_VisitorInductionModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorInductionModalComponent, selectors: [["visitor-induction-modal"]], decls: 12, vars: 5, consts: [[1, "bg-base-100", "relative", "flex", "w-lg", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "my-4"], [1, "border-base-300", "max-h-[50vh]", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "p-4", "text-sm", "whitespace-pre-wrap", "opacity-60"], [1, "my-4", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "w-32", "underline", 3, "mat-dialog-close"], ["btn", "", "matRipple", "", 1, "w-32", 3, "disabled", "mat-dialog-close"]], template: function VisitorInductionModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, " Please read the induction information below before proceeding ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-checkbox", 3);
    \u0275\u0275twoWayListener("ngModelChange", function VisitorInductionModalComponent_Template_mat_checkbox_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.agree, $event) || (ctx.agree = $event);
      return $event;
    });
    \u0275\u0275text(6, " I agree ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275text(9, " Decline ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275text(11, " Accept ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.induction_details, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.agree);
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.agree)("mat-dialog-close", true);
  }
}, dependencies: [MatDialogModule, MatDialogClose, MatRippleModule, MatRipple, MatCheckboxModule, MatCheckbox, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
var VisitorInductionModalComponent = _VisitorInductionModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorInductionModalComponent, [{
    type: Component,
    args: [{ selector: "visitor-induction-modal", template: `
        <div
            class="bg-base-100 relative flex w-lg flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
        >
            <p class="my-4">
                Please read the induction information below before proceeding
            </p>
            <div
                class="border-base-300 max-h-[50vh] w-full overflow-x-hidden overflow-y-auto rounded-sm border p-4 text-sm whitespace-pre-wrap opacity-60"
            >
                {{ induction_details }}
            </div>
            <mat-checkbox [(ngModel)]="agree" class="my-4">
                I agree
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-2">
                <button
                    btn
                    matRipple
                    class="clear w-32 underline"
                    [mat-dialog-close]="false"
                >
                    Decline
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!agree"
                    [mat-dialog-close]="true"
                >
                    Accept
                </button>
            </div>
        </div>
    `, imports: [MatDialogModule, MatRippleModule, MatCheckboxModule, FormsModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorInductionModalComponent, { className: "VisitorInductionModalComponent", filePath: "apps/concierge/src/app/visitors/visitor-induction-modal.component.ts", lineNumber: 49 });
})();

// apps/concierge/src/app/visitors/visitor-notes-modal.component.ts
function VisitorNotesModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function VisitorNotesModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 2)(1, "mat-form-field", 5)(2, "textarea", 6);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function VisitorNotesModalComponent_Conditional_7_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notes);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.VISITORS_NOTES_HEADERS"));
  }
}
function VisitorNotesModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.VISITORS_NOTES_SAVING"));
  }
}
function VisitorNotesModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 8);
    \u0275\u0275listener("click", function VisitorNotesModalComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
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
var _VisitorNotesModalComponent = class _VisitorNotesModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.item = this._data.item;
    this.notes = this.item.extension_data?.notes || "";
    this.loading = "";
    const _data = this._data;
    this.item = _data.item;
  }
  async save() {
    this.loading = "Saving...";
    this._dialog_ref.disableClose = true;
    await updateBooking(this.item.id, __spreadProps(__spreadValues({}, this.item.toJSON()), {
      extension_data: __spreadProps(__spreadValues({}, this.item.extension_data), {
        notes: this.notes
      })
    })).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.VISITORS_NOTES_ERROR", { error: e }));
      this._dialog_ref.disableClose = false;
      this.loading = "";
      throw e;
    });
    this.loading = "";
    notifySuccess(i18n("APP.CONCIERGE.VISITORS_NOTES_SUCCESS"));
    this._dialog_ref.close();
  }
};
_VisitorNotesModalComponent.\u0275fac = function VisitorNotesModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorNotesModalComponent)();
};
_VisitorNotesModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorNotesModalComponent, selectors: [["visitor-notes-modal"]], decls: 10, vars: 7, consts: [[1, "bg-base-200", "ml-2", "rounded-sm", "px-2", "py-1", "text-sm", "font-medium"], ["icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-xl", "overflow-auto", "p-4"], ["loading", "", 1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "border-base-200", "flex", "justify-end", "space-x-2", "border-t", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 1, "h-[60vh]", "max-h-256", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function VisitorNotesModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 0);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, VisitorNotesModalComponent_Conditional_6_Template, 3, 0, "button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, VisitorNotesModalComponent_Conditional_7_Template, 4, 4, "main", 2)(8, VisitorNotesModalComponent_Conditional_8_Template, 5, 4, "div", 3);
    \u0275\u0275conditionalCreate(9, VisitorNotesModalComponent_Conditional_9_Template, 4, 3, "footer", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.VISITORS_NOTES_HEADERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.item == null ? null : ctx.item.asset_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 9 : -1);
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  IconComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var VisitorNotesModalComponent = _VisitorNotesModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorNotesModalComponent, [{
    type: Component,
    args: [{ selector: "visitor-notes-modal", template: `
        <header>
            <h2>
                {{ 'APP.CONCIERGE.VISITORS_NOTES_HEADERS' | translate }}
                <span
                    class="bg-base-200 ml-2 rounded-sm px-2 py-1 text-sm font-medium"
                >
                    {{ item?.asset_name }}
                </span>
            </h2>
            @if (!loading) {
                <button icon mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="max-h-[65vh] w-xl overflow-auto p-4">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <textarea
                        matInput
                        [(ngModel)]="notes"
                        class="h-[60vh] max-h-256 resize-none"
                        [placeholder]="
                            'APP.CONCIERGE.VISITORS_NOTES_HEADERS' | translate
                        "
                    ></textarea>
                </mat-form-field>
            </main>
        } @else {
            <div
                loading
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.VISITORS_NOTES_SAVING' | translate }}</p>
            </div>
        }
        @if (!loading) {
            <footer
                class="border-base-200 flex justify-end space-x-2 border-t p-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      IconComponent,
      FormsModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorNotesModalComponent, { className: "VisitorNotesModalComponent", filePath: "apps/concierge/src/app/visitors/visitor-notes-modal.component.ts", lineNumber: 81 });
})();

// apps/concierge/src/app/visitors/visitors-state.service.ts
var _VisitorsStateService = class _VisitorsStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._poll = new BehaviorSubject(0);
    this._filters = new BehaviorSubject({});
    this._search = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.bookings = combineLatest([
      this._org.active_building,
      this._filters,
      this._poll
    ]).pipe(filter(([building]) => !!building), debounceTime(150), switchMap(([bld, filters]) => {
      this._loading.next(true);
      const date = filters.date ? new Date(filters.date) : /* @__PURE__ */ new Date();
      const start = startOfDay(date);
      const end = addDays(start, filters.period || 1);
      return queryBookings({
        type: "visitor",
        period_start: getUnixTime(start),
        period_end: getUnixTime(end),
        zones: (filters.zones || []).join(",") || bld.id,
        include_checked_out: true,
        limit: 1e3
      }).pipe(catchError((_) => of([])));
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.filtered_bookings = combineLatest([
      this._search,
      this.bookings
    ]).pipe(map(([search, guest_list]) => {
      const filter2 = search.toLowerCase();
      const out = guest_list.filter((_) => _.asset_name?.toLowerCase().includes(filter2) || _.user_name?.toLowerCase().includes(filter2) || _.user_email?.toLowerCase().includes(filter2) || _.asset_id?.toLowerCase().includes(filter2)).sort((a, b) => a.date - b.date);
      return out;
    }));
  }
  get search() {
    return this._search.getValue();
  }
  get time_format() {
    return this._settings.time_format;
  }
  get is_induction_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  setSearchString(search) {
    this._search.next(search);
  }
  poll() {
    this._poll.next(Date.now());
  }
  startPolling(delay = 30 * 1e3) {
    this.interval("poll", () => this._poll.next(Date.now()), delay);
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  async setExt(guest, field, value) {
    const extension_data = __spreadValues({}, guest.extension_data);
    extension_data[field] = value;
    await updateBooking(guest.id, __spreadProps(__spreadValues({}, guest.toJSON()), {
      extension_data
    })).toPromise();
    this._poll.next(Date.now());
  }
  async approveVisitor(item) {
    const details = await openConfirmModal({
      title: "Approve Visitor",
      content: `Approve attendance of ${item.asset_name || item.asset_id} to their meeting?`,
      icon: { content: "event_available" }
    }, this._dialog);
    if (details.reason !== "done")
      return details.close();
    details.loading("Updating guest details");
    await approveBooking(item.id).toPromise().catch((e) => {
      notifyError(`Error approving visitor: ${e.message || e.error || e}`);
      details.close();
      throw e;
    });
    notifySuccess(`Successfully approved visitor`);
    this._poll.next(Date.now());
    details.close();
  }
  async declineVisitor(item) {
    const details = await openConfirmModal({
      title: "Decline Visitor",
      content: `Decline attendance of ${item.asset_name || item.asset_id} to their meeting?`,
      icon: { content: "event_available" }
    }, this._dialog);
    if (details.reason !== "done")
      return details.close();
    details.loading("Updating guest details");
    await rejectBooking(item.id).toPromise().catch((e) => {
      notifyError(`Error declining visitor: ${e.message || e.error || e}`);
      details.close();
      throw e;
    });
    notifySuccess(`Successfully declining visitor`);
    this._poll.next(Date.now());
    details.close();
  }
  async requestInduction(item) {
    if (!this.is_induction_enabled)
      return true;
    const ref = this._dialog.open(VisitorInductionModalComponent, {
      data: { item }
    });
    const result = await ref.afterClosed().toPromise();
    if (result === false) {
      await updateBookingInductionStatus(item.id, "declined").toPromise();
    }
    if (!result)
      throw "User declined";
    await updateBookingInductionStatus(item.id, "accepted").toPromise();
    return true;
  }
  async setCheckinState(item, state = true) {
    if (item.rejected)
      throw "You cannot check-in a rejected meeting";
    if (state === true)
      await this.requestInduction(item);
    if (!item.approved && state === true) {
      await approveBooking(item.id).toPromise();
    }
    const new_user = await checkinBooking(item.id, state).toPromise().catch((e) => {
      notifyError(`Error checking ${state ? "in" : "out"} ${item.asset_name || item.asset_id} for ${item.user_name}'s meeting`);
      throw e;
    });
    notifySuccess(`Successfully checked ${state ? "in" : "out"} ${item.asset_name || item.asset_id} from ${item.user_name}'s meeting`);
  }
  async setCheckinStateForEvent(event_id, state = true) {
    if (!event_id)
      return;
    const bookings = await nextValueFrom(this.bookings) || [];
    const event_bookings = bookings.filter((_) => _.parent_id === event_id || _.extension_data.parent_id === event_id || _.linked_event?.id === event_id || _.linked_event?.event_id === event_id);
    if (!event_bookings.length)
      return;
    await Promise.all(event_bookings.map((_) => checkinBooking(_.id, state).toPromise().catch((e) => {
      notifyError(`Error checking ${state ? "in" : "out"} ${_.asset_name || _.asset_id} for ${_.user_name}'s meeting`);
      throw e;
    })));
    notifySuccess(`Successfully checked ${state ? "in" : "out"} all visitors from ${event_bookings[0].user_name}'s meeting`);
    this._poll.next(Date.now());
  }
  async downloadVisitorsList() {
    const bookings = await nextValueFrom(this.filtered_bookings);
    if (!bookings.length)
      return;
    const { date } = this._filters.getValue();
    const list = bookings.map((_) => ({
      Name: _.asset_name,
      Email: _.asset_id,
      "Checked In": _.checked_in,
      Host: _.user_email || "",
      Status: _.status,
      Date: format(_.date, "dd MMM " + this.time_format)
    }));
    const data = jsonToCsv(list);
    downloadFile(`visitor-list-${format(date || Date.now(), "MMM-dd")}.csv`, data);
  }
  editVisitorNotes(item) {
    const ref = this._dialog.open(VisitorNotesModalComponent, {
      data: { item }
    });
    ref.afterClosed().subscribe(() => this.poll());
  }
  async emailVisitor(item) {
    const mod = this._org.module("visitor_access", "VisitorAccess");
    if (!mod)
      return;
    await mod.execute("grant_and_notify_access", [
      item.asset_id,
      item.asset_name,
      item.booked_by_email,
      item.title,
      item.booking_start
    ]);
    notifySuccess(i18n("APP.CONCIERGE.VISITOR_EMAIL_SUCCESS"));
  }
};
_VisitorsStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275VisitorsStateService_BaseFactory;
  return function VisitorsStateService_Factory(__ngFactoryType__) {
    return (\u0275VisitorsStateService_BaseFactory || (\u0275VisitorsStateService_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorsStateService)))(__ngFactoryType__ || _VisitorsStateService);
  };
})();
_VisitorsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VisitorsStateService, factory: _VisitorsStateService.\u0275fac, providedIn: "root" });
var VisitorsStateService = _VisitorsStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/visitors/guest-listing.component.ts
var _c0 = (a0, a1, a2) => ({ key: "state", name: a0, content: a1, size: "6.5rem", show: a2, sortable: false });
var _c1 = (a0, a1, a2) => ({ key: "date", name: a0, content: a1, show: a2, size: "6rem" });
var _c2 = (a0, a1) => ({ key: "asset_name", name: a0, content: a1 });
var _c3 = (a0, a1, a2) => ({ key: "user_name", name: a0, content: a1, show: a2 });
var _c4 = (a0, a1, a2) => ({ key: "checked_in_at", name: a0, content: a1, show: a2, size: "6rem" });
var _c5 = (a0, a1, a2) => ({ key: "checked_out_at", name: a0, content: a1, show: a2, size: "6rem" });
var _c6 = (a0, a1, a2) => ({ key: "induction", name: a0, content: a1, show: a2, size: "5.5rem" });
var _c7 = (a0, a1, a2) => ({ key: "pass_number", name: a0, content: a1, show: a2, size: "6rem" });
var _c8 = (a0, a1, a2) => ({ key: "parking_space", name: a0, content: a1, show: a2, size: "5.5rem" });
var _c9 = (a0, a1, a2) => ({ key: "status", name: a0, content: a1, show: a2, size: "9.5rem" });
var _c10 = (a0, a1, a2) => ({ key: "notes", name: a0, content: a1, show: a2, sortable: false, size: "4.5rem" });
var _c11 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.25rem", sortable: false });
var _c12 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11];
var _c13 = (a0) => ({ time: a0 });
function GuestListingComponent_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 5, "APP.CONCIERGE.VISITOR_STATUS_CHECKED_OUT", \u0275\u0275pureFunction1(8, _c13, \u0275\u0275pipeBind3(1, 1, row_r1.checked_out_at * 1e3, ctx_r1.time_format, ctx_r1.tz))));
  }
}
function GuestListingComponent_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "question_mark");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.VISITOR_STATUS_NOT_CHECKED_IN"));
  }
}
function GuestListingComponent_ng_template_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 5, "APP.CONCIERGE.VISITOR_STATUS_CHECKED_IN", \u0275\u0275pureFunction1(8, _c13, \u0275\u0275pipeBind3(1, 1, row_r1.checked_in_at * 1e3, ctx_r1.time_format, ctx_r1.tz))));
  }
}
function GuestListingComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GuestListingComponent_ng_template_12_Conditional_0_Template, 5, 10, "div", 19);
    \u0275\u0275conditionalCreate(1, GuestListingComponent_ng_template_12_Conditional_1_Template, 4, 3, "div", 20);
    \u0275\u0275conditionalCreate(2, GuestListingComponent_ng_template_12_Conditional_2_Template, 5, 10, "div", 21);
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275conditional(!(row_r1 == null ? null : row_r1.checked_in) && row_r1.checked_out_at ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r1 == null ? null : row_r1.checked_in) && !row_r1.checked_out_at ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r1 == null ? null : row_r1.checked_in) ? 2 : -1);
  }
}
function GuestListingComponent_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.asset_id, " ");
  }
}
function GuestListingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, GuestListingComponent_ng_template_14_Conditional_3_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.asset_name || row_r3.asset_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.asset_name && row_r3.asset_id ? 3 : -1);
  }
}
function GuestListingComponent_ng_template_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.user_email, " ");
  }
}
function GuestListingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, GuestListingComponent_ng_template_16_Conditional_3_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.user_name || row_r4.user_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.user_name && row_r4.user_email ? 3 : -1);
  }
}
function GuestListingComponent_ng_template_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (row_r5.extension_data == null ? null : row_r5.extension_data.id_confirmed) ? "Confirmed" : (row_r5.extension_data == null ? null : row_r5.extension_data.id_confirmed) === false ? "Rejected" : "Submitted", " ");
  }
}
function GuestListingComponent_ng_template_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementStart(2, "button", 28);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r5, "id_confirmed", true));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_ng_template_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r5, "id_confirmed", false));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275property("src", row_r5.extension_data == null ? null : row_r5.extension_data.id_data == null ? null : row_r5.extension_data.id_data.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "APP.CONCIERGE.VISITORS_ACTION_ID_APPROVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "APP.CONCIERGE.VISITORS_ACTION_ID_REJECT"), " ");
  }
}
function GuestListingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275conditionalCreate(1, GuestListingComponent_ng_template_18_Conditional_1_Template, 2, 1, "button", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, GuestListingComponent_ng_template_18_ng_template_2_Template, 8, 7, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const id_confirmation_r7 = \u0275\u0275reference(3);
    \u0275\u0275property("content", id_confirmation_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r5.extension_data == null ? null : row_r5.extension_data.id_data == null ? null : row_r5.extension_data.id_data.url) ? 1 : -1);
  }
}
function GuestListingComponent_ng_template_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function GuestListingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GuestListingComponent_ng_template_20_Conditional_0_Template, 3, 0, "div", 30);
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275conditional(row_r8.extension_data.parking_booking_id ? 0 : -1);
  }
}
function GuestListingComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275classProp("bg-success", data_r9 === "accepted")("text-success-content", data_r9 === "accepted")("bg-warning", data_r9 !== "accepted" && data_r9 !== "declined")("text-warning-content", data_r9 !== "accepted" && data_r9 !== "declined")("bg-error", data_r9 === "declined")("text-error-content", data_r9 === "declined");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r9 === "accepted" ? "done" : data_r9 === "declined" ? "close" : "question_mark", " ");
  }
}
function GuestListingComponent_ng_template_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 36);
    \u0275\u0275text(1, " arrow_drop_down ");
    \u0275\u0275elementEnd();
  }
}
function GuestListingComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33)(2, "div", 34)(3, "div", 35);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, GuestListingComponent_ng_template_24_Conditional_6_Template, 2, 0, "icon", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 13)(9, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_24_Template_button_click_9_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveVisitor(row_r11));
    });
    \u0275\u0275elementStart(10, "div", 38)(11, "icon", 36);
    \u0275\u0275text(12, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 39);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_24_Template_button_click_16_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.declineVisitor(row_r11));
    });
    \u0275\u0275elementStart(17, "div", 38)(18, "icon", 40);
    \u0275\u0275text(19, " event_busy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 39);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const menu_r12 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", (row_r11 == null ? null : row_r11.status) === "approved")("bg-success", (row_r11 == null ? null : row_r11.status) === "approved")("text-error-content", (row_r11 == null ? null : row_r11.status) === "declined")("bg-error", (row_r11 == null ? null : row_r11.status) === "declined")("text-neutral-content", (row_r11 == null ? null : row_r11.status) === "ended")("bg-neutral", (row_r11 == null ? null : row_r11.status) === "ended")("text-warning-content", (row_r11 == null ? null : row_r11.status) !== "ended" && (row_r11 == null ? null : row_r11.status) !== "approved" && (row_r11 == null ? null : row_r11.status) !== "declined")("bg-warning", (row_r11 == null ? null : row_r11.status) !== "ended" && (row_r11 == null ? null : row_r11.status) !== "approved" && (row_r11 == null ? null : row_r11.status) !== "declined")("opacity-30", (row_r11 == null ? null : row_r11.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r12)("disabled", (row_r11 == null ? null : row_r11.status) === "ended" || row_r11.checked_in && !row_r11.checked_out_at);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 24, (row_r11 == null ? null : row_r11.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r11 == null ? null : row_r11.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r11 == null ? null : row_r11.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((row_r11 == null ? null : row_r11.status) === "ended" || row_r11.checked_in && !row_r11.checked_out_at) ? 6 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 26, "APP.CONCIERGE.VISITORS_ACTION_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 28, "APP.CONCIERGE.VISITORS_ACTION_DECLINE"), " ");
  }
}
function GuestListingComponent_ng_template_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r13 = \u0275\u0275nextContext().data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, data_r13 * 1e3, "zzzz", ctx_r1.tz), " ");
  }
}
function GuestListingComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, GuestListingComponent_ng_template_26_Conditional_3_Template, 3, 5, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r13 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 2, data_r13 * 1e3, ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.timezone ? 3 : -1);
  }
}
function GuestListingComponent_ng_template_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "No Pass");
    \u0275\u0275elementEnd();
  }
}
function GuestListingComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, GuestListingComponent_ng_template_28_Conditional_2_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r14.extension_data.pass_number, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r14.extension_data.pass_number ? 2 : -1);
  }
}
function GuestListingComponent_ng_template_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, row_r15.date, "zzzz", ctx_r1.tz), " ");
  }
}
function GuestListingComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275conditionalCreate(4, GuestListingComponent_ng_template_30_Conditional_4_Template, 3, 5, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const row_r15 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 4, row_r15.date, ((tmp_14_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_14_0.period) > 1 ? "MMM d, " + ctx_r1.time_format : ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.timezone ? 4 : -1);
  }
}
function GuestListingComponent_ng_template_32_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reserveParking(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_PARKING"), " ");
  }
}
function GuestListingComponent_ng_template_32_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.emailVisitor(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, "attach_email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_EMAIL"), " ");
  }
}
function GuestListingComponent_ng_template_32_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    \u0275\u0275property("href", item_r20.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r20.name, " ");
  }
}
function GuestListingComponent_ng_template_32_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printVisitorPass(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_PRINT_PASS"), " ");
  }
}
function GuestListingComponent_ng_template_32_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pass_number.set(row_r17.extension_data.pass_number));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 15)(9, "div", 48);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Conditional_34_Template_div_click_9_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "mat-form-field", 49)(11, "input", 50);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function GuestListingComponent_ng_template_32_Conditional_34_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pass_number, $event) || (ctx_r1.pass_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 51);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Conditional_34_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPass(row_r17, ctx_r1.pass_number()));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pass_menu_r23 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", pass_menu_r23);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.VISITORS_ACTION_SET_PASS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pass_number);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 8, "BOOKINGS.PASS_NUMBER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.pass_number());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "COMMON.SAVE"), " ");
  }
}
function GuestListingComponent_ng_template_32_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(row_r17.checked_in ? ctx_r1.checkout(row_r17) : ctx_r1.checkin(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r17.checked_in ? "event_busy" : "event_available", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, row_r17.checked_in ? "APP.CONCIERGE.VISITORS_ACTION_CHECKOUT" : "APP.CONCIERGE.VISITORS_ACTION_CHECKIN"), " ");
  }
}
function GuestListingComponent_ng_template_32_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkinAllVisitors(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, " event_available ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Conditional_36_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r25);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkoutAllVisitors(row_r17));
    });
    \u0275\u0275elementStart(8, "div", 38)(9, "icon", 40);
    \u0275\u0275text(10, " event_busy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.CONCIERGE.VISITORS_ACTION_CHECKIN_ALL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 4, "APP.CONCIERGE.VISITORS_ACTION_CHECKOUT_ALL"), " ");
  }
}
function GuestListingComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 43)(2, "icon");
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 14)(6, "button", 44);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Template_button_click_6_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewAttachments(row_r17));
    });
    \u0275\u0275elementStart(7, "div", 38)(8, "icon", 36);
    \u0275\u0275text(9, "attachment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, GuestListingComponent_ng_template_32_Conditional_13_Template, 7, 3, "button", 45);
    \u0275\u0275conditionalCreate(14, GuestListingComponent_ng_template_32_Conditional_14_Template, 7, 3, "button", 45);
    \u0275\u0275elementStart(15, "mat-menu", null, 13);
    \u0275\u0275repeaterCreate(17, GuestListingComponent_ng_template_32_For_18_Template, 2, 2, "a", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Template_button_click_19_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r17, "remote", !row_r17.extension_data.remote));
    });
    \u0275\u0275elementStart(20, "div", 38)(21, "icon", 36);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(26, GuestListingComponent_ng_template_32_Conditional_26_Template, 7, 3, "button", 45);
    \u0275\u0275elementStart(27, "a", 46)(28, "div", 38)(29, "icon", 36);
    \u0275\u0275text(30, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(34, GuestListingComponent_ng_template_32_Conditional_34_Template, 16, 12);
    \u0275\u0275conditionalCreate(35, GuestListingComponent_ng_template_32_Conditional_35_Template, 7, 4, "button", 45);
    \u0275\u0275conditionalCreate(36, GuestListingComponent_ng_template_32_Conditional_36_Template, 14, 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r17 = ctx.row;
    const guest_menu_r26 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", guest_menu_r26);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !(row_r17.attachment == null ? null : row_r17.attachment.length));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "APP.CONCIERGE.VISITORS_ACTION_ATTACHMENTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_parking && !row_r17.extension_data.parking_booking_id ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_email_visitors ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(row_r17.attachments);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", row_r17.extension_data.remote ? "business" : "laptop", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 15, row_r17.extension_data.remote ? "APP.CONCIERGE.VISITORS_ACTION_ONSITE" : "APP.CONCIERGE.VISITORS_ACTION_REMOTE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_printing_label && row_r17.checked_in ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + (row_r17 == null ? null : row_r17.asset_id), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 17, (row_r17 == null ? null : row_r17.user_email) === (row_r17 == null ? null : row_r17.asset_id) ? "APP.CONCIERGE.VISITORS_ACTION_EMAIL_HOST" : "APP.CONCIERGE.VISITORS_ACTION_EMAIL_GUEST"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pass_number_enabled ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r17.checked_out_at ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r17.linked_event ? 36 : -1);
  }
}
function GuestListingComponent_ng_template_34_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 55);
    \u0275\u0275text(3, " info_i ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.VISITORS_NOTES_AVAILABLE"));
  }
}
function GuestListingComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "button", 53);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_34_Template_button_click_1_listener() {
      const row_r28 = \u0275\u0275restoreView(_r27).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editVisitorNotes(row_r28));
    });
    \u0275\u0275elementStart(3, "icon", 36);
    \u0275\u0275text(4, "edit_square");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, GuestListingComponent_ng_template_34_Conditional_5_Template, 4, 3, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r28 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.VISITORS_NOTES_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((row_r28.extension_data == null ? null : row_r28.extension_data.notes == null ? null : row_r28.extension_data.notes.length) ? 5 : -1);
  }
}
function GuestListingComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function GuestListingComponent_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadVisitorList());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.VISITORS_DOWNLOAD"));
  }
}
var _GuestListingComponent = class _GuestListingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(VisitorsStateService);
    this._parking = inject(ParkingStateService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.printing = signal("");
    this.guests = this._state.filtered_bookings;
    this.search = this._state.search;
    this.filters = this._state.filters;
    this.inductions_enabled = signal(false);
    this.qr_code = signal("");
    this.pass_number = signal("");
    this.user_pass = signal({});
    this.downloadVisitorList = () => this._state.downloadVisitorsList();
    this.approveVisitor = (u) => this._state.approveVisitor(u);
    this.declineVisitor = (u) => this._state.declineVisitor(u);
    this.checkinAllVisitors = (u) => this._state.setCheckinStateForEvent(u.linked_event?.id, true);
    this.checkoutAllVisitors = (u) => this._state.setCheckinStateForEvent(u.linked_event?.id, false);
    this.setExt = (u, f, v) => this._state.setExt(u, f, v);
    this.editVisitorNotes = (u) => this._state.editVisitorNotes(u);
    this.checkin = async (item) => {
      await this._state.setCheckinState(item, true).catch((e) => {
        if (e !== "User declined")
          notifyError(e);
      });
      this._state.poll();
    };
    this.checkout = async (item) => {
      await this._state.setCheckinState(item, false).catch((_) => null);
      this._state.poll();
    };
    this.emailVisitor = (item) => this._state.emailVisitor(item);
  }
  hide_field(id) {
    return (this._settings.get("app.visitors.hide_fields") || []).includes(id);
  }
  get extra_width() {
    const hide = this._settings.get("app.visitors.hide_fields") || [];
    return Math.max(0, 3 - hide.length) * 6;
  }
  get timezone() {
    const use_tz = this._settings.get("app.bookings.use_building_timezone");
    const bld_tz = this._org.building.timezone;
    return use_tz && bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone ? bld_tz : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  get allow_printing_label() {
    return this._settings.get("app.visitors.allow_printing_label") !== false;
  }
  get pass_number_enabled() {
    return this._settings.get("app.visitors.allow_pass_number") !== false;
  }
  get has_parking() {
    return this._settings.get("app.features")?.includes("parking") && this._settings.get("app.visitors.has_parking");
  }
  get can_email_visitors() {
    return !!this._org.module("visitor_access", "VisitorAccess");
  }
  get time_format() {
    return this._settings.time_format;
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
  printVisitorPass(item) {
    this.qr_code.set(generateQRCode(item.asset_id));
    this.printing.set(item.id);
    this.user_pass.set({
      name: item?.asset_name || item?.description,
      email: item?.asset_id,
      title: item?.title,
      host: item?.user_name || item.user_email,
      zones: item?.zones,
      date: item?.date || Date.now(),
      extra_details: item?.extension_data?.extra_details,
      pass_number: item?.extension_data?.pass_number,
      qr_code: this.qr_code()
    });
    const ref = this._dialog.open(UserLabelModalComponent, {
      data: this.user_pass()
    });
    ref.afterClosed().subscribe(() => this.printing.set(""));
  }
  inducted(item) {
    if (item.checked_in)
      return true;
    return item.induction == "declined" ? false : item.induction == "accepted" ? true : null;
  }
  ngOnInit() {
    this.subscription("building", this._org.active_building.subscribe(async (bld) => {
      if (!bld)
        return;
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      const metadata = await lastValueFrom(nc(bld.id, visitor_kiosk_app));
      const org_metadata = await lastValueFrom(nc(this._org.organisation.id, visitor_kiosk_app));
      const data = __spreadValues(__spreadValues({}, org_metadata.details || {}), metadata.details || {});
      this.inductions_enabled.set(data?.induction_enabled && data?.induction_details);
    }));
  }
  async reserveParking(item) {
    const id = await this._parking.editReservation(void 0, {
      parent_id: item.id,
      user: new User({ email: item.asset_id, name: item.asset_name }),
      link_id: item.id,
      date: item.date,
      external_user: true
    });
    if (!id)
      return;
    await lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues({}, item), { parking_booking_id: id }))));
    this._state.poll();
  }
  async setPass(row, pass = "") {
    if (!pass)
      return;
    await lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues({}, row), { pass_number: pass }))));
    this._state.poll();
    this.pass_number.set("");
    notifySuccess(i18n("APP.CONCIERGE.VISITORS_SAVED_PASS"));
  }
  viewAttachments(row) {
    if (row.attachment?.length) {
      window.open(row.attachment[0], "_blank");
    }
  }
};
_GuestListingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275GuestListingComponent_BaseFactory;
  return function GuestListingComponent_Factory(__ngFactoryType__) {
    return (\u0275GuestListingComponent_BaseFactory || (\u0275GuestListingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GuestListingComponent)))(__ngFactoryType__ || _GuestListingComponent);
  };
})();
_GuestListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuestListingComponent, selectors: [["guest-listings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 39, vars: 89, consts: [["state_template", ""], ["person_template", ""], ["host_template", ""], ["id_template", ""], ["parking_template", ""], ["induction_template", ""], ["status_template", ""], ["time_template", ""], ["pass_template", ""], ["date_template", ""], ["action_template", ""], ["notes_template", ""], ["id_confirmation", ""], ["menu", "matMenu"], ["guest_menu", "matMenu"], ["pass_menu", ""], [1, "z-0", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], ["matTooltipPosition", "left", "icon", "", "matRipple", "", 1, "bg-secondary", "absolute", "right-4", "bottom-4", "z-20", "h-12", "w-12", "text-white", "shadow-sm", "hover:shadow-lg", 3, "matTooltip"], [1, "h-8", "w-full"], ["matTooltipPosition", "right", 1, "bg-base-400", "text-neutral-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-warning", "text-warning-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], [1, "px-4", "py-2"], [1, "text-xs", "opacity-30"], ["customTooltip", "", 3, "content"], ["matRipple", "", 1, "bg-success", "rounded-3xl", "px-4", "py-2", "text-white"], [1, "bg-base-100", "my-2", "flex", "w-[20rem]", "flex-col", "space-y-2", "rounded-sm", "p-2"], [1, "max-h-80", "max-w-[20rem]", "object-contain", 3, "src"], ["matRipple", "", 3, "click"], ["matRipple", "", 1, "inverse", "mt-2", 3, "click"], [1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "px-4"], ["matRipple", "", 1, "h-10", "w-30", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "pl-4"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "text-error", "text-2xl"], [1, "opacity-30"], [1, "flex", "items-center", "justify-end", "px-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", "disabled"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "href"], ["mat-menu-item", "", 3, "click", "matMenuTriggerFor"], [1, "w-full", "space-y-2", "px-2", 3, "click"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click", "disabled"], [1, "relative", "mx-auto", "p-4"], ["matTooltipPosition", "left", "icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "bg-info", "text-info-content", "absolute", "top-1", "right-1", "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], ["className", "material-symbols-rounded", 1, "text-sm"], ["matTooltipPosition", "left", "icon", "", "matRipple", "", 1, "bg-secondary", "absolute", "right-4", "bottom-4", "z-20", "h-12", "w-12", "text-white", "shadow-sm", "hover:shadow-lg", 3, "click", "matTooltip"]], template: function GuestListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275template(12, GuestListingComponent_ng_template_12_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, GuestListingComponent_ng_template_14_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, GuestListingComponent_ng_template_16_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(18, GuestListingComponent_ng_template_18_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(20, GuestListingComponent_ng_template_20_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(22, GuestListingComponent_ng_template_22_Template, 3, 13, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(24, GuestListingComponent_ng_template_24_Template, 23, 30, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(26, GuestListingComponent_ng_template_26_Template, 4, 6, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(28, GuestListingComponent_ng_template_28_Template, 3, 2, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(30, GuestListingComponent_ng_template_30_Template, 5, 8, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(32, GuestListingComponent_ng_template_32_Template, 37, 19, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(34, GuestListingComponent_ng_template_34_Template, 6, 4, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275conditionalCreate(36, GuestListingComponent_Conditional_36_Template, 4, 3, "button", 17);
    \u0275\u0275pipe(37, "async");
    \u0275\u0275element(38, "div", 18);
  }
  if (rf & 2) {
    let tmp_17_0;
    const state_template_r30 = \u0275\u0275reference(13);
    const person_template_r31 = \u0275\u0275reference(15);
    const host_template_r32 = \u0275\u0275reference(17);
    const parking_template_r33 = \u0275\u0275reference(21);
    const induction_template_r34 = \u0275\u0275reference(23);
    const status_template_r35 = \u0275\u0275reference(25);
    const time_template_r36 = \u0275\u0275reference(27);
    const pass_template_r37 = \u0275\u0275reference(29);
    const date_template_r38 = \u0275\u0275reference(31);
    const action_template_r39 = \u0275\u0275reference(33);
    const notes_template_r40 = \u0275\u0275reference(35);
    \u0275\u0275styleProp("min-width", 68 + ctx.extra_width + "rem");
    \u0275\u0275property("data", ctx.guests)("columns", \u0275\u0275pureFunctionV(76, _c12, [\u0275\u0275pureFunction3(31, _c0, \u0275\u0275pipeBind1(1, 7, "COMMON.STATUS"), state_template_r30, !ctx.hide_field("state")), \u0275\u0275pureFunction3(35, _c1, \u0275\u0275pipeBind1(2, 9, "FORM.TIME"), date_template_r38, !ctx.hide_field("date")), \u0275\u0275pureFunction2(39, _c2, \u0275\u0275pipeBind1(3, 11, "RESOURCE.VISITOR"), person_template_r31), \u0275\u0275pureFunction3(42, _c3, \u0275\u0275pipeBind1(4, 13, "FORM.HOST"), host_template_r32, !ctx.hide_field("user_name")), \u0275\u0275pureFunction3(46, _c4, \u0275\u0275pipeBind1(5, 15, "COMMON.CHECKED_IN"), time_template_r36, !ctx.hide_field("checked_in_at")), \u0275\u0275pureFunction3(50, _c5, \u0275\u0275pipeBind1(6, 17, "COMMON.CHECKED_OUT"), time_template_r36, !ctx.hide_field("checked_out_at")), \u0275\u0275pureFunction3(54, _c6, \u0275\u0275pipeBind1(7, 19, "BOOKINGS.INDUCTED"), induction_template_r34, !!ctx.inductions_enabled()), \u0275\u0275pureFunction3(58, _c7, \u0275\u0275pipeBind1(8, 21, "BOOKINGS.PASS_NUMBER"), pass_template_r37, ctx.pass_number_enabled), \u0275\u0275pureFunction3(62, _c8, \u0275\u0275pipeBind1(9, 23, "RESOURCE.PARKING"), parking_template_r33, !!ctx.has_parking), \u0275\u0275pureFunction3(66, _c9, \u0275\u0275pipeBind1(10, 25, "COMMON.STATE"), status_template_r35, !ctx.hide_field("status")), \u0275\u0275pureFunction3(70, _c10, \u0275\u0275pipeBind1(11, 27, "FORM.NOTES"), notes_template_r40, !ctx.hide_field("notes")), \u0275\u0275pureFunction1(74, _c11, action_template_r39)]))("filter", ctx.search)("sortable", true);
    \u0275\u0275advance(36);
    \u0275\u0275conditional(((tmp_17_0 = \u0275\u0275pipeBind1(37, 29, ctx.guests)) == null ? null : tmp_17_0.length) ? 36 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  TranslatePipe,
  IconComponent,
  SimpleTableComponent,
  CustomTooltipComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var GuestListingComponent = _GuestListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GuestListingComponent, [{
    type: Component,
    args: [{ selector: "guest-listings", template: `
        <simple-table
            class="z-0 block text-sm"
            [style.min-width]="68 + extra_width + 'rem'"
            [data]="guests"
            [columns]="[
                {
                    key: 'state',
                    name: 'COMMON.STATUS' | translate,
                    content: state_template,
                    size: '6.5rem',
                    show: !hide_field('state'),
                    sortable: false,
                },
                {
                    key: 'date',
                    name: 'FORM.TIME' | translate,
                    content: date_template,
                    show: !hide_field('date'),
                    size: '6rem',
                },
                {
                    key: 'asset_name',
                    name: 'RESOURCE.VISITOR' | translate,
                    content: person_template,
                },
                {
                    key: 'user_name',
                    name: 'FORM.HOST' | translate,
                    content: host_template,
                    show: !hide_field('user_name'),
                },
                {
                    key: 'checked_in_at',
                    name: 'COMMON.CHECKED_IN' | translate,
                    content: time_template,
                    show: !hide_field('checked_in_at'),
                    size: '6rem',
                },
                {
                    key: 'checked_out_at',
                    name: 'COMMON.CHECKED_OUT' | translate,
                    content: time_template,
                    show: !hide_field('checked_out_at'),
                    size: '6rem',
                },
                {
                    key: 'induction',
                    name: 'BOOKINGS.INDUCTED' | translate,
                    content: induction_template,
                    show: !!inductions_enabled(),
                    size: '5.5rem',
                },
                {
                    key: 'pass_number',
                    name: 'BOOKINGS.PASS_NUMBER' | translate,
                    content: pass_template,
                    show: pass_number_enabled,
                    size: '6rem',
                },
                {
                    key: 'parking_space',
                    name: 'RESOURCE.PARKING' | translate,
                    content: parking_template,
                    show: !!has_parking,
                    size: '5.5rem',
                },
                {
                    key: 'status',
                    name: 'COMMON.STATE' | translate,
                    content: status_template,
                    show: !hide_field('status'),
                    size: '9.5rem',
                },
                {
                    key: 'notes',
                    name: 'FORM.NOTES' | translate,
                    content: notes_template,
                    show: !hide_field('notes'),
                    sortable: false,
                    size: '4.5rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    size: '3.25rem',
                    sortable: false,
                },
            ]"
            [filter]="search"
            [sortable]="true"
        />
        <ng-template #state_template let-row="row">
            @if (!row?.checked_in && row.checked_out_at) {
                <div
                    class="bg-base-400 text-neutral-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITOR_STATUS_CHECKED_OUT'
                            | translate
                                : {
                                      time:
                                          (row.checked_out_at * 1000
                                          | date: time_format : tz),
                                  }
                    "
                    matTooltipPosition="right"
                >
                    <icon>done</icon>
                </div>
            }
            @if (!row?.checked_in && !row.checked_out_at) {
                <div
                    class="bg-warning text-warning-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITOR_STATUS_NOT_CHECKED_IN'
                            | translate
                    "
                    matTooltipPosition="right"
                >
                    <icon>question_mark</icon>
                </div>
            }
            @if (row?.checked_in) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITOR_STATUS_CHECKED_IN'
                            | translate
                                : {
                                      time:
                                          (row.checked_in_at * 1000
                                          | date: time_format : tz),
                                  }
                    "
                    matTooltipPosition="right"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #person_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.asset_name || row.asset_id }}</div>
                @if (row.asset_name && row.asset_id) {
                    <div class="text-xs opacity-30">
                        {{ row.asset_id }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #host_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.user_name || row.user_email }}</div>
                @if (row.user_name && row.user_email) {
                    <div class="text-xs opacity-30">
                        {{ row.user_email }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #id_template let-row="row">
            <div customTooltip [content]="id_confirmation">
                @if (row.extension_data?.id_data?.url) {
                    <button
                        matRipple
                        class="bg-success rounded-3xl px-4 py-2 text-white"
                    >
                        {{
                            row.extension_data?.id_confirmed
                                ? 'Confirmed'
                                : row.extension_data?.id_confirmed === false
                                  ? 'Rejected'
                                  : 'Submitted'
                        }}
                    </button>
                }
            </div>
            <ng-template #id_confirmation>
                <div
                    class="bg-base-100 my-2 flex w-[20rem] flex-col space-y-2 rounded-sm p-2"
                >
                    <img
                        [src]="row.extension_data?.id_data?.url"
                        class="max-h-80 max-w-[20rem] object-contain"
                    />
                    <button
                        matRipple
                        (click)="setExt(row, 'id_confirmed', true)"
                    >
                        {{
                            'APP.CONCIERGE.VISITORS_ACTION_ID_APPROVE'
                                | translate
                        }}
                    </button>
                    <button
                        matRipple
                        class="inverse mt-2"
                        (click)="setExt(row, 'id_confirmed', false)"
                    >
                        {{
                            'APP.CONCIERGE.VISITORS_ACTION_ID_REJECT'
                                | translate
                        }}
                    </button>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #parking_template let-row="row">
            @if (row.extension_data.parking_booking_id) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #induction_template let-data="data">
            <div
                class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                [class.bg-success]="data === 'accepted'"
                [class.text-success-content]="data === 'accepted'"
                [class.bg-warning]="data !== 'accepted' && data !== 'declined'"
                [class.text-warning-content]="
                    data !== 'accepted' && data !== 'declined'
                "
                [class.bg-error]="data === 'declined'"
                [class.text-error-content]="data === 'declined'"
            >
                <icon>
                    {{
                        data === 'accepted'
                            ? 'done'
                            : data === 'declined'
                              ? 'close'
                              : 'question_mark'
                    }}
                </icon>
            </div>
        </ng-template>
        <ng-template #status_template let-row="row">
            <div class="px-4">
                <button
                    matRipple
                    class="h-10 w-30 rounded-3xl border-none"
                    [class.text-success-content]="row?.status === 'approved'"
                    [class.bg-success]="row?.status === 'approved'"
                    [class.text-error-content]="row?.status === 'declined'"
                    [class.bg-error]="row?.status === 'declined'"
                    [class.text-neutral-content]="row?.status === 'ended'"
                    [class.bg-neutral]="row?.status === 'ended'"
                    [class.text-warning-content]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.bg-warning]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.opacity-30]="row?.status === 'ended'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="
                        row?.status === 'ended' ||
                        (row.checked_in && !row.checked_out_at)
                    "
                >
                    <div class="flex items-center space-x-2 pr-2 pl-4">
                        <div class="flex-1 text-left">
                            {{
                                (row?.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                    : row?.status === 'approved'
                                      ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                      : row?.status === 'declined'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                        : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                ) | translate
                            }}
                        </div>
                        @if (
                            !(
                                row?.status === 'ended' ||
                                (row.checked_in && !row.checked_out_at)
                            )
                        ) {
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        }
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approveVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_APPROVE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="declineVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-error text-2xl"> event_busy </icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_DECLINE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #time_template let-data="data">
            <div class="px-4">
                {{ data * 1000 | date: time_format : tz }}
                @if (timezone) {
                    <span class="text-xs opacity-30">
                        {{ data * 1000 | date: 'zzzz' : tz }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #pass_template let-row="row">
            <div class="px-4">
                {{ row.extension_data.pass_number }}
                @if (!row.extension_data.pass_number) {
                    <span class="opacity-30">No Pass</span>
                }
            </div>
        </ng-template>
        <ng-template #date_template let-row="row">
            <div class="px-4">
                {{
                    row.date
                        | date
                            : ((filters | async)?.period > 1
                                  ? 'MMM d, ' + time_format
                                  : time_format)
                            : tz
                }}
                @if (timezone) {
                    <span class="text-xs opacity-30">
                        {{ row.date | date: 'zzzz' : tz }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end px-2">
                <button icon matRipple [matMenuTriggerFor]="guest_menu">
                    <icon>more_horiz</icon>
                </button>
                <mat-menu #guest_menu="matMenu">
                    <button
                        mat-menu-item
                        [disabled]="!row.attachment?.length"
                        (click)="viewAttachments(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">attachment</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VISITORS_ACTION_ATTACHMENTS'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    @if (
                        has_parking && !row.extension_data.parking_booking_id
                    ) {
                        <button mat-menu-item (click)="reserveParking(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">directions_car</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_PARKING'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    @if (can_email_visitors) {
                        <button mat-menu-item (click)="emailVisitor(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">attach_email</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_EMAIL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    <mat-menu #menu="matMenu">
                        @for (item of row.attachments; track item) {
                            <a [href]="item.url" mat-menu-item>
                                {{ item.name }}
                            </a>
                        }
                    </mat-menu>
                    <button
                        mat-menu-item
                        (click)="
                            setExt(row, 'remote', !row.extension_data.remote)
                        "
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">
                                {{
                                    row.extension_data.remote
                                        ? 'business'
                                        : 'laptop'
                                }}
                            </icon>
                            <div>
                                {{
                                    (row.extension_data.remote
                                        ? 'APP.CONCIERGE.VISITORS_ACTION_ONSITE'
                                        : 'APP.CONCIERGE.VISITORS_ACTION_REMOTE'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </button>
                    @if (allow_printing_label && row.checked_in) {
                        <button mat-menu-item (click)="printVisitorPass(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">badge</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_PRINT_PASS'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    <a mat-menu-item [href]="'mailto:' + row?.asset_id">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">email</icon>
                            <div>
                                {{
                                    (row?.user_email === row?.asset_id
                                        ? 'APP.CONCIERGE.VISITORS_ACTION_EMAIL_HOST'
                                        : 'APP.CONCIERGE.VISITORS_ACTION_EMAIL_GUEST'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </a>
                    @if (pass_number_enabled) {
                        <button
                            mat-menu-item
                            [matMenuTriggerFor]="pass_menu"
                            (click)="
                                pass_number.set(row.extension_data.pass_number)
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">badge</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_SET_PASS'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <mat-menu #pass_menu>
                            <div
                                class="w-full space-y-2 px-2"
                                (click)="$event.stopPropagation()"
                            >
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <input
                                        [(ngModel)]="pass_number"
                                        matInput
                                        [placeholder]="
                                            'BOOKINGS.PASS_NUMBER' | translate
                                        "
                                    />
                                </mat-form-field>
                                <button
                                    btn
                                    matRipple
                                    class="w-full"
                                    [disabled]="!pass_number()"
                                    (click)="setPass(row, pass_number())"
                                >
                                    {{ 'COMMON.SAVE' | translate }}
                                </button>
                            </div>
                        </mat-menu>
                    }
                    @if (!row.checked_out_at) {
                        <button
                            mat-menu-item
                            (click)="
                                row.checked_in ? checkout(row) : checkin(row)
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">
                                    {{
                                        row.checked_in
                                            ? 'event_busy'
                                            : 'event_available'
                                    }}
                                </icon>
                                <div>
                                    {{
                                        (row.checked_in
                                            ? 'APP.CONCIERGE.VISITORS_ACTION_CHECKOUT'
                                            : 'APP.CONCIERGE.VISITORS_ACTION_CHECKIN'
                                        ) | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    @if (row.linked_event) {
                        <button mat-menu-item (click)="checkinAllVisitors(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl"> event_available </icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_CHECKIN_ALL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="checkoutAllVisitors(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-error text-2xl">
                                    event_busy
                                </icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_CHECKOUT_ALL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                </mat-menu>
            </div>
        </ng-template>
        <ng-template #notes_template let-row="row">
            <div class="relative mx-auto p-4">
                <button
                    [matTooltip]="
                        'APP.CONCIERGE.VISITORS_NOTES_EDIT' | translate
                    "
                    matTooltipPosition="left"
                    icon
                    matRipple
                    (click)="editVisitorNotes(row)"
                >
                    <icon class="text-2xl">edit_square</icon>
                </button>
                @if (row.extension_data?.notes?.length) {
                    <div
                        class="bg-info text-info-content absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full"
                        [matTooltip]="
                            'APP.CONCIERGE.VISITORS_NOTES_AVAILABLE' | translate
                        "
                    >
                        <icon
                            className="material-symbols-rounded"
                            class="text-sm"
                        >
                            info_i
                        </icon>
                    </div>
                }
            </div>
        </ng-template>
        @if ((guests | async)?.length) {
            <button
                class="bg-secondary absolute right-4 bottom-4 z-20 h-12 w-12 text-white shadow-sm hover:shadow-lg"
                [matTooltip]="'APP.CONCIERGE.VISITORS_DOWNLOAD' | translate"
                matTooltipPosition="left"
                icon
                matRipple
                (click)="downloadVisitorList()"
            >
                <icon>download</icon>
            </button>
        }
        <div class="h-8 w-full"></div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      MatTooltipModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      IconComponent,
      SimpleTableComponent,
      CustomTooltipComponent,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuestListingComponent, { className: "GuestListingComponent", filePath: "apps/concierge/src/app/visitors/guest-listing.component.ts", lineNumber: 661 });
})();

// apps/concierge/src/app/visitors/invite-visitor-modal.component.ts
function InviteVisitorModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "visitor-invite-form", 3);
    \u0275\u0275listener("done", function InviteVisitorModalComponent_Conditional_4_Template_visitor_invite_form_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.done.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("date", ctx_r1.date)("confirm", ctx_r1.post_time());
  }
}
function InviteVisitorModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "visitor-invite-success", 4);
    \u0275\u0275listener("done", function InviteVisitorModalComponent_Conditional_5_Template_visitor_invite_success_done_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    })("another", function InviteVisitorModalComponent_Conditional_5_Template_visitor_invite_success_another_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("last_count", ctx_r1.done());
  }
}
var _InviteVisitorModalComponent = class _InviteVisitorModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._form = inject(BookingFormService);
    this.loading = this._form.loading;
    this.date = this._data.date;
    this.done = signal(0);
    this.post_time = signal(0);
    this.post = () => this.post_time.set(Date.now());
    this.close = () => this._dialog_ref.close();
    this.reset = () => {
      this.post_time.set(0);
      this.done.set(0);
    };
  }
};
_InviteVisitorModalComponent.\u0275fac = function InviteVisitorModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InviteVisitorModalComponent)();
};
_InviteVisitorModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteVisitorModalComponent, selectors: [["invite-visitor-modal"]], decls: 6, vars: 11, consts: [[3, "confirm", "heading", "loading", "confirm_text", "hide_confirm"], [3, "date", "confirm"], [3, "last_count"], [3, "done", "date", "confirm"], [3, "done", "another", "last_count"]], template: function InviteVisitorModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("confirm", function InviteVisitorModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.post();
    });
    \u0275\u0275conditionalCreate(4, InviteVisitorModalComponent_Conditional_4_Template, 1, 2, "visitor-invite-form", 1)(5, InviteVisitorModalComponent_Conditional_5_Template, 1, 1, "visitor-invite-success", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 5, "BOOKINGS.VISITOR_INVITE_TITLE"))("loading", \u0275\u0275pipeBind1(2, 7, ctx.loading))("confirm_text", \u0275\u0275pipeBind1(3, 9, "BOOKINGS.VISITOR_SEND"))("hide_confirm", !!ctx.done());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.done() ? 4 : 5);
  }
}, dependencies: [
  AsyncPipe,
  TranslatePipe,
  VisitorInviteFormComponent,
  VisitorInviteSuccessComponent,
  FullscreenModalShellComponent
], encapsulation: 2 });
var InviteVisitorModalComponent = _InviteVisitorModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteVisitorModalComponent, [{
    type: Component,
    args: [{ selector: "invite-visitor-modal", template: `
        <fullscreen-modal-shell
            [heading]="'BOOKINGS.VISITOR_INVITE_TITLE' | translate"
            [loading]="loading | async"
            [confirm_text]="'BOOKINGS.VISITOR_SEND' | translate"
            [hide_confirm]="!!done()"
            (confirm)="post()"
        >
            @if (!done()) {
                <visitor-invite-form
                    [date]="date"
                    [confirm]="post_time()"
                    (done)="done.set($event)"
                ></visitor-invite-form>
            } @else {
                <visitor-invite-success
                    [last_count]="done()"
                    (done)="close()"
                    (another)="reset()"
                ></visitor-invite-success>
            }
        </fullscreen-modal-shell>
    `, imports: [
      AsyncPipe,
      TranslatePipe,
      VisitorInviteFormComponent,
      VisitorInviteSuccessComponent,
      FullscreenModalShellComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteVisitorModalComponent, { className: "InviteVisitorModalComponent", filePath: "apps/concierge/src/app/visitors/invite-visitor-modal.component.ts", lineNumber: 48 });
})();

// apps/concierge/src/app/visitors/visitors.component.ts
var _c02 = ["app-new-visitors", ""];
function VisitorsComponent_For_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_11_0.display_name, " ");
  }
}
function VisitorsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 15);
    \u0275\u0275conditionalCreate(2, VisitorsComponent_For_20_Conditional_2_Template, 5, 3, "div", 16);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function VisitorsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 14);
  }
}
var _VisitorsComponent = class _VisitorsComponent {
  constructor() {
    this._state = inject(VisitorsStateService);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.loading = this._state.loading;
    this.filters = this._state.filters;
    this.zones = [];
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (filters) => this._state.setFilters(filters);
    this.setSearch = (str) => this._state.setSearchString(str);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  async inviteVisitor() {
    this._dialog.open(InviteVisitorModalComponent, {
      data: {
        date: await nextValueFrom(this._state.filters.pipe(map((f) => f.date || Date.now())))
      }
    });
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
};
_VisitorsComponent.\u0275fac = function VisitorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsComponent)();
};
_VisitorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsComponent, selectors: [["", "app-new-visitors", ""]], attrs: _c02, decls: 28, vars: 17, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "flex", "items-center", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "dateChange"], [1, "mx-8", "h-1/2", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function VisitorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-topbar", 0);
    \u0275\u0275text(1, ">");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275element(3, "app-sidebar");
    \u0275\u0275elementStart(4, "main", 2)(5, "div", 3)(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "searchbar", 6);
    \u0275\u0275listener("modelChange", function VisitorsComponent_Template_searchbar_modelChange_10_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function VisitorsComponent_Template_button_click_11_listener() {
      return ctx.inviteVisitor();
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "mat-form-field", 9)(16, "mat-select", 10);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("ngModelChange", function VisitorsComponent_Template_mat_select_ngModelChange_16_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(19, VisitorsComponent_For_20_Template, 5, 3, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 5);
    \u0275\u0275elementStart(23, "date-options", 12);
    \u0275\u0275listener("dateChange", function VisitorsComponent_Template_date_options_dateChange_23_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275element(25, "guest-listings");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, VisitorsComponent_Conditional_26_Template, 1, 0, "mat-progress-bar", 14);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "RESOURCE.VISITORS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "BOOKINGS.VISITOR_INVITE_TITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(17, 9, ctx.filters)) == null ? null : tmp_2_0.zones)("placeholder", \u0275\u0275pipeBind1(18, 11, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 13, ctx.levels));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(27, 15, ctx.loading) ? 26 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressBarModule,
  MatProgressBar,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  DateOptionsComponent,
  GuestListingComponent,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  SearchbarComponent,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  TranslatePipe,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=visitors.component.css.map */"] });
var VisitorsComponent = _VisitorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsComponent, [{
    type: Component,
    args: [{ selector: "[app-new-visitors]", template: `
        <app-topbar class="print:hidden">></app-topbar>
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex items-center space-x-2 px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{ 'RESOURCE.VISITORS' | translate }}
                    </h2>
                    <div class="w-2 flex-1"></div>
                    <searchbar
                        class="mr-2"
                        (modelChange)="setSearch($event)"
                    ></searchbar>
                    <button
                        btn
                        matRipple
                        class="w-40"
                        (click)="inviteVisitor()"
                    >
                        {{ 'BOOKINGS.VISITOR_INVITE_TITLE' | translate }}
                    </button>
                </div>
                <div class="flex items-center px-8 pb-4">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="(filters | async)?.zones"
                            (ngModelChange)="updateZones($event)"
                            [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            multiple
                        >
                            @for (level of levels | async; track level) {
                                <mat-option [value]="level.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region) {
                                            <div class="text-xs opacity-30">
                                                {{
                                                    (level.parent_id | building)
                                                        ?.display_name
                                                }}
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <div class="w-2 flex-1"></div>
                    <date-options (dateChange)="setDate($event)"></date-options>
                </div>
                <div class="mx-8 h-1/2 flex-1 overflow-auto">
                    <guest-listings></guest-listings>
                </div>
                @if (loading | async) {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatSelectModule,
      DateOptionsComponent,
      GuestListingComponent,
      FormsModule,
      MatRippleModule,
      SearchbarComponent,
      ApplicationSidebarComponent,
      ApplicationTopbarComponent,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/visitors/visitors.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=visitors.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsComponent, { className: "VisitorsComponent", filePath: "apps/concierge/src/app/visitors/visitors.component.ts", lineNumber: 128 });
})();

// apps/concierge/src/app/visitors/visitors.module.ts
var ROUTES = [{ path: "", component: VisitorsComponent }];
var _VisitorsModule = class _VisitorsModule {
};
_VisitorsModule.\u0275fac = function VisitorsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsModule)();
};
_VisitorsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitorsModule });
_VisitorsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [VisitorsComponent, RouterModule.forChild(ROUTES)] });
var VisitorsModule = _VisitorsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [VisitorsComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  VisitorsModule
};
//# sourceMappingURL=visitors.module-IORFK2OV.js.map
