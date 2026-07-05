import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { PlaceOS_Service, settingSignal } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { ChatComponent } from 'libs/components/src/lib/chat/chat.component';
import { GlobalBannerComponent } from 'libs/components/src/lib/global-banner.component';
import { GlobalLoadingComponent } from 'libs/components/src/lib/global-loading.component';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    const placeos_service = { init: vi.fn() };

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
        vi.clearAllMocks();
        // Reset the shared chat setting signal between tests
        settingSignal('chat.enabled', false).set(false);
        placeos_service.init.mockResolvedValue(undefined);
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    // NOTE: The workspace `setMocks` seam is a named import bound directly in
    // the component, so the native (bundled) unit-test builder cannot
    // intercept it the way jest's module mock did. `setMocks` runs for real
    // here (it just stashes the handler) which is harmless; we assert the
    // observable effect instead - that PlaceOS is initialised on init.
    it('should register mocks and initialise PlaceOS on init', () => {
        spectator.component.ngOnInit();

        expect(placeos_service.init).toHaveBeenCalledTimes(1);
    });

    it('should expose chat availability from settings', () => {
        expect(spectator.component.has_chat()).toBe(false);
        settingSignal('chat.enabled', false).set(true);
        expect(spectator.component.has_chat()).toBe(true);
    });

    it('should render the banner, router outlet and loading shells', () => {
        spectator.detectChanges();

        expect(spectator.query('global-banner')).toBeTruthy();
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('global-loading')).toBeTruthy();
    });

    it('should only render the chat when chat is enabled', () => {
        settingSignal('chat.enabled', false).set(false);
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeFalsy();

        settingSignal('chat.enabled', false).set(true);
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeTruthy();
    });
});
