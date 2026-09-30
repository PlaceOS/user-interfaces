import { EventEmitter } from '@angular/core';
import { setNotifyOutlet } from '@placeos/common';
import { NEVER, of, Subject } from 'rxjs';

import { confirmAction, saveFromModal } from '../../app/ui/modal-actions';

const CONFIRM = { title: 'Remove', content: '', icon: { content: 'delete' } };

describe('modal actions', () => {
    let notify_open: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    /** Fake MatDialog for `openConfirmModal` that confirms or cancels. */
    const confirmDialog = (confirmed: boolean) => {
        const ref = {
            componentInstance: {
                event: confirmed ? of({ reason: 'done' }) : NEVER,
                loading: { set: vi.fn() },
            },
            afterClosed: () => (confirmed ? NEVER : of(undefined)),
            close: vi.fn(),
        };
        return { dialog: { open: () => ref } as any, ref };
    };

    it('should close the confirm dialog and report when the action fails', async () => {
        const { dialog, ref } = confirmDialog(true);

        const result = await confirmAction(dialog, CONFIRM, {
            loading: 'Removing...',
            action: () => Promise.reject('offline'),
            error: (e) => `Failed. ${e}`,
        });

        expect(result).toBe(false);
        expect(ref.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'Failed. offline',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should not run the action when the user cancels', async () => {
        const { dialog } = confirmDialog(false);
        const action = vi.fn();

        const result = await confirmAction(dialog, CONFIRM, {
            loading: '',
            action,
            error: () => '',
        });

        expect(result).toBe(false);
        expect(action).not.toHaveBeenCalled();
    });

    it('should resolve false when the form modal closes without saving', async () => {
        const closed = new Subject<void>();
        const ref = {
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: vi.fn() },
            },
            afterClosed: () => closed,
            close: vi.fn(),
        };
        const save = vi.fn();

        const result = saveFromModal(ref as any, save);
        closed.next();

        expect(await result).toBe(false);
        expect(save).not.toHaveBeenCalled();
    });
});
