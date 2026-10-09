import {
  DOCUMENT,
  EnvironmentInjector,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-WOMJJ4WU.js";

// apps/concierge/src/app/ui/keyboard-shortcuts.service.ts
var KEYBOARD_SHORTCUTS = [
  {
    key: "/",
    label: "/",
    target: "search",
    action: "focus",
    description: "APP.CONCIERGE.SHORTCUTS_SEARCH"
  },
  {
    key: "n",
    label: "N",
    target: "new",
    action: "click",
    description: "APP.CONCIERGE.SHORTCUTS_NEW"
  },
  {
    key: "r",
    label: "R",
    target: "refresh",
    action: "click",
    description: "APP.CONCIERGE.SHORTCUTS_REFRESH"
  },
  {
    // The date label in `date-options` resets to today on double click
    key: "t",
    label: "T",
    target: "today",
    action: "dblclick",
    description: "APP.CONCIERGE.SHORTCUTS_TODAY"
  },
  {
    key: "arrowleft",
    label: "\u2190",
    target: "previous",
    action: "click",
    description: "APP.CONCIERGE.SHORTCUTS_PREVIOUS"
  },
  {
    key: "arrowright",
    label: "\u2192",
    target: "next",
    action: "click",
    description: "APP.CONCIERGE.SHORTCUTS_NEXT"
  }
];
var SHORTCUTS_HELP_KEY = "?";
var KEY_CONSUMERS = [
  "input",
  "textarea",
  "select",
  '[contenteditable]:not([contenteditable="false"])',
  '[role="textbox"]',
  '[role="combobox"]',
  '[role="listbox"]',
  '[role="menu"]',
  '[role="radiogroup"]',
  '[role="slider"]',
  '[role="spinbutton"]',
  '[role="tablist"]'
].join(", ");
function findShortcutTarget(document, target) {
  const elements = document.querySelectorAll(`[data-shortcut="${target}"]`);
  for (const element of Array.from(elements)) {
    const visible = element.checkVisibility?.() ?? true;
    const disabled = element.matches(':disabled, [aria-disabled="true"], .pointer-events-none');
    if (visible && !disabled)
      return element;
  }
  return null;
}
var KeyboardShortcutsService = class _KeyboardShortcutsService {
  constructor() {
    this._document = inject(DOCUMENT);
    this._injector = inject(EnvironmentInjector);
  }
  /**
   * Open the modal that lists the shortcuts. The dialog service is loaded on
   * demand to keep it out of the initial bundle.
   */
  async openHelp() {
    const [{ MatDialog }, { KeyboardShortcutsModalComponent }] = await Promise.all([
      import("./dialog-L4OCGSFV.js"),
      import("./keyboard-shortcuts-modal.component-AJJF4TY7.js")
    ]);
    this._injector.get(MatDialog).open(KeyboardShortcutsModalComponent);
  }
  /** Run the shortcut for a window `keydown` event, if one matches */
  handleKeydown(event) {
    if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey || !event.key || event.target?.closest?.(KEY_CONSUMERS) || this._isOverlayOpen()) {
      return;
    }
    const key = event.key.toLowerCase();
    if (key === SHORTCUTS_HELP_KEY) {
      event.preventDefault();
      this.openHelp();
      return;
    }
    const shortcut = KEYBOARD_SHORTCUTS.find((_) => _.key === key);
    if (!shortcut)
      return;
    const element = findShortcutTarget(this._document, shortcut.target);
    if (!element)
      return;
    event.preventDefault();
    if (shortcut.action === "focus" && element instanceof HTMLInputElement) {
      element.focus();
      element.select();
    } else if (shortcut.action === "dblclick") {
      element.dispatchEvent(new MouseEvent("dblclick", { bubbles: true, cancelable: true }));
    } else {
      element.click();
    }
  }
  /**
   * Dialogs, menus and select panels all show a CDK overlay backdrop. Dialogs
   * opened without a backdrop are found by their container.
   */
  _isOverlayOpen() {
    return !!this._document.querySelector(".cdk-overlay-backdrop, .mat-mdc-dialog-container, .cdk-dialog-container");
  }
  static {
    this.\u0275fac = function KeyboardShortcutsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KeyboardShortcutsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KeyboardShortcutsService, factory: _KeyboardShortcutsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyboardShortcutsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  KEYBOARD_SHORTCUTS,
  SHORTCUTS_HELP_KEY,
  findShortcutTarget,
  KeyboardShortcutsService
};
//# debugId=0fc7c8ad-4b78-5d37-ab9e-0ab1f23746a8
//# sourceMappingURL=chunk-4WXM473R.js.map
