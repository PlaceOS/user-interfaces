import {
  CATEGORY_DISPLAY_NAMES,
  CATEGORY_ICONS,
  EventApprovalStateService,
  MOCK_APPROVAL_EVENTS
} from "./chunk-T7JIVCRG.js";
import {
  CommonModule,
  Component,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  addMinutes,
  format,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-35ORDZLP.js";

// apps/concierge/src/app/events/event-summary-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EventSummaryDialogComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "icon", 5);
    \u0275\u0275text(4, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Parent Event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275element(8, "div", 19);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-success", ctx_r0.getStatus(ctx_r0.parent_event.id) === "approved")("text-success", ctx_r0.getStatus(ctx_r0.parent_event.id) === "approved")("border-warning", ctx_r0.getStatus(ctx_r0.parent_event.id) === "pending")("text-warning", ctx_r0.getStatus(ctx_r0.parent_event.id) === "pending")("border-error", ctx_r0.getStatus(ctx_r0.parent_event.id) === "declined")("text-error", ctx_r0.getStatus(ctx_r0.parent_event.id) === "declined");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r0.getStatus(ctx_r0.parent_event.id) === "approved")("bg-warning", ctx_r0.getStatus(ctx_r0.parent_event.id) === "pending")("bg-error", ctx_r0.getStatus(ctx_r0.parent_event.id) === "declined");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getStatusLabel(ctx_r0.parent_event.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.parent_event.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.parent_event.location, " ");
  }
}
function EventSummaryDialogComponent_Conditional_38_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "icon", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "span", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275element(10, "div", 19);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const child_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.categoryIcon(child_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.categoryName(child_r2.category));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-success", ctx_r0.getStatus(child_r2.id) === "approved")("text-success", ctx_r0.getStatus(child_r2.id) === "approved")("border-warning", ctx_r0.getStatus(child_r2.id) === "pending")("text-warning", ctx_r0.getStatus(child_r2.id) === "pending")("border-error", ctx_r0.getStatus(child_r2.id) === "declined")("text-error", ctx_r0.getStatus(child_r2.id) === "declined");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r0.getStatus(child_r2.id) === "approved")("bg-warning", ctx_r0.getStatus(child_r2.id) === "pending")("bg-error", ctx_r0.getStatus(child_r2.id) === "declined");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getStatusLabel(child_r2.id));
  }
}
function EventSummaryDialogComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 20)(2, "icon", 5);
    \u0275\u0275text(3, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Related Services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275repeaterCreate(7, EventSummaryDialogComponent_Conditional_38_For_8_Template, 13, 22, "div", 22, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.child_events);
  }
}
var _EventSummaryDialogComponent = class _EventSummaryDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
    this._approval_state = inject(EventApprovalStateService);
  }
  get event() {
    return this.data.event;
  }
  get parent_event() {
    if (!this.event.parent_event)
      return null;
    return MOCK_APPROVAL_EVENTS.find((e) => e.id === this.event.parent_event) || null;
  }
  get child_events() {
    return MOCK_APPROVAL_EVENTS.filter((e) => e.parent_event === this.event.id);
  }
  getStatus(event_id) {
    return this._approval_state.status[event_id] || "pending";
  }
  getStatusLabel(event_id) {
    const status = this.getStatus(event_id);
    return status === "approved" ? "Approved" : status === "declined" ? "Declined" : "Pending";
  }
  categoryIcon(category) {
    return CATEGORY_ICONS[category] || "event";
  }
  categoryName(category) {
    return CATEGORY_DISPLAY_NAMES[category] || category;
  }
  formatDate(ts) {
    return format(ts, "EEEE, d MMMM yyyy");
  }
  formatTime(ts) {
    return format(ts, "h:mm a");
  }
  addMins(ts, mins) {
    return addMinutes(ts, mins).valueOf();
  }
};
_EventSummaryDialogComponent.\u0275fac = function EventSummaryDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventSummaryDialogComponent)();
};
_EventSummaryDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventSummaryDialogComponent, selectors: [["event-summary-dialog"]], decls: 39, vars: 30, consts: [[1, "w-[28rem]", "max-w-full"], [1, "flex", "items-start", "justify-between", "border-b", "border-base-300", "p-5"], [1, "text-lg", "font-semibold"], [1, "mt-1", "flex", "items-center", "space-x-2"], [1, "inline-flex", "items-center", "space-x-1", "rounded-full", "bg-base-200", "px-3", "py-0.5", "text-xs", "font-medium"], [1, "text-sm"], [1, "inline-flex", "items-center", "space-x-1", "rounded-full", "border", "px-2.5", "py-0.5", "text-xs", "font-medium"], [1, "h-2", "w-2", "rounded-full"], ["icon", "", "matRipple", "", 1, "h-8", "w-8", 3, "click"], [1, "text-xl"], [1, "space-y-4", "p-5"], [1, "flex", "items-start", "space-x-3"], [1, "mt-0.5", "text-lg", "opacity-50"], [1, "text-sm", "font-medium"], [1, "text-xs", "opacity-60"], [1, "rounded", "border", "border-base-300", "bg-base-200/50", "p-3"], [1, "mb-1", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-1", "text-xs", "font-medium", "opacity-60"], [1, "inline-flex", "items-center", "space-x-1", "rounded-full", "border", "px-2", "py-0.5", "text-xs", "font-medium"], [1, "h-1.5", "w-1.5", "rounded-full"], [1, "mb-2", "flex", "items-center", "space-x-1", "text-xs", "font-medium", "opacity-60"], [1, "space-y-1"], [1, "flex", "items-center", "justify-between", "rounded", "border", "border-base-300", "px-3", "py-2", "text-sm"], [1, "flex", "items-center", "space-x-2"], [1, "text-base", "opacity-50"], [1, "text-xs", "opacity-40"], [1, "flex", "items-center", "space-x-1", "rounded-full", "border", "px-2", "py-0.5", "text-xs", "font-medium"]], template: function EventSummaryDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h3", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "icon", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6);
    \u0275\u0275element(12, "div", 7);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "button", 8);
    \u0275\u0275listener("click", function EventSummaryDialogComponent_Template_button_click_15_listener() {
      return ctx.dialogRef.close();
    });
    \u0275\u0275elementStart(16, "icon", 9);
    \u0275\u0275text(17, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "icon", 12);
    \u0275\u0275text(21, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "div", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "icon", 12);
    \u0275\u0275text(29, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 5);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 11)(33, "icon", 12);
    \u0275\u0275text(34, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 5);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(37, EventSummaryDialogComponent_Conditional_37_Template, 15, 21, "div", 15);
    \u0275\u0275conditionalCreate(38, EventSummaryDialogComponent_Conditional_38_Template, 9, 0, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.event.title, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.categoryIcon(ctx.event.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.categoryName(ctx.event.category));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-success", ctx.getStatus(ctx.event.id) === "approved")("text-success", ctx.getStatus(ctx.event.id) === "approved")("border-warning", ctx.getStatus(ctx.event.id) === "pending")("text-warning", ctx.getStatus(ctx.event.id) === "pending")("border-error", ctx.getStatus(ctx.event.id) === "declined")("text-error", ctx.getStatus(ctx.event.id) === "declined");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx.getStatus(ctx.event.id) === "approved")("bg-warning", ctx.getStatus(ctx.event.id) === "pending")("bg-error", ctx.getStatus(ctx.event.id) === "declined");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.getStatusLabel(ctx.event.id));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx.formatDate(ctx.event.date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx.formatTime(ctx.event.date), " \u2013 ", ctx.formatTime(ctx.addMins(ctx.event.date, ctx.event.duration_minutes)), " (", ctx.event.duration_minutes, " min) ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.event.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.event.organiser);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.parent_event ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.child_events.length ? 38 : -1);
  }
}, dependencies: [
  CommonModule,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule
], encapsulation: 2 });
var EventSummaryDialogComponent = _EventSummaryDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventSummaryDialogComponent, [{
    type: Component,
    args: [{
      selector: "event-summary-dialog",
      template: `
        <div class="w-[28rem] max-w-full">
            <div
                class="flex items-start justify-between border-b border-base-300 p-5"
            >
                <div>
                    <h3 class="text-lg font-semibold">
                        {{ event.title }}
                    </h3>
                    <div class="mt-1 flex items-center space-x-2">
                        <div
                            class="inline-flex items-center space-x-1 rounded-full bg-base-200 px-3 py-0.5 text-xs font-medium"
                        >
                            <icon class="text-sm">{{
                                categoryIcon(event.category)
                            }}</icon>
                            <span>{{ categoryName(event.category) }}</span>
                        </div>
                        <div
                            class="inline-flex items-center space-x-1 rounded-full border px-2.5 py-0.5 text-xs font-medium"
                            [class.border-success]="getStatus(event.id) === 'approved'"
                            [class.text-success]="getStatus(event.id) === 'approved'"
                            [class.border-warning]="getStatus(event.id) === 'pending'"
                            [class.text-warning]="getStatus(event.id) === 'pending'"
                            [class.border-error]="getStatus(event.id) === 'declined'"
                            [class.text-error]="getStatus(event.id) === 'declined'"
                        >
                            <div
                                class="h-2 w-2 rounded-full"
                                [class.bg-success]="getStatus(event.id) === 'approved'"
                                [class.bg-warning]="getStatus(event.id) === 'pending'"
                                [class.bg-error]="getStatus(event.id) === 'declined'"
                            ></div>
                            <span>{{ getStatusLabel(event.id) }}</span>
                        </div>
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    class="h-8 w-8"
                    (click)="dialogRef.close()"
                >
                    <icon class="text-xl">close</icon>
                </button>
            </div>

            <div class="space-y-4 p-5">
                <div class="flex items-start space-x-3">
                    <icon class="mt-0.5 text-lg opacity-50">schedule</icon>
                    <div>
                        <div class="text-sm font-medium">
                            {{ formatDate(event.date) }}
                        </div>
                        <div class="text-xs opacity-60">
                            {{ formatTime(event.date) }} &ndash;
                            {{
                                formatTime(
                                    addMins(
                                        event.date,
                                        event.duration_minutes
                                    )
                                )
                            }}
                            ({{ event.duration_minutes }} min)
                        </div>
                    </div>
                </div>

                <div class="flex items-start space-x-3">
                    <icon class="mt-0.5 text-lg opacity-50"
                        >location_on</icon
                    >
                    <div class="text-sm">{{ event.location }}</div>
                </div>

                <div class="flex items-start space-x-3">
                    <icon class="mt-0.5 text-lg opacity-50">person</icon>
                    <div class="text-sm">{{ event.organiser }}</div>
                </div>

                @if (parent_event) {
                    <div
                        class="rounded border border-base-300 bg-base-200/50 p-3"
                    >
                        <div
                            class="mb-1 flex items-center justify-between"
                        >
                            <div class="flex items-center space-x-1 text-xs font-medium opacity-60">
                                <icon class="text-sm">link</icon>
                                <span>Parent Event</span>
                            </div>
                            <div
                                class="inline-flex items-center space-x-1 rounded-full border px-2 py-0.5 text-xs font-medium"
                                [class.border-success]="getStatus(parent_event.id) === 'approved'"
                                [class.text-success]="getStatus(parent_event.id) === 'approved'"
                                [class.border-warning]="getStatus(parent_event.id) === 'pending'"
                                [class.text-warning]="getStatus(parent_event.id) === 'pending'"
                                [class.border-error]="getStatus(parent_event.id) === 'declined'"
                                [class.text-error]="getStatus(parent_event.id) === 'declined'"
                            >
                                <div
                                    class="h-1.5 w-1.5 rounded-full"
                                    [class.bg-success]="getStatus(parent_event.id) === 'approved'"
                                    [class.bg-warning]="getStatus(parent_event.id) === 'pending'"
                                    [class.bg-error]="getStatus(parent_event.id) === 'declined'"
                                ></div>
                                <span>{{ getStatusLabel(parent_event.id) }}</span>
                            </div>
                        </div>
                        <div class="text-sm font-medium">
                            {{ parent_event.title }}
                        </div>
                        <div class="text-xs opacity-60">
                            {{ parent_event.location }}
                        </div>
                    </div>
                }

                @if (child_events.length) {
                    <div>
                        <div
                            class="mb-2 flex items-center space-x-1 text-xs font-medium opacity-60"
                        >
                            <icon class="text-sm">account_tree</icon>
                            <span>Related Services</span>
                        </div>
                        <div class="space-y-1">
                            @for (
                                child of child_events;
                                track child.id
                            ) {
                                <div
                                    class="flex items-center justify-between rounded border border-base-300 px-3 py-2 text-sm"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon
                                            class="text-base opacity-50"
                                            >{{
                                                categoryIcon(
                                                    child.category
                                                )
                                            }}</icon
                                        >
                                        <span>{{ child.title }}</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-xs opacity-40">{{
                                            categoryName(child.category)
                                        }}</span>
                                        <div
                                            class="flex items-center space-x-1 rounded-full border px-2 py-0.5 text-xs font-medium"
                                            [class.border-success]="getStatus(child.id) === 'approved'"
                                            [class.text-success]="getStatus(child.id) === 'approved'"
                                            [class.border-warning]="getStatus(child.id) === 'pending'"
                                            [class.text-warning]="getStatus(child.id) === 'pending'"
                                            [class.border-error]="getStatus(child.id) === 'declined'"
                                            [class.text-error]="getStatus(child.id) === 'declined'"
                                        >
                                            <div
                                                class="h-1.5 w-1.5 rounded-full"
                                                [class.bg-success]="getStatus(child.id) === 'approved'"
                                                [class.bg-warning]="getStatus(child.id) === 'pending'"
                                                [class.bg-error]="getStatus(child.id) === 'declined'"
                                            ></div>
                                            <span>{{ getStatusLabel(child.id) }}</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
      imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        MatDialogModule
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventSummaryDialogComponent, { className: "EventSummaryDialogComponent", filePath: "apps/concierge/src/app/events/event-summary-dialog.component.ts", lineNumber: 209 });
})();

export {
  EventSummaryDialogComponent
};
//# sourceMappingURL=chunk-IXQSCPAT.js.map
