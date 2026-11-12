import { FormsModule, NgControl } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { toZonedTime } from 'date-fns-tz';
import { MockComponent, MockProvider } from 'ng-mocks';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { getTimeInTimezone, getTimezoneOffsetInMinutes } from '@placeos/common';
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
        const supported_timezones = (Intl.supportedValuesOf?.(
            'timeZone',
        ) as string[]) || [
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

    const expectPreservedDateAndTime = (
        result: number,
        previous_date: number,
        selected_date: number,
        timezone: string,
    ) => {
        expect(getTimeInTimezone(result, timezone)).toEqual(
            getTimeInTimezone(previous_date, timezone),
        );
        const zoned_result = toZonedTime(result, timezone);
        const expected_date = new Date(selected_date);
        expect(zoned_result.getFullYear()).toEqual(expected_date.getFullYear());
        expect(zoned_result.getMonth()).toEqual(expected_date.getMonth());
        expect(zoned_result.getDate()).toEqual(expected_date.getDate());
    };

    it('should be able to be disabled', () => {
        expect('button').not.toBeDisabled();
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        expect('button').toBeDisabled();
    });

    it('should use a non-submit trigger button', () => {
        expect(spectator.query('button')).toHaveAttribute('type', 'button');
    });

    it('should show a date written by the form', () => {
        const date = new Date(2030, 3, 12, 10).valueOf();
        spectator.component.writeValue(date);
        spectator.detectChanges();
        expect(spectator.query('button')).toContainText('April 12, 2030');
    });

    it('should clear the selected date and tell the form', () => {
        const on_change = vi.fn();
        const on_touch = vi.fn();
        spectator.setInput('clear', true);
        spectator.component.registerOnChange(on_change);
        spectator.component.registerOnTouched(on_touch);
        spectator.component.writeValue(Date.now());
        spectator.detectChanges();

        spectator.click('button[icon]');
        spectator.detectChanges();

        expect(spectator.component.date()).toBeNull();
        expect(on_change).toHaveBeenCalledWith(null);
        expect(on_touch).toHaveBeenCalledWith(null);
        expect(spectator.query('button[icon]')).toBeDisabled();
    });

    it('should not set a date before the minimum', () => {
        const from = new Date(2030, 3, 10, 12).valueOf();
        const on_change = vi.fn();
        spectator.setInput('from', from);
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue(new Date(2030, 3, 12, 9).valueOf());

        spectator.component.setValue(new Date(2030, 3, 10).valueOf());

        expect(on_change).toHaveBeenCalledWith(from);
        expect(spectator.component.date()).toBe(from);
    });

    it('should preserve wall-clock time in the configured timezone', () => {
        const timezone = 'UTC';

        const old_date = new Date('2030-04-08T15:30:00.000Z').valueOf();
        const new_date = new Date(2030, 3, 12).valueOf();
        const on_change = vi.fn();
        spectator.setInput('timezone', timezone);
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue(old_date);

        spectator.component.setValue(new_date);

        expectPreservedDateAndTime(
            on_change.mock.calls[0][0],
            old_date,
            new_date,
            timezone,
        );
    });

    it('should keep a past date that the minimum allows', () => {
        const timezone = 'UTC';
        const old_date = new Date('2020-04-08T15:30:00.000Z').valueOf();
        const new_date = new Date(2020, 3, 12).valueOf();
        const on_change = vi.fn();
        spectator.setInput('from', 1);
        spectator.setInput('timezone', timezone);
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue(old_date);

        spectator.component.setValue(new_date);

        expectPreservedDateAndTime(
            on_change.mock.calls[0][0],
            old_date,
            new_date,
            timezone,
        );
    });

    it('should preserve the selected calendar day in the configured timezone', () => {
        const timezone = pickTimezoneBehindLocal();
        expect(timezone).toBeTruthy();

        const old_date = new Date('2030-04-08T15:30:00.000Z').valueOf();
        const new_date = new Date(2030, 3, 12).valueOf();
        const on_change = vi.fn();
        spectator.setInput('timezone', timezone);
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue(old_date);

        spectator.component.setValue(new_date);

        expectPreservedDateAndTime(
            on_change.mock.calls[0][0],
            old_date,
            new_date,
            timezone,
        );
    });
});
