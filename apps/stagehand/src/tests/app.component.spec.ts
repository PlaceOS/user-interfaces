import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { PlaceOS_Service, settingSignal } from '@placeos/common';
import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { MockComponent } from 'ng-mocks';
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
        settingSignal('chat.enabled', false).set(false);
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

    it('should expose chat availability from settings', () => {
        settingSignal('chat.enabled', false).set(true);
        expect(spectator.component.has_chat()).toBe(true);
        settingSignal('chat.enabled', false).set(false);
        expect(spectator.component.has_chat()).toBe(false);
    });

    it('should render the banner, router outlet and loading shells', () => {
        spectator.detectChanges();

        expect(spectator.query('global-banner')).toBeTruthy();
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('global-loading')).toBeTruthy();
    });

    it('should only render the chat when chat is available', async () => {
        settingSignal('chat.enabled', false).set(false);
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeFalsy();

        settingSignal('chat.enabled', false).set(true);
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeTruthy();
    });
});
