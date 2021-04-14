import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { UserFormComponent } from '../lib/user-form.component';
import { User } from '../lib/user.class';
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
        expect('.field').not.toExist();
        spectator.setInput({
            form: generateUserForm(new User({})),
        });
        spectator.detectChanges();
        expect('.field').toExist();
        expect('[name="name"]').toExist();
        expect('[name="email"]').toExist();
        expect('[name="org"]').toExist();
        expect('[name="phone"]').toExist();
        expect('[name="assistance-required"]').toExist();
        expect('[name="visit-expected"]').toExist();
    });
});
