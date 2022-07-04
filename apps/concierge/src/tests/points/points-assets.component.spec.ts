import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTableComponent, IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { PointsAssetsComponent } from '../../app/points/points-assets.component';
import { PointsStateService } from '../../app/points/points-state.service';

describe('PointsAssetsComponent', () => {
    let spectator: Spectator<PointsAssetsComponent>;
    const createComponent = createComponentFactory({
        component: PointsAssetsComponent,
        providers: [
            {
                provide: PointsStateService,
                useValue: {
                    newAsset: jest.fn(),
                    removeAsset: jest.fn(),
                },
            },
        ],
        declarations: [
            MockComponent(CustomTableComponent),
            MockComponent(IconComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
