import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';
import { addHours } from 'date-fns';

import { CheckinTimetableComponent } from '../../app/checkin/checkin-timetable.component';

describe('CheckinTimetableComponent', () => {
    let spectator: Spectator<CheckinTimetableComponent>;
    const createComponent = createComponentFactory({
        component: CheckinTimetableComponent,
        detectChanges: false,
    });

    const event = (date: number, duration: number) =>
        new CalendarEvent({ date, duration });

    beforeEach(() => {
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should start a full day of time blocks an hour before now', () => {
        vi.useFakeTimers({ now: new Date(2026, 6, 4, 9, 1) });
        spectator.detectChanges();
        // 24 hours at 15-minute steps => 96 blocks
        expect(spectator.component.blocks().length).toBe(96);
        expect(spectator.component.blocks()[0].id).toBe(
            new Date(2026, 6, 4, 8, 0).valueOf(),
        );
        expect(spectator.component.current_time()).toBe(61);
    });

    it('should relabel the blocks when the time format changes', () => {
        spectator.detectChanges();
        const hour = () =>
            spectator.component.blocks().find((b) => b.minutes === 0);
        const date = new Date(hour().id);
        expect(hour().period).not.toBe('');
        spectator.setInput('time_format', 'HH:mm');
        spectator.detectChanges();
        expect(hour().hour).toBe(`${date.getHours()}`.padStart(2, '0'));
        expect(hour().period).toBe('');
    });

    it('should emit the block id when a block is clicked', () => {
        spectator.detectChanges();
        let emitted: number | undefined;
        spectator.component.event.subscribe((v) => (emitted = v));
        const first_id = spectator.component.blocks()[0].id;
        spectator.click('button');
        expect(emitted).toBe(first_id);
    });

    it('should position events in minutes from the first block', () => {
        vi.useFakeTimers({ now: new Date(2026, 6, 4, 9, 1) });
        spectator.setInput('events', [event(Date.now(), 30)]);
        spectator.detectChanges();
        expect(spectator.component.event_blocks()).toEqual([
            { start: 61, length: 30 },
        ]);
    });

    it('should only draw events inside the 24 hour range', () => {
        const now = Date.now();
        spectator.setInput('events', [
            event(addHours(now, -3).valueOf(), 30),
            event(now, 30),
            event(addHours(now, 30).valueOf(), 30),
        ]);
        spectator.detectChanges();
        expect(spectator.queryAll('[event]')).toHaveLength(1);
    });

    it('should keep the time blocks until the start time moves', () => {
        // The start moves on the 15 minute step, so 09:01 to 09:02 keeps it
        vi.useFakeTimers({ now: new Date(2026, 6, 4, 9, 1) });
        spectator.detectChanges();
        const blocks = spectator.component.blocks();
        vi.advanceTimersByTime(60 * 1000);
        expect(spectator.component.blocks()).toBe(blocks);
    });

    it('should name each time block and mark booked blocks unavailable', () => {
        spectator.detectChanges();
        const start = spectator.component.blocks()[4].id;
        spectator.setInput('events', [{ date: start, duration: 30 }]);
        spectator.detectChanges();
        const buttons = spectator.queryAll('button');
        const disabled = buttons.map((b) => b.getAttribute('aria-disabled'));
        expect(disabled.slice(3, 7)).toEqual([null, 'true', 'true', null]);
        expect(buttons[4].getAttribute('aria-label')).toMatch(/\d:\d\d/);
        const emitted: number[] = [];
        spectator.component.event.subscribe((v) => emitted.push(v));
        spectator.click(buttons[4]);
        spectator.click(buttons[3]);
        expect(emitted).toEqual([spectator.component.blocks()[3].id]);
    });
});
