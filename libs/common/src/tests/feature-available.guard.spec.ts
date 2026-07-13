import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';

import { OrganisationService, SettingsService } from '@placeos/common';
import { FeatureAvailableGuard } from '../lib/feature-available.guard';
import { createSettingsServiceMock } from './test-helpers';

describe('FeatureAvailableGuard', () => {
    let spectator: SpectatorService<FeatureAvailableGuard>;
    const settings = createSettingsServiceMock();
    const router = { url: '/catering/orders', navigate: vi.fn() };

    const createService = createServiceFactory({
        service: FeatureAvailableGuard,
        providers: [
            { provide: Router, useValue: router },
            { provide: SettingsService, useValue: settings },
            {
                provide: OrganisationService,
                useValue: { waitUntilInitialised: vi.fn(async () => null) },
            },
        ],
    });

    beforeEach(() => {
        router.navigate.mockClear();
        settings.get.mockReturnValue([]);
        spectator = createService();
    });

    it('should allow routes that are not disabled', async () => {
        settings.get.mockReturnValue(['visitors']);
        await expect(spectator.service.canActivate()).resolves.toBe(true);
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should allow routes when no features are disabled', async () => {
        settings.get.mockReturnValue(undefined);
        await expect(spectator.service.canLoad()).resolves.toBe(true);
    });

    it('should block and redirect disabled features', async () => {
        settings.get.mockReturnValue(['catering']);
        await expect(spectator.service.canActivate()).resolves.toBe(false);
        expect(router.navigate).toHaveBeenCalledWith(['/']);
    });
});
