import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { PlaceOS_Service, settingSignal } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    const createComponent = createRoutingFactory({
        component: AppComponent,
        providers: [MockProvider(PlaceOS_Service, { init: vi.fn() })],
    });

    beforeEach(() => {
        settingSignal('chat.enabled', false).set(false);
        spectator = createComponent();
    });

    it('should initialise PlaceOS on init', () => {
        const placeos = spectator.inject(PlaceOS_Service);
        expect(placeos.init).toHaveBeenCalled();
    });

    it('should only show the chat when enabled', async () => {
        expect('global-chat').not.toExist();
        settingSignal('chat.enabled', false).set(true);
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect('global-chat').toExist();
    });
});
