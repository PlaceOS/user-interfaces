import { DEFAULT_SETTINGS } from '../environments/settings';

describe('signage manager settings', () => {
    it('should show template management by default', () => {
        expect(DEFAULT_SETTINGS.app.templates_enabled).toBe(true);
    });
});
