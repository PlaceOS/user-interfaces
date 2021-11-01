import { createServiceFactory, SpectatorService } from "@ngneat/spectator/jest";
import { ScheduleStateService } from "../../app/new-schedule/schedule-state.service";

describe('ScheduleStateService', () => {

    let spectator: SpectatorService<ScheduleStateService>;
    const createService = createServiceFactory({
        service: ScheduleStateService
    });
  
    beforeEach(() => spectator = createService());
  
    it('should create service', () => {
      expect(spectator.service).toBeTruthy();
    });
})
