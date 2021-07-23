import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { PointsStateService } from '../../app/points/points-state.service';
import { PointsTopbarComponent } from '../../app/points/points-topbar.component';

import { PointsComponent } from '../../app/points/points.component';
import { SidebarComponent } from '../../app/ui/sidebar.component';

describe('PointsComponent', () => {
    let spectator: SpectatorRouting<PointsComponent>;
    const createComponent = createRoutingFactory({
        component: PointsComponent,
        providers: [
            {
                provide: PointsStateService,
                useValue: {
                    newAsset: jest.fn(),
                },
            },
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
