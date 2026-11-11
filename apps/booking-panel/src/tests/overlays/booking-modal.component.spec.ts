import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockModule } from 'ng-mocks';
import { Subject } from 'rxjs';

import { DialogEvent, User } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import {
    DurationFieldComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import {
    BookingModalComponent,
    openBookingModal,
} from '../../app/overlays/booking-modal.component';

describe('BookingModalComponent', () => {
    let spectator: Spectator<BookingModalComponent>;
    const dialog_data: Record<string, unknown> = {};
    const host = new User({ email: 'j@b.com' });
    const createComponent = createComponentFactory({
        component: BookingModalComponent,
        providers: [{ provide: MAT_DIALOG_DATA, useValue: dialog_data }],
        declarations: [
            mockComponent(UserSearchFieldComponent),
            mockComponent(TimeFieldComponent),
            mockComponent(DurationFieldComponent),
            mockComponent(IconComponent),
        ],
        imports: [
            MockModule(MatDialogModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(() => {
        for (const key of Object.keys(dialog_data)) delete dialog_data[key];
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    /** Events the modal emits after `create` */
    const watch = () => {
        const events: DialogEvent[] = [];
        spectator.output('event').subscribe((e) => events.push(e));
        return events;
    };

    it('should emit a booking that starts now with the default title', async () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(new Date('2026-07-04T09:00:00.000Z'));
        dialog_data.date = Date.now() - 60 * 1000;
        spectator = createComponent();
        const events = watch();
        spectator.component.model.update((m) => ({ ...m, organiser: host }));
        vi.setSystemTime(new Date('2026-07-04T09:02:00.000Z'));
        spectator.click('button[name="save"]');
        await vi.waitFor(() => expect(events).toHaveLength(1));

        expect(events[0]).toMatchObject({
            reason: 'done',
            metadata: {
                date: new Date('2026-07-04T09:02:00.000Z').valueOf(),
                duration: 30,
                title: 'Ad-Hoc Panel Booking',
                user: host,
            },
        });
        spectator.detectChanges();
        expect('[form]').not.toExist();
        expect('mat-spinner').toExist();
    });

    it('should keep the chosen start time for a future booking', async () => {
        const date = Date.now() + 60 * 60 * 1000;
        Object.assign(dialog_data, { future: true, date, user: host });
        spectator = createComponent();
        const events = watch();
        await spectator.component.save();
        expect(events[0].metadata.date).toBe(date);
    });

    it('should not emit without a host', async () => {
        const events = watch();
        await spectator.component.save();
        expect(events).toEqual([]);
        expect(spectator.component.loading()).toBe(false);
    });

    it.each([
        ['the signed-in user is the host', { user: host }],
        ['the host setting is off', { disable_book_now_host: true }],
    ])('should hide the host field when %s', async (_, data) => {
        Object.assign(dialog_data, data);
        spectator = createComponent();
        expect('a-user-search-field').not.toExist();
        const events = watch();
        await spectator.component.save();
        expect(events[0]?.reason).toBe('done');
    });

    it('should keep the default duration within the configured bounds', () => {
        dialog_data.min_duration = 60;
        dialog_data.max_duration = 120;
        spectator = createComponent();
        expect(spectator.component.model().duration).toBe(60);

        dialog_data.min_duration = 15;
        dialog_data.max_duration = 20;
        spectator = createComponent();
        expect(spectator.component.model().duration).toBe(20);
    });
});

describe('openBookingModal', () => {
    const setup = () => {
        const events = new Subject<DialogEvent>();
        const close = vi.fn();
        const ref = { close, componentInstance: { event: events } };
        const dialog = { open: vi.fn(() => ref) } as unknown as MatDialog;
        return { events, close, ref, result: openBookingModal({}, dialog) };
    };

    it('should resolve with the first modal event', async () => {
        const { events, close, result } = setup();
        events.next({ reason: 'done', metadata: { title: 'A' } });
        events.next({ reason: 'close' });
        const details = await result;
        expect(details).toMatchObject({
            reason: 'done',
            metadata: { title: 'A' },
        });
        details.close();
        expect(close).toHaveBeenCalledOnce();
    });

    it('should resolve when the dialog closes without an event', async () => {
        const { ref, close, result } = setup();
        ref.close();
        expect((await result).reason).toBeUndefined();
        expect(close).toHaveBeenCalledOnce();
    });
});
