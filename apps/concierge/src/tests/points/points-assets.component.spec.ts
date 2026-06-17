import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { IconComponent, SimpleTableComponent } from '@placeos/components';
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
                    assets: signal([]),
                    newAsset: jest.fn(),
                    removeAsset: jest.fn(),
                },
            },
            MockProvider(OrganisationService, {}),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
