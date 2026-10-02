import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { NEVER, of } from 'rxjs';

import { runBulk, runBulkAction } from '../lib/bulk-actions';

describe('runBulk', () => {
    it('should limit how many actions run at the same time', async () => {
        let running = 0;
        let max_running = 0;
        const action = async () => {
            running++;
            max_running = Math.max(max_running, running);
            await new Promise((resolve) => setTimeout(resolve, 1));
            running--;
        };

        await runBulk([1, 2, 3, 4, 5, 6, 7], action, 3);

        expect(max_running).toBe(3);
    });

    it('should return the items that failed', async () => {
        const failed = await runBulk([1, 2, 3, 4], async (item) => {
            if (item % 2 === 0) throw new Error('failed');
        });

        expect(failed.sort()).toEqual([2, 4]);
    });
});

describe('runBulkAction', () => {
    let notify_open: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    const dialogWith = (reason: string) =>
        ({
            open: vi.fn(() => ({
                componentInstance: {
                    event: reason === 'done' ? of({ reason }) : NEVER,
                    loading: { set: vi.fn() },
                },
                afterClosed: () => of({ reason }),
                close: vi.fn(),
            })),
        }) as any;

    const confirm = { title: 'Title', content: 'Content', icon: 'delete' };

    it('should not run the action when the user cancels', async () => {
        const action = vi.fn(async () => undefined);

        const result = await runBulkAction([1, 2], action, {
            confirm,
            dialog: dialogWith('cancel'),
        });

        expect(result).toBeNull();
        expect(action).not.toHaveBeenCalled();
    });

    it('should show one error notification when some items fail', async () => {
        const failed = await runBulkAction(
            [1, 2, 3],
            async (item) => {
                if (item === 2) throw new Error('failed');
            },
            { confirm, dialog: dialogWith('done') },
        );

        expect(failed).toEqual([2]);
        expect(notify_open).toHaveBeenCalledTimes(1);
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });
});
