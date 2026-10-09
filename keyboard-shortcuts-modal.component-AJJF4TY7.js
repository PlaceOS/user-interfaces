import {
  MatDialogClose,
  MatDialogModule
} from "./chunk-WP4XCCAC.js";
import {
  KEYBOARD_SHORTCUTS,
  SHORTCUTS_HELP_KEY,
  findShortcutTarget
} from "./chunk-4WXM473R.js";
import {
  TranslatePipe
} from "./chunk-EFTU3IDZ.js";
import {
  IconComponent
} from "./chunk-M7VTE6JY.js";
import "./chunk-IK7ASN6V.js";
import "./chunk-C4NBUX4Q.js";
import "./chunk-FMZCOJZN.js";
import {
  Component,
  DOCUMENT,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WOMJJ4WU.js";
import "./chunk-GOMI4DH3.js";

// apps/concierge/src/app/ui/keyboard-shortcuts-modal.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function KeyboardShortcutsModalComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "kbd", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275classProp("opacity-40", !item_r1.available);
    \u0275\u0275attribute("title", item_r1.available ? null : \u0275\u0275pipeBind1(1, 5, "APP.CONCIERGE.SHORTCUTS_UNAVAILABLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, item_r1.description), " ");
  }
}
var KeyboardShortcutsModalComponent = class _KeyboardShortcutsModalComponent {
  constructor() {
    this._document = inject(DOCUMENT);
    this.shortcuts = [
      ...KEYBOARD_SHORTCUTS.map((_) => ({
        label: _.label,
        description: _.description,
        available: !!findShortcutTarget(this._document, _.target)
      })),
      {
        label: SHORTCUTS_HELP_KEY,
        description: "APP.CONCIERGE.SHORTCUTS_HELP",
        available: true
      }
    ];
  }
  static {
    this.\u0275fac = function KeyboardShortcutsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KeyboardShortcutsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KeyboardShortcutsModalComponent, selectors: [["keyboard-shortcuts-modal"]], decls: 11, vars: 3, consts: [["icon", "", "mat-dialog-close", ""], [1, "w-md", "p-4"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "items-center", "gap-4", 3, "opacity-40"], [1, "flex", "items-center", "gap-4"], [1, "border-base-300", "bg-base-200", "min-w-8", "rounded-sm", "border", "px-2", "py-1", "text-center", "font-mono", "text-sm"], [1, "flex-1"]], template: function KeyboardShortcutsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 0)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 1)(8, "ul", 2);
        \u0275\u0275repeaterCreate(9, KeyboardShortcutsModalComponent_For_10_Template, 7, 9, "li", 3, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.SHORTCUTS_TITLE"));
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.shortcuts);
      }
    }, dependencies: [MatDialogModule, MatDialogClose, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyboardShortcutsModalComponent, [{
    type: Component,
    args: [{
      selector: "keyboard-shortcuts-modal",
      template: `
        <header>
            <h2>{{ 'APP.CONCIERGE.SHORTCUTS_TITLE' | translate }}</h2>
            <button icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="w-md p-4">
            <ul class="flex flex-col gap-2">
                @for (item of shortcuts; track item.label) {
                    <li
                        class="flex items-center gap-4"
                        [class.opacity-40]="!item.available"
                        [attr.title]="
                            item.available
                                ? null
                                : ('APP.CONCIERGE.SHORTCUTS_UNAVAILABLE'
                                  | translate)
                        "
                    >
                        <kbd
                            class="border-base-300 bg-base-200 min-w-8 rounded-sm border px-2 py-1 text-center font-mono text-sm"
                        >
                            {{ item.label }}
                        </kbd>
                        <span class="flex-1">
                            {{ item.description | translate }}
                        </span>
                    </li>
                }
            </ul>
        </main>
    `,
      imports: [MatDialogModule, IconComponent, TranslatePipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KeyboardShortcutsModalComponent, { className: "KeyboardShortcutsModalComponent", filePath: "apps/concierge/src/app/ui/keyboard-shortcuts-modal.component.ts", lineNumber: 49 });
})();
export {
  KeyboardShortcutsModalComponent
};
//# debugId=6898e873-919d-5914-958e-2c5b36b50d57
//# sourceMappingURL=keyboard-shortcuts-modal.component-AJJF4TY7.js.map
