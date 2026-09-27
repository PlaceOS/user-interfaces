import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
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

// Workspace fns are bundled and cannot be mocked, so stub the API layer below them.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('CateringOrdersService', () => {
    let spectator: SpectatorService<CateringOrdersService>;
    // New signal per test, so services from earlier tests do not load orders
    let active_building: WritableSignal<{ id?: string }>;
    const createService = createServiceFactory({
        service: CateringOrdersService,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            {
                provide: OrganisationService,
                useFactory: () =>
                    ({ active_building }) as unknown as OrganisationService,
            },
        ],
    });

    beforeEach(() => {
        active_building = signal({});
        vi.mocked(ts_client.get).mockReset();
        spectator = createService();
    });

    /** Set a building so the service loads orders, then wait for the load */
    const loadOrders = async () => {
        active_building.set({ id: 'bld-1' });
        TestBed.tick();
        await flush();
    };

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

    it('should filter orders that have no resolvable room or location', () => {
        const order = new CateringOrder({
            id: 'order-1',
            items: [
                new CateringItem({
                    id: 'coffee',
                    name: 'Coffee',
                    quantity: 1,
                }),
            ],
        });
        (
            spectator.service as unknown as {
                _orders: WritableSignal<CateringOrder[]>;
            }
        )._orders.set([order]);

        expect(spectator.service.filtered()).toEqual([order]);
    });

    it('should flag a failed load instead of showing an empty day', async () => {
        vi.mocked(ts_client.get).mockRejectedValue(new Error('offline'));
        await loadOrders();

        expect(spectator.service.load_error()).toBe(true);
        expect(spectator.service.loading()).toBe(false);
        expect(spectator.service.last_updated()).toBe(0);
    });

    it('should only fetch orders again when the date or zones change', async () => {
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        await loadOrders();
        expect(ts_client.get).toHaveBeenCalledTimes(1);
        expect(spectator.service.load_error()).toBe(false);
        expect(spectator.service.last_updated()).toBeGreaterThan(0);

        spectator.service.filters = { search: 'tea', caterer: 'Cafe' };
        TestBed.tick();
        await flush();
        expect(ts_client.get).toHaveBeenCalledTimes(1);

        spectator.service.filters = { date: new Date(2026, 0, 2).valueOf() };
        TestBed.tick();
        await flush();
        expect(ts_client.get).toHaveBeenCalledTimes(2);
    });

    it('should revert the order status when the save fails', async () => {
        vi.mocked(ts_client.get).mockRejectedValue(new Error('offline'));
        const order = new CateringOrder({
            id: 'order-1',
            system_id: 'room-1',
            status: 'accepted',
            event: new CalendarEvent({
                id: 'event-1',
                extension_data: { catering: [] },
            }),
        });

        await expect(
            spectator.service.updateStatus(order, 'ready'),
        ).rejects.toThrow('offline');
        expect(order.status).toBe('accepted');
    });
});
