import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';

import { TopbarHeaderComponent } from '../app/components/topbar-header.component';
import { WelcomeComponent } from '../app/welcome.component';

describe('WelcomeComponent', () => {
    let spectator: SpectatorRouting<WelcomeComponent>;
    const createComponent = createRoutingFactory({
        component: WelcomeComponent,
        providers: [
            {
                provide: SettingsService,
                useValue: { get: jest.fn(), listen: jest.fn(() => of()) },
            },
        ],
        declarations: [MockComponent(TopbarHeaderComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
