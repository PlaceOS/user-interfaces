import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { DateCalendarComponent } from '../lib/date-calendar.component';

describe('DateCalendarComponent', () => {
    let spectator: Spectator<DateCalendarComponent>;
    const createComponent = createComponentFactory({
        component: DateCalendarComponent,
        providers: [
            MockProvider(SettingsService, {
                signal: vi.fn(
                    (_: string, fallback: number) => () => fallback,
                ) as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 3, 22, 12));
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should ignore invalid written values when generating dates', () => {
        spectator.component.writeValue(Number.NaN);
        spectator.detectChanges();

        const ids = spectator.component.displayed_dates().map((day) => day.id);
        expect(ids).toHaveLength(42);
        expect(ids.every((id) => Number.isFinite(id))).toBe(true);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('should allow picking the day equal to the latest allowed date', () => {
        const last_day = new Date(2026, 3, 30).valueOf();
        spectator.setInput({ to: last_day });
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.setValue(last_day);
        expect(on_change).toHaveBeenCalledWith(last_day);
    });

    it('should ignore a day outside the allowed dates', () => {
        spectator.setInput({
            from: new Date(2026, 3, 10).valueOf(),
            to: new Date(2026, 3, 20).valueOf(),
        });
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.setValue(new Date(2026, 3, 9).valueOf());
        spectator.component.setValue(new Date(2026, 3, 21).valueOf());
        expect(on_change).not.toHaveBeenCalled();
        expect(spectator.component.active_date()).toBe(
            new Date(2026, 3, 22).valueOf(),
        );
    });

    it('should keep the time of day when a day is picked', () => {
        spectator.component.setValue(new Date(2026, 3, 25).valueOf());
        expect(spectator.component.date()).toBe(
            new Date(2026, 3, 25, 12).valueOf(),
        );
        expect(spectator.component.active_date()).toBe(
            new Date(2026, 3, 25).valueOf(),
        );
    });

    it('should disable every day when the control is disabled', () => {
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        const days = spectator.queryAll('button[name="schedule-set-date"]');
        expect(days).toHaveLength(42);
        expect(days.every((day) => (day as HTMLButtonElement).disabled)).toBe(
            true,
        );
    });
});
