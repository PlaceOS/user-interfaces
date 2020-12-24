import { SettingsService } from './settings.service';

import * as SETTINGS from './settings';

describe('SettingsService', () => {
    let service: SettingsService;

    const test_data = {
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

    beforeEach(() => {
        (SETTINGS as any).DEFAULT_SETTINGS = test_data;
        service = new SettingsService({ setTitle: jest.fn() } as any);
    });

    it('should initialise settings from DEFAULT_SETTINGS', (done) => {
        service.initialised.subscribe((state) => {
            if (state) {
                expect(service.get('test')).toBe(test_data.test);
                expect(service.app_name).toBe(test_data.app.name);
                done();
            }
        });
    });

    it('should get nested settings', (done) => {
        service.initialised.subscribe((state) => {
            if (state) {
                expect(service.get('nest_test')).toBe(test_data.nest_test);
                expect(service.get('nest_test.level_1')).toBe(test_data.nest_test.level_1);
                expect(service.get('nest_test.level_1.level')).toBe(
                    test_data.nest_test.level_1.level
                );
                done();
            }
        });
    });

    it('should return `null` for non-existing settings', (done) => {
        service.initialised.subscribe((state) => {
            if (state) {
                expect(service.get('test_something_non_existent')).toBe(null);
                done();
            }
        });
    });
});
