import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { CheckinResultsComponent } from '../../app/checkin/checkin-result.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';
import { MockProvider } from 'ng-mocks';
import { SettingsService } from '@placeos/common';

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
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
