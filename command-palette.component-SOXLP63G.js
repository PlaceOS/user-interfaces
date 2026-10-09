import {
  injectNavItems
} from "./chunk-PVSZGYWQ.js";
import {
  SignageMediaService
} from "./chunk-XR3JC4JO.js";
import "./chunk-MOQN4WV5.js";
import "./chunk-6LWHHSW4.js";
import "./chunk-FZRJJ3PO.js";
import "./chunk-A3ZHUTED.js";
import "./chunk-IAA4H3MD.js";
import "./chunk-76L3RQJV.js";
import {
  CommandPaletteService
} from "./chunk-AOUA7LSD.js";
import "./chunk-STYUKBG2.js";
import "./chunk-EW627VC3.js";
import "./chunk-NVC2MTBW.js";
import "./chunk-EMBZFGIE.js";
import "./chunk-RR6Z4IN7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-ARJ6GFJX.js";
import {
  MatDialogRef
} from "./chunk-B6VCLN4P.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import "./chunk-4BHMYMLA.js";
import "./chunk-HGUL5NVP.js";
import {
  Router
} from "./chunk-E72MB55H.js";
import "./chunk-DMUGOB3K.js";
import {
  IconComponent
} from "./chunk-PRJCR3BE.js";
import {
  i18n
} from "./chunk-UY3BZCXJ.js";
import "./chunk-7QGPCQM3.js";
import "./chunk-TQO6MZFG.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-C2I2ZQPH.js";
import "./chunk-ZJXU3LLP.js";
import {
  Component,
  ElementRef,
  computed,
  debounced,
  inject,
  linkedSignal,
  resource,
  setClassMetadata,
  signal,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6HUGPUMR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/shared/command-palette.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.kind;
var _forTrack1 = ($index, $item) => $item.key;
function CommandPaletteComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 4);
  }
}
function CommandPaletteComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, "SIGNAGE_MANAGER.PALETTE_RESULT_COUNT", \u0275\u0275pureFunction1(5, _c0, ctx_r0.results().length), ctx_r0.results().length), " ");
  }
}
function CommandPaletteComponent_For_13_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.detail, " ");
  }
}
function CommandPaletteComponent_For_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("mouseenter", function CommandPaletteComponent_For_13_For_4_Template_button_mouseenter_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.active_index.set(item_r3.index));
    })("click", function CommandPaletteComponent_For_13_For_4_Template_button_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      return \u0275\u0275resetView(item_r3.select());
    });
    \u0275\u0275elementStart(1, "icon", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CommandPaletteComponent_For_13_For_4_Conditional_6_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-base-200", item_r3.index === ctx_r0.active_index());
    \u0275\u0275property("id", ctx_r0.optionId(item_r3.index));
    \u0275\u0275attribute("aria-selected", item_r3.index === ctx_r0.active_index());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.detail ? 6 : -1);
  }
}
function CommandPaletteComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CommandPaletteComponent_For_13_For_4_Template, 7, 7, "button", 8, _forTrack1);
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, group_r4.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r4.items);
  }
}
function CommandPaletteComponent_ForEmpty_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.PALETTE_NO_RESULTS"), " ");
  }
}
function CommandPaletteComponent_ForEmpty_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CommandPaletteComponent_ForEmpty_14_Conditional_0_Template, 3, 3, "div", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.loading() ? 0 : -1);
  }
}
var PALETTE_KINDS = [
  "page",
  "display",
  "playlist",
  "template",
  "zone",
  "media"
];
var KIND_LABELS = {
  page: "SIGNAGE_MANAGER.PALETTE_PAGES",
  display: "SIGNAGE_MANAGER.NAV_DISPLAYS",
  playlist: "SIGNAGE_MANAGER.NAV_PLAYLISTS",
  template: "SIGNAGE_MANAGER.NAV_TEMPLATES",
  zone: "SIGNAGE_MANAGER.NAV_ZONES",
  media: "SIGNAGE_MANAGER.NAV_MEDIA"
};
var CommandPaletteComponent = class _CommandPaletteComponent {
  constructor() {
    this._palette = inject(CommandPaletteService);
    this._media_service = inject(SignageMediaService);
    this._router = inject(Router);
    this._dialog_ref = inject(MatDialogRef);
    this._element = inject(ElementRef);
    this._nav_items = injectNavItems();
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_debounced = debounced(this.search, 250);
    this._matches = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_matches" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ search: this._search_debounced.value() }),
      loader: ({ params }) => this._palette.searchAll(params.search)
    }));
    this.loading = computed(
      () => this._matches.isLoading() || this.search().trim() !== this._search_debounced.value().trim(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.results = computed(
      () => {
        const term = this.search().trim().toLowerCase();
        const pages = this._nav_items().map((item) => __spreadProps(__spreadValues({}, item), { label: i18n(item.label) })).filter((item) => !term || item.label.toLowerCase().includes(term)).map((item) => ({
          key: `page-${item.route}`,
          kind: "page",
          icon: item.icon,
          label: item.label,
          detail: "",
          select: () => this._open([item.route])
        }));
        const current = !!term && term === this._search_debounced.value().trim().toLowerCase();
        const matches = current ? this._matches.value() : void 0;
        if (!matches)
          return pages;
        return [
          ...pages,
          ...matches.displays.map((display) => ({
            key: `display-${display.id}`,
            kind: "display",
            icon: "tv",
            label: display.display_name || display.name,
            detail: display.description || "",
            select: () => this._open(["/displays", display.id])
          })),
          ...matches.playlists.map((playlist) => ({
            key: `playlist-${playlist.id}`,
            kind: "playlist",
            icon: "playlist_play",
            label: playlist.name,
            detail: playlist.description || "",
            select: () => this._open(["/playlists", playlist.id])
          })),
          ...matches.templates.map((template) => ({
            key: `template-${template.id}`,
            kind: "template",
            icon: "dashboard_customize",
            label: template.name,
            detail: template.description || "",
            select: () => this._open(["/templates", template.id])
          })),
          ...matches.zones.map((zone) => ({
            key: `zone-${zone.id}`,
            kind: "zone",
            icon: "layers",
            label: zone.display_name || zone.name,
            detail: zone.description || "",
            select: () => this._open(["/zones", zone.id])
          })),
          ...matches.media.map((media) => ({
            key: `media-${media.id}`,
            kind: "media",
            icon: "stock_media",
            label: media.name,
            detail: media.description || "",
            select: () => {
              this._dialog_ref.close();
              void this._media_service.previewMedia(media);
            }
          }))
        ];
      },
      ...ngDevMode ? [{ debugName: "results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.groups = computed(
      () => {
        const indexed = this.results().map((item, index) => __spreadProps(__spreadValues({}, item), {
          index
        }));
        return PALETTE_KINDS.map((kind) => ({
          kind,
          label: KIND_LABELS[kind],
          items: indexed.filter((item) => item.kind === kind)
        })).filter((group) => group.items.length);
      },
      ...ngDevMode ? [{ debugName: "groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_index = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "active_index" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.results,
      computation: () => 0
    }));
  }
  optionId(index) {
    return `command-palette-option-${index}`;
  }
  onKeydown(event) {
    const count = this.results().length;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp": {
        event.preventDefault();
        if (!count)
          return;
        const step = event.key === "ArrowDown" ? 1 : -1;
        this.active_index.update((index) => (index + step + count) % count);
        this._element.nativeElement.querySelector(`#${this.optionId(this.active_index())}`)?.scrollIntoView({ block: "nearest" });
        return;
      }
      case "Enter":
        event.preventDefault();
        this.results()[this.active_index()]?.select();
        return;
    }
  }
  _open(route) {
    this._dialog_ref.close();
    void this._router.navigate(route, { queryParamsHandling: "merge" });
  }
  static {
    this.\u0275fac = function CommandPaletteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommandPaletteComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommandPaletteComponent, selectors: [["command-palette"]], decls: 15, vars: 15, consts: [[1, "flex", "max-h-[70vh]", "flex-col"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-2xl", "opacity-60"], ["role", "combobox", "aria-controls", "command-palette-results", 1, "min-w-0", "flex-1", "bg-transparent", "text-lg", "outline-none", 3, "input", "keydown", "placeholder", "value"], ["diameter", "20"], ["aria-live", "polite", 1, "sr-only"], ["id", "command-palette-results", "role", "listbox", 1, "min-h-0", "flex-1", "overflow-auto", "p-2"], ["role", "presentation", 1, "px-2", "pt-2", "pb-1", "text-xs", "font-medium", "opacity-60"], ["type", "button", "role", "option", "matRipple", "", "tabindex", "-1", 1, "flex", "w-full", "items-center", "gap-3", "rounded-lg", "px-2", "py-2", "text-left", 3, "id", "bg-base-200"], ["type", "button", "role", "option", "matRipple", "", "tabindex", "-1", 1, "flex", "w-full", "items-center", "gap-3", "rounded-lg", "px-2", "py-2", "text-left", 3, "mouseenter", "click", "id"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-60"], [1, "p-6", "text-center", "text-sm", "opacity-60"]], template: function CommandPaletteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "icon", 2);
        \u0275\u0275text(3, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 3);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("input", function CommandPaletteComponent_Template_input_input_4_listener($event) {
          return ctx.search.set($event.target.value);
        })("keydown", function CommandPaletteComponent_Template_input_keydown_4_listener($event) {
          return ctx.onKeydown($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, CommandPaletteComponent_Conditional_7_Template, 1, 0, "mat-spinner", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275conditionalCreate(9, CommandPaletteComponent_Conditional_9_Template, 2, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275repeaterCreate(12, CommandPaletteComponent_For_13_Template, 5, 3, null, null, _forTrack0, false, CommandPaletteComponent_ForEmpty_14_Template, 1, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 9, "SIGNAGE_MANAGER.PALETTE_SEARCH"))("value", ctx.search());
        \u0275\u0275attribute("aria-expanded", ctx.results().length > 0)("aria-activedescendant", ctx.results().length ? ctx.optionId(ctx.active_index()) : null)("aria-label", \u0275\u0275pipeBind1(6, 11, "SIGNAGE_MANAGER.PALETTE_SEARCH"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 13, "SIGNAGE_MANAGER.PALETTE_RESULTS"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.groups());
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandPaletteComponent, [{
    type: Component,
    args: [{
      selector: "command-palette",
      template: `
        <div class="flex max-h-[70vh] flex-col">
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <icon class="text-2xl opacity-60">search</icon>
                <input
                    class="min-w-0 flex-1 bg-transparent text-lg outline-none"
                    role="combobox"
                    aria-controls="command-palette-results"
                    [attr.aria-expanded]="results().length > 0"
                    [attr.aria-activedescendant]="
                        results().length ? optionId(active_index()) : null
                    "
                    [placeholder]="'SIGNAGE_MANAGER.PALETTE_SEARCH' | translate"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PALETTE_SEARCH' | translate
                    "
                    [value]="search()"
                    (input)="search.set($any($event.target).value)"
                    (keydown)="onKeydown($event)"
                />
                @if (loading()) {
                    <mat-spinner diameter="20" />
                }
            </div>
            <!-- Announces the result count to screen readers -->
            <div class="sr-only" aria-live="polite">
                @if (!loading()) {
                    {{
                        'SIGNAGE_MANAGER.PALETTE_RESULT_COUNT'
                            | translate
                                : { count: results().length }
                                : results().length
                    }}
                }
            </div>
            <div
                id="command-palette-results"
                role="listbox"
                class="min-h-0 flex-1 overflow-auto p-2"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.PALETTE_RESULTS' | translate
                "
            >
                @for (group of groups(); track group.kind) {
                    <div
                        class="px-2 pt-2 pb-1 text-xs font-medium opacity-60"
                        role="presentation"
                    >
                        {{ group.label | translate }}
                    </div>
                    @for (item of group.items; track item.key) {
                        <button
                            type="button"
                            role="option"
                            matRipple
                            tabindex="-1"
                            class="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left"
                            [id]="optionId(item.index)"
                            [class.bg-base-200]="item.index === active_index()"
                            [attr.aria-selected]="item.index === active_index()"
                            (mouseenter)="active_index.set(item.index)"
                            (click)="item.select()"
                        >
                            <icon class="shrink-0 text-xl opacity-60">{{
                                item.icon
                            }}</icon>
                            <div class="min-w-0 flex-1">
                                <div class="truncate">{{ item.label }}</div>
                                @if (item.detail) {
                                    <div class="truncate text-xs opacity-60">
                                        {{ item.detail }}
                                    </div>
                                }
                            </div>
                        </button>
                    }
                } @empty {
                    @if (!loading()) {
                        <div class="p-6 text-center text-sm opacity-60">
                            {{
                                'SIGNAGE_MANAGER.PALETTE_NO_RESULTS' | translate
                            }}
                        </div>
                    }
                }
            </div>
        </div>
    `,
      imports: [
        MatRippleModule,
        MatProgressSpinnerModule,
        IconComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommandPaletteComponent, { className: "CommandPaletteComponent", filePath: "apps/signage-manager/src/app/shared/command-palette.component.ts", lineNumber: 154 });
})();
export {
  CommandPaletteComponent,
  PALETTE_KINDS
};
//# debugId=0c0152b9-e22b-5b3e-9ce0-8bff775c4853
//# sourceMappingURL=command-palette.component-SOXLP63G.js.map
