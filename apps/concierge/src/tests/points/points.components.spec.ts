import { MatTabsModule } from '@angular/material/tabs';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { PointsStateService } from '../../app/points/points-state.service';
import { PointsTopbarComponent } from '../../app/points/points-topbar.component';

import { PointsComponent } from '../../app/points/points.component';
import { SidebarComponent } from '../../app/ui/sidebar.component';

describe('PointsComponent', () => {
    let spectator: SpectatorRouting<PointsComponent>;
    const createComponent = createRoutingFactory({
        component: PointsComponent,
        providers: [
            MockProvider(PointsStateService, {
                newAsset: jest.fn(),
            }),
        ],
        imports: [
            MatTabsModule
        ],
        declarations: [
            MockComponent(SidebarComponent),
            MockComponent(PointsTopbarComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should handle route changes');
});
