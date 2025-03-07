import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import {
    MockComponent,
    MockDirective,
    MockModule,
    MockPipe,
    MockProvider,
} from 'ng-mocks';
import { of } from 'rxjs';

import { MatMenuModule } from '@angular/material/menu';
import { IconComponent, SanitizePipe } from '@placeos/components';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { TopbarHeaderComponent } from '../app/components/topbar-header.component';
import { WelcomeComponent } from '../app/welcome.component';

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
        imports: [MockModule(MatMenuModule)],
        declarations: [
            MockComponent(TopbarHeaderComponent),
            MockComponent(IconComponent),
            MockPipe(SanitizePipe),
            MockDirective(AuthenticatedImageDirective),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
