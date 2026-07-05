import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { PlaceOS_Service } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { MockProvider } from 'ng-mocks';

import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    const createComponent = createRoutingFactory({
        component: AppComponent,
        declarations: [
            mockComponent(GlobalBannerComponent),
            mockComponent(GlobalLoadingComponent),
        ],
        providers: [MockProvider(PlaceOS_Service, { init: vi.fn() })],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the banner, loading indicator and router outlet', () => {
        expect('global-banner').toExist();
        expect('global-loading').toExist();
        expect('router-outlet').toExist();
    });

    it('should initialise PlaceOS on init', () => {
        const placeos = spectator.inject(PlaceOS_Service);
        expect(placeos.init).toHaveBeenCalled();
    });
});
