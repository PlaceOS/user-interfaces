import { FormsModule, NgControl } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { addDays, format, set, startOfMinute } from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';
import { MockComponent, MockProvider } from 'ng-mocks';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {
    getTimeInTimezone,
    getTimezoneOffsetInMinutes,
    randomInt,
} from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DateFieldComponent } from '../lib/date-field.component';

describe('DateFieldComponent', () => {
    let spectator: Spectator<DateFieldComponent>;
    const reference_date = new Date('2026-04-12T12:00:00.000Z');
    const createComponent = createComponentFactory({
        component: DateFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            mockComponent(CustomTooltipComponent),
        ],
        providers: [MockProvider(NgControl)],
        imports: [
            MatDatepickerModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    const pickTimezoneBehindLocal = () => {
        const local_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const local_offset = getTimezoneOffsetInMinutes(
            local_timezone,
            reference_date,
        );
        const supported_timezones =
            ((Intl as any).supportedValuesOf?.('timeZone') as string[]) || [
                'Pacific/Pago_Pago',
                'Pacific/Honolulu',
                'America/Adak',
                'America/Anchorage',
                'America/Los_Angeles',
                'America/New_York',
                'UTC',
            ];
        return supported_timezones
            .filter((timezone) => {
                try {
                    return (
                        getTimezoneOffsetInMinutes(timezone, reference_date) <
                        local_offset
                    );
                } catch {
                    return false;
                }
            })
            .sort(
                (left, right) =>
                    getTimezoneOffsetInMinutes(left, reference_date) -
                    getTimezoneOffsetInMinutes(right, reference_date),
            )[0];
    };

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should be able to be disabled', () => {
        expect('button').not.toBeDisabled();
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        expect('button').toBeDisabled();
    });

    it('should use a non-submit trigger button', () => {
        expect(spectator.query('button')).toHaveAttribute('type', 'button');
    });

    it('should handler external changes to the date selected', () => {
        spectator.component.writeValue(Date.now());
        spectator.detectChanges();

        expect(spectator.component.date()).not.toBeNull();
        const new_date = addDays(new Date(), randomInt(12, 2));
        spectator.component.writeValue(new_date.valueOf());
        spectator.detectChanges();
        expect(format(spectator.component.date(), 'MMMM d, yyyy')).toEqual(
            format(new_date, 'MMMM d, yyyy'),
        );
    });

    it('should allow clearing the selected date', () => {
        spectator.component.writeValue(Date.now());
        spectator.detectChanges();

        spectator.component.clearValue();
        spectator.detectChanges();

        expect(spectator.component.date()).toBeNull();
        expect(spectator.query('button[aria-label="Clear date"]')).toBeNull();
    });

    it('should keep empty values empty when written externally', () => {
        spectator.component.writeValue(null);
        spectator.detectChanges();

        expect(spectator.component.date()).toBeNull();
        expect(spectator.query('button[aria-label="Clear date"]')).toBeNull();
    });

    it('should preserve the selected calendar day in the configured timezone', () => {
        const timezone = pickTimezoneBehindLocal();
        expect(timezone).toBeTruthy();
        const old_date = new Date('2026-04-08T15:30:00.000Z').valueOf();
        const new_date = new Date('2026-04-12T00:00:00.000Z').valueOf();
        const on_change = vi.fn();
        spectator.setInput('from', 1);
        spectator.setInput('timezone', timezone);
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue(old_date);

        spectator.component.setValue(new_date);

        const { hours, minutes } = getTimeInTimezone(old_date, timezone);
        const selected_date = new Date(new_date);
        const expected = startOfMinute(
            fromZonedTime(
                set(toZonedTime(old_date, timezone), {
                    year: selected_date.getFullYear(),
                    month: selected_date.getMonth(),
                    date: selected_date.getDate(),
                    hours,
                    minutes,
                    seconds: 0,
                    milliseconds: 0,
                }),
                timezone,
            ),
        ).valueOf();
        expect(on_change).toHaveBeenCalledWith(
            expected,
        );
    });
});
