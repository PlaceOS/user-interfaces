import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { StaffUser } from '@placeos/common';
import { HostSelectFieldComponent } from '../lib/host-select-field.component';

jest.mock('@placeos/users');
jest.mock('@placeos/events');

import * as cal_fns from '@placeos/events';
import * as user_mod from '@placeos/users';

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
            of(new StaffUser({ id })),
        );
        (cal_fns.queryCalendars as any) = jest.fn(() => of([{}]));
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should handle external value changes', () => {
        expect(spectator.component.item).toBeUndefined();
        const user = new StaffUser({ email: 'test@t.com' });
        spectator.component.writeValue(user);
        spectator.detectChanges();
        expect(spectator.component.item).toBe(user);
    });

    // it('should handle internal value changes', async () => {
    //     expect(spectator.component.item).toBeUndefined();
    //     const user = new StaffUser({ email: 'test@t.com' });
    //     const spy = jest.fn();
    //     spectator.component.registerOnChange(spy);
    //     await spectator.component.setValue(user.email);
    //     expect(spectator.component.item.email).toBe(user.email);
    //     expect(spy).toHaveBeenCalledWith(user);
    // });

    it('should handle disable being toggled', () => {
        expect(spectator.component.disabled).toBeFalsy();
        spectator.component.setDisabledState(true);
        expect(spectator.component.disabled).toBeTruthy();
    });
});
