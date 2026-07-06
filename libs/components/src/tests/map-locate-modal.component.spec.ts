import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { IconComponent } from '../lib/icon.component';
import { InteractiveMapComponent } from '../lib/interactive-map.component';
import { MapLocateModalComponent } from '../lib/map-locate-modal.component';

describe('MapLocateModalComponent', () => {
    let spectator: Spectator<MapLocateModalComponent>;
    const createComponent = createComponentFactory({
        component: MapLocateModalComponent,
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                item: { map_id: '1', name: 'Item 1', level: {} },
            }),
            MockProvider(OrganisationService, { levelWithID: vi.fn() }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [MockModule(MatProgressSpinnerModule), FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
