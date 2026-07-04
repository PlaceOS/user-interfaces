import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { BuildingModalComponent } from '../../app/building-manager/building-modal.component';

describe('BuildingModalComponent', () => {
    let spectator: Spectator<BuildingModalComponent>;

    const createComponent = createComponentFactory({
        component: BuildingModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, { id: 'b1', display_name: 'Tower' }),
            MockProvider(MatDialogRef, { close: jest.fn() }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should expose the injected building via the signal', () => {
        expect(spectator.component.building()).toEqual({
            id: 'b1',
            display_name: 'Tower',
        });
    });

    it('should bump the save state when saving is triggered', () => {
        expect(spectator.component.save_state()).toBe(0);
        spectator.component.save();
        expect(spectator.component.save_state()).toBeGreaterThan(0);
    });

    it('should close the dialog with the provided value', () => {
        spectator.component.close({ id: 'saved' });
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith({
            id: 'saved',
        });
    });
});
