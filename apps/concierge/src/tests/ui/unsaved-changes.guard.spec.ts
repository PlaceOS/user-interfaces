import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NEVER, of } from 'rxjs';

import {
    HasUnsavedChanges,
    unsavedChangesGuard,
} from '../../app/ui/unsaved-changes.guard';

describe('unsavedChangesGuard', () => {
    let dialog_open: ReturnType<typeof vi.fn>;

    /** Fake dialog ref that `openConfirmModal` resolves with `reason` */
    const dialogRef = (reason: string) => ({
        componentInstance: {
            event: reason === 'done' ? of({ reason }) : NEVER,
            loading: { set: vi.fn() },
        },
        afterClosed: () => of({ reason }),
        close: vi.fn(),
    });

    const runGuard = (dirty: boolean) => {
        const component: HasUnsavedChanges = { hasUnsavedChanges: () => dirty };
        return TestBed.runInInjectionContext(() =>
            unsavedChangesGuard(component, null, null, null),
        );
    };

    beforeEach(() => {
        dialog_open = vi.fn(() => dialogRef('done'));
        TestBed.configureTestingModule({
            providers: [
                { provide: MatDialog, useValue: { open: dialog_open } },
            ],
        });
    });

    it('should allow leaving a page with no changes', async () => {
        expect(await runGuard(false)).toBe(true);
        expect(dialog_open).not.toHaveBeenCalled();
    });

    it('should allow leaving when the user discards the changes', async () => {
        expect(await runGuard(true)).toBe(true);
        expect(dialog_open).toHaveBeenCalledTimes(1);
    });

    it('should stay on the page when the user cancels', async () => {
        dialog_open.mockReturnValue(dialogRef('cancel'));
        expect(await runGuard(true)).toBe(false);
    });
});
