import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { StatusOverlayComponent } from '../lib/status-overlay.component';

describe('StatusOverlayComponent', () => {
    let spectator: SpectatorRouting<StatusOverlayComponent>;
    const createComponent = createRoutingFactory({
        component: StatusOverlayComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MatProgressSpinnerModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
