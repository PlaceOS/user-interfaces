import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { MockDirective, MockProvider } from 'ng-mocks';
import { TopbarHeaderComponent } from '../../app/components/topbar-header.component';

describe('TopbarHeaderComponent', () => {
    let spectator: SpectatorRouting<TopbarHeaderComponent>;
    const createComponent = createRoutingFactory({
        component: TopbarHeaderComponent,
        providers: [MockProvider(SettingsService, { get: jest.fn() })],
        declarations: [MockDirective(AuthenticatedImageDirective)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
