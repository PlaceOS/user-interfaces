import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockModule } from 'ng-mocks';
import { HostSelectFieldComponent } from '../lib/host-select-field.component';
import { of } from 'rxjs';
import { StaffUser, User } from 'libs/users/src/lib/user.class';

jest.mock('@placeos/users');
jest.mock('libs/calendar/src/lib/calendar.fn');

import * as user_mod from '@placeos/users';
import * as cal_fns from 'libs/calendar/src/lib/calendar.fn';
import { FormsModule } from '@angular/forms';

describe('HostSelectFieldComponent', () => {
    let spectator: Spectator<HostSelectFieldComponent>;
    const createComponent = createComponentFactory({
        component: HostSelectFieldComponent,
        providers: [],
        declarations: [],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            FormsModule,
        ],
    });

    beforeEach(() => {
        (user_mod.showStaff as any) = jest.fn((id) =>
            of(new StaffUser({ id }))
        );
        (cal_fns.queryCalendars as any) = jest.fn(() => of([]));
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should handle external value changes', () => {
        expect(spectator.component.item).toBeUndefined();
        const user = new StaffUser({ email: 'test@t.com' });
        spectator.component.writeValue(user);
        expect(spectator.component.item).toBe(user);
    });

    it('should handle internal value changes', async () => {
        expect(spectator.component.item).toBeUndefined();
        const user = new User({ email: 'test@t.com' });
        const spy = jest.fn();
        spectator.component.registerOnChange(spy);
        await spectator.component.setValue(user.email);
        expect(spectator.component.item.email).toBe(user.email);
        expect(spy).toBeCalledWith(user);
    });

    it('should handle disable being toggled', () => {
        expect(spectator.component.disabled).toBeFalsy();
        spectator.component.setDisabledState(true);
        expect(spectator.component.disabled).toBeTruthy();
    });
});
