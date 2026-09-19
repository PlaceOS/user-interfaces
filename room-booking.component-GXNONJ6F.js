import {
  FeaturesFilterService
} from "./chunk-VXKDMFO3.js";
import {
  UserListFieldComponent
} from "./chunk-VT4XTIKQ.js";
import "./chunk-6EC3KSH6.js";
import "./chunk-FW5PNZU2.js";
import "./chunk-ZTFOPWGF.js";
import {
  DateFieldComponent,
  DurationFieldComponent,
  TimeFieldComponent
} from "./chunk-FUMP5DDX.js";
import "./chunk-PMRWEJYD.js";
import "./chunk-GN74NP2F.js";
import {
  EventFormService
} from "./chunk-2U2J2HMX.js";
import "./chunk-SSRGZ726.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-TSA6EGSI.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-LM3MAUUF.js";
import "./chunk-3LOCZFLB.js";
import {
  FormField
} from "./chunk-7P56JAGG.js";
import "./chunk-ANXYVNSQ.js";
import "./chunk-HNTQUXRO.js";
import "./chunk-AQHPGBQZ.js";
import {
  FormsModule,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  currentUser,
  ɵNgNoValidate
} from "./chunk-FAZQEBWK.js";
import {
  Component,
  DOCUMENT,
  Router,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-LEBJHAXW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/outlook-addin/src/app/rooms/room-booking.component.ts
var _c0 = () => ({ standalone: true });
function RoomBookingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275listener("ngSubmit", function RoomBookingComponent_Conditional_5_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.findSpace());
    });
    \u0275\u0275elementStart(1, "section", 6)(2, "div", 7)(3, "div", 8);
    \u0275\u0275text(4, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6, "Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10)(8, "div", 11)(9, "label");
    \u0275\u0275text(10, "Add Title");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 12);
    \u0275\u0275element(14, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "label");
    \u0275\u0275text(17, "Date");
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "a-date-field", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "label", 15);
    \u0275\u0275text(24, " Start Time");
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "a-time-field", 16);
    \u0275\u0275listener("ngModelChange", function RoomBookingComponent_Conditional_5_Template_a_time_field_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 11)(29, "label", 15);
    \u0275\u0275text(30, " End Time");
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "a-duration-field", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "section", 6)(35, "div", 7)(36, "div", 8);
    \u0275\u0275text(37, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 9);
    \u0275\u0275text(39, "Attendees");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 18)(41, "label");
    \u0275\u0275text(42, " Add Attendees ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a-user-list-field", 19);
    \u0275\u0275listener("download", function RoomBookingComponent_Conditional_5_Template_a_user_list_field_download_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "section", 20)(45, "button", 21);
    \u0275\u0275text(46, " Find room ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 22);
    \u0275\u0275listener("click", function RoomBookingComponent_Conditional_5_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearForm());
    });
    \u0275\u0275text(48, " Clear form ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const form_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("formField", form_r3.title);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("from", ctx_r1.min_date)("formField", form_r3.date);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(12, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("time", ctx_r1.model().date)("max", 10 * 60)("min", 60)("step", 60)("formField", form_r3.duration);
    \u0275\u0275control();
    \u0275\u0275advance(10);
    \u0275\u0275property("formField", form_r3.attendees)("custom_template", true);
    \u0275\u0275control();
  }
}
var RoomBookingComponent = class _RoomBookingComponent {
  constructor() {
    this._document = inject(DOCUMENT);
    this.router = inject(Router);
    this._state = inject(EventFormService);
    this._featuresFilterService = inject(FeaturesFilterService);
    this.min_date = Date.now();
    this.form = signal(
      this._state.form,
      ...ngDevMode ? [{ debugName: "form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = this._state.model;
    this.clearForm = () => {
      this._state.clearForm();
    };
  }
  ngOnInit() {
    this._state.newForm();
    this.form.set(this._state.form);
    this._featuresFilterService.clearFilter();
  }
  async findSpace() {
    const form = this.form() || this._state.form;
    if (form && !this.form())
      this.form.set(form);
    if (!form)
      return;
    form().markAsTouched();
    if (!this.model().host)
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { host: currentUser()?.email }));
    if (!form().valid())
      return;
    await this._state.storeForm();
    this.router.navigate(["/schedule/view"]);
  }
  downloadTemplate() {
    window.open("assets/template.csv");
  }
  static {
    this.\u0275fac = function RoomBookingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomBookingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingComponent, selectors: [["room-booking"]], decls: 6, vars: 1, consts: [[1, "bg-base-200", "absolute", "inset-0", "overflow-auto"], [1, "border-base-300", "bg-base-100", "mx-auto", "min-h-full", "w-160", "max-w-full", "border-x", "pt-2"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "mb-2", "flex", "h-14", "w-full", "max-w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium", "capitalize"], [1, "divide-base-200", "divide-y"], [1, "divide-base-200", "divide-y", 3, "ngSubmit"], [1, "px-4", "py-2"], [1, "my-2", "flex", "space-x-4"], [1, "bg-base-200", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full"], [1, "text-lg", "font-medium"], [1, "flex", "flex-col", "sm:flex-row", "sm:space-x-2"], [1, "w-full", "sm:flex-1"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "e.g Team meeting", 3, "formField"], [3, "from", "formField"], [1, "mb-1", "text-sm", "font-bold"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "time", "max", "min", "step", "formField"], [1, "flex", "flex-col"], [3, "download", "formField", "custom_template"], [1, "bg-base-100", "sticky", "bottom-0", "flex", "flex-col", "items-center", "space-y-2", "px-4", "py-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], ["btn", "", "matRipple", "", "type", "submit", 1, "w-full", "sm:flex-1"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "w-full", "sm:flex-1", 3, "click"]], template: function RoomBookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Book Room");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(5, RoomBookingComponent_Conditional_5_Template, 49, 13, "form", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(5);
        \u0275\u0275conditional((tmp_0_0 = ctx.form()) ? 5 : -1, tmp_0_0);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      UserListFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      FormField,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingComponent, [{
    type: Component,
    args: [{ selector: "room-booking", template: `
        <div class="bg-base-200 absolute inset-0 overflow-auto">
            <div
                class="border-base-300 bg-base-100 mx-auto min-h-full w-160 max-w-full border-x pt-2"
            >
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">Book Room</h2>
                </header>
                @if (form(); as form) {
                    <form
                        class="divide-base-200 divide-y"
                        (ngSubmit)="findSpace()"
                    >
                        <section class="px-4 py-2">
                            <div class="my-2 flex space-x-4">
                                <div
                                    class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                >
                                    1
                                </div>
                                <div class="text-lg font-medium">Details</div>
                            </div>
                            <div class="flex flex-col sm:flex-row sm:space-x-2">
                                <div class="w-full sm:flex-1">
                                    <label>Add Title<span>*</span></label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            placeholder="e.g Team meeting"
                                            [formField]="form.title"
                                        />
                                    </mat-form-field>
                                </div>
                                <div class="w-full sm:flex-1">
                                    <label>Date<span>*</span></label>
                                    <a-date-field
                                        [from]="min_date"
                                        [formField]="form.date"
                                    ></a-date-field>
                                </div>
                            </div>
                            <div class="flex flex-col sm:flex-row sm:space-x-2">
                                <div class="w-full sm:flex-1">
                                    <label class="mb-1 text-sm font-bold">
                                        Start Time<span>*</span>
                                    </label>
                                    <a-time-field
                                        [ngModel]="model().date"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                date: $event,
                                            }))
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                </div>
                                <div class="w-full sm:flex-1">
                                    <label class="mb-1 text-sm font-bold">
                                        End Time<span>*</span>
                                    </label>
                                    <a-duration-field
                                        [time]="model().date"
                                        [max]="10 * 60"
                                        [min]="60"
                                        [step]="60"
                                        [formField]="form.duration"
                                    ></a-duration-field>
                                </div>
                            </div>
                        </section>
                        <section class="px-4 py-2">
                            <div class="my-2 flex space-x-4">
                                <div
                                    class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                >
                                    2
                                </div>
                                <div class="text-lg font-medium">Attendees</div>
                            </div>
                            <div class="flex flex-col">
                                <label> Add Attendees </label>
                                <a-user-list-field
                                    [formField]="form.attendees"
                                    [custom_template]="true"
                                    (download)="downloadTemplate()"
                                ></a-user-list-field>
                            </div>
                        </section>
                        <section
                            class="bg-base-100 sticky bottom-0 flex flex-col items-center space-y-2 px-4 py-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                        >
                            <button
                                btn
                                matRipple
                                type="submit"
                                class="w-full sm:flex-1"
                            >
                                Find room
                            </button>
                            <button
                                btn
                                matRipple
                                type="button"
                                (click)="clearForm()"
                                class="inverse w-full sm:flex-1"
                            >
                                Clear form
                            </button>
                        </section>
                    </form>
                }
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      UserListFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingComponent, { className: "RoomBookingComponent", filePath: "apps/outlook-addin/src/app/rooms/room-booking.component.ts", lineNumber: 153 });
})();
export {
  RoomBookingComponent
};
//# debugId=a2a80f65-1a82-5bc6-a813-8592f5e15061
//# sourceMappingURL=room-booking.component-GXNONJ6F.js.map
