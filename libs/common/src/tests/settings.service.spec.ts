import { Title } from '@angular/platform-browser';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SettingsService } from '../lib/settings.service';

const TEST_DATA = {
    test: 1,
    nest_test: {
        level_1: {
            level: true,
        },
    },
    app: {
        name: 'APPLICATION_NAME',
    },
};

jest.mock('@placeos/ts-client', () => ({
    showMetadata: jest.fn(() => of({ details: {} })),
}));
jest.mock('../lib/settings', () => ({
    DEFAULT_SETTINGS: {
        test: 1,
        nest_test: {
            level_1: {
                level: true,
            },
        },
        app: {
            name: 'APPLICATION_NAME',
        },
    },
}));

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
            expect(service.get('test')).toBe(TEST_DATA.test);
            expect(service.app_name).toBe(TEST_DATA.app.name);
            done();
        });
    });

    it('should get nested settings', (done) => {
        const service = spectator.service;
        service.initialised.subscribe((state) => {
            if (!state) return;
            expect(service.get('nest_test')).toStrictEqual(TEST_DATA.nest_test);
            expect(service.get('nest_test.level_1')).toStrictEqual(
                TEST_DATA.nest_test.level_1,
            );
            expect(service.get('nest_test.level_1.level')).toStrictEqual(
                TEST_DATA.nest_test.level_1.level,
            );
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
