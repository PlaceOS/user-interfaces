import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { mockComponent } from '@placeos/common/tests';
import { PlaceOS_Service } from '@placeos/common';
import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
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
        providers: [
            MockProvider(PlaceOS_Service, {
                has_chat: false,
                init: vi.fn().mockResolvedValue(undefined),
            } as any),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the global banner and router outlet', () => {
        spectator.detectChanges();
        expect('global-banner').toExist();
        expect('router-outlet').toExist();
        expect('global-loading').toExist();
    });

    it('should not render the chat when chat is disabled', () => {
        spectator.detectChanges();
        expect('global-chat').not.toExist();
    });

    it('should render the chat when chat is enabled', () => {
        const placeos = spectator.inject(PlaceOS_Service);
        (placeos as any).has_chat = true;
        spectator.detectChanges();
        expect('global-chat').toExist();
    });

    it('should initialise PlaceOS on init', () => {
        const placeos = spectator.inject(PlaceOS_Service);
        spectator.component.ngOnInit();
        expect(placeos.init).toHaveBeenCalledWith({ allow_mdm_restart: true });
    });
});
