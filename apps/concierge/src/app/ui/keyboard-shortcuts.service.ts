import { DOCUMENT, inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**
 * How a shortcut acts on its target element. `focus` clicks targets that are
 * not inputs, such as a button that opens a search field.
 */
export type ShortcutAction = 'focus' | 'click' | 'dblclick';

export interface KeyboardShortcut {
    /** Lower case `KeyboardEvent.key` value that triggers the shortcut */
    key: string;
    /** Key as shown to the user */
    label: string;
    /** Value of the `data-shortcut` attribute on the target element */
    target: string;
    action: ShortcutAction;
    /** Translation key that describes the shortcut */
    description: string;
}

/**
 * Page shortcuts. To enable a shortcut on a page, add the matching
 * `data-shortcut` attribute to the element, e.g. `data-shortcut="new"`.
 */
export const KEYBOARD_SHORTCUTS: readonly KeyboardShortcut[] = [
    {
        key: '/',
        label: '/',
        target: 'search',
        action: 'focus',
        description: 'APP.CONCIERGE.SHORTCUTS_SEARCH',
    },
    {
        key: 'n',
        label: 'N',
        target: 'new',
        action: 'click',
        description: 'APP.CONCIERGE.SHORTCUTS_NEW',
    },
    {
        key: 'r',
        label: 'R',
        target: 'refresh',
        action: 'click',
        description: 'APP.CONCIERGE.SHORTCUTS_REFRESH',
    },
    {
        // The date label in `date-options` resets to today on double click
        key: 't',
        label: 'T',
        target: 'today',
        action: 'dblclick',
        description: 'APP.CONCIERGE.SHORTCUTS_TODAY',
    },
    {
        key: 'arrowleft',
        label: '←',
        target: 'previous',
        action: 'click',
        description: 'APP.CONCIERGE.SHORTCUTS_PREVIOUS',
    },
    {
        key: 'arrowright',
        label: '→',
        target: 'next',
        action: 'click',
        description: 'APP.CONCIERGE.SHORTCUTS_NEXT',
    },
];

/** Key that opens the list of shortcuts */
export const SHORTCUTS_HELP_KEY = '?';

/** Focused elements that use these keys for their own input */
const KEY_CONSUMERS = [
    'input',
    'textarea',
    'select',
    '[contenteditable]:not([contenteditable="false"])',
    '[role="textbox"]',
    '[role="combobox"]',
    '[role="listbox"]',
    '[role="menu"]',
    '[role="radiogroup"]',
    '[role="slider"]',
    '[role="spinbutton"]',
    '[role="tablist"]',
].join(', ');

/** First visible and enabled element marked with the given shortcut target */
export function findShortcutTarget(
    document: Document,
    target: string,
): HTMLElement | null {
    const elements = document.querySelectorAll<HTMLElement>(
        `[data-shortcut="${target}"]`,
    );
    for (const element of Array.from(elements)) {
        const visible = element.checkVisibility?.() ?? true;
        const disabled = element.matches(
            ':disabled, [aria-disabled="true"], .pointer-events-none',
        );
        if (visible && !disabled) return element;
    }
    return null;
}

/**
 * Handles single key shortcuts for the whole app. `AppComponent` sends it
 * each window `keydown` event. Shortcuts do nothing while the user types in
 * a field, or while a dialog, menu or select panel is open.
 */
@Injectable({
    providedIn: 'root',
})
export class KeyboardShortcutsService {
    private _document = inject(DOCUMENT);
    private _dialog = inject(MatDialog);

    /** Open the modal that lists the shortcuts */
    public async openHelp() {
        const { KeyboardShortcutsModalComponent } =
            await import('./keyboard-shortcuts-modal.component');
        this._dialog.open(KeyboardShortcutsModalComponent);
    }

    /** Run the shortcut for a window `keydown` event, if one matches */
    public handleKeydown(event: KeyboardEvent) {
        if (
            event.defaultPrevented ||
            event.repeat ||
            event.ctrlKey ||
            event.metaKey ||
            event.altKey ||
            !event.key ||
            (event.target as Element)?.closest?.(KEY_CONSUMERS) ||
            this._isOverlayOpen()
        ) {
            return;
        }
        const key = event.key.toLowerCase();
        if (key === SHORTCUTS_HELP_KEY) {
            event.preventDefault();
            this.openHelp();
            return;
        }
        const shortcut = KEYBOARD_SHORTCUTS.find((_) => _.key === key);
        if (!shortcut) return;
        const element = findShortcutTarget(this._document, shortcut.target);
        if (!element) return;
        event.preventDefault();
        if (
            shortcut.action === 'focus' &&
            element instanceof HTMLInputElement
        ) {
            element.focus();
            element.select();
        } else if (shortcut.action === 'dblclick') {
            element.dispatchEvent(
                new MouseEvent('dblclick', { bubbles: true, cancelable: true }),
            );
        } else {
            element.click();
        }
    }

    /** Dialogs, menus and select panels all show a CDK overlay backdrop */
    private _isOverlayOpen() {
        return (
            this._dialog.openDialogs.length > 0 ||
            !!this._document.querySelector('.cdk-overlay-backdrop')
        );
    }
}
