import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IconComponent } from '@placeos/components';

import { NewUserModalComponent } from '../lib/new-user-modal.component';
import { MockComponent } from 'ng-mocks';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { UserFormComponent } from '../lib/user-form.component';
import { User } from '../lib/user.class';

describe('NewUserModalComponent', () => {
    let spectator: Spectator<NewUserModalComponent>;
    const createComponent = createComponentFactory({
        component: NewUserModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(UserFormComponent),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: { },
            },
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the form', () => {
        expect('user-form').toExist();
    });

    it('should show the action buttons', () => {
        expect('footer button').toHaveLength(2);
    });

    it('should emit user details on save', (done) => {
        expect('footer button:not([mat-dialog-close])').toExist();
        const form = spectator.component.form;
        form.controls.name.setValue('support');
        form.controls.organisation.setValue('placeOS');
        form.controls.email.setValue('support@aca.im');
        spectator.component.event.subscribe((event) => {
            if (event.reason === 'done') {
                expect(event.metadata.name).toBe('support');
                expect(event.metadata.organisation).toBe('placeOS');
                expect(event.metadata.email).toBe('support@aca.im');
                done();
            }
        });
        spectator.click('footer button:not([mat-dialog-close])');
    });
});
