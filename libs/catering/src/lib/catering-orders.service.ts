import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { endOfDay, format, getUnixTime, startOfDay } from 'date-fns';

import {
    AsyncHandler,
    Booking,
    CalendarEvent,
    CateringOrder,
    currentUser,
    flatten,
    SettingsService,
    unique,
} from '@placeos/common';

import { OrganisationService } from '@placeos/common';
import {
    queryBookings,
    updateBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import {
    queryEvents,
    showEventMetadata,
    updateEventMetadata,
} from 'libs/events/src/lib/events.fn';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { newCalendarEventFromBooking } from 'libs/events/src/lib/utilities';
import { CateringOrderStatus } from './catering.interfaces';

export interface CateringOrderFilters {
    /** UTC epoch of the date to get catering orders for */
    date?: number;
    /** List of zones to filter catering order bookings */
    zones?: string[];
    /** Search string to filter orders on */
    search?: string;
    /** Caterer to filter orders on */
    caterer?: string;
}

const SPACE_PIPE = new SpacePipe();

function checkOrder(
    order: CateringOrder,
    filters: CateringOrderFilters,
): boolean {
    const s = (filters.search || '').toLowerCase();
    const space =
        (order as CateringOrder & { space?: ReturnType<SpacePipe['get']> })
            .space ||
        order.event?.system ||
        SPACE_PIPE.get(
            order.system_id || order.event?.extension_data.system_id,
        );
    const location = order.event?.location || space.display_name || space.name;
    const host = order.event?.host || order.event?.organiser?.email || '';
    return !!order.items.find((item) => {
        return (
            (!filters?.caterer ||
                (filters.caterer === '<empty>' && !item.caterer) ||
                item.caterer === filters.caterer) &&
            (item.name.toLowerCase().includes(s) ||
                !!item.options.find((option) =>
                    option.name.toLowerCase().includes(s),
                ) ||
                location.toLowerCase().includes(s) ||
                host.toLowerCase().includes(s))
        );
    });
}

const BOOKINGS: Record<string, Booking> = {};

/** Get the room used for catering metadata, including legacy order fallback. */
export function cateringOrderSystemId(order: CateringOrder) {
    return (
        order.system_id ||
        order.event?.resources[0]?.id ||
        order.event?.system?.id ||
        ''
    );
}

@Injectable({
    providedIn: 'root',
})
export class CateringOrdersService extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    private _poll = signal<number>(0);
    private _loading = signal<boolean>(false);
    private _space_pipe = new SpacePipe();
    private _filters = signal<CateringOrderFilters>({
        caterer: '',
    });
    private _orders = signal<CateringOrder[]>([]);

    /** Signal for list of orders */
    public readonly orders = this._orders.asReadonly();
    /** Signal for loading status of orders */
    public readonly loading = this._loading.asReadonly();

    public readonly order_filters = this._filters.asReadonly();

    public readonly caterers = computed(() => {
        const provider_groups: Record<string, string[]> =
            this._settings.get('app.catering_provider_groups') || {};
        let provider_list = Object.keys(provider_groups);
        const is_admin =
            currentUser()?.groups?.includes('placeos_admin') ||
            currentUser()?.groups?.includes('placeos_support');
        if (!provider_list.length || is_admin)
            return unique(this._orders().map((i) => i.caterer));
        provider_list = provider_list.filter((caterer) =>
            provider_groups[caterer].find((group) =>
                currentUser()?.groups?.includes(group),
            ),
        );
        if (
            provider_list.length <= 1 &&
            this._filters()?.caterer !== provider_list[0]
        ) {
            this._filters.set({
                ...this._filters(),
                caterer: provider_list[0],
            });
        }
        return unique(provider_list);
    });
    /** Order filters */
    public get filters() {
        return this._filters();
    }
    /** Order filters */
    public set filters(filters: CateringOrderFilters) {
        this._filters.set(filters);
    }

    public get using_bookings() {
        return this._settings.get('app.catering.use_bookings') == true;
    }
    /** Filtered list of catering orders */
    public readonly filtered = computed(() =>
        this._orders()
            .filter((order) => checkOrder(order, this._filters()))
            .sort((a, b) => a.deliver_at - b.deliver_at),
    );

    constructor() {
        super();
        this._space_pipe.org = this._org;
        effect(() => {
            const building = this._org.active_building();
            const filters = this._filters();
            this._poll();
            if (!building?.id) return;
            this._loadOrders(filters);
        });
    }

    /** Start polling for catering orders */
    public startPolling(delay: number = 15 * 1000) {
        this.interval(
            'polling',
            () => this._poll.set(new Date().valueOf()),
            delay,
        );
        return () => this.stopPolling();
    }

    /** Stop polling for new catering orders */
    public stopPolling() {
        this.clearInterval('polling');
    }

    /**
     * Update the status of the order
     * @param order Order to update
     * @param status New order status
     */
    public async updateStatus(
        order: CateringOrder,
        status: CateringOrderStatus,
    ) {
        order.status = status;
        const updated_order = new CateringOrder({
            ...order,
            status,
            event: null,
        });
        (updated_order as any)._status = status;
        const catering = [
            ...(order.event.extension_data.catering || []).filter(
                (o) => o.id !== order.id,
            ),
            updated_order,
        ].map((i) => new CateringOrder({ ...i }).toJSON());
        const system_id = cateringOrderSystemId(order);
        let booking: Booking;
        if (system_id) {
            const extension_data = await showEventMetadata(
                order.event.id,
                system_id,
            );
            const event = new CalendarEvent({
                ...({ ...order.event, extension_data } as any),
                catering,
            });
            await updateEventMetadata(
                event.id,
                system_id,
                event.extension_data,
            );
        }
        if (this.using_bookings) {
            booking = BOOKINGS[order.id];
            await updateBooking(booking.id, {
                ...booking.toJSON(),
                extension_data: {
                    ...booking.extension_data,
                    details: updated_order.toJSON(),
                },
            });
        }
        this.timeout('refresh-list', () => this._poll.set(Date.now()), 1000);
        order.status = status;
        return booking;
    }

    private async _loadOrders(filters: CateringOrderFilters) {
        this._loading.set(true);
        const orders = this.using_bookings
            ? await this._loadBookingOrders(filters)
            : await this._loadEmbeddedOrders(filters);
        const start = startOfDay(filters.date || Date.now());
        this._orders.set(
            unique(
                orders.filter(
                    (o) =>
                        format(o.deliver_at, 'yyyy-MM-dd') ===
                        format(start, 'yyyy-MM-dd'),
                ),
                'id',
            ),
        );
        this._loading.set(false);
    }

    private async _loadEmbeddedOrders({ date, zones }: CateringOrderFilters) {
        const start = getUnixTime(startOfDay(date || Date.now()));
        const end = getUnixTime(endOfDay(date || Date.now()));
        if (!zones?.length) {
            zones = this._settings.get('app.use_region')
                ? [this._org.region?.id]
                : [this._org.building?.id];
        }
        const events = await queryEvents({
            zone_ids: (zones || []).join(','),
            period_start: start,
            period_end: end,
        }).catch(() => []);
        const orders = flatten(
            events.map((event) =>
                event.valid_catering.map(
                    (o) => new CateringOrder({ ...o, event }),
                ),
            ),
        );
        await Promise.all(orders.map((order) => this._attachOrderSpace(order)));
        return orders;
    }

    private async _loadBookingOrders({ date, zones }: CateringOrderFilters) {
        const start = getUnixTime(startOfDay(date || Date.now()));
        const end = getUnixTime(endOfDay(date || Date.now()));
        if (!zones?.length) {
            zones = this._settings.get('app.use_region')
                ? [this._org.region.id]
                : [this._org.building.id];
        }
        const bookings = await queryBookings({
            type: 'catering-order',
            zones: (zones || []).join(','),
            period_start: start,
            period_end: end,
        }).catch(() => [] as Booking[]);
        const orders = flatten(
            bookings.map((bkn) => {
                const order = new CateringOrder({
                    ...bkn.extension_data.details,
                    system_id: bkn.extension_data.details?.system_id,
                    event: bkn.linked_event
                        ? new CalendarEvent({
                              ...bkn.linked_event,
                          })
                        : newCalendarEventFromBooking(
                              (bkn.linked_bookings[0] as any) || bkn,
                          ),
                });
                BOOKINGS[order.id] = bkn;
                return order;
            }),
        );
        await Promise.all(orders.map((order) => this._attachOrderSpace(order)));
        return orders;
    }

    private async _attachOrderSpace(order: CateringOrder) {
        const system_id =
            order.system_id ||
            order.event?.system?.id ||
            order.event?.resources[0]?.id;
        if (!system_id) return;
        const space = await this._space_pipe.transform(system_id);
        if (!space) return;
        (order as CateringOrder & { space: typeof space }).space = space;
    }
}
