import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { PlaceOS_Service, UploadsService } from '@placeos/common';
import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    let placeos: any;
    let uploads_init: any;

    const createComponent = createRoutingFactory({
        component: AppComponent,
        declarations: [
            MockComponent(GlobalBannerComponent),
            MockComponent(GlobalLoadingComponent),
            MockComponent(ChatComponent),
        ],
        providers: [
            MockProvider(PlaceOS_Service, {
                get has_chat() {
                    return placeos.has_chat;
                },
                get has_uploads() {
                    return placeos.has_uploads;
                },
                init: () => placeos.init(),
            } as any),
            MockProvider(UploadsService, {
                init: (...args: any[]) => uploads_init(...args),
            } as any),
        ],
    });

    beforeEach(() => {
        uploads_init = vi.fn();
        placeos = {
            has_chat: false,
            has_uploads: false,
            init: vi.fn(async () => undefined),
        };
        spectator = createComponent();
    });

    it('should initialise the PlaceOS service on init', async () => {
        await spectator.component.ngOnInit();
        expect(placeos.init).toHaveBeenCalled();
    });

    it('should reflect chat availability after initialisation', async () => {
        placeos.has_chat = true;
        await spectator.component.ngOnInit();
        expect(spectator.component.has_chat()).toBe(true);
    });

    it('should initialise uploads only when uploads are available', async () => {
        placeos.has_uploads = false;
        await spectator.component.ngOnInit();
        expect(uploads_init).not.toHaveBeenCalled();

        placeos.has_uploads = true;
        await spectator.component.ngOnInit();
        expect(uploads_init).toHaveBeenCalled();
    });
});
