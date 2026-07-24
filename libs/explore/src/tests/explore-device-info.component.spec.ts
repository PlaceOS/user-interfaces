import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider, ngMocks } from 'ng-mocks';

import { ExploreDeviceInfoComponent } from '../lib/explore-device-info.component';

vi.mock('@placeos/ts-client');

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
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show location and range', () => {
        expect('[name="dot"]').toExist();
        spectator
            .query('[shadow]')
            .dispatchEvent(new MouseEvent('mouseenter'));
        spectator.detectChanges();
        expect('[name="radius"]').toExist();
    });
});
