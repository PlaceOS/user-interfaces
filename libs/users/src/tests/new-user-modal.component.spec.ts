import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IconComponent } from 'libs/components/src/lib/icon.component';

import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';
import { NewUserModalComponent } from '../lib/new-user-modal.component';
import { UserFormComponent } from '../lib/user-form.component';

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
                useValue: {},
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

    it('should emit user details on save', async () => {
        expect('footer button:not([mat-dialog-close])').toExist();
        const form = spectator.component.form();
        form.name().value.set('support');
        form.organisation().value.set('placeOS');
        form.email().value.set('support@aca.im');
        const event = new Promise<any>((resolve) => {
            spectator.component.event.subscribe((event) => {
                if (event.reason === 'done') resolve(event);
            });
        });
        spectator.click('footer button:not([mat-dialog-close])');
        const result = await event;
        expect(result.metadata.name).toBe('support');
        expect(result.metadata.organisation).toBe('placeOS');
        expect(result.metadata.email).toBe('support@aca.im');
    });
});
