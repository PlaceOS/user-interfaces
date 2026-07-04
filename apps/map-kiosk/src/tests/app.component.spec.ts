import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { PlaceOS_Service, settingSignal } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    ChatComponent,
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
            mockComponent(ChatComponent),
            mockComponent(GlobalBannerComponent),
            mockComponent(GlobalLoadingComponent),
        ],
        providers: [MockProvider(PlaceOS_Service, { init: jest.fn() })],
    });

    beforeEach(() => {
        settingSignal('chat.enabled', false).set(false);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the banner and loading indicator', () => {
        expect('global-banner').toExist();
        expect('global-loading').toExist();
        expect('router-outlet').toExist();
    });

    it('should initialise PlaceOS on init', () => {
        const placeos = spectator.inject(PlaceOS_Service);
        expect(placeos.init).toHaveBeenCalled();
    });

    it('should only show the chat when enabled', () => {
        expect('global-chat').not.toExist();
        settingSignal('chat.enabled', false).set(true);
        spectator.detectChanges();
        expect('global-chat').toExist();
    });
});
