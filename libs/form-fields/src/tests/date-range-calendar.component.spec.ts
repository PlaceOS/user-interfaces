import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import {
    addDays,
    addMonths,
    isSameMonth,
    startOfDay,
    startOfMonth,
} from 'date-fns';

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
        spectator = createComponent({ props: { month } as any });
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render a full six week grid of days', () => {
        expect(spectator.component.month_days()).toHaveLength(42);
        expect(spectator.component.weekdays()).toHaveLength(7);
    });

    it('should set the start date on the first selection', () => {
        const start_change = jest.fn();
        spectator.component.startChange.subscribe(start_change);
        const day = addDays(month, 4).valueOf();
        spectator.component.selectDate(day);
        expect(spectator.component.start()).toBe(day);
        expect(start_change).toHaveBeenCalledWith(day);
    });

    it('should set the end date on a later second selection', () => {
        const end_change = jest.fn();
        spectator.component.endChange.subscribe(end_change);
        const start = addDays(month, 4).valueOf();
        const end = addDays(month, 8).valueOf();
        spectator.component.selectDate(start);
        spectator.component.selectDate(end);
        expect(spectator.component.end()).toBe(end);
        expect(end_change).toHaveBeenCalledWith(end);
    });

    it('should restart the range when selecting a date before the start', () => {
        const start_change = jest.fn();
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
        expect(spectator.component.end()).toBe(hovered);
    });

    it('should ignore hovered dates before a start is chosen', () => {
        spectator.component.setHoveredDate(addDays(month, 6).valueOf());
        expect(spectator.component.end()).toBeUndefined();
    });

    it('should navigate between months', () => {
        spectator.component.nextMonth();
        expect(isSameMonth(spectator.component.month(), addMonths(month, 1))).toBe(
            true,
        );
        spectator.component.previousMonth();
        expect(isSameMonth(spectator.component.month(), month)).toBe(true);
    });

    it('should disable days before the earliest allowed date', () => {
        const from = addDays(month, 10).valueOf();
        spectator.setInput('from', from);
        spectator.component.ngOnChanges({
            start: { currentValue: undefined } as any,
        } as any);
        const before = spectator.component
            .month_days()
            .find((_) => _.id === addDays(month, 5).valueOf());
        expect(before?.disabled).toBe(true);
    });

    it('should flag today and month membership', () => {
        const today = spectator.component
            .month_days()
            .find((_) => startOfDay(_.id).valueOf() === startOfDay(Date.now()).valueOf());
        if (today) expect(today.is_today).toBe(true);
        const in_month = spectator.component
            .month_days()
            .find((_) => _.id === addDays(month, 4).valueOf());
        expect(in_month?.is_month).toBe(true);
    });
});
