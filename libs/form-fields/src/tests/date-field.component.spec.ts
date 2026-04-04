import { fakeAsync } from '@angular/core/testing';
import { FormsModule, NgControl } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { addDays, format } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { randomInt } from '@placeos/common';
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
});
