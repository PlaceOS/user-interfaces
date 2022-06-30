import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AssetStateService } from '../lib/asset-state.service';

describe('AssetStateService', () => {
    let spectator: SpectatorService<AssetStateService>;
    const createService = createServiceFactory({
        service: AssetStateService,
        providers: [],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });
});
