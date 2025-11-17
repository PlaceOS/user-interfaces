jest.mock('@placeos/ts-client', () => {
    const { of } = require('rxjs');
    return {
        showMetadata: jest.fn(() => of({ details: {} })),
        currentUser: jest.fn(() => ({ id: 'test-user' })),
    };
});
jest.mock('../lib/user-state', () => {
    const { of } = require('rxjs');
    return {
        current_user: of({ id: 'test-user' }),
        currentUser: jest.fn(() => ({ id: 'test-user' })),
        reloadUserData: jest.fn(),
    };
});

import { Title } from '@angular/platform-browser';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { SettingsService } from '../lib/settings.service';

describe('SettingsService', () => {
    let spectator: SpectatorService<SettingsService>;
    const createService = createServiceFactory(SettingsService);

    beforeEach(
        () =>
            (spectator = createService({
                providers: [MockProvider(Title, { setTitle: jest.fn() })],
            })),
    );

    it('should initialise settings from DEFAULT_SETTINGS', (done) => {
        const service = spectator.service;
        service.initialised.subscribe((state) => {
            if (!state) return;
            // Test getting default settings that exist in the actual DEFAULT_SETTINGS
            expect(service.get('debug')).toBe(true);
            expect(service.get('composer.domain')).toBe('');
            expect(service.get('app.title')).toBe('PlaceOS');
            done();
        });
    });

    it('should get nested settings', (done) => {
        const service = spectator.service;
        service.initialised.subscribe((state) => {
            if (!state) return;
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
            done();
        });
    });

    it('should return `null` for non-existing settings', (done) => {
        const service = spectator.service;
        service.initialised.subscribe((state) => {
            if (!state) return;
            expect(service.get('test_something_non_existent')).toBe(null);
            done();
        });
    });
});
