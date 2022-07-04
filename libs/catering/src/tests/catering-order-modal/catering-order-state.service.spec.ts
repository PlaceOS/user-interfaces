import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';

describe('CateringOrderStateService', () => {
    let spectator: SpectatorService<CateringOrderStateService>;
    const createService = createServiceFactory({
        service: CateringOrderStateService,
        providers: [],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should list menu items', () => {});
    it('should list filtered menu items', () => {});
    it('should allow changing menu options', () => {});
    it('should allow changing menu filters', () => {});
});
