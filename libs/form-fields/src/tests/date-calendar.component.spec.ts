import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { DateCalendarComponent } from '../lib/date-calendar.component';

describe('DateCalendarComponent', () => {
    let spectator: Spectator<DateCalendarComponent>;
    const createComponent = createComponentFactory({
        component: DateCalendarComponent,
        providers: [
            MockProvider(SettingsService, {
                signal: jest.fn((_: string, fallback: number) => () => fallback),
            }),
        ],
    });

    beforeEach(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2026, 3, 22, 12));
        spectator = createComponent();
    });

    afterEach(() => jest.useRealTimers());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should ignore invalid written values when generating dates', () => {
        spectator.component.writeValue(Number.NaN);
        spectator.detectChanges();

        const ids = spectator.component.displayed_dates().map((day) => day.id);
        expect(ids).toHaveLength(42);
        expect(ids.every((id) => Number.isFinite(id))).toBe(true);
        expect(new Set(ids).size).toBe(ids.length);
    });
});
