import { fakeAsync } from '@angular/core/testing';
import { FormsModule, NgControl } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { addDays, format } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { randomInt } from '@placeos/common';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DateFieldComponent } from '../lib/date-field.component';

describe('DateFieldComponent', () => {
    let spectator: Spectator<DateFieldComponent>;
    const createComponent = createComponentFactory({
        component: DateFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CustomTooltipComponent),
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

    it('should handler external changes to the date selected', fakeAsync(() => {
        expect(format(spectator.component.date, 'MMMM d, yyyy')).toEqual(
            format(new Date(), 'MMMM d, yyyy'),
        );
        const new_date = addDays(new Date(), randomInt(12, 2));
        spectator.component.writeValue(new_date.valueOf());
        spectator.detectChanges();
        spectator.tick(600);
        expect(format(spectator.component.date, 'MMMM d, yyyy')).toEqual(
            format(new_date, 'MMMM d, yyyy'),
        );
    }));
});
