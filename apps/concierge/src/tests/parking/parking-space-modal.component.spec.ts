import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { ParkingSpaceModalComponent } from '../../app/parking/parking-space-modal.component';

describe('ParkingSpaceModalComponent', () => {
    let spectator: Spectator<ParkingSpaceModalComponent>;
    const data = {
        id: 'space-1',
        identifier: 'Bay 1',
        map_id: 'bay-1',
        features: ['EV Charger'],
        place_groups: ['staff'],
    };

    const createComponent = createComponentFactory({
        component: ParkingSpaceModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: data },
            MockProvider(MatDialogRef, { disableClose: false } as any),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should not reuse the source features array', () => {
        spectator.component.model.update((m) => ({
            ...m,
            features: [...(m.features || []), 'Covered'],
        }));

        expect(data.features).toEqual(['EV Charger']);
        expect(spectator.component.model().features).toEqual([
            'EV Charger',
            'Covered',
        ]);
    });
});
