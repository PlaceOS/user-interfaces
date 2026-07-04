import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { LockerModalComponent } from '../../app/lockers/locker-modal.component';

jest.mock('@placeos/users');

describe('LockerModalComponent', () => {
    let spectator: Spectator<LockerModalComponent>;
    let dialog_data: any;

    const createComponent = createComponentFactory({
        component: LockerModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            MockProvider(MatDialogRef, { disableClose: false } as any),
        ],
    });

    beforeEach(() => {
        dialog_data = { bank: { id: 'bank-1', height: 6, lockers: [] } };
    });

    it('should hydrate the model from the provided locker', () => {
        dialog_data.locker = {
            id: 'locker-3',
            name: 'Locker 3',
            position: [2, 1],
            size: [1, 2],
            accessible: true,
            bookable: true,
            features: ['Charger'],
        };
        spectator = createComponent();

        expect(spectator.component.id).toBe('locker-3');
        expect(spectator.component.model().name).toBe('Locker 3');
        expect(spectator.component.model().position).toEqual([2, 1]);
        expect(spectator.component.model().features).toEqual(['Charger']);
    });

    it('should clear the assigned user fields', () => {
        spectator = createComponent();
        spectator.component.model.update((m) => ({
            ...m,
            assigned_user: { email: 'a@x.com', name: 'A' } as any,
            assigned_to: 'a@x.com',
            assigned_name: 'A',
        }));

        spectator.component.clearUser();

        const model = spectator.component.model();
        expect(model.assigned_user).toBeNull();
        expect(model.assigned_to).toBe('');
        expect(model.assigned_name).toBe('');
    });

    it('should not emit when the required name is missing', () => {
        spectator = createComponent();
        const emit = jest.spyOn(spectator.component.event, 'emit');

        spectator.component.postForm();

        expect(emit).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should emit a done event stripping unassigned user fields', () => {
        spectator = createComponent();
        const emit = jest.spyOn(spectator.component.event, 'emit');
        spectator.component.model.update((m) => ({ ...m, name: 'Locker A' }));

        spectator.component.postForm();

        expect(emit).toHaveBeenCalledWith(
            expect.objectContaining({ reason: 'done' }),
        );
        const metadata = emit.mock.calls[0][0].metadata as any;
        expect(metadata.name).toBe('Locker A');
        expect('assigned_to' in metadata).toBe(false);
        expect('assigned_name' in metadata).toBe(false);
    });

    it('should flag positions that overlap an existing locker', async () => {
        dialog_data.bank.lockers = [
            { id: 'other', position: [0, 0], size: [1, 1] },
        ];
        spectator = createComponent();
        await spectator.fixture.whenStable();

        expect(spectator.component.form.position().invalid()).toBe(true);
    });
});
