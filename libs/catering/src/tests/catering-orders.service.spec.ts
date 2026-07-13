import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { CateringOrdersService } from '../lib/catering-orders.service';

import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

describe('CateringOrdersService', () => {
    let spectator: SpectatorService<CateringOrdersService>;
    const createService = createServiceFactory({
        service: CateringOrdersService,
        providers: [MockProvider(SettingsService, { get: vi.fn() })],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should expose an empty order list before polling', () => {
        expect(spectator.service.orders()).toEqual([]);
        expect(spectator.service.loading()).toBe(false);
    });

    it('should register and tear down a polling interval', () => {
        const stop = spectator.service.startPolling(1000);
        expect(typeof stop).toBe('function');
        // Calling the returned stop function clears the polling interval
        stop();
        // Direct stopPolling is idempotent and safe to call again
        expect(() => spectator.service.stopPolling()).not.toThrow();
    });

    it('should update filters via the setter', () => {
        spectator.service.filters = { caterer: 'Acme' };
        expect(spectator.service.filters.caterer).toBe('Acme');
        expect(spectator.service.order_filters().caterer).toBe('Acme');
    });
});
