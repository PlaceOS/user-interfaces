import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ScheduleStateService } from '../../app/new-schedule/schedule-state.service';

describe('ScheduleStateService', () => {
    let spectator: SpectatorService<ScheduleStateService>;
    const createService = createServiceFactory({
        service: ScheduleStateService,
        providers: [
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(OrganisationService, { active_building: of({} as any) })
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
