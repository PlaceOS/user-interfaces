import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { addDays, addMonths, isSameMonth, startOfMonth } from 'date-fns';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DateRangeCalendarComponent } from '../lib/date-range-calendar.component';

describe('DateRangeCalendarComponent', () => {
    let spectator: Spectator<DateRangeCalendarComponent>;
    const month = startOfMonth(new Date(2026, 5, 15)).valueOf();
    const createComponent = createComponentFactory({
        component: DateRangeCalendarComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => {
        spectator = createComponent({ props: { month } });
        spectator.detectChanges();
    });

    it('should say which end of the range the next pick sets', () => {
        expect(spectator.query('[hint]')).toExist();
        expect(spectator.component.selecting_end()).toBe(false);
        spectator.component.selectDate(new Date(2026, 5, 22).valueOf());
        expect(spectator.component.selecting_end()).toBe(true);
    });

    it('should stop month navigation at the allowed dates', () => {
        spectator.setInput({
            from: new Date(2026, 3, 10).valueOf(),
            to: new Date(2026, 4, 20).valueOf(),
        });
        spectator.component.month.set(new Date(2026, 3, 15).valueOf());
        expect(spectator.component.at_first_month()).toBe(true);
        expect(spectator.component.at_last_month()).toBe(false);
        spectator.component.nextMonth();
        expect(spectator.component.at_first_month()).toBe(false);
        expect(spectator.component.at_last_month()).toBe(true);
    });

    it('should set the start date on the first selection', () => {
        const start_change = vi.fn();
        spectator.component.startChange.subscribe(start_change);
        const day = addDays(month, 4).valueOf();
        spectator.component.selectDate(day);
        expect(spectator.component.start()).toBe(day);
        expect(start_change).toHaveBeenCalledWith(day);
    });

    it('should start a new range on the first click when a range is shown', () => {
        spectator.setInput({
            start: addDays(month, 1).valueOf(),
            end: addDays(month, 5).valueOf(),
        });
        const start_change = vi.fn();
        const end_change = vi.fn();
        spectator.component.startChange.subscribe(start_change);
        spectator.component.endChange.subscribe(end_change);
        const new_start = addDays(month, 20).valueOf();
        const new_end = addDays(month, 24).valueOf();

        spectator.component.selectDate(new_start);
        spectator.component.selectDate(new_end);

        expect(start_change).toHaveBeenCalledWith(new_start);
        expect(end_change).toHaveBeenCalledWith(new_end);
    });

    it('should set the end date on a later second selection', () => {
        const end_change = vi.fn();
        spectator.component.endChange.subscribe(end_change);
        const start = addDays(month, 4).valueOf();
        const end = addDays(month, 8).valueOf();
        spectator.component.selectDate(start);
        spectator.component.selectDate(end);
        expect(spectator.component.end()).toBe(end);
        expect(end_change).toHaveBeenCalledWith(end);
    });

    it('should restart the range when selecting a date before the start', () => {
        const start_change = vi.fn();
        spectator.component.startChange.subscribe(start_change);
        const first = addDays(month, 10).valueOf();
        const earlier = addDays(month, 3).valueOf();
        spectator.component.selectDate(first);
        spectator.component.selectDate(earlier);
        expect(spectator.component.start()).toBe(earlier);
        expect(start_change).toHaveBeenLastCalledWith(earlier);
    });

    it('should track the hovered date as the tentative end once a start is set', () => {
        const start = addDays(month, 4).valueOf();
        const hovered = addDays(month, 6).valueOf();
        spectator.component.selectDate(start);
        spectator.component.setHoveredDate(hovered);
        expect(spectator.component.hovered_date()).toBe(hovered);
        expect(spectator.component.end_after_start()).toBe(true);
    });

    it('should not limit the range length by default', () => {
        const end = addDays(month, 90).valueOf();
        spectator.component.selectDate(month.valueOf());
        spectator.component.selectDate(end);
        expect(spectator.component.end()).toBe(end);
    });

    it('should limit the range length to max_range_days', () => {
        spectator.setInput('max_range_days', 31);
        spectator.component.selectDate(month.valueOf());
        spectator.component.selectDate(addDays(month, 90).valueOf());
        expect(spectator.component.end()).toBe(addDays(month, 30).valueOf());
    });

    it('should ignore hovered dates before a start is chosen', () => {
        spectator.component.setHoveredDate(addDays(month, 6).valueOf());
        expect(spectator.component.hovered_date()).toBeNull();
    });

    it('should navigate between months', () => {
        spectator.component.nextMonth();
        expect(
            isSameMonth(spectator.component.month(), addMonths(month, 1)),
        ).toBe(true);
        spectator.component.previousMonth();
        expect(isSameMonth(spectator.component.month(), month)).toBe(true);
    });

    it('should disable days outside the allowed dates', () => {
        spectator.setInput({
            from: addDays(month, 10).valueOf(),
            to: addDays(month, 20).valueOf(),
        });
        // Changing the month redraws the days with the new limits
        spectator.component.nextMonth();
        spectator.component.previousMonth();
        const disabled = (offset: number) =>
            spectator.component
                .month_days()
                .find((_) => _.id === addDays(month, offset).valueOf())
                ?.disabled;
        expect([9, 10, 20, 21].map(disabled)).toEqual([
            true,
            false,
            false,
            true,
        ]);
    });

    it('should disable days past the longest range while picking the end', () => {
        // No earliest date, so the past days of this month are enabled
        spectator.setInput({ from: 0, max_range_days: 5 });
        spectator.component.selectDate(addDays(month, 2).valueOf());
        spectator.component.setHoveredDate(addDays(month, 20).valueOf());
        expect(spectator.component.hovered_date()).toBe(
            addDays(month, 6).valueOf(),
        );
        const day = (offset: number) =>
            spectator.component
                .month_days()
                .find((_) => _.id === addDays(month, offset).valueOf());
        expect(day(6).disabled).toBe(false);
        expect(day(6).is_end).toBe(true);
        expect(day(7).disabled).toBe(true);
    });

    it('should flag today and the days outside the shown month', () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(new Date(2026, 5, 10, 12));
        spectator.component.nextMonth();
        spectator.component.previousMonth();
        vi.useRealTimers();
        const days = spectator.component.month_days();
        // June 2026 starts on a Monday, so the grid starts on Sunday 31 May
        expect(days).toHaveLength(42);
        expect(days[0].is_month).toBe(false);
        expect(days[1]).toMatchObject({ id: month, is_month: true });
        expect(days.filter((_) => _.is_today).map((_) => _.id)).toEqual([
            new Date(2026, 5, 10).valueOf(),
        ]);
    });
});
