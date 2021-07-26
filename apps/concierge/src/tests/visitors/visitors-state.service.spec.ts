import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

describe('VisitorStateService', () => {
    let spectator: SpectatorService<VisitorsStateService>;
    const createService = createServiceFactory({
        service: VisitorsStateService,
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

    it.todo('should list visitor events');
    it.todo('should allow filtering of visitor events');
    it.todo('should allow polling of visitor events');
    it.todo('should allow checking in visitors');
    it.todo('should allow checking out visitors');
    it.todo('should allow checking in all visitors');
    it.todo('should allow checking out all visitors');
});
