import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { DialogEvent } from '@placeos/common';

import { RecurringClashModalComponent } from '../lib/recurring-clash-modal.component';

const toUnix = (date: Date) => Math.floor(date.getTime() / 1000);

describe('RecurringClashModalComponent', () => {
    let spectator: Spectator<RecurringClashModalComponent>;

    const CLASHES = [
        {
            booking_start: toUnix(new Date(2026, 2, 4, 9, 30)),
            booking_end: toUnix(new Date(2026, 2, 4, 10, 0)),
        },
        {
            booking_start: toUnix(new Date(2026, 2, 11, 9, 30)),
            booking_end: toUnix(new Date(2026, 2, 11, 10, 0)),
        },
    ] as any[];
    const dialog_ref = { close: vi.fn() };

    const createComponent = createComponentFactory({
        component: RecurringClashModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: { clashes: CLASHES } },
            { provide: MatDialogRef, useValue: dialog_ref },
        ],
    });

    beforeEach(() => vi.clearAllMocks());

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should list the date and time of each clash', () => {
        spectator = createComponent();
        const rows = spectator.queryAll('tbody tr');
        expect(rows.length).toBe(2);
        expect(rows[0]).toContainText('Wed, Mar 4, 2026');
        expect(rows[0]).toContainText('9:30 AM');
        expect(rows[0]).toContainText('10:00 AM');
        expect(rows[1]).toContainText('Wed, Mar 11, 2026');
    });

    it('should handle no clashes being passed', () => {
        spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
        });
        expect(spectator.component.clashes).toEqual([]);
        expect(spectator.queryAll('tbody tr').length).toBe(0);
    });

    it('should emit done and close the dialog on confirm', () => {
        spectator = createComponent();
        const events: DialogEvent[] = [];
        spectator.component.event.subscribe((event) => events.push(event));
        spectator.click(spectator.queryAll('footer button')[1]);
        expect(events).toEqual([{ reason: 'done' }]);
        expect(dialog_ref.close).toHaveBeenCalledWith({ reason: 'done' });
    });
});
