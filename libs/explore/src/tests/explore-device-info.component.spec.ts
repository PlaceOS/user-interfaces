import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    CustomTooltipComponent,
    FixedPipe,
    MAP_FEATURE_DATA,
} from '@placeos/components';

import { ExploreDeviceInfoComponent } from '../lib/explore-device-info.component';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';
import { MockComponent, MockProvider } from 'ng-mocks';
import { SettingsService } from '@placeos/common';
import { of } from 'rxjs';

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
