import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NEVER, of } from 'rxjs';
import { SignageService } from '../../app/signage.service';
import { templateUnsavedGuard } from '../../app/templates/template-unsaved.guard';

/** Fake dialog ref shaped for `openConfirmModal` driven via MatDialog. */
const makeConfirmRef = (reason: string) => ({
    componentInstance: { event: NEVER, loading: { set: vi.fn() } },
    afterClosed: () => of({ reason }),
    close: vi.fn(),
});

describe('templateUnsavedGuard', () => {
    const template_layout_dirty = signal(false);
    const discard = vi.fn();
    const dialog_open = vi.fn();

    function runGuard() {
        return TestBed.runInInjectionContext(
            () =>
                templateUnsavedGuard(
                    {},
                    {} as any,
                    {} as any,
                    {} as any,
                ) as Promise<boolean>,
        );
    }

    beforeEach(() => {
        vi.clearAllMocks();
        template_layout_dirty.set(false);
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: SignageService,
                    useValue: {
                        template_layout_dirty,
                        discardTemplateLayoutDraft: discard,
                    },
                },
                { provide: MatDialog, useValue: { open: dialog_open } },
            ],
        });
    });

    it('lets the user leave without a prompt when nothing is unsaved', async () => {
        await expect(runGuard()).resolves.toBe(true);
        expect(dialog_open).not.toHaveBeenCalled();
    });

    it('keeps the user on the template when they cancel the prompt', async () => {
        template_layout_dirty.set(true);
        dialog_open.mockReturnValue(makeConfirmRef(''));

        await expect(runGuard()).resolves.toBe(false);
        expect(discard).not.toHaveBeenCalled();
    });

    it('discards the edits and leaves when the user confirms', async () => {
        template_layout_dirty.set(true);
        const ref = makeConfirmRef('done');
        dialog_open.mockReturnValue(ref);

        await expect(runGuard()).resolves.toBe(true);
        expect(discard).toHaveBeenCalledTimes(1);
        expect(ref.close).toHaveBeenCalledTimes(1);
    });
});
