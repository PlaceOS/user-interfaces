import { DestroyRef, inject } from '@angular/core';
import { MatDialog, type MatDialogRef } from '@angular/material/dialog';
import { HotkeysService } from '@placeos/common';

/** Focus targets where a plain key press belongs to the control, not a hotkey */
const HOTKEY_BLOCKING_FOCUS =
    'select, mat-select, [role="combobox"], [role="listbox"], [role="option"], [role="menu"], [role="menuitem"]';

/**
 * Run `save` when the user presses S in a modal. S is a plain key, so it
 * only acts while `dialog_ref` is the top-most dialog and focus is not on a
 * control that takes key presses, such as a select that jumps to an option.
 * Call it in an injection context. It stops when that context is destroyed.
 */
export function saveHotkey(
    dialog_ref: MatDialogRef<unknown>,
    save: () => unknown,
) {
    const dialog = inject(MatDialog);
    const listener = inject(HotkeysService).listen(['KeyS'], () => {
        if (dialog.openDialogs.at(-1) !== dialog_ref) return;
        if (document.activeElement?.closest(HOTKEY_BLOCKING_FOCUS)) return;
        save();
    });
    inject(DestroyRef).onDestroy(() => listener?.unsubscribe());
}
