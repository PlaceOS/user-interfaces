import { DEFAULT_SETTINGS } from '../environments/settings';

describe('signage settings', () => {
    it('should opt in to booting from cached organisation data', () => {
        // Without this the player waits to be online before loading anything,
        // so a refresh with no network never reaches its cached content.
        expect(DEFAULT_SETTINGS.app.offline_boot).toBe(true);
    });

    it('should reload itself when a new application version is ready', () => {
        expect(DEFAULT_SETTINGS.service_worker.auto_reload).toBe(true);
    });
});
