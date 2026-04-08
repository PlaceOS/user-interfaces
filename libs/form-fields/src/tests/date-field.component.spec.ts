import { fakeAsync } from '@angular/core/testing';
import { FormsModule, NgControl } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { addDays, format } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {
    getTimeInTimezone,
    randomInt,
    setTimeInTimezone,
} from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DateFieldComponent } from '../lib/date-field.component';

describe('DateFieldComponent', () => {
    let spectator: Spectator<DateFieldComponent>;
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

    it('should handler external changes to the date selected', fakeAsync(() => {
        spectator.component.writeValue(Date.now());
        spectator.detectChanges();

        expect(spectator.component.date()).not.toBeNull();
        const new_date = addDays(new Date(), randomInt(12, 2));
        spectator.component.writeValue(new_date.valueOf());
        spectator.detectChanges();
        spectator.tick(600);
        expect(format(spectator.component.date(), 'MMMM d, yyyy')).toEqual(
            format(new_date, 'MMMM d, yyyy'),
        );
    }));

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

    it('should preserve wall-clock time in the configured timezone', () => {
        const timezone = 'UTC';
        const old_date = new Date('2026-04-08T15:30:00.000Z').valueOf();
        const new_date = new Date('2026-04-12T00:00:00.000Z').valueOf();
        const on_change = jest.fn();
        spectator.setInput('timezone', timezone);
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue(old_date);

        spectator.component.setValue(new_date);

        const { hours, minutes } = getTimeInTimezone(old_date, timezone);
        expect(on_change).toHaveBeenCalledWith(
            setTimeInTimezone(new_date, hours, minutes, timezone),
        );
    });
});
