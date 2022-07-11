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
import { MockComponent } from 'ng-mocks';

describe('ExploreDeviceInfoComponent', () => {
    let spectator: Spectator<ExploreDeviceInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreDeviceInfoComponent,
        declarations: [FixedPipe, MockComponent(CustomTooltipComponent)],
        providers: [
            {
                provide: MAP_FEATURE_DATA,
                useValue: { mac: 'User', variance: 10 },
            },
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
