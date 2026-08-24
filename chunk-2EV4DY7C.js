import {
  queryCalendars
} from "./chunk-7QGOG7L7.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-FSRZYXHY.js";
import {
  CommonModule,
  Component,
  FormsModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  StaffUser,
  User,
  computed,
  currentUser,
  forwardRef,
  resource,
  setClassMetadata,
  signal,
  unique,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-337ZWGBM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/form-fields/src/lib/host-select-field.component.ts
function HostSelectFieldComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 2)(1, "div", 3)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5, "\xA0|\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275property("value", user_r1?.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", user_r1?.email, " ");
  }
}
var HostSelectFieldComponent = class _HostSelectFieldComponent {
  constructor() {
    this.item = signal(
      null,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._calendars = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_calendars" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => true,
      loader: () => queryCalendars().catch(() => [])
    }));
    this.users = computed(
      () => {
        const list = this._calendars.value() ?? [];
        const mapped = list.filter((_) => _.can_edit).map((_) => _.primary ? currentUser() : { id: _.id, email: _.id, name: _.summary || _.id }).map((_) => new StaffUser(_));
        return unique([currentUser(), ...mapped], "email").sort((a, b) => a.name.localeCompare(b.name));
      },
      ...ngDevMode ? [{ debugName: "users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(email) {
    const users = this.users() || [];
    let item = users?.find((_) => _.email === email) || null;
    if (!item)
      item = new User({ email });
    this.item.set(item);
    if (this._onChange)
      this._onChange(item);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.item.set(value?.email ? value : currentUser());
  }
  static {
    this.\u0275fac = function HostSelectFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HostSelectFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HostSelectFieldComponent, selectors: [["host-select-field"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _HostSelectFieldComponent),
        multi: true
      }
    ])], decls: 6, vars: 3, consts: [["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "disabled", "placeholder"], [1, "leading-tight", 3, "value"], [1, "flex", "flex-col"], [1, "hidden"], [1, "text-xs", "opacity-60"]], template: function HostSelectFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-select", 1);
        \u0275\u0275listener("ngModelChange", function HostSelectFieldComponent_Template_mat_select_ngModelChange_1_listener($event) {
          return ctx.setValue($event);
        });
        \u0275\u0275repeaterCreate(2, HostSelectFieldComponent_For_3_Template, 8, 3, "mat-option", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(4, "mat-error");
        \u0275\u0275text(5, "Host is required");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.item()?.email)("disabled", ctx.disabled())("placeholder", ctx.item()?.email ? ctx.item()?.name || ctx.item()?.email : "Select host");
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.users());
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatError, MatSelectModule, MatSelect, MatOption, CommonModule, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HostSelectFieldComponent, [{
    type: Component,
    args: [{ selector: "host-select-field", template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [ngModel]="item()?.email"
                (ngModelChange)="setValue($event)"
                [disabled]="disabled()"
                [placeholder]="
                    item()?.email
                        ? item()?.name || item()?.email
                        : 'Select host'
                "
            >
                @for (user of users(); track user) {
                    <mat-option [value]="user?.email" class="leading-tight">
                        <div class="flex flex-col">
                            <div>{{ user.name }}</div>
                            <span class="hidden">&nbsp;|&nbsp;</span>
                            <div class="text-xs opacity-60">
                                {{ user?.email }}
                            </div>
                        </div>
                    </mat-option>
                }
            </mat-select>
            <mat-error>Host is required</mat-error>
        </mat-form-field>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => HostSelectFieldComponent),
        multi: true
      }
    ], imports: [MatFormFieldModule, MatSelectModule, CommonModule, FormsModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HostSelectFieldComponent, { className: "HostSelectFieldComponent", filePath: "libs/form-fields/src/lib/host-select-field.component.ts", lineNumber: 64 });
})();

export {
  HostSelectFieldComponent
};
//# sourceMappingURL=chunk-2EV4DY7C.js.map
