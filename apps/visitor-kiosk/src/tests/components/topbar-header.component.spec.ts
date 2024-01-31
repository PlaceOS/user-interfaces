import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { TopbarHeaderComponent } from '../../app/components/topbar-header.component';
import { MockProvider } from 'ng-mocks';
import { SettingsService } from '@placeos/common';

describe('TopbarHeaderComponent', () => {
    let spectator: SpectatorRouting<TopbarHeaderComponent>;
    const createComponent = createRoutingFactory({
        component: TopbarHeaderComponent,
        providers: [MockProvider(SettingsService, { get: jest.fn() })],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
