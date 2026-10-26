import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import {
    ParkingSpaceModalComponent,
    ParkingSpaceModalData,
} from '../../app/parking/parking-space-modal.component';

describe('ParkingSpaceModalComponent', () => {
    let spectator: Spectator<ParkingSpaceModalComponent>;
    let dialog_data: ParkingSpaceModalData;

    const createComponent = createComponentFactory({
        component: ParkingSpaceModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            MockProvider(MatDialogRef, { disableClose: false } as any),
        ],
    });

    beforeEach(() => {
        dialog_data = {
            space: {
                id: 'space-1',
                identifier: 'Bay 1',
                map_id: 'bay-1',
                features: ['EV Charger'],
                place_groups: ['staff'],
            },
            levels: [
                {
                    id: 'level-1',
                    name: 'Level 1',
                    display_name: 'First Floor',
                },
            ],
            zone_id: 'level-1',
        };
        spectator = createComponent();
    });

    it('should not reuse the source features array', () => {
        spectator.component.model.update((m) => ({
            ...m,
            features: [...(m.features || []), 'Covered'],
        }));

        expect(dialog_data.space.features).toEqual(['EV Charger']);
        expect(spectator.component.model().features).toEqual([
            'EV Charger',
            'Covered',
        ]);
    });

    it('should initialise a new parking space with the default level', () => {
        dialog_data.space = {};
        spectator = createComponent();

        expect(spectator.component.is_new).toBe(true);
        expect(spectator.component.model().zone_id).toBe('level-1');
    });
});
