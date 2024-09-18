import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { of } from 'rxjs';
import { MockComponent, MockProvider } from 'ng-mocks';

import { TopbarHeaderComponent } from '../app/components/topbar-header.component';
import { WelcomeComponent } from '../app/welcome.component';
import { IconComponent } from '@placeos/components';

describe('WelcomeComponent', () => {
    let spectator: SpectatorRouting<WelcomeComponent>;
    const createComponent = createRoutingFactory({
        component: WelcomeComponent,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
                listen: jest.fn(() => of()),
            }),
        ],
        declarations: [
            MockComponent(TopbarHeaderComponent),
            MockComponent(IconComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
