import { signal } from '@angular/core';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { MockDirective, MockProvider } from 'ng-mocks';
import { TopbarHeaderComponent } from '../../app/components/topbar-header.component';

describe('TopbarHeaderComponent', () => {
    let spectator: SpectatorRouting<TopbarHeaderComponent>;
    const createComponent = createRoutingFactory({
        component: TopbarHeaderComponent,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
                theme_signal: signal('light'),
            }),
        ],
        declarations: [MockDirective(AuthenticatedImageDirective)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
