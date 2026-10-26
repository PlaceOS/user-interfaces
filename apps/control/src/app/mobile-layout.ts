import { Injectable, signal } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

/**
 * Viewports narrower than 40rem or shorter than 30rem use the phone layout.
 * Keep in sync with the `max-sm` variant in styles.css and component `@media` rules.
 */
const PHONE_MEDIA = '(width < 40rem), (height < 30rem)';

/** Dialog options that make a dialog cover the whole screen */
export const FULLSCREEN_DIALOG: MatDialogConfig = {
    panelClass: 'fullscreen-dialog',
    width: '100vw',
    height: '100dvh',
    maxWidth: '100vw',
    maxHeight: '100dvh',
    // Focus the dialog, not its first button, so a tap does not show a focus ring
    autoFocus: 'dialog',
};

/**
 * Dialog options that show a short list as a sheet at the bottom of the screen.
 * The sheet keeps the view behind it in sight, and a tap on that view closes it.
 */
export const BOTTOM_SHEET_DIALOG: MatDialogConfig = {
    panelClass: 'bottom-sheet-dialog',
    width: '100vw',
    maxWidth: '100vw',
    maxHeight: '85dvh',
    position: { bottom: '0' },
    autoFocus: 'dialog',
};

/**
 * Tracks whether the viewport uses the phone layout.
 * Inject it where a view changes behaviour, not only styling, on phones.
 */
@Injectable({ providedIn: 'root' })
export class MobileLayoutService {
    private readonly _query =
        typeof window !== 'undefined' ? window.matchMedia?.(PHONE_MEDIA) : null;
    private readonly _mobile = signal(!!this._query?.matches);

    /** Whether the viewport uses the phone layout */
    public readonly mobile = this._mobile.asReadonly();

    constructor() {
        this._query?.addEventListener?.('change', (e) =>
            this._mobile.set(e.matches),
        );
    }
}
