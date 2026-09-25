import {
  CONFLICT_WINDOW_DAYS,
  SignageService
} from "./chunk-TK62XSGF.js";
import "./chunk-XASXFKEM.js";
import "./chunk-QAMSNMBO.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-TTI4PR6G.js";
import "./chunk-W4PNQNWS.js";
import "./chunk-KOTTAT56.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LHINQNJP.js";
import {
  TranslatePipe
} from "./chunk-3GHHB7C4.js";
import "./chunk-7X43NIYS.js";
import {
  RouterLink
} from "./chunk-MAKUHOJD.js";
import {
  Component,
  IconComponent,
  MatRipple,
  MatRippleModule,
  computed,
  format,
  inject,
  resource,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-56VJTSNA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/report/content-report.component.ts
var _c0 = (a0) => ({ days: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function ContentReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.REPORT_LOADING"), " ");
  }
}
function ContentReportComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.REPORT_ERROR"), " ");
  }
}
function ContentReportComponent_Conditional_15_For_2_Conditional_12_For_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r1.detail, " ");
  }
}
function ContentReportComponent_Conditional_15_For_2_Conditional_12_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ContentReportComponent_Conditional_15_For_2_Conditional_12_For_2_Conditional_1_Conditional_3_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", row_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r1.detail ? 3 : -1);
  }
}
function ContentReportComponent_Conditional_15_For_2_Conditional_12_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ContentReportComponent_Conditional_15_For_2_Conditional_12_For_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const row_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.preview(row_r1.media));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r1.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r1.detail, " ");
  }
}
function ContentReportComponent_Conditional_15_For_2_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275conditionalCreate(1, ContentReportComponent_Conditional_15_For_2_Conditional_12_For_2_Conditional_1_Template, 4, 3, "a", 19)(2, ContentReportComponent_Conditional_15_For_2_Conditional_12_For_2_Conditional_2_Template, 5, 2, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r1.route ? 1 : row_r1.media ? 2 : -1);
  }
}
function ContentReportComponent_Conditional_15_For_2_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", section_r4.rows.length - ctx_r2.max_rows, " ");
  }
}
function ContentReportComponent_Conditional_15_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 16);
    \u0275\u0275repeaterCreate(1, ContentReportComponent_Conditional_15_For_2_Conditional_12_For_2_Template, 3, 1, "li", null, _forTrack1);
    \u0275\u0275conditionalCreate(3, ContentReportComponent_Conditional_15_For_2_Conditional_12_Conditional_3_Template, 2, 1, "li", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.visibleRows(section_r4));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r4.rows.length > ctx_r2.max_rows ? 3 : -1);
  }
}
function ContentReportComponent_Conditional_15_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17)(1, "icon", 24);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.REPORT_ALL_CLEAR"), " ");
  }
}
function ContentReportComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "header", 11)(2, "icon", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ContentReportComponent_Conditional_15_For_2_Conditional_12_Template, 4, 1, "ul", 16)(13, ContentReportComponent_Conditional_15_For_2_Conditional_13_Template, 5, 3, "p", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-labelledby", "report-" + section_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275property("id", "report-" + section_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 13, section_r4.title), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-warning", section_r4.rows.length)("text-warning-content", section_r4.rows.length)("bg-base-200", !section_r4.rows.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r4.rows.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 15, section_r4.hint, \u0275\u0275pureFunction1(18, _c0, ctx_r2.window_days)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r4.rows.length ? 12 : 13);
  }
}
function ContentReportComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, ContentReportComponent_Conditional_15_For_2_Template, 14, 20, "section", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.sections());
  }
}
var MAX_ROWS = 50;
var ContentReportComponent = class _ContentReportComponent {
  constructor() {
    this._service = inject(SignageService);
    this.max_rows = MAX_ROWS;
    this.window_days = CONFLICT_WINDOW_DAYS;
    this.report = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "report" } : (
      /* istanbul ignore next */
      {}
    )), { loader: () => this._service.loadContentReport() }));
    this.sections = computed(
      () => {
        const report = this.report.value();
        if (!report)
          return [];
        return [
          {
            id: "conflicts",
            icon: "warning",
            title: "SIGNAGE_MANAGER.REPORT_CONFLICTS",
            hint: "SIGNAGE_MANAGER.REPORT_CONFLICTS_HINT",
            rows: report.conflicts.map((conflict) => ({
              key: `${conflict.display.id}-${conflict.playlists[0].id}-${conflict.playlists[1].id}`,
              label: `${conflict.playlists[0].name} \xB7 ${conflict.playlists[1].name}`,
              detail: `${conflict.display.display_name || conflict.display.name} \xB7 ${format(conflict.starts_at, "EEE d MMM, HH:mm")}`,
              route: ["/displays", conflict.display.id]
            }))
          },
          {
            id: "empty-displays",
            icon: "tv_off",
            title: "SIGNAGE_MANAGER.REPORT_EMPTY_DISPLAYS",
            hint: "SIGNAGE_MANAGER.REPORT_EMPTY_DISPLAYS_HINT",
            rows: report.empty_displays.map((display) => ({
              key: display.id,
              label: display.display_name || display.name,
              detail: display.description || "",
              route: ["/displays", display.id]
            }))
          },
          {
            id: "unassigned-playlists",
            icon: "playlist_remove",
            title: "SIGNAGE_MANAGER.REPORT_UNASSIGNED_PLAYLISTS",
            hint: "SIGNAGE_MANAGER.REPORT_UNASSIGNED_PLAYLISTS_HINT",
            rows: report.unassigned_playlists.map((playlist) => ({
              key: playlist.id,
              label: playlist.name,
              detail: playlist.description || "",
              route: ["/playlists", playlist.id]
            }))
          },
          {
            id: "expired-playlists",
            icon: "event_busy",
            title: "SIGNAGE_MANAGER.REPORT_EXPIRED_PLAYLISTS",
            hint: "SIGNAGE_MANAGER.REPORT_EXPIRED_PLAYLISTS_HINT",
            rows: report.expired_playlists.map((playlist) => ({
              key: playlist.id,
              label: playlist.name,
              detail: format((playlist.valid_until || 0) * 1e3, "d MMM yyyy"),
              route: ["/playlists", playlist.id]
            }))
          },
          {
            id: "expired-media",
            icon: "hide_image",
            title: "SIGNAGE_MANAGER.REPORT_EXPIRED_MEDIA",
            hint: "SIGNAGE_MANAGER.REPORT_EXPIRED_MEDIA_HINT",
            rows: report.expired_media.map(({ media, playlists }) => ({
              key: media.id,
              label: media.name,
              detail: playlists.map(({ name }) => name).join(", "),
              media
            }))
          }
        ];
      },
      ...ngDevMode ? [{ debugName: "sections" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  visibleRows(section) {
    return section.rows.slice(0, MAX_ROWS);
  }
  preview(media) {
    void this._service.previewMedia(media);
  }
  static {
    this.\u0275fac = function ContentReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContentReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentReportComponent, selectors: [["content-report"]], decls: 16, vars: 11, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "overflow-auto", "p-6"], [1, "mb-6", "flex", "items-start", "gap-4"], [1, "flex-1"], [1, "mb-1", "text-2xl"], [1, "text-base-content/60", "text-sm"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "disabled"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-3", "opacity-70"], [1, "border-error", "text-error", "rounded", "border", "p-3", "text-sm"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-2"], ["diameter", "32"], [1, "border-base-300", "min-w-0", "rounded-lg", "border"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-xl", "opacity-60"], [1, "min-w-0", "flex-1", "font-medium", 3, "id"], [1, "rounded-full", "px-2", "text-sm", "tabular-nums"], [1, "px-4", "pt-2", "text-xs", "opacity-60"], [1, "p-2"], [1, "flex", "items-center", "gap-2", "px-4", "py-3", "text-sm", "opacity-60"], [1, "px-2", "py-1.5", "text-xs", "opacity-60"], ["matRipple", "", "queryParamsHandling", "merge", 1, "hover:bg-base-200", "block", "rounded", "px-2", "py-1.5", 3, "routerLink"], ["type", "button", "matRipple", "", 1, "hover:bg-base-200", "block", "w-full", "rounded", "px-2", "py-1.5", "text-left"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-60"], ["type", "button", "matRipple", "", 1, "hover:bg-base-200", "block", "w-full", "rounded", "px-2", "py-1.5", "text-left", 3, "click"], [1, "text-success"]], template: function ContentReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275listener("click", function ContentReportComponent_Template_button_click_9_listener() {
          return ctx.report.reload();
        });
        \u0275\u0275elementStart(11, "icon");
        \u0275\u0275text(12, "refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(13, ContentReportComponent_Conditional_13_Template, 5, 3, "div", 6)(14, ContentReportComponent_Conditional_14_Template, 3, 3, "p", 7)(15, ContentReportComponent_Conditional_15_Template, 3, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "SIGNAGE_MANAGER.REPORT_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "SIGNAGE_MANAGER.REPORT_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.report.isLoading());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 9, "COMMON.REFRESH"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.report.isLoading() ? 13 : ctx.report.error() ? 14 : 15);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      RouterLink,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentReportComponent, [{
    type: Component,
    args: [{
      selector: "content-report",
      template: `
        <div class="absolute inset-0 flex flex-col overflow-auto p-6">
            <div class="mb-6 flex items-start gap-4">
                <div class="flex-1">
                    <h1 class="mb-1 text-2xl">
                        {{ 'SIGNAGE_MANAGER.REPORT_HEADER' | translate }}
                    </h1>
                    <p class="text-base-content/60 text-sm">
                        {{ 'SIGNAGE_MANAGER.REPORT_HINT' | translate }}
                    </p>
                </div>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [disabled]="report.isLoading()"
                    [attr.aria-label]="'COMMON.REFRESH' | translate"
                    (click)="report.reload()"
                >
                    <icon>refresh</icon>
                </button>
            </div>
            @if (report.isLoading()) {
                <div
                    class="flex flex-1 flex-col items-center justify-center gap-3 opacity-70"
                >
                    <mat-spinner diameter="32" />
                    <p>
                        {{ 'SIGNAGE_MANAGER.REPORT_LOADING' | translate }}
                    </p>
                </div>
            } @else if (report.error()) {
                <p class="border-error text-error rounded border p-3 text-sm">
                    {{ 'SIGNAGE_MANAGER.REPORT_ERROR' | translate }}
                </p>
            } @else {
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    @for (section of sections(); track section.id) {
                        <section
                            class="border-base-300 min-w-0 rounded-lg border"
                            [attr.aria-labelledby]="'report-' + section.id"
                        >
                            <header
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <icon class="text-xl opacity-60">{{
                                    section.icon
                                }}</icon>
                                <h2
                                    class="min-w-0 flex-1 font-medium"
                                    [id]="'report-' + section.id"
                                >
                                    {{ section.title | translate }}
                                </h2>
                                <span
                                    class="rounded-full px-2 text-sm tabular-nums"
                                    [class.bg-warning]="section.rows.length"
                                    [class.text-warning-content]="
                                        section.rows.length
                                    "
                                    [class.bg-base-200]="!section.rows.length"
                                >
                                    {{ section.rows.length }}
                                </span>
                            </header>
                            <p class="px-4 pt-2 text-xs opacity-60">
                                {{
                                    section.hint
                                        | translate: { days: window_days }
                                }}
                            </p>
                            @if (section.rows.length) {
                                <ul class="p-2">
                                    @for (
                                        row of visibleRows(section);
                                        track row.key
                                    ) {
                                        <li>
                                            @if (row.route) {
                                                <a
                                                    matRipple
                                                    class="hover:bg-base-200 block rounded px-2 py-1.5"
                                                    [routerLink]="row.route"
                                                    queryParamsHandling="merge"
                                                >
                                                    <div class="truncate">
                                                        {{ row.label }}
                                                    </div>
                                                    @if (row.detail) {
                                                        <div
                                                            class="truncate text-xs opacity-60"
                                                        >
                                                            {{ row.detail }}
                                                        </div>
                                                    }
                                                </a>
                                            } @else if (row.media) {
                                                <button
                                                    type="button"
                                                    matRipple
                                                    class="hover:bg-base-200 block w-full rounded px-2 py-1.5 text-left"
                                                    (click)="preview(row.media)"
                                                >
                                                    <div class="truncate">
                                                        {{ row.label }}
                                                    </div>
                                                    <div
                                                        class="truncate text-xs opacity-60"
                                                    >
                                                        {{ row.detail }}
                                                    </div>
                                                </button>
                                            }
                                        </li>
                                    }
                                    @if (section.rows.length > max_rows) {
                                        <li
                                            class="px-2 py-1.5 text-xs opacity-60"
                                        >
                                            +{{
                                                section.rows.length - max_rows
                                            }}
                                        </li>
                                    }
                                </ul>
                            } @else {
                                <p
                                    class="flex items-center gap-2 px-4 py-3 text-sm opacity-60"
                                >
                                    <icon class="text-success"
                                        >check_circle</icon
                                    >
                                    {{
                                        'SIGNAGE_MANAGER.REPORT_ALL_CLEAR'
                                            | translate
                                    }}
                                </p>
                            }
                        </section>
                    }
                </div>
            }
        </div>
    `,
      imports: [
        MatProgressSpinnerModule,
        MatRippleModule,
        RouterLink,
        IconComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentReportComponent, { className: "ContentReportComponent", filePath: "apps/signage-manager/src/app/report/content-report.component.ts", lineNumber: 192 });
})();
export {
  ContentReportComponent
};
//# debugId=c90dd614-26b5-5852-818e-a5855e64bf92
//# sourceMappingURL=content-report.component-4YNMZGC7.js.map
