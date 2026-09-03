import { signal } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    CateringOrdersService,
    cateringOrderSystemId,
} from '../lib/catering-orders.service';

import {
    CalendarEvent,
    CateringItem,
    CateringOrder,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

describe('CateringOrdersService', () => {
    let spectator: SpectatorService<CateringOrdersService>;
    const createService = createServiceFactory({
        service: CateringOrdersService,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            {
                provide: OrganisationService,
                useValue: {
                    active_building: signal({}),
                } as unknown as OrganisationService,
            },
        ],
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

    it('should use the assigned room for order metadata', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            resources: [
                new Space({ id: 'room-1' }),
                new Space({ id: 'room-2' }),
            ],
            extension_data: { catering: [] },
        });
        const order = new CateringOrder({
            id: 'order-1',
            system_id: 'room-2',
            event,
            caterer: 'Cafe',
            items: [
                new CateringItem({
                    id: 'coffee',
                    caterer: 'Cafe',
                    quantity: 1,
                }),
            ],
        });

        expect(cateringOrderSystemId(order)).toBe('room-2');
    });

    it('should use the event room for legacy order metadata', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            resources: [new Space({ id: 'room-1' })],
            extension_data: { catering: [] },
        });
        const order = new CateringOrder({
            id: 'order-1',
            event,
            caterer: 'Cafe',
            items: [
                new CateringItem({
                    id: 'coffee',
                    caterer: 'Cafe',
                    quantity: 1,
                }),
            ],
        });

        expect(cateringOrderSystemId(order)).toBe('room-1');
    });
});
