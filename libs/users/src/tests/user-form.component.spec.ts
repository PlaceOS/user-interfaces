import { Injector } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { User } from '@placeos/common';
import { UserFormComponent } from '../lib/user-form.component';
import { generateUserForm } from '../lib/user.utilities';

describe('', () => {
    let spectator: Spectator<UserFormComponent>;
    const createComponent = createComponentFactory({
        component: UserFormComponent,
        imports: [MatFormFieldModule, MatInputModule, MatCheckboxModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show form fields', () => {
        expect('form').not.toExist();
        spectator.setInput({
            form: generateUserForm(new User({}), spectator.inject(Injector)),
        });
        spectator.detectChanges();
        expect('form').toExist();
        // Signal-forms' `[formField]` rewrites the native `name` attribute to
        // the field path, so assert the rendered fields via stable selectors.
        expect('label[for="name"]').toExist();
        expect('label[for="email"]').toExist();
        expect('label[for="org"]').toExist();
        expect('label[for="phone"]').toExist();
        expect(spectator.queryAll('input[matInput]').length).toBe(4);
        expect(spectator.queryAll('mat-checkbox').length).toBe(2);
    });
});
