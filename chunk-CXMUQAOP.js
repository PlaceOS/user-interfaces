import {
  ParkingStateService
} from "./chunk-2HWJEQSK.js";
import {
  AsyncPipe,
  BehaviorSubject,
  Clipboard,
  CommonModule,
  Component,
  IconComponent,
  MatProgressBar,
  MatProgressBarModule,
  MatTooltip,
  MatTooltipModule,
  SimpleTableComponent,
  TranslatePipe,
  i18n,
  inject,
  notifySuccess,
  setClassMetadata,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-B2WI2KLR.js";

// apps/concierge/src/app/parking/parking-users-list.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "car_color", name: a0 });
var _c2 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1 });
var _c3 = (a0) => ({ key: "notes", name: a0 });
var _c4 = (a0, a1) => ({ key: "deny", name: a0, size: "4.5rem", content: a1 });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.5rem" });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingUsersListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_9_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.email, " ");
  }
}
function ParkingUsersListComponent_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUsersListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingUsersListComponent_ng_template_11_Conditional_0_Template, 3, 0, "div", 11);
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275conditional(data_r5 ? 0 : -1);
  }
}
function ParkingUsersListComponent_ng_template_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingUsersListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingUsersListComponent_ng_template_13_Conditional_2_Template, 3, 3, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r6 ? 2 : -1);
  }
}
function ParkingUsersListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_15_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(row_r8));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_15_Template_button_click_5_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeUser(row_r8));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_USER_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.PARKING_USER_REMOVE"));
  }
}
var _ParkingUsersListComponent = class _ParkingUsersListComponent {
  constructor() {
    this._state = inject(ParkingStateService);
    this._clipboard = inject(Clipboard);
    this.options = this._state.options;
    this.loading = toSignal(this._state.loading);
    this.new_items = new BehaviorSubject([]);
    this.user_list = this._state.users;
    this.editUser = (u) => this._state.editUser(u);
    this.removeUser = (u) => this._state.removeUser(u);
  }
  copyToClipboard(id) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n("APP.CONCIERGE.PARKING_COPIED_USER"));
  }
};
_ParkingUsersListComponent.\u0275fac = function ParkingUsersListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingUsersListComponent)();
};
_ParkingUsersListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUsersListComponent, selectors: [["parking-users-list"]], decls: 18, vars: 40, consts: [["name_template", ""], ["denied_template", ""], ["plate_template", ""], ["action_template", ""], [1, "w-full"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-[68rem]", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "bg-error", "text-2xl", "text-error-content"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", 1, "text-error", 3, "click", "matTooltip"]], template: function ParkingUsersListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275element(2, "simple-table", 6);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ParkingUsersListComponent_ng_template_9_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, ParkingUsersListComponent_ng_template_11_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, ParkingUsersListComponent_ng_template_13_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, ParkingUsersListComponent_ng_template_15_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(17, "div", 7);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const name_template_r9 = \u0275\u0275reference(10);
    const denied_template_r10 = \u0275\u0275reference(12);
    const plate_template_r11 = \u0275\u0275reference(14);
    const action_template_r12 = \u0275\u0275reference(16);
    \u0275\u0275classProp("opacity-0", !((tmp_4_0 = ctx.loading()) == null ? null : tmp_4_0.includes("users")));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.user_list)("columns", \u0275\u0275pureFunction6(33, _c6, \u0275\u0275pureFunction2(18, _c0, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.PARKING_USER"), name_template_r9), \u0275\u0275pureFunction1(21, _c1, \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.PARKING_CAR_COLOUR")), \u0275\u0275pureFunction2(23, _c2, \u0275\u0275pipeBind1(5, 10, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r11), \u0275\u0275pureFunction1(26, _c3, \u0275\u0275pipeBind1(6, 12, "FORM.NOTES")), \u0275\u0275pureFunction2(28, _c4, \u0275\u0275pipeBind1(7, 14, "APP.CONCIERGE.PARKING_USER_DENY"), denied_template_r10), \u0275\u0275pureFunction1(31, _c5, action_template_r12)))("filter", (tmp_7_0 = \u0275\u0275pipeBind1(8, 16, ctx.options)) == null ? null : tmp_7_0.search)("sortable", true);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressBarModule,
  MatProgressBar,
  SimpleTableComponent,
  IconComponent,
  TranslatePipe,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ParkingUsersListComponent = _ParkingUsersListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingUsersListComponent, [{
    type: Component,
    args: [{ selector: "parking-users-list", template: `
        <mat-progress-bar
            [class.opacity-0]="!loading()?.includes('users')"
            class="w-full"
        />
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[68rem] text-sm"
                [data]="user_list"
                [columns]="[
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.PARKING_USER' | translate,
                        content: name_template,
                    },
                    {
                        key: 'car_color',
                        name: 'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate,
                    },
                    {
                        key: 'plate_number',
                        name: 'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                        content: plate_template,
                    },
                    { key: 'notes', name: 'FORM.NOTES' | translate },
                    {
                        key: 'deny',
                        name: 'APP.CONCIERGE.PARKING_USER_DENY' | translate,
                        size: '4.5rem',
                        content: denied_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        sortable: false,
                        size: '6.5rem',
                    },
                ]"
                [filter]="(options | async)?.search"
                [sortable]="true"
            />
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.email }}
                </div>
            </button>
        </ng-template>
        <ng-template #denied_template let-data="data">
            @if (data) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm bg-error text-2xl text-error-content"
                >
                    <icon>close</icon>
                </div>
            }
        </ng-template>
        <ng-template #plate_template let-data="data">
            <div class="p-4 font-mono text-sm uppercase">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center space-x-2">
                <button
                    icon
                    matRipple
                    (click)="editUser(row)"
                    [matTooltip]="'APP.CONCIERGE.PARKING_USER_EDIT' | translate"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    (click)="removeUser(row)"
                    class="text-error"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_USER_REMOVE' | translate
                    "
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
        <div class="h-20 w-full"></div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      SimpleTableComponent,
      IconComponent,
      TranslatePipe,
      SimpleTableComponent,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUsersListComponent, { className: "ParkingUsersListComponent", filePath: "apps/concierge/src/app/parking/parking-users-list.component.ts", lineNumber: 127 });
})();

export {
  ParkingUsersListComponent
};
//# sourceMappingURL=chunk-CXMUQAOP.js.map
