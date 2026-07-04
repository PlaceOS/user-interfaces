import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
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
        providers: [
            MockProvider(PlaceOS_Service, {
                init: jest.fn().mockResolvedValue(undefined),
            } as any),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the banner, router outlet and loading indicator', () => {
        expect('global-banner').toExist();
        expect('router-outlet').toExist();
        expect('global-loading').toExist();
    });

    it('should initialise PlaceOS with mdm restart allowed on init', () => {
        const placeos = spectator.inject(PlaceOS_Service);
        spectator.component.ngOnInit();
        expect(placeos.init).toHaveBeenCalledWith({ allow_mdm_restart: true });
    });
});
