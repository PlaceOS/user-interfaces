import { Title } from '@angular/platform-browser';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';

import { SettingsTitleStrategy } from '../lib/settings-title-strategy.service';
import { SettingsService } from '../lib/settings.service';
import { createSettingsServiceMock } from './test-helpers';

describe('SettingsTitleStrategy', () => {
    let spectator: SpectatorService<SettingsTitleStrategy>;
    const settings = createSettingsServiceMock({ app_name: 'Fallback' });
    const title = { setTitle: vi.fn() };

    const createService = createServiceFactory({
        service: SettingsTitleStrategy,
        providers: [
            { provide: Title, useValue: title },
            { provide: SettingsService, useValue: settings },
        ],
    });

    beforeEach(() => {
        title.setTitle.mockClear();
        settings.get.mockReturnValue(undefined);
        spectator = createService();
    });

    it('should combine the app name with the page title', () => {
        settings.get.mockImplementation((key: string) =>
            key === 'app.short_name' ? 'Workplace' : undefined,
        );
        vi.spyOn(spectator.service, 'buildTitle').mockReturnValue('Bookings');
        spectator.service.updateTitle({} as any);
        expect(title.setTitle).toHaveBeenCalledWith('Workplace | Bookings');
    });

    it('should use only the app name when there is no page title', () => {
        settings.get.mockImplementation((key: string) =>
            key === 'app.name' ? 'Workplace App' : undefined,
        );
        vi.spyOn(spectator.service, 'buildTitle').mockReturnValue(undefined);
        spectator.service.updateTitle({} as any);
        expect(title.setTitle).toHaveBeenCalledWith('Workplace App');
    });

    it('should fall back to the service app name', () => {
        vi.spyOn(spectator.service, 'buildTitle').mockReturnValue(undefined);
        spectator.service.updateTitle({} as any);
        expect(title.setTitle).toHaveBeenCalledWith('Fallback');
    });
});
