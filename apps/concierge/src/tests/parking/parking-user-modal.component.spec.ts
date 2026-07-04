import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { DialogEvent } from '@placeos/common';

import { ParkingUserModalComponent } from '../../app/parking/parking-user-modal.component';

describe('ParkingUserModalComponent', () => {
    let spectator: Spectator<ParkingUserModalComponent>;
    let data: any;
    const dialog_ref = { disableClose: false } as MatDialogRef<any>;

    const createComponent = createComponentFactory({
        component: ParkingUserModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => data },
            { provide: MatDialogRef, useValue: dialog_ref },
        ],
    });

    beforeEach(() => {
        dialog_ref.disableClose = false;
    });

    it('should initialise the model from data and map the legacy car_color field', () => {
        data = {
            id: 'user-1',
            name: 'Jane Doe',
            email: 'jane@example.com',
            plate_number: 'ZZZ999',
            car_color: 'blue',
            deny: true,
        };

        spectator = createComponent();

        expect(spectator.component.id()).toBe('user-1');
        expect(spectator.component.model()).toMatchObject({
            name: 'Jane Doe',
            email: 'jane@example.com',
            plate_number: 'ZZZ999',
            car_colour: 'blue',
            deny: true,
        });
    });

    it('should clear the selected user along with the name and email', () => {
        data = { name: 'Jane Doe', email: 'jane@example.com' };
        spectator = createComponent();
        spectator.component.model.update((m) => ({
            ...m,
            user: { id: 'u', name: 'Jane', email: 'jane@example.com' } as any,
        }));

        spectator.component.clearUser();

        const model = spectator.component.model();
        expect(model.user).toBeNull();
        expect(model.name).toBe('');
        expect(model.email).toBe('');
    });

    it('should not emit when the required name and email are missing', () => {
        data = { plate_number: 'ZZZ999' };
        spectator = createComponent();
        const emitted: DialogEvent[] = [];
        spectator.component.event.subscribe((e) => emitted.push(e));

        spectator.component.postForm();

        expect(emitted).toHaveLength(0);
        expect(spectator.component.loading()).toBe(false);
    });

    it('should emit the completed model and lock the dialog when valid', () => {
        data = { name: 'Jane Doe', email: 'jane@example.com' };
        spectator = createComponent();
        const emitted: DialogEvent[] = [];
        spectator.component.event.subscribe((e) => emitted.push(e));

        spectator.component.postForm();

        expect(emitted).toHaveLength(1);
        expect(emitted[0].reason).toBe('done');
        expect(emitted[0].metadata).toMatchObject({
            name: 'Jane Doe',
            email: 'jane@example.com',
        });
        expect(spectator.component.loading()).toBe(true);
        expect(dialog_ref.disableClose).toBe(true);
    });
});
