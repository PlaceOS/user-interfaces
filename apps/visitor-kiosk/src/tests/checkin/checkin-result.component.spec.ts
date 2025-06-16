import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { MockComponent, MockDirective, MockPipe, MockProvider } from 'ng-mocks';
import { CheckinResultsComponent } from '../../app/checkin/checkin-result.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

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
