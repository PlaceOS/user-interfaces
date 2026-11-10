import {
  TranslatePipe
} from "./chunk-XDLX3ZVO.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵreadContextLet,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-BKT2MDTY.js";

// apps/signage-manager/src/app/shared/playlist-status-badge.component.ts
function PlaylistStatusBadgeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const status_value_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(ctx_r0.badges[status_value_r2].colour);
    \u0275\u0275attribute("data-playlist-status", status_value_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, ctx_r0.badges[status_value_r2].label), " ");
  }
}
var BADGES = {
  disabled: {
    label: "COMMON.DISABLED",
    colour: "bg-warning text-warning-content"
  },
  expired: {
    label: "SIGNAGE_MANAGER.STATUS_EXPIRED",
    colour: "bg-error text-error-content"
  },
  pending: { label: "COMMON.PENDING", colour: "bg-info text-info-content" },
  awaiting_review: {
    label: "SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW",
    colour: "bg-warning text-warning-content"
  },
  awaiting_approval: {
    label: "COMMON.APPROVAL_REQUIRED",
    colour: "bg-base-300"
  }
};
var PlaylistStatusBadgeComponent = class _PlaylistStatusBadgeComponent {
  constructor() {
    this.status = input.required(
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.badges = BADGES;
  }
  static {
    this.\u0275fac = function PlaylistStatusBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistStatusBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistStatusBadgeComponent, selectors: [["playlist-status-badge"]], hostAttrs: [1, "contents"], inputs: { status: [1, "status"] }, decls: 2, vars: 2, consts: [[1, "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase", 3, "class"], [1, "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"]], template: function PlaylistStatusBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275conditionalCreate(1, PlaylistStatusBadgeComponent_Conditional_1_Template, 3, 6, "span", 0);
      }
      if (rf & 2) {
        const status_value_r3 = \u0275\u0275storeLet(ctx.status());
        \u0275\u0275advance();
        \u0275\u0275conditional(status_value_r3 ? 1 : -1);
      }
    }, dependencies: [TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistStatusBadgeComponent, [{
    type: Component,
    args: [{
      selector: "playlist-status-badge",
      imports: [TranslatePipe],
      template: `
        @let status_value = status();
        @if (status_value) {
            <span
                class="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                [class]="badges[status_value].colour"
                [attr.data-playlist-status]="status_value"
            >
                {{ badges[status_value].label | translate }}
            </span>
        }
    `,
      host: { class: "contents" }
    }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistStatusBadgeComponent, { className: "PlaylistStatusBadgeComponent", filePath: "apps/signage-manager/src/app/shared/playlist-status-badge.component.ts", lineNumber: 52 });
})();

export {
  PlaylistStatusBadgeComponent
};
//# debugId=d9b2c994-970f-5cf1-8d12-aa76837aa4c4
//# sourceMappingURL=chunk-IAK5P7UE.js.map
