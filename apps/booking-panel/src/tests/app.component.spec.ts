import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { PlaceOS_Service } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    // The real `has_chat` reads a settings signal
    const chat_enabled = signal(false);
    const createComponent = createRoutingFactory({
        component: AppComponent,
        declarations: [
            mockComponent(ChatComponent),
            mockComponent(GlobalBannerComponent),
            mockComponent(GlobalLoadingComponent),
        ],
        providers: [
            {
                provide: PlaceOS_Service,
                useValue: {
                    get has_chat() {
                        return chat_enabled();
                    },
                    init: vi.fn().mockResolvedValue(undefined),
                },
            },
        ],
    });

    beforeEach(() => {
        chat_enabled.set(false);
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

    it('should render the chat when chat is enabled', async () => {
        chat_enabled.set(true);
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect('global-chat').toExist();
    });

    it('should initialise PlaceOS on init', () => {
        const placeos = spectator.inject(PlaceOS_Service);
        spectator.component.ngOnInit();
        expect(placeos.init).toHaveBeenCalledWith({ allow_mdm_restart: true });
    });
});
