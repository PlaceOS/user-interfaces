import { Injectable, signal } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

/** Viewports below the Tailwind `sm` breakpoint (40rem) use the phone layout */
const MOBILE_QUERY = '(max-width: 39.99rem)';

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
 * Tracks whether the viewport uses the phone layout.
 * Inject it where a view changes behaviour, not only styling, on phones.
 */
@Injectable({ providedIn: 'root' })
export class MobileLayoutService {
    private readonly _query =
        typeof window !== 'undefined'
            ? window.matchMedia?.(MOBILE_QUERY)
            : null;
    private readonly _mobile = signal(!!this._query?.matches);

    /** Whether the viewport uses the phone layout */
    public readonly mobile = this._mobile.asReadonly();

    constructor() {
        this._query?.addEventListener?.('change', (e) =>
            this._mobile.set(e.matches),
        );
    }
}
