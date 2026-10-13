import { MatDialog } from '@angular/material/dialog';
import { i18n } from 'libs/common/src/lib/locale.service';
import { notifyError, notifySuccess } from 'libs/common/src/lib/notifications';

import { openConfirmModal } from './confirm-modal.component';

/** Number of requests that a bulk action sends at the same time */
const BULK_CONCURRENCY = 5;

/**
 * Run an action on each item, a few at a time.
 * @returns The items for which the action failed
 */
export async function runBulk<T>(
    items: readonly T[],
    action: (item: T) => Promise<unknown>,
    concurrency = BULK_CONCURRENCY,
): Promise<T[]> {
    const failed: T[] = [];
    let next = 0;
    const worker = async () => {
        while (next < items.length) {
            const item = items[next++];
            try {
                await action(item);
            } catch {
                failed.push(item);
            }
        }
    };
    const workers = Math.max(1, Math.min(concurrency, items.length));
    await Promise.all(Array.from({ length: workers }, worker));
    return failed;
}

export interface BulkActionOptions {
    /** Ask the user to confirm before the action runs */
    confirm?: { title: string; content: string; icon: string };
    /** Dialog service. Necessary when `confirm` is set. */
    dialog?: MatDialog;
    /** Number of items to process at the same time */
    concurrency?: number;
}

/**
 * Run an action on each item and show one notification with the result.
 * @returns The items for which the action failed, or `null` if the user
 * cancelled
 */
export async function runBulkAction<T>(
    items: readonly T[],
    action: (item: T) => Promise<unknown>,
    options: BulkActionOptions = {},
): Promise<T[] | null> {
    if (!items.length) return [];
    const { confirm, dialog, concurrency } = options;
    const ref =
        confirm && dialog
            ? await openConfirmModal(
                  {
                      title: confirm.title,
                      content: confirm.content,
                      icon: { content: confirm.icon },
                  },
                  dialog,
              )
            : null;
    if (ref && ref.reason !== 'done') {
        ref.close();
        return null;
    }
    ref?.loading(i18n('COMMON.BULK_LOADING', { count: items.length }));
    const failed = await runBulk(items, action, concurrency);
    ref?.close();
    const done = items.length - failed.length;
    if (failed.length) {
        notifyError(
            i18n('COMMON.BULK_PARTIAL', {
                done,
                total: items.length,
                failed: failed.length,
            }),
        );
    } else {
        notifySuccess(i18n('COMMON.BULK_SUCCESS', { count: done }));
    }
    return failed;
}
