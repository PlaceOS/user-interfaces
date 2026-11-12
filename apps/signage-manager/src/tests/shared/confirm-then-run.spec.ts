import type { MatDialog } from '@angular/material/dialog';
import { NEVER, of } from 'rxjs';

import { confirmThenRun } from '../../app/shared/confirm-then-run';

/** Dialog whose confirm modal closes with `reason` */
function confirmDialog(reason: string) {
    const ref = {
        componentInstance: { event: NEVER, loading: { set: vi.fn() } },
        afterClosed: () => of({ reason }),
        close: vi.fn(),
        disableClose: false,
    };
    const dialog = { open: vi.fn(() => ref) } as unknown as MatDialog;
    return { dialog, ref };
}

const CONFIRM = {
    title: 'Remove',
    content: 'Remove the item?',
    icon: { content: 'delete' },
};

const options = (action: () => Promise<unknown>) => ({
    loading_key: 'COMMON.LOADING',
    error_key: 'COMMON.ERROR',
    action,
});

describe('confirmThenRun', () => {
    it('does not run the action when the user does not confirm', async () => {
        const { dialog } = confirmDialog('');
        const action = vi.fn(async () => undefined);

        expect(await confirmThenRun(dialog, CONFIRM, options(action))).toBe(
            false,
        );
        expect(action).not.toHaveBeenCalled();
    });

    it('locks the modal while the action runs and closes it after', async () => {
        const { dialog, ref } = confirmDialog('done');
        let finish: () => void = () => undefined;
        const action = vi.fn(
            () => new Promise<void>((resolve) => (finish = resolve)),
        );

        const running = confirmThenRun(dialog, CONFIRM, options(action));
        await vi.waitFor(() => expect(action).toHaveBeenCalled());
        await Promise.resolve();

        expect(ref.disableClose).toBe(true);
        expect(ref.close).not.toHaveBeenCalled();

        finish();
        expect(await running).toBe(true);
        expect(ref.close).toHaveBeenCalledTimes(1);
    });
});
