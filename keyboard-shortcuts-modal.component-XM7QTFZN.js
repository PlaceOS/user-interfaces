import {
  SettingsToggleComponent
} from "./chunk-YEGWJU2K.js";
import "./chunk-TW5QCAQQ.js";
import {
  MatDialogClose,
  MatDialogModule
} from "./chunk-2K5G7CFD.js";
import "./chunk-QWYXFXJS.js";
import "./chunk-RIENTTXY.js";
import {
  KEYBOARD_SHORTCUTS,
  KeyboardShortcutsService,
  SHORTCUTS_HELP_KEY,
  findShortcutTarget
} from "./chunk-CW7X43IG.js";
import {
  TranslatePipe
} from "./chunk-IGQY3INR.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import "./chunk-JYQPCPCB.js";
import "./chunk-OWTWWOGC.js";
import "./chunk-QSD4JXRO.js";
import "./chunk-GTXMU3AV.js";
import "./chunk-DK3CVVJN.js";
import "./chunk-N4RTV55R.js";
import {
  Component,
  DOCUMENT,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QAVCSYNX.js";
import "./chunk-653SOEEV.js";

// apps/concierge/src/app/ui/keyboard-shortcuts-modal.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function KeyboardShortcutsModalComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "kbd", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
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
    this.shortcuts_service = inject(KeyboardShortcutsService);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KeyboardShortcutsModalComponent, selectors: [["keyboard-shortcuts-modal"]], decls: 14, vars: 11, consts: [["icon", "", "mat-dialog-close", "", 3, "aria-label"], [1, "w-md", "space-y-4", "p-4"], [3, "ngModelChange", "toggle", "label", "ngModel"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "items-center", "gap-4", 3, "opacity-40"], [1, "flex", "items-center", "gap-4"], [1, "border-base-300", "bg-base-200", "min-w-8", "rounded-sm", "border", "px-2", "py-1", "text-center", "font-mono", "text-sm"], [1, "flex-1"]], template: function KeyboardShortcutsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 0);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 1)(9, "settings-toggle", 2);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275listener("ngModelChange", function KeyboardShortcutsModalComponent_Template_settings_toggle_ngModelChange_9_listener($event) {
          return ctx.shortcuts_service.setEnabled($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(11, "ul", 3);
        \u0275\u0275repeaterCreate(12, KeyboardShortcutsModalComponent_For_13_Template, 7, 9, "li", 4, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.SHORTCUTS_TITLE"));
        \u0275\u0275advance(2);
        \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(5, 7, "COMMON.CLOSE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("toggle", true)("label", \u0275\u0275pipeBind1(10, 9, "APP.CONCIERGE.SHORTCUTS_ENABLED"))("ngModel", ctx.shortcuts_service.enabled());
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.shortcuts);
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      SettingsToggleComponent,
      TranslatePipe
    ], encapsulation: 2 });
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
            <button
                icon
                mat-dialog-close
                [aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main class="w-md space-y-4 p-4">
            <settings-toggle
                [toggle]="true"
                [label]="'APP.CONCIERGE.SHORTCUTS_ENABLED' | translate"
                [ngModel]="shortcuts_service.enabled()"
                (ngModelChange)="shortcuts_service.setEnabled($event)"
            ></settings-toggle>
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
      imports: [
        FormsModule,
        MatDialogModule,
        IconComponent,
        SettingsToggleComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KeyboardShortcutsModalComponent, { className: "KeyboardShortcutsModalComponent", filePath: "apps/concierge/src/app/ui/keyboard-shortcuts-modal.component.ts", lineNumber: 74 });
})();
export {
  KeyboardShortcutsModalComponent
};
//# debugId=b500084f-c57c-5c52-8e08-c71fff773aad
//# sourceMappingURL=keyboard-shortcuts-modal.component-XM7QTFZN.js.map
