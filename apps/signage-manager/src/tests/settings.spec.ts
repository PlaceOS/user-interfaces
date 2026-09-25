import { SIGNAGE_FEATURE_IDS } from '../app/signage-features';
import { DEFAULT_SETTINGS } from '../environments/settings';

describe('signage manager settings', () => {
    it('should turn every signage feature on by default', () => {
        expect(DEFAULT_SETTINGS.app.features).toEqual(SIGNAGE_FEATURE_IDS);
    });
});
