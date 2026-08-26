import { Title } from '@angular/platform-browser';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';

import { SettingsService } from '../lib/settings.service';
import { setCurrentUser } from '../lib/user-state';

// Only the external ts-client API layer is stubbed; the real user-state store
// is seeded with a loaded user so settings initialisation can complete.
vi.mock('@placeos/ts-client', { spy: true });

describe('SettingsService', () => {
    let spectator: SpectatorService<SettingsService>;
    const createService = createServiceFactory(SettingsService);

    beforeEach(() => {
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        setCurrentUser({ id: 'test-user' } as any);
        spectator = createService({
            providers: [MockProvider(Title, { setTitle: vi.fn() })],
        });
    });

    /** Resolve once the service has finished initialising. */
    function whenInitialised(service: SettingsService) {
        return new Promise<void>((resolve) => {
            service.initialised.subscribe((state) => {
                if (state) resolve();
            });
        });
    }

    it('should initialise settings from DEFAULT_SETTINGS', async () => {
        const service = spectator.service;
        await whenInitialised(service);
        // Test getting default settings that exist in the actual DEFAULT_SETTINGS
        expect(service.get('debug')).toBe(true);
        expect(service.get('composer.domain')).toBe('');
        expect(service.get('app.title')).toBe('PlaceOS');
    });

    it('should get nested settings', async () => {
        const service = spectator.service;
        await whenInitialised(service);
        // Test getting nested settings from actual DEFAULT_SETTINGS
        expect(service.get('composer')).toStrictEqual({
            domain: '',
            route: '/placeos',
            protocol: '',
            port: '',
            use_domain: false,
            local_login: false,
        });
        expect(service.get('composer.route')).toBe('/placeos');
        expect(service.get('composer.local_login')).toBe(false);
    });

    it('should return `null` for non-existing settings', async () => {
        const service = spectator.service;
        await whenInitialised(service);
        expect(service.get('test_something_non_existent')).toBe(null);
    });

    it.each([
        'favourite_desks',
        'favourite_parking_spaces',
        'favourite_assets',
        'favourite_menu_items',
    ])('should update the %s signal before saving', async (key) => {
        const service = spectator.service;
        await whenInitialised(service);
        const favorites = service.signal<string[]>(key, [], true);

        service.saveUserSetting(key, ['item-1']);

        expect(favorites()).toEqual(['item-1']);
    });
});
