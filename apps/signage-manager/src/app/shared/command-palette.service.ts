import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

/**
 * Opens the command palette. The app root calls it for Cmd+K or Ctrl+K and
 * the nav sidebar calls it from its search button.
 */
@Injectable({ providedIn: 'root' })
export class CommandPaletteService {
    private readonly _dialog = inject(MatDialog);
    private _ref: MatDialogRef<unknown> | null = null;
    private _opening = false;

    /** Open the palette, or close it when it is already open */
    public async toggle() {
        if (this._ref) {
            this._ref.close();
            return;
        }
        // Do not stack the palette on top of another dialog
        if (this._opening || this._dialog.openDialogs.length) return;
        this._opening = true;
        try {
            const { CommandPaletteComponent } =
                await import('./command-palette.component');
            this._ref = this._dialog.open(CommandPaletteComponent, {
                position: { top: '12vh' },
                width: '36rem',
                maxWidth: '95vw',
            });
            this._ref.afterClosed().subscribe(() => (this._ref = null));
        } finally {
            this._opening = false;
        }
    }
}
