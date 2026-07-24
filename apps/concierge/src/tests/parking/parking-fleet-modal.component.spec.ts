import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { DialogEvent } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ParkingFleetModalComponent } from '../../app/parking/parking-fleet-modal.component';

describe('ParkingFleetModalComponent', () => {
    let spectator: Spectator<ParkingFleetModalComponent>;
    let data: any;
    const dialog_ref = { disableClose: false } as MatDialogRef<any>;

    const createComponent = createComponentFactory({
        component: ParkingFleetModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => data },
            { provide: MatDialogRef, useValue: dialog_ref },
        ],
    });

    beforeEach(() => {
        dialog_ref.disableClose = false;
    });

    it('should initialise the form model from the dialog data', () => {
        data = {
            id: 'vehicle-1',
            name: 'Van 1',
            plate_number: 'ABC123',
            car_model: 'Transit',
            car_colour: 'white',
            notes: 'Fleet note',
        };

        spectator = createComponent();

        expect(spectator.component.id()).toBe('vehicle-1');
        expect(spectator.component.model()).toMatchObject({
            name: 'Van 1',
            plate_number: 'ABC123',
            car_model: 'Transit',
            car_colour: 'white',
            notes: 'Fleet note',
        });
    });

    it('should not emit or enter saving state when required fields are missing', () => {
        data = { name: 'Van 1' };
        spectator = createComponent();
        const emitted: DialogEvent[] = [];
        spectator.component.event.subscribe((e) => emitted.push(e));

        spectator.component.postForm();

        expect(emitted).toHaveLength(0);
        expect(spectator.component.loading()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
    });

    it('should emit the completed model and lock the dialog when valid', () => {
        data = { name: 'Van 1', plate_number: 'ABC123' };
        spectator = createComponent();
        const emitted: DialogEvent[] = [];
        spectator.component.event.subscribe((e) => emitted.push(e));

        spectator.component.postForm();

        expect(emitted).toHaveLength(1);
        expect(emitted[0].reason).toBe('done');
        expect(emitted[0].metadata).toMatchObject({
            name: 'Van 1',
            plate_number: 'ABC123',
        });
        expect(spectator.component.loading()).toBe(true);
        expect(dialog_ref.disableClose).toBe(true);
    });
});
