import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider, ngMocks } from 'ng-mocks';
import { of } from 'rxjs';

import { ExploreDeviceInfoComponent } from '../lib/explore-device-info.component';

jest.mock('@placeos/ts-client');

import { MAP_FEATURE_DATA, SettingsService } from '@placeos/common';
import { FixedPipe } from '@placeos/components';

describe('ExploreDeviceInfoComponent', () => {
    let spectator: Spectator<ExploreDeviceInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreDeviceInfoComponent,
        ...ngMocks.guts(null, [FixedPipe, PortalModule, OverlayModule]),
        providers: [
            MockProvider(MAP_FEATURE_DATA, {
                mac: 'User',
                variance: 10,
                zoom$: of(1),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show location and range', () => {
        expect('[name="dot"]').toExist();
        expect('[name="radius"]').toExist();
    });
});
