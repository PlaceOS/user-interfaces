import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { PlaceOS_Service, settingSignal } from '@placeos/common';
import { mocksInit } from '@placeos/mocks';
import { MockComponent } from 'ng-mocks';

import * as common_mod from '@placeos/common';

import { ChatComponent } from 'libs/components/src/lib/chat/chat.component';
import { GlobalBannerComponent } from 'libs/components/src/lib/global-banner.component';
import { GlobalLoadingComponent } from 'libs/components/src/lib/global-loading.component';
import { AppComponent } from '../app/app.component';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return { ...actual, setMocks: jest.fn() };
});

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    const placeos_service = { init: jest.fn() };

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
        jest.clearAllMocks();
        // Reset the shared chat setting signal between tests
        settingSignal('chat.enabled', false).set(false);
        placeos_service.init.mockResolvedValue(undefined);
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should register mock handlers and initialise PlaceOS on init', () => {
        spectator.component.ngOnInit();

        expect(common_mod.setMocks).toHaveBeenCalledWith(mocksInit);
        expect(placeos_service.init).toHaveBeenCalledTimes(1);
    });

    it('should register mocks before initialising PlaceOS', () => {
        const order: string[] = [];
        (common_mod.setMocks as jest.Mock).mockImplementation(() =>
            order.push('mocks'),
        );
        placeos_service.init.mockImplementation(() => order.push('init'));

        spectator.component.ngOnInit();

        expect(order).toEqual(['mocks', 'init']);
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
