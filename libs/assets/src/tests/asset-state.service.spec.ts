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

    it('should load asset list', () => {});
    it('should load asset bookings for selected options', () => {});
    it('should generate available assets for selected options', () => {});
    it('should allow filtering of available assets', () => {});
});
