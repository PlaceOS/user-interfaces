import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { LockerModalComponent } from '../../app/lockers/locker-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

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
        const emit = vi.spyOn(spectator.component.event, 'emit');

        spectator.component.postForm();

        expect(emit).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should emit a done event with no assignee when none is set', () => {
        spectator = createComponent();
        const emit = vi.spyOn(spectator.component.event, 'emit');
        spectator.component.model.update((m) => ({ ...m, name: 'Locker A' }));

        spectator.component.postForm();

        expect(emit).toHaveBeenCalledWith(
            expect.objectContaining({ reason: 'done' }),
        );
        const metadata = emit.mock.calls[0][0].metadata as any;
        expect(metadata.name).toBe('Locker A');
        expect(metadata.assigned_to).toBe('');
    });

    it('should keep the stored assignee when the staff lookup fails', async () => {
        vi.mocked(ts_client.get).mockRejectedValue('offline');
        dialog_data.locker = {
            id: 'locker-3',
            name: 'Locker 3',
            assigned_to: 'jane@example.com',
            assigned_name: 'Jane',
        };
        spectator = createComponent();
        await spectator.component.ngOnInit();
        const emit = vi.spyOn(spectator.component.event, 'emit');

        spectator.component.postForm();

        const metadata = emit.mock.calls[0][0].metadata as any;
        expect(metadata.assigned_to).toBe('jane@example.com');
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
