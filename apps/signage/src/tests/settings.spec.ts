import { DEFAULT_SETTINGS } from '../environments/settings';

describe('signage settings', () => {
    it('should reload itself when a new application version is ready', () => {
        expect(DEFAULT_SETTINGS.service_worker.auto_reload).toBe(true);
    });

    it('should show template bootstrap options by default', () => {
        expect(DEFAULT_SETTINGS.app.templates_enabled).toBe(true);
    });
});
