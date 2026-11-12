import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IconComponent } from 'libs/components/src/lib/icon.component';

import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { DialogEvent, User } from '@placeos/common';
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

    const emitted = () => {
        const events: DialogEvent[] = [];
        spectator.component.event.subscribe((e) => events.push(e));
        return events;
    };

    it('should not emit and should mark fields touched when the form is invalid', () => {
        spectator = createComponent();
        const events = emitted();
        spectator.click('footer button:not([mat-dialog-close])');
        expect(events).toEqual([]);
        expect(spectator.component.form().email().touched()).toBe(true);
    });

    it('should emit the entered details as an external user on save', () => {
        spectator = createComponent();
        const events = emitted();
        const form = spectator.component.form();
        form.name().value.set('support');
        form.organisation().value.set('placeOS');
        form.email().value.set('support@aca.im');
        spectator.click('footer button:not([mat-dialog-close])');
        expect(events).toHaveLength(1);
        const user = events[0].metadata as User;
        expect(events[0].reason).toBe('done');
        expect(user).toBeInstanceOf(User);
        expect(user.name).toBe('support');
        expect(user.organisation).toBe('placeOS');
        expect(user.email).toBe('support@aca.im');
        expect(user.is_external).toBe(true);
    });

    it('should start from the user passed in the dialog data', () => {
        spectator = createComponent({
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        user: new User({
                            id: 'u1',
                            name: 'Jim',
                            email: 'jim@place.tech',
                            organisation: 'PlaceOS',
                            phone: '0412 345 678',
                        }),
                    },
                },
            ],
        });
        const events = emitted();
        expect(spectator.component.form()().value()).toMatchObject({
            name: 'Jim',
            email: 'jim@place.tech',
            organisation: 'PlaceOS',
            phone: '0412 345 678',
        });
        spectator.component.form().name().value.set('James');
        spectator.click('footer button:not([mat-dialog-close])');
        const user = events[0].metadata as User;
        expect(user.name).toBe('James');
        expect(user.email).toBe('jim@place.tech');
    });
});
