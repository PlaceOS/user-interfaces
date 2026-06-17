import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    LevelPipe,
    SanitizePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { MockComponent, MockDirective, MockPipe, MockProvider } from 'ng-mocks';
import { CheckinResultsComponent } from '../../app/checkin/checkin-result.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinComponent', () => {
    let spectator: SpectatorRouting<CheckinResultsComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinResultsComponent,
        providers: [
            MockProvider(CheckinStateService, {
                event: signal({}),
                guest: signal({}),
                photo: signal(''),
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
