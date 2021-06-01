import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { FixedPipe, MAP_FEATURE_DATA } from '@placeos/components';

import { ExploreDeviceInfoComponent } from '../lib/explore-device-info.component';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';

describe('ExploreDeviceInfoComponent', () => {
    let spectator: Spectator<ExploreDeviceInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreDeviceInfoComponent,
        declarations: [FixedPipe],
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

    it('should show device details on hover', () => {
        (ts_client as any).getModule = jest.fn(() => ({
            execute: Promise.resolve(),
        }));
        spectator.dispatchMouseEvent('[name="radius"]', 'mouseenter');
        spectator.detectChanges();
        expect('[name="device-info"]').toExist();
        expect('[name="device-info"]').toContainText('User');
        expect('[name="device-info"]').toContainText('10.00m');
        expect('[name="device-info"] [type]').not.toExist();
        expect('[name="device-info"] [os]').not.toExist();
        expect('[name="device-info"] [ssid]').not.toExist();
        expect('[name="device-info"] [username]').toExist();
        expect('[name="device-info"] [user]').not.toExist();
        (spectator.component as any).manufacturer = 'Samsung';
        (spectator.component as any).os = 'Android';
        (spectator.component as any).ssid = 'U1234';
        (spectator.component as any).user = { name: 'Jim', type: 'Guest' };
        spectator.detectChanges();
        expect('[name="device-info"] [type]').toContainText('Samsung');
        expect('[name="device-info"] [os]').toContainText('Android');
        expect('[name="device-info"] [ssid]').toContainText('U1234');
        expect('[name="device-info"] [username]').toContainText('Jim');
        expect('[name="device-info"] [user]').toContainText('Guest');
    });
});
