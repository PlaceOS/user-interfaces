import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { PlaceOS_Service, settingSignal } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    let placeos: {
        init: jest.Mock;
        setInitialToken: jest.Mock;
    };

    const createComponent = createRoutingFactory({
        component: AppComponent,
        detectChanges: false,
        declarations: [
            mockComponent(GlobalBannerComponent),
            mockComponent(GlobalLoadingComponent),
            mockComponent(ChatComponent),
        ],
    });

    function setLocationHref(path: string) {
        window.history.replaceState({}, '', path);
    }

    beforeEach(() => {
        localStorage.clear();
        VirtualKeyboardComponent.enabled = false;
        settingSignal<boolean>('chat.enabled', false).set(false);
        setLocationHref('/');
        placeos = { init: jest.fn(), setInitialToken: jest.fn() };
        spectator = createComponent({
            providers: [MockProvider(PlaceOS_Service, placeos as any)],
        });
    });

    afterEach(() => {
        setLocationHref('/');
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should initialise the PlaceOS service on init', () => {
        spectator.component.ngOnInit();
        expect(placeos.init).toHaveBeenCalled();
    });

    it('should enable the virtual keyboard when OSK is enabled in storage', () => {
        localStorage.setItem('OSK.enabled', 'true');
        spectator.component.ngOnInit();
        expect(VirtualKeyboardComponent.enabled).toBe(true);
    });

    it('should disable the virtual keyboard when OSK is not enabled', () => {
        localStorage.setItem('OSK.enabled', 'false');
        spectator.component.ngOnInit();
        expect(VirtualKeyboardComponent.enabled).toBe(false);
    });

    it('should not set an initial token when not in public mode', () => {
        setLocationHref('/?access_token=abc123');
        spectator.component.ngOnInit();
        expect(placeos.setInitialToken).not.toHaveBeenCalled();
    });

    it('should set the initial token from the URL when in public mode', () => {
        setLocationHref('/?public=true&access_token=abc123');
        spectator.component.ngOnInit();
        expect(placeos.setInitialToken).toHaveBeenCalledWith('abc123');
    });

    it('should not set an initial token in public mode when none is present', () => {
        setLocationHref('/?public=true');
        spectator.component.ngOnInit();
        expect(placeos.setInitialToken).not.toHaveBeenCalled();
    });

    it('should expose chat state from settings', () => {
        expect(spectator.component.has_chat()).toBe(false);
        settingSignal<boolean>('chat.enabled', false).set(true);
        expect(spectator.component.has_chat()).toBe(true);
    });

    it('should render the chat component only when chat is enabled', () => {
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeFalsy();
        settingSignal<boolean>('chat.enabled', false).set(true);
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeTruthy();
    });
});
