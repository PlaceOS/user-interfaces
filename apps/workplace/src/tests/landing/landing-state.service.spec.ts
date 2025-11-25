import { computed } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService, Organisation } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { CalendarService } from '@placeos/events';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('LandingStateService', () => {
    let spectator: SpectatorService<LandingStateService>;
    const createService = createServiceFactory({
        service: LandingStateService,
        providers: [
            MockProvider(CalendarService, {
                freeBusy: jest.fn(() => of([])),
            }),
            MockProvider(ScheduleStateService, {
                filtered_bookings: computed(() => []),
            }),
            MockProvider(OrganisationService, {
                levels: [],
                binding: jest.fn(() => 'sys-1'),
                active_building: new BehaviorSubject(null),
                active_levels: new BehaviorSubject([]),
                organisation: new Organisation(),
                initialised: of(true),
                levelWithID: jest.fn(),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
