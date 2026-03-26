import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { OrganisationService, SettingsService } from '@placeos/common';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

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
                initialised: of(true),
                active_building: of({} as any),
                building_list: new BehaviorSubject([]),
                level_list: of([]),
                building_list: of([]),
            }),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
