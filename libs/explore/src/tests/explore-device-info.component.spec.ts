import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ExploreDeviceInfoComponent } from '../lib/explore-device-info.component';

jest.mock('@placeos/ts-client');

import { MAP_FEATURE_DATA, SettingsService } from '@placeos/common';
import { FixedPipe } from '@placeos/components';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';

describe('ExploreDeviceInfoComponent', () => {
    let spectator: Spectator<ExploreDeviceInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreDeviceInfoComponent,
        declarations: [FixedPipe, MockComponent(CustomTooltipComponent)],
        providers: [
            MockProvider(MAP_FEATURE_DATA, {
                mac: 'User',
                variance: 10,
                zoom$: of(1),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [PortalModule, OverlayModule],
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
