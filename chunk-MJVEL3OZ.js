import {
  DOCUMENT,
  Injectable,
  MatDialog,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-J7IVN6K3.js";

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
    this._dialog = inject(MatDialog);
  }
  /** Open the modal that lists the shortcuts */
  async openHelp() {
    const { KeyboardShortcutsModalComponent } = await import("./keyboard-shortcuts-modal.component-NHVPG2VH.js");
    this._dialog.open(KeyboardShortcutsModalComponent);
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
  /** Dialogs, menus and select panels all show a CDK overlay backdrop */
  _isOverlayOpen() {
    return this._dialog.openDialogs.length > 0 || !!this._document.querySelector(".cdk-overlay-backdrop");
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
//# debugId=2ab46ec0-e54f-549d-9c74-7c3e7319434c
//# sourceMappingURL=chunk-MJVEL3OZ.js.map
