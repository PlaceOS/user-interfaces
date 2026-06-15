import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import {
    Organisation,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
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
                filtered_bookings: new BehaviorSubject([]),
            }),
            MockProvider(OrganisationService, {
                levels: [],
                binding: jest.fn(() => 'sys-1'),
                active_building: signal(null),
                active_levels: signal([]),
                organisation: new Organisation(),
                initialised: signal(true),
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
