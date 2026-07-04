import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAP_FEATURE_DATA, SettingsService } from '@placeos/common';
import { MockProvider, ngMocks } from 'ng-mocks';

import { ExploreParkingInfoComponent } from '../lib/explore-parking-info.component';

describe('ExploreParkingInfoComponent', () => {
    let spectator: Spectator<ExploreParkingInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreParkingInfoComponent,
        ...ngMocks.guts(null),
        providers: [
            MockProvider(MAP_FEATURE_DATA, {}),
            MockProvider(SettingsService, { get: jest.fn(), app_name: 'Workplace' }),
        ],
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should fall back to the identifier when no name is set', () => {
        spectator = createComponent({
            providers: [
                MockProvider(MAP_FEATURE_DATA, { identifier: 'P-12' }),
            ],
        });
        expect(spectator.component.name()).toBe('P-12');
    });

    it('should prefer the name over the identifier', () => {
        spectator = createComponent({
            providers: [
                MockProvider(MAP_FEATURE_DATA, {
                    name: 'Bay 1',
                    identifier: 'P-12',
                }),
            ],
        });
        expect(spectator.component.name()).toBe('Bay 1');
    });

    it('should mark the space as reserved when assigned to its user', () => {
        spectator = createComponent({
            providers: [
                MockProvider(MAP_FEATURE_DATA, {
                    assigned_to: 'user-1',
                    user: 'user-1',
                    status: 'busy',
                }),
            ],
        });
        expect(spectator.component.status()).toBe('reserved');
    });

    it('should use the raw status when not assigned to its user', () => {
        spectator = createComponent({
            providers: [
                MockProvider(MAP_FEATURE_DATA, {
                    assigned_to: 'user-2',
                    user: 'user-1',
                    status: 'busy',
                }),
            ],
        });
        expect(spectator.component.status()).toBe('busy');
    });

    it('should detect the concierge application from the settings', () => {
        spectator = createComponent({
            providers: [
                MockProvider(MAP_FEATURE_DATA, {}),
                MockProvider(SettingsService, { app_name: 'Concierge' }),
            ],
        });
        expect(spectator.component.is_concierge()).toBe(true);
    });

    it('should not flag other applications as concierge', () => {
        spectator = createComponent({
            providers: [
                MockProvider(MAP_FEATURE_DATA, {}),
                MockProvider(SettingsService, { app_name: 'Workplace' }),
            ],
        });
        expect(spectator.component.is_concierge()).toBe(false);
    });
});
