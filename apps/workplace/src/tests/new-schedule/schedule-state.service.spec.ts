import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ScheduleStateService } from '../../app/new-schedule/schedule-state.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

describe('ScheduleStateService', () => {
    let spectator: SpectatorService<ScheduleStateService>;
    const createService = createServiceFactory({
        service: ScheduleStateService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
                listen: jest.fn(() => of(0)),
            } as any),
            MockProvider(OrganisationService, {
                active_building: of({} as any),
            }),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
