import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { CheckinResultsComponent } from '../../app/checkin/checkin-result.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';
import { MockComponent, MockDirective, MockPipe, MockProvider } from 'ng-mocks';
import { SettingsService } from '@placeos/common';
import { SanitizePipe, UserAvatarComponent } from '@placeos/components';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';

describe('CheckinComponent', () => {
    let spectator: SpectatorRouting<CheckinResultsComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinResultsComponent,
        providers: [
            MockProvider(CheckinStateService, {
                event: of({}),
                guest: of({}),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [
            MockPipe(SanitizePipe),
            MockComponent(UserAvatarComponent),
            MockDirective(AuthenticatedImageDirective),
            MockPipe(LevelPipe),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
