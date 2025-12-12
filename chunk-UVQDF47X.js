import {
  ParkingStateService
} from "./chunk-2HWJEQSK.js";
import {
  AsyncHandler,
  AsyncPipe,
  Clipboard,
  CommonModule,
  Component,
  IconComponent,
  MatProgressBar,
  MatProgressBarModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  SimpleTableComponent,
  TranslatePipe,
  combineLatest,
  i18n,
  inject,
  notifySuccess,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-B2WI2KLR.js";

// apps/concierge/src/app/parking/parking-space-list.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c2 = (a0) => ({ key: "notes", name: a0 });
var _c3 = (a0, a1) => ({ key: "status", name: a0, content: a1, sortable: false, size: "4.5rem" });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.5rem" });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ParkingSpaceListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-warning", !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free")) && !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy")))("text-warning-content", !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free")) && !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy")))("bg-success", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free"))("text-success-content", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free"))("bg-error", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy"))("text-error-content", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy"));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 14, ctx_r1.statusTooltip(ctx_r1.space_status[row_r1.id])));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("assigned")) ? "person" : (ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("reuse")) ? "event_available" : "question_mark", " ");
  }
}
function ParkingSpaceListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_10_Template_button_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(row_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const data_r5 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.map_id || row_r4.id, " ");
  }
}
function ParkingSpaceListComponent_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function ParkingSpaceListComponent_ng_template_12_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r7, " ");
  }
}
function ParkingSpaceListComponent_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_12_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const data_r7 = \u0275\u0275nextContext().data;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(data_r7, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingSpaceListComponent_ng_template_12_Conditional_1_Conditional_3_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const row_r9 = ctx_r7.row;
    const data_r7 = ctx_r7.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.assigned_name || data_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.assigned_name ? 3 : -1);
  }
}
function ParkingSpaceListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingSpaceListComponent_ng_template_12_Conditional_0_Template, 3, 3, "div", 13);
    \u0275\u0275conditionalCreate(1, ParkingSpaceListComponent_ng_template_12_Conditional_1_Template, 4, 2, "button", 14);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275conditional(!data_r7 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r7 ? 1 : -1);
  }
}
function ParkingSpaceListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_14_Template_button_click_1_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editSpace(row_r11));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_14_Template_button_click_5_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSpace(row_r11));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_SPACE_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.PARKING_SPACE_REMOVE"));
  }
}
var _ParkingSpaceListComponent = class _ParkingSpaceListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._clipboard = inject(Clipboard);
    this.spaces = this._state.spaces;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.bookings = this._state.bookings;
    this.space_status = {};
    this.editSpace = (s) => this._state.editSpace(s);
    this.removeSpace = (s) => this._state.removeSpace(s);
  }
  ngOnInit() {
    this.subscription("bookings", combineLatest([this.spaces, this.bookings]).subscribe(([spaces, bookings]) => this._updateStatusList(spaces, bookings)));
  }
  copyToClipboard(id, type) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n(type ? "APP.CONCIERGE.PARKING_COPIED_USER" : "APP.CONCIERGE.PARKING_COPIED_ID"));
  }
  statusTooltip(status) {
    switch (status) {
      case "assigned_free":
        return "APP.CONCIERGE.PARKING_STATUS_ASSIGNED_FREE";
      case "assigned_busy":
        return "APP.CONCIERGE.PARKING_STATUS_ASSIGNED_BUSY";
      case "reuse_busy":
        return "APP.CONCIERGE.PARKING_STATUS_ASSIGNED_OTHER";
      case "busy":
        return "APP.CONCIERGE.PARKING_STATUS_BUSY";
      case "free":
        return "APP.CONCIERGE.PARKING_STATUS_FREE";
    }
    return "APP.CONCIERGE.PARKING_STATUS_FREE";
  }
  _updateStatusList(spaces, bookings) {
    for (const space of spaces) {
      const booking = bookings.find((_) => _.asset_id === space.id && _.status !== "declined" && _.status !== "cancelled" && _.status !== "ended");
      if (space.assigned_to && !booking) {
        this.space_status[space.id] = "assigned_free";
      } else if (space.assigned_to && booking && booking.user_email === space.assigned_to) {
        this.space_status[space.id] = "assigned_busy";
      } else if (space.assigned_to && booking && booking.user_email !== space.assigned_to) {
        this.space_status[space.id] = "reuse_busy";
      } else if (!space.assigned_to && booking) {
        this.space_status[space.id] = "busy";
      } else {
        this.space_status[space.id] = "free";
      }
    }
  }
};
_ParkingSpaceListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingSpaceListComponent_BaseFactory;
  return function ParkingSpaceListComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingSpaceListComponent_BaseFactory || (\u0275ParkingSpaceListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingSpaceListComponent)))(__ngFactoryType__ || _ParkingSpaceListComponent);
  };
})();
_ParkingSpaceListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListComponent, selectors: [["parking-space-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 34, consts: [["status_template", ""], ["name_template", ""], ["assigned_template", ""], ["action_template", ""], [1, "h-full", "w-full", "overflow-auto", "px-8"], [1, "w-full"], [1, "block", "min-w-[52rem]", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], ["matTooltipPosition", "left", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", 3, "matTooltip"], [1, "text-2xl"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight"], [1, "mx-auto", "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function ParkingSpaceListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-progress-bar", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275element(3, "simple-table", 6);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, ParkingSpaceListComponent_ng_template_8_Template, 4, 16, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, ParkingSpaceListComponent_ng_template_10_Template, 5, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, ParkingSpaceListComponent_ng_template_12_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, ParkingSpaceListComponent_ng_template_14_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(16, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const status_template_r12 = \u0275\u0275reference(9);
    const name_template_r13 = \u0275\u0275reference(11);
    const assigned_template_r14 = \u0275\u0275reference(13);
    const action_template_r15 = \u0275\u0275reference(15);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !((tmp_4_0 = \u0275\u0275pipeBind1(2, 6, ctx.loading)) == null ? null : tmp_4_0.includes("spaces")));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.spaces)("columns", \u0275\u0275pureFunction5(28, _c5, \u0275\u0275pureFunction2(16, _c0, \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.PARKING_BAY"), name_template_r13), \u0275\u0275pureFunction1(19, _c1, assigned_template_r14), \u0275\u0275pureFunction1(21, _c2, \u0275\u0275pipeBind1(5, 10, "FORM.NOTES")), \u0275\u0275pureFunction2(23, _c3, \u0275\u0275pipeBind1(6, 12, "COMMON.STATUS"), status_template_r12), \u0275\u0275pureFunction1(26, _c4, action_template_r15)))("filter", (tmp_7_0 = \u0275\u0275pipeBind1(7, 14, ctx.options)) == null ? null : tmp_7_0.search)("sortable", true);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressBarModule,
  MatProgressBar,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  SimpleTableComponent,
  TranslatePipe
], encapsulation: 2 });
var ParkingSpaceListComponent = _ParkingSpaceListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceListComponent, [{
    type: Component,
    args: [{ selector: "parking-space-list", template: `
        <div class="h-full w-full overflow-auto px-8">
            <mat-progress-bar
                [class.opacity-0]="!(loading | async)?.includes('spaces')"
                class="w-full"
            />
            <simple-table
                class="block min-w-[52rem] text-sm"
                [data]="spaces"
                [columns]="[
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.PARKING_BAY' | translate,
                        content: name_template,
                    },
                    {
                        key: 'assigned_to',
                        name: 'Assigned',
                        content: assigned_template,
                    },
                    { key: 'notes', name: 'FORM.NOTES' | translate },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        sortable: false,
                        size: '4.5rem',
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
            <ng-template #status_template let-row="row">
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded"
                    [class.bg-warning]="
                        !space_status[row.id]?.includes('free') &&
                        !space_status[row.id]?.includes('busy')
                    "
                    [class.text-warning-content]="
                        !space_status[row.id]?.includes('free') &&
                        !space_status[row.id]?.includes('busy')
                    "
                    [class.bg-success]="space_status[row.id]?.includes('free')"
                    [class.text-success-content]="
                        space_status[row.id]?.includes('free')
                    "
                    [class.bg-error]="space_status[row.id]?.includes('busy')"
                    [class.text-error-content]="
                        space_status[row.id]?.includes('busy')
                    "
                    [matTooltip]="
                        statusTooltip(space_status[row.id]) | translate
                    "
                    matTooltipPosition="left"
                >
                    <icon class="text-2xl">
                        {{
                            space_status[row.id]?.includes('assigned')
                                ? 'person'
                                : space_status[row.id]?.includes('reuse')
                                  ? 'event_available'
                                  : 'question_mark'
                        }}
                    </icon>
                </div>
            </ng-template>
            <ng-template #name_template let-row="row" let-data="data">
                <button
                    class="px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.id)"
                >
                    <div class="">{{ data }}</div>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.map_id || row.id }}
                    </div>
                </button>
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
                <div class="mx-auto flex items-center space-x-2">
                    <button
                        icon
                        matRipple
                        (click)="editSpace(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_SPACE_EDIT' | translate
                        "
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="text-error"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_SPACE_REMOVE' | translate
                        "
                        (click)="removeSpace(row)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
            <div class="h-20 w-full"></div>
        </div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      SimpleTableComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListComponent, { className: "ParkingSpaceListComponent", filePath: "apps/concierge/src/app/parking/parking-space-list.component.ts", lineNumber: 163 });
})();

export {
  ParkingSpaceListComponent
};
//# sourceMappingURL=chunk-UVQDF47X.js.map
