import { DateFieldComponent } from '../lib/date-field.component';

import * as dayjs from 'dayjs';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { IconComponent } from '@placeos/components';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { addDays, format } from 'date-fns';
import { randomInt } from '@placeos/common';
import { fakeAsync } from '@angular/core/testing';

describe('DateFieldComponent', () => {
    let spectator: Spectator<DateFieldComponent>;
    const createComponent = createComponentFactory({
        component: DateFieldComponent,
        declarations: [MockComponent(IconComponent)],
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
        expect('input').not.toBeDisabled();
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        expect('input').toBeDisabled();
    });

    it('should handler external changes to the date selected', fakeAsync(() => {
        const formatted_date = format(new Date(), 'MMMM d, yyyy');
        expect('input').toHaveValue(formatted_date);
        const new_date = addDays(new Date(), randomInt(12, 2));
        spectator.component.writeValue(new_date.valueOf());
        spectator.detectChanges();
        spectator.tick(600);
        expect('input').toHaveValue(format(new_date, 'MMMM d, yyyy'));
    }));
});
