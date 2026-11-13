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
    EMPTY_USER,
    OrganisationService,
    setCurrentUser,
    SettingsService,
    Space,
    StaffUser,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { EMPTY, Observable, of } from 'rxjs';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';

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
        // The settings mock is shared by all tests
        vi.mocked(spectator.inject(SettingsService).get).mockReset();
    });

    /** Set a building so the service loads orders, then wait for the load */
    const loadOrders = async () => {
        active_building.set({ id: 'bld-1' });
        TestBed.tick();
        await flush();
    };

    /** Run one poll of the orders, then wait for the load */
    const pollOrders = async () => {
        spectator.service.startPolling(10);
        await new Promise((resolve) => setTimeout(resolve, 30));
        spectator.service.stopPolling();
        TestBed.tick();
        await flush();
    };

    /** Put orders in the list without a load from the server */
    const setOrders = (orders: CateringOrder[]) =>
        (
            spectator.service as unknown as {
                _orders: WritableSignal<CateringOrder[]>;
            }
        )._orders.set(orders);

    const ids = (orders: readonly CateringOrder[]) => orders.map((o) => o.id);

    /** 9am on the day that the load tests show */
    const DAY = new Date(2026, 0, 1, 9).valueOf();

    /** Event data from the API with one coffee in each order */
    const apiEvent = (id: string, order_ids: string[], start = DAY) => ({
        id,
        event_start: start / 1000,
        event_end: start / 1000 + 60 * 60,
        extension_data: {
            catering: order_ids.map((order_id) => ({
                id: order_id,
                items: [{ id: 'coffee', name: 'Coffee', quantity: 1 }],
            })),
        },
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

    it('should filter by status and count orders for each status', () => {
        const order = (id: string, status: 'ready' | 'delivered') =>
            new CateringOrder({
                id,
                status,
                items: [new CateringItem({ name: 'Coffee', quantity: 1 })],
            });
        setOrders([order('1', 'ready'), order('2', 'delivered')]);

        spectator.service.filters = { status: 'active' };

        expect(spectator.service.filtered().map((o) => o.id)).toEqual(['1']);
        expect(spectator.service.status_counts()).toEqual({
            all: 2,
            active: 1,
            ready: 1,
            delivered: 1,
        });
    });

    it('should search order charge codes and notes', () => {
        const order = new CateringOrder({
            id: 'order-1',
            charge_code: 'CC-42',
            notes: 'Nut allergy',
            items: [new CateringItem({ name: 'Coffee', quantity: 1 })],
        });
        setOrders([order]);

        spectator.service.filters = { search: 'cc-42' };
        expect(spectator.service.filtered()).toEqual([order]);
        spectator.service.filters = { search: 'allergy' };
        expect(spectator.service.filtered()).toEqual([order]);
        spectator.service.filters = { search: 'tea' };
        expect(spectator.service.filtered()).toEqual([]);
    });

    it('should set the caterer filter to the only caterer of the user', () => {
        vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
            (key: string) =>
                key === 'app.catering_provider_groups'
                    ? { Cafe: ['cafe-staff'], Deli: ['deli-staff'] }
                    : undefined,
        );
        setCurrentUser(new StaffUser({ groups: ['cafe-staff'] }));
        try {
            expect(spectator.service.caterers()).toEqual(['Cafe']);
            TestBed.tick();
            expect(spectator.service.filters.caterer).toBe('Cafe');
        } finally {
            vi.mocked(spectator.inject(SettingsService).get).mockReset();
            setCurrentUser(EMPTY_USER);
        }
    });

    describe('changeStatus', () => {
        const notify_open = vi.fn(() => ({
            onAction: (): Observable<void> => EMPTY,
            dismiss: vi.fn(),
        }));

        beforeEach(() => {
            notify_open.mockClear();
            setNotifyOutlet({ open: notify_open } as any, true);
        });

        afterEach(() => setNotifyOutlet(null, true));

        it('should offer undo that puts back the previous status', async () => {
            const update = vi
                .spyOn(spectator.service, 'updateStatus')
                .mockImplementation(async (order, status) => {
                    order.status = status;
                    return undefined;
                });
            // Click the undo action as soon as the message shows
            notify_open.mockImplementationOnce(() => ({
                onAction: () => of(undefined),
                dismiss: vi.fn(),
            }));
            const order = new CateringOrder({ status: 'accepted' });
            await spectator.service.changeStatus(order, 'ready');
            await flush();

            expect(notify_open).toHaveBeenCalledWith(
                expect.anything(),
                'COMMON.UNDO',
                expect.anything(),
            );
            expect(update.mock.calls).toEqual([
                [order, 'ready'],
                [order, 'accepted'],
            ]);
            expect(order.status).toBe('accepted');
            // The undo does not offer undo again
            expect(notify_open).toHaveBeenCalledTimes(1);
        });

        it('should do nothing when the status does not change', async () => {
            const update = vi.spyOn(spectator.service, 'updateStatus');
            const order = new CateringOrder({ status: 'ready' });
            await spectator.service.changeStatus(order, 'ready');

            expect(update).not.toHaveBeenCalled();
            expect(notify_open).not.toHaveBeenCalled();
        });

        it('should notify without undo when a status change fails', async () => {
            vi.spyOn(spectator.service, 'updateStatus').mockRejectedValue(
                new Error('offline'),
            );
            const order = new CateringOrder({ status: 'accepted' });
            await spectator.service.changeStatus(order, 'ready');

            expect(notify_open).toHaveBeenCalledTimes(1);
            expect(notify_open).not.toHaveBeenCalledWith(
                expect.anything(),
                'COMMON.UNDO',
                expect.anything(),
            );
        });
    });

    it('should report orders added since the previous poll', async () => {
        const changes = vi.fn();
        spectator.service.order_changes.subscribe(changes);
        spectator.service.filters = { date: DAY };
        vi.mocked(ts_client.get).mockResolvedValue([
            apiEvent('e1', ['o1']),
        ] as any);
        await loadOrders();
        expect(changes).not.toHaveBeenCalled();

        vi.mocked(ts_client.get).mockResolvedValue([
            apiEvent('e1', ['o1']),
            apiEvent('e2', ['o2']),
        ] as any);
        await pollOrders();

        expect(changes).toHaveBeenCalledTimes(1);
        expect(ids(changes.mock.calls[0][0].added)).toEqual(['o2']);
    });

    it('should keep each order of the shown day once', async () => {
        spectator.service.filters = { date: DAY };
        const next_day = DAY + 24 * 60 * 60 * 1000;
        vi.mocked(ts_client.get).mockResolvedValue([
            apiEvent('e1', ['o1']),
            apiEvent('e2', ['o1']),
            apiEvent('e3', ['o2'], next_day),
        ] as any);

        await loadOrders();

        expect(ids(spectator.service.orders())).toEqual(['o1']);
    });

    it('should keep the list after a failed poll, and clear it for a new day', async () => {
        spectator.service.filters = { date: DAY };
        vi.mocked(ts_client.get).mockResolvedValue([
            apiEvent('e1', ['o1']),
        ] as any);
        await loadOrders();

        vi.mocked(ts_client.get).mockRejectedValue(new Error('offline'));
        await pollOrders();
        expect(spectator.service.load_error()).toBe(true);
        expect(ids(spectator.service.orders())).toEqual(['o1']);

        spectator.service.filters = { date: DAY + 24 * 60 * 60 * 1000 };
        TestBed.tick();
        await flush();
        expect(spectator.service.orders()).toEqual([]);
    });

    it('should ignore a slow response from an older load', async () => {
        let resolveOld: (events: unknown[]) => void = () => undefined;
        vi.mocked(ts_client.get).mockReturnValueOnce(
            new Promise((resolve) => (resolveOld = resolve)) as any,
        );
        spectator.service.filters = { date: DAY };
        await loadOrders();

        const next_day = DAY + 24 * 60 * 60 * 1000;
        vi.mocked(ts_client.get).mockResolvedValueOnce([
            apiEvent('e2', ['new'], next_day),
        ] as any);
        spectator.service.filters = { date: next_day };
        TestBed.tick();
        await flush();

        resolveOld([apiEvent('e1', ['old'])]);
        await flush();

        expect(ids(spectator.service.orders())).toEqual(['new']);
        expect(spectator.service.loading()).toBe(false);
    });

    it('should save the new status into the event catering list', async () => {
        vi.mocked(ts_client.get).mockResolvedValue({} as any);
        vi.mocked(ts_client.patch).mockResolvedValue({} as any);
        const event = new CalendarEvent({
            id: 'event-1',
            extension_data: {
                catering: [
                    new CateringOrder({ id: 'o1', status: 'accepted' }),
                    new CateringOrder({ id: 'o2', status: 'accepted' }),
                ],
            },
        });
        const order = new CateringOrder({
            id: 'o1',
            system_id: 'room-1',
            status: 'accepted',
            event,
        });

        await spectator.service.updateStatus(order, 'ready');

        const [url, metadata] = vi.mocked(ts_client.patch).mock.calls[0];
        expect(url).toContain('/event-1/metadata/room-1');
        const saved = (metadata as { catering: CateringOrder[] }).catering;
        expect(saved.map((o) => [o.id, o.status])).toEqual([
            ['o2', 'accepted'],
            ['o1', 'ready'],
        ]);
        expect(order.status).toBe('ready');
    });

    it('should match orders by caterer, in delivery order', () => {
        const order = (id: string, caterer: string, hour: number) =>
            new CateringOrder({
                id,
                caterer,
                event: new CalendarEvent({
                    date: new Date(2026, 0, 1, hour).valueOf(),
                }),
                items: [
                    new CateringItem({ name: 'Coffee', caterer, quantity: 1 }),
                ],
            });
        setOrders([
            order('late', 'Cafe', 11),
            order('no-caterer', '', 9),
            order('early', 'Cafe', 8),
        ]);

        spectator.service.filters = { caterer: 'Cafe' };
        expect(ids(spectator.service.matching())).toEqual(['early', 'late']);
        spectator.service.filters = { caterer: '<empty>' };
        expect(ids(spectator.service.matching())).toEqual(['no-caterer']);
    });

    describe('with catering bookings', () => {
        beforeEach(() =>
            vi
                .mocked(spectator.inject(SettingsService).get)
                .mockImplementation(
                    (key: string) => key === 'app.catering.use_bookings',
                ),
        );

        /** Booking data from the API for one order in the event */
        const apiBooking = (id: string, order_id: string) => ({
            id,
            extension_data: {
                details: {
                    id: order_id,
                    status: 'accepted',
                    items: [{ id: 'coffee', name: 'Coffee', quantity: 1 }],
                },
            },
            linked_event: apiEvent('e1', []),
        });

        it('should load orders from catering bookings for the day', async () => {
            spectator.service.filters = { date: DAY, zones: ['zone-1'] };
            vi.mocked(ts_client.get).mockResolvedValue([
                apiBooking('b1', 'o1'),
            ] as any);

            await loadOrders();

            const [url] = vi.mocked(ts_client.get).mock.calls[0];
            expect(url).toContain('type=catering-order');
            expect(url).toContain('zones=zone-1');
            expect(ids(spectator.service.orders())).toEqual(['o1']);
        });

        it('should save the new status into the booking of the order', async () => {
            spectator.service.filters = { date: DAY, zones: ['zone-1'] };
            vi.mocked(ts_client.get).mockResolvedValue([
                apiBooking('b1', 'o1'),
            ] as any);
            vi.mocked(ts_client.patch)
                .mockReset()
                .mockResolvedValue({} as any);
            await loadOrders();

            await spectator.service.updateStatus(
                spectator.service.orders()[0],
                'ready',
            );

            // One save to the booking. The event has no room for metadata.
            expect(ts_client.patch).toHaveBeenCalledTimes(1);
            const [url, body] = vi.mocked(ts_client.patch).mock.calls[0];
            expect(url).toMatch(/\/b1$/);
            expect(
                (body as { extension_data: { details: CateringOrder } })
                    .extension_data.details,
            ).toEqual(expect.objectContaining({ id: 'o1', status: 'ready' }));
        });
    });

    describe('caterers', () => {
        const groups = {
            Cafe: ['cafe-staff'],
            Deli: ['deli-staff'],
            Bar: ['bar-staff'],
        };
        /** Set the provider groups setting and the groups of the user */
        const setup = (user_groups: string[]) => {
            vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
                (key: string) =>
                    key === 'app.catering_provider_groups' ? groups : undefined,
            );
            setCurrentUser(new StaffUser({ groups: user_groups }));
            setOrders([
                new CateringOrder({ id: '1', caterer: 'Cafe' }),
                new CateringOrder({ id: '2', caterer: 'Bar' }),
            ]);
        };

        afterEach(() => setCurrentUser(EMPTY_USER));

        it('should list the caterers of the orders when no groups are set', () => {
            setOrders([
                new CateringOrder({ id: '1', caterer: 'Cafe' }),
                new CateringOrder({ id: '2', caterer: 'Bar' }),
                new CateringOrder({ id: '3', caterer: 'Cafe' }),
            ]);
            expect(spectator.service.caterers()).toEqual(['Cafe', 'Bar']);
        });

        it('should only list the caterers of the groups the user is in', () => {
            setup(['cafe-staff', 'deli-staff']);
            expect(spectator.service.caterers()).toEqual(['Cafe', 'Deli']);
            expect(spectator.service.filters.caterer).toBe('');
        });

        it('should list the caterers of the orders for admins', () => {
            setup(['placeos_admin']);
            expect(spectator.service.caterers()).toEqual(['Cafe', 'Bar']);
        });
    });
});
