import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { MapLocateModalComponent } from '../../app/overlays/map-locate-modal.component';

describe('MapLocateModalComponent', () => {
    let spectator: Spectator<MapLocateModalComponent>;
    const createComponent = createComponentFactory({
        component: MapLocateModalComponent,
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: { item: { map_id: '1', name: 'Item 1', level: {} } },
            },
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
