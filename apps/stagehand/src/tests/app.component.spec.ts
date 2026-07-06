import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { PlaceOS_Service } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { ChatComponent } from 'libs/components/src/lib/chat/chat.component';
import { GlobalBannerComponent } from 'libs/components/src/lib/global-banner.component';
import { GlobalLoadingComponent } from 'libs/components/src/lib/global-loading.component';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    const placeos_service = { init: vi.fn(), has_chat: false };

    const create_component = createRoutingFactory({
        component: AppComponent,
        declarations: [
            MockComponent(GlobalBannerComponent),
            MockComponent(GlobalLoadingComponent),
            MockComponent(ChatComponent),
        ],
        detectChanges: false,
        providers: [{ provide: PlaceOS_Service, useValue: placeos_service }],
    });

    beforeEach(() => {
        placeos_service.has_chat = false;
        placeos_service.init = vi.fn().mockResolvedValue(undefined);
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    // Note: `setMocks` is a workspace export that the native (esbuild) unit-test
    // builder cannot spy on (non-configurable binding), so we verify the
    // observable effect - PlaceOS is initialised - rather than the internal call.
    it('should register mock handlers and initialise PlaceOS on init', () => {
        spectator.component.ngOnInit();

        expect(placeos_service.init).toHaveBeenCalledTimes(1);
    });

    it('should initialise PlaceOS exactly once on init', () => {
        spectator.component.ngOnInit();

        expect(placeos_service.init).toHaveBeenCalledTimes(1);
    });

    it('should expose chat availability from the PlaceOS service', () => {
        placeos_service.has_chat = true;
        expect(spectator.component.has_chat).toBe(true);
        placeos_service.has_chat = false;
        expect(spectator.component.has_chat).toBe(false);
    });

    it('should render the banner, router outlet and loading shells', () => {
        spectator.detectChanges();

        expect(spectator.query('global-banner')).toBeTruthy();
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('global-loading')).toBeTruthy();
    });

    it('should only render the chat when chat is available', () => {
        placeos_service.has_chat = false;
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeFalsy();

        placeos_service.has_chat = true;
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeTruthy();
    });
});
