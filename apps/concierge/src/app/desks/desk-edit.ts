import { MatDialogRef } from '@angular/material/dialog';
import { Desk, DialogEvent, nextValueFrom } from '@placeos/common';
import { DeskModalComponent } from './desk-modal.component';

/** Desk fields from the desk modal, with the level that the user selected. */
export type DeskModalValue = Partial<Desk> & { zone_id?: string };

/**
 * Wait for the desk modal to finish. Resolves with the first "done" event,
 * or with the close value if the modal closes first.
 */
export function deskModalResult(
    ref: MatDialogRef<DeskModalComponent>,
): Promise<DialogEvent<DeskModalValue> | undefined> {
    return Promise.race([
        nextValueFrom(ref.afterClosed()),
        new Promise<DialogEvent<DeskModalValue>>((resolve) => {
            const sub = ref.componentInstance.event.subscribe((event) => {
                if (event?.reason !== 'done') return;
                sub.unsubscribe();
                resolve(event);
            });
        }),
    ]);
}

/** Whether an edit moved the desk's assignment to a new user or desk ID. */
export function assignmentChanged(before: Desk, after: Desk): boolean {
    return before.assigned_to !== after.assigned_to || before.id !== after.id;
}

/** Copy of `list` with the desk that has `id` replaced, or `desk` appended. */
export function upsertDesk(list: Desk[], id: string, desk: Desk): Desk[] {
    const updated = [...list];
    const idx = updated.findIndex((_) => _.id === id);
    if (idx >= 0) updated[idx] = desk;
    else updated.push(desk);
    return updated;
}

/** Whether a request failed with an HTTP 409 conflict. */
export function isConflict(error: unknown): boolean {
    return (
        typeof error === 'object' &&
        error !== null &&
        'status' in error &&
        error.status === 409
    );
}
