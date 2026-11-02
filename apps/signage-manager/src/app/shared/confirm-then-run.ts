import { MatDialog } from '@angular/material/dialog';
import { i18n, notifyError } from '@placeos/common';
import {
    type ConfirmModalData,
    ConfirmModalComponent,
    openConfirmModal,
} from '@placeos/components';

/**
 * Ask the user to confirm, then run `action` while the confirm modal shows
 * a loading message. The modal cannot be closed while `action` runs, as that
 * would not stop the request, and it always closes when `action` ends.
 * Shows the error of `error_key` when `action` throws.
 * @returns Whether the user confirmed and `action` succeeded
 */
export async function confirmThenRun(
    dialog: MatDialog,
    confirm: ConfirmModalData,
    options: {
        loading_key: string;
        error_key: string;
        action: () => Promise<unknown>;
    },
) {
    const result = await openConfirmModal(confirm, dialog);
    if (result.reason !== 'done') return false;
    result.loading(i18n(options.loading_key));
    const confirm_ref = dialog.openDialogs?.at(-1);
    if (confirm_ref?.componentInstance instanceof ConfirmModalComponent) {
        confirm_ref.disableClose = true;
    }
    try {
        await options.action();
        return true;
    } catch {
        notifyError(i18n(options.error_key));
        return false;
    } finally {
        result.close();
    }
}
