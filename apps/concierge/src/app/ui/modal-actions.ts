import { WritableSignal } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogEvent, errorMessage, notifyError } from '@placeos/common';
import { ConfirmModalData, openConfirmModal } from '@placeos/components';

/**
 * Readable text for a failed request. The API client rejects with a
 * `Response`, which has no message, so fall back to its status.
 */
export function errorText(error: unknown): string {
    const response = error as { status?: number; statusText?: string };
    return (
        errorMessage(error) ||
        [response?.status, response?.statusText].filter(Boolean).join(' ') ||
        'Unknown error'
    );
}

/** Form modal that emits `done` events and shows a loading state. */
interface SaveModal {
    event: {
        subscribe(fn: (event: DialogEvent) => void): { unsubscribe(): void };
    };
    loading: WritableSignal<boolean>;
}

/**
 * Run `save` each time the modal emits a `done` event, until a save
 * succeeds or the dialog closes. After a failed save the modal is reset, so
 * the user can fix the form and save again. `save` shows its own errors.
 * Resolves true when a save succeeded and the dialog was closed.
 */
export function saveFromModal(
    ref: MatDialogRef<SaveModal>,
    save: (event: DialogEvent) => Promise<unknown>,
): Promise<boolean> {
    return new Promise((resolve) => {
        let saving = false;
        let finished = false;
        let event_sub: { unsubscribe(): void } | undefined;
        let close_sub: { unsubscribe(): void } | undefined;
        const finish = (saved: boolean) => {
            if (finished) return;
            finished = true;
            event_sub?.unsubscribe();
            close_sub?.unsubscribe();
            resolve(saved);
        };
        event_sub = ref.componentInstance.event.subscribe(async (event) => {
            if (event?.reason !== 'done' || saving) return;
            saving = true;
            try {
                await save(event);
                finish(true);
                ref.close();
            } catch {
                ref.componentInstance.loading.set(false);
                ref.disableClose = false;
            } finally {
                saving = false;
            }
        });
        close_sub = ref.afterClosed().subscribe(() => finish(false));
        // afterClosed can emit before `close_sub` is assigned.
        if (finished) close_sub.unsubscribe();
    });
}

/**
 * Ask for confirmation, then run `action` while the dialog shows `loading`.
 * The dialog always closes. On failure the error from `error` is shown.
 * Resolves true when the action ran and succeeded.
 */
export async function confirmAction(
    dialog: MatDialog,
    confirm: ConfirmModalData,
    options: {
        loading: string;
        action: () => Promise<unknown>;
        error: (e: unknown) => string;
    },
): Promise<boolean> {
    const ref = await openConfirmModal(confirm, dialog);
    if (ref.reason !== 'done') {
        ref.close();
        return false;
    }
    ref.loading(options.loading);
    try {
        await options.action();
        return true;
    } catch (e) {
        notifyError(options.error(e));
        return false;
    } finally {
        ref.close();
    }
}
