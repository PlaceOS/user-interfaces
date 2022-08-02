import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { CalendarService } from '@placeos/calendar';
import { Organisation, OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, of } from 'rxjs';
import { LandingStateService } from '../../app/landing/landing-state.service';

describe('LandingStateService', () => {
    let spectator: SpectatorService<LandingStateService>;
    const createService = createServiceFactory({
        service: LandingStateService,
        providers: [
            {
                provide: CalendarService,
                useValue: {
                    freeBusy: jest.fn(() => of([])),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    levels: [],
                    binding: jest.fn(() => 'sys-1'),
                    active_building: new BehaviorSubject(null),
                    organisation: new Organisation(),
                    initialised: of(true),
                    levelWithID: jest.fn(),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
