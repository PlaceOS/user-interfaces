import { signal, WritableSignal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { PlaceOS_Service, SettingsService } from '@placeos/common';
import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    let chat_enabled: WritableSignal<boolean>;
    const placeos_service = { init: vi.fn() };

    const create_component = createRoutingFactory({
        component: AppComponent,
        declarations: [
            MockComponent(GlobalBannerComponent),
            MockComponent(GlobalLoadingComponent),
            MockComponent(ChatComponent),
        ],
        detectChanges: false,
        providers: [
            { provide: PlaceOS_Service, useValue: placeos_service },
            MockProvider(SettingsService, {
                signal: ((_name: string, _default: boolean) =>
                    chat_enabled) as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        chat_enabled = signal(false);
        placeos_service.init.mockResolvedValue(undefined);
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should initialise the PlaceOS service on init', () => {
        spectator.component.ngOnInit();

        expect(placeos_service.init).toHaveBeenCalledTimes(1);
    });

    it('should expose chat availability sourced from settings', () => {
        expect(spectator.component.has_chat()).toBe(false);
        chat_enabled.set(true);
        expect(spectator.component.has_chat()).toBe(true);
    });

    it('should render the banner, router outlet and loading shells', () => {
        spectator.detectChanges();

        expect(spectator.query('global-banner')).toBeTruthy();
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('global-loading')).toBeTruthy();
    });

    it('should only render the chat when chat is enabled in settings', () => {
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeFalsy();

        chat_enabled.set(true);
        spectator.detectChanges();
        expect(spectator.query('global-chat')).toBeTruthy();
    });
});
