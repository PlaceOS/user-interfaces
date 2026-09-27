import {
    computed,
    effect,
    inject,
    Injectable,
    signal,
    untracked,
} from '@angular/core';
import { endOfDay, format, getUnixTime, startOfDay } from 'date-fns';

import {
    AsyncHandler,
    Booking,
    CalendarEvent,
    CateringOrder,
    currentUser,
    flatten,
    i18n,
    log,
    notifyError,
    notifySuccess,
    SettingsService,
    unique,
} from '@placeos/common';

import { OrganisationService } from '@placeos/common';
import {
    queryBookingsOrThrow,
    updateBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import {
    queryEventsOrThrow,
    showEventMetadata,
    updateEventMetadata,
} from 'libs/events/src/lib/events.fn';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { newCalendarEventFromBooking } from 'libs/events/src/lib/utilities';
import { Subject } from 'rxjs';
import {
    diffOrders,
    OrderChanges,
    orderHost,
    orderLocation,
} from './catering-order-tools';
import { CateringOrderStatus } from './catering.interfaces';
import {
    CateringStatusFilter,
    isOrderDone,
    matchesStatusFilter,
    statusList,
} from './catering.vars';

export interface CateringOrderFilters {
    /** UTC epoch of the date to get catering orders for */
    date?: number;
    /** List of zones to filter catering order bookings */
    zones?: string[];
    /** Search string to filter orders on */
    search?: string;
    /** Caterer to filter orders on */
    caterer?: string;
    /** Status to filter orders on. Defaults to all statuses. */
    status?: CateringStatusFilter;
}

/** Filters that change which orders the server returns */
type CateringOrderQuery = Pick<CateringOrderFilters, 'date' | 'zones'>;

function checkOrder(
    order: CateringOrder,
    filters: CateringOrderFilters,
): boolean {
    const s = (filters.search || '').toLowerCase();
    const order_text = [
        orderLocation(order),
        orderHost(order),
        order.event?.organiser?.email,
        order.charge_code,
        order.invoice_number,
        order.notes,
    ]
        .join('\n')
        .toLowerCase();
    return !!order.items.find((item) => {
        return (
            (!filters?.caterer ||
                (filters.caterer === '<empty>' && !item.caterer) ||
                item.caterer === filters.caterer) &&
            (item.name.toLowerCase().includes(s) ||
                !!item.options.find((option) =>
                    option.name.toLowerCase().includes(s),
                ) ||
                order_text.includes(s))
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
    private _load_error = signal<boolean>(false);
    private _last_updated = signal<number>(0);
    /** ID of the latest load request. Older responses are discarded. */
    private _load_id = 0;
    /** Query and building of the orders currently in the list */
    private _loaded_key = '';
    /** Only the filters that need new data from the server */
    private readonly _query = computed<CateringOrderQuery>(
        () => {
            const { date, zones } = this._filters();
            return { date, zones };
        },
        {
            equal: (a, b) =>
                a.date === b.date &&
                (a.zones || []).join() === (b.zones || []).join(),
        },
    );

    /** Signal for list of orders */
    public readonly orders = this._orders.asReadonly();
    /** Signal for loading status of orders */
    public readonly loading = this._loading.asReadonly();
    /** Whether the latest load of orders failed */
    public readonly load_error = this._load_error.asReadonly();
    /** Time of the latest successful load of orders */
    public readonly last_updated = this._last_updated.asReadonly();
    /** Orders that are new or cancelled since the previous poll of the same day */
    public readonly order_changes = new Subject<OrderChanges>();

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
    /** Orders that match the search and caterer filters, in delivery order */
    public readonly matching = computed(() =>
        this._orders()
            .filter((order) => checkOrder(order, this._filters()))
            .sort((a, b) => a.deliver_at - b.deliver_at),
    );
    /** Filtered list of catering orders */
    public readonly filtered = computed(() => {
        const status = this._filters().status;
        return this.matching().filter((order) =>
            matchesStatusFilter(order.status, status),
        );
    });
    /** Number of orders for each status filter. Ignores the status filter. */
    public readonly status_counts = computed(() => {
        const counts: Partial<Record<CateringStatusFilter, number>> = {};
        const add = (key: CateringStatusFilter) =>
            (counts[key] = (counts[key] || 0) + 1);
        for (const order of this.matching()) {
            add('all');
            add(order.status);
            if (!isOrderDone(order.status)) add('active');
        }
        return counts;
    });

    constructor() {
        super();
        this._space_pipe.org = this._org;
        effect(() => {
            const building = this._org.active_building();
            const query = this._query();
            this._poll();
            if (!building?.id) return;
            untracked(() => this._loadOrders(query, building.id));
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
     * Change the status of an order and tell the user the result.
     * Offers undo after a successful change.
     */
    public async changeStatus(
        order: CateringOrder,
        status: CateringOrderStatus,
        can_undo = true,
    ) {
        const previous = order.status;
        if (previous === status) return;
        try {
            await this.updateStatus(order, status);
        } catch {
            return notifyError(i18n('CATERING.ORDERS_STATUS_ERROR'));
        }
        if (!can_undo) return;
        const name = statusList().find((s) => s.id === status)?.name;
        notifySuccess(
            i18n('CATERING.ORDERS_STATUS_UPDATED', { status: name || status }),
            i18n('COMMON.UNDO'),
            () => this.changeStatus(order, previous, false),
        );
    }

    /**
     * Update the status of the order.
     * The order shows the new status at once and reverts if the save fails.
     * @param order Order to update
     * @param status New order status
     */
    public async updateStatus(
        order: CateringOrder,
        status: CateringOrderStatus,
    ) {
        const previous = order.status;
        this._setOrderStatus(order, status);
        try {
            return await this._saveStatus(order, status);
        } catch (error) {
            this._setOrderStatus(order, previous);
            throw error;
        }
    }

    /** Change the status of a listed order and update the list signals */
    private _setOrderStatus(order: CateringOrder, status: CateringOrderStatus) {
        order.status = status;
        this._orders.update((list) => [...list]);
    }

    private async _saveStatus(
        order: CateringOrder,
        status: CateringOrderStatus,
    ) {
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
        return booking;
    }

    private async _loadOrders(query: CateringOrderQuery, building_id: string) {
        const load_id = ++this._load_id;
        const day = format(query.date || Date.now(), 'yyyy-MM-dd');
        const key = `${building_id}|${day}|${(query.zones || []).join()}`;
        this._loading.set(true);
        try {
            const orders = this.using_bookings
                ? await this._loadBookingOrders(query)
                : await this._loadEmbeddedOrders(query);
            if (load_id !== this._load_id) return;
            const next = unique(
                orders.filter(
                    (o) => format(o.deliver_at, 'yyyy-MM-dd') === day,
                ),
                'id',
            );
            if (this._loaded_key === key) {
                const changes = diffOrders(this._orders(), next);
                if (changes.added.length || changes.cancelled.length) {
                    this.order_changes.next(changes);
                }
            }
            this._orders.set(next);
            this._loaded_key = key;
            this._load_error.set(false);
            this._last_updated.set(Date.now());
        } catch (error) {
            if (load_id !== this._load_id) return;
            log('Catering', 'Failed to load catering orders', error, 'error');
            // Keep the old list only when it is for the same day and zones
            if (this._loaded_key !== key) this._orders.set([]);
            this._load_error.set(true);
        } finally {
            if (load_id === this._load_id) this._loading.set(false);
        }
    }

    private async _loadEmbeddedOrders({ date, zones }: CateringOrderQuery) {
        const start = getUnixTime(startOfDay(date || Date.now()));
        const end = getUnixTime(endOfDay(date || Date.now()));
        if (!zones?.length) {
            zones = this._settings.get('app.use_region')
                ? [this._org.region?.id]
                : [this._org.building?.id];
        }
        const events = await queryEventsOrThrow({
            zone_ids: (zones || []).join(','),
            period_start: start,
            period_end: end,
        });
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

    private async _loadBookingOrders({ date, zones }: CateringOrderQuery) {
        const start = getUnixTime(startOfDay(date || Date.now()));
        const end = getUnixTime(endOfDay(date || Date.now()));
        if (!zones?.length) {
            zones = this._settings.get('app.use_region')
                ? [this._org.region.id]
                : [this._org.building.id];
        }
        const bookings = await queryBookingsOrThrow({
            type: 'catering-order',
            zones: (zones || []).join(','),
            period_start: start,
            period_end: end,
        });
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
