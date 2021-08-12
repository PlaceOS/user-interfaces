import { createServiceFactory } from '@ngneat/spectator';
import { SpectatorService } from '@ngneat/spectator/jest';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinStateService', () => {
    let spectator: SpectatorService<CheckinStateService>;
    const createService = createServiceFactory({
        service: CheckinStateService,
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
