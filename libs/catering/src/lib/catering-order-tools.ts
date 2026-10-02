import type { OrganisationService, Space } from '@placeos/common';
import { CateringOrder } from '@placeos/common';
import { format } from 'date-fns';
import { i18n } from 'libs/common/src/lib/locale.service';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';

import { statusList } from './catering.vars';

const SPACE_PIPE = new SpacePipe();

/** Total amount of one menu item in a list of orders */
export interface PrepSummaryItem {
    name: string;
    /** Amount in orders that are not cancelled */
    total: number;
    /** Amount in orders that still need to be made */
    remaining: number;
    /** Amount for each set of options. An empty string is no options. */
    variants: { options: string; total: number }[];
}

/** Ready orders that go to the same level */
export interface DeliveryRun {
    /** ID of the level. Empty when the level is not known. */
    id: string;
    name: string;
    /** Orders in delivery time order */
    orders: CateringOrder[];
}

/** Orders that changed between two loads of the same day */
export interface OrderChanges {
    added: CateringOrder[];
    cancelled: CateringOrder[];
}

/** Room name or location text of an order */
export function orderLocation(order: CateringOrder) {
    const space =
        (order as CateringOrder & { space?: ReturnType<SpacePipe['get']> })
            .space ||
        order.event?.system ||
        SPACE_PIPE.get(
            order.system_id || order.event?.extension_data.system_id,
        );
    return order.event?.location || space?.display_name || space?.name || '';
}

/** Name or email of the host of an order */
export function orderHost(order: CateringOrder) {
    return (
        order.event?.organiser?.name ||
        order.event?.host ||
        order.event?.organiser?.email ||
        ''
    );
}

/** Items of an order as text, e.g. "2× Coffee (Oat milk); 1× Muffin" */
export function orderItemsText(order: CateringOrder) {
    return order.items
        .map((item) => {
            const options = item.option_list.map((o) => o.name).join(', ');
            return `${item.quantity}× ${item.name}${options ? ` (${options})` : ''}`;
        })
        .join('; ');
}

/**
 * Add up the items in the orders so the kitchen can plan the day.
 * Items that need the most work are first.
 */
export function prepSummary(
    orders: readonly CateringOrder[],
): PrepSummaryItem[] {
    const items = new Map<
        string,
        { total: number; remaining: number; variants: Map<string, number> }
    >();
    for (const order of orders) {
        if (order.status === 'cancelled') continue;
        const is_open =
            order.status !== 'ready' && order.status !== 'delivered';
        for (const item of order.items) {
            const entry = items.get(item.name) || {
                total: 0,
                remaining: 0,
                variants: new Map<string, number>(),
            };
            const options = item.option_list
                .map((o) => o.name)
                .sort()
                .join(', ');
            entry.total += item.quantity;
            if (is_open) entry.remaining += item.quantity;
            entry.variants.set(
                options,
                (entry.variants.get(options) || 0) + item.quantity,
            );
            items.set(item.name, entry);
        }
    }
    return [...items.entries()]
        .map(([name, { total, remaining, variants }]) => ({
            name,
            total,
            remaining,
            variants: [...variants.entries()]
                .map(([options, total]) => ({ options, total }))
                .sort((a, b) => b.total - a.total),
        }))
        .sort(
            (a, b) => b.remaining - a.remaining || a.name.localeCompare(b.name),
        );
}

/**
 * Group ready orders by level, so one person can deliver a group in one trip.
 * Groups with the earliest delivery are first.
 * @param levelOf Find the level of an order. Return null when not known.
 */
export function deliveryRuns(
    orders: readonly CateringOrder[],
    levelOf: (order: CateringOrder) => { id: string; name: string } | null,
): DeliveryRun[] {
    const runs = new Map<string, DeliveryRun>();
    const ready = orders
        .filter((order) => order.status === 'ready')
        .sort((a, b) => a.deliver_at - b.deliver_at);
    for (const order of ready) {
        const level = levelOf(order) || { id: '', name: '' };
        const run = runs.get(level.id) || { ...level, orders: [] };
        run.orders.push(order);
        runs.set(level.id, run);
    }
    return [...runs.values()];
}

/** Find orders that are new or cancelled since the previous load */
export function diffOrders(
    previous: readonly CateringOrder[],
    next: readonly CateringOrder[],
): OrderChanges {
    const before = new Map(previous.map((order) => [order.id, order.status]));
    return {
        added: next.filter(
            (order) => !before.has(order.id) && order.status !== 'cancelled',
        ),
        cancelled: next.filter(
            (order) =>
                order.status === 'cancelled' &&
                before.has(order.id) &&
                before.get(order.id) !== 'cancelled',
        ),
    };
}

/** Rows for a CSV export of the orders, with translated column names */
export function ordersToCsvRows(orders: readonly CateringOrder[]) {
    return orders.map((order) => ({
        [i18n('FORM.DATE')]: format(order.deliver_at, 'yyyy-MM-dd'),
        [i18n('COMMON.TIME')]: format(order.deliver_at, 'HH:mm'),
        [i18n('CATERING.CATERER')]: order.caterer,
        [i18n('COMMON.LOCATION')]: orderLocation(order),
        [i18n('FORM.HOST')]: orderHost(order),
        [i18n('CATERING.CHARGE_CODE')]: order.charge_code,
        [i18n('CATERING.INVOICE_NUMBER')]: order.invoice_number,
        [i18n('COMMON.STATUS')]:
            statusList().find((s) => s.id === order.status)?.name ||
            order.status,
        [i18n('CATERING.ORDER_SELECTED_HEADER')]: orderItemsText(order),
        [i18n('CATERING.TOTAL_COST')]: (order.total_cost / 100).toFixed(2),
        [i18n('FORM.NOTES')]: order.notes,
    }));
}

/**
 * Make a function that finds the level of an order from its room.
 * @param org Organisation data with the list of levels
 */
export function orderLevelFinder(
    org: Pick<OrganisationService, 'levelWithID'>,
) {
    return (order: CateringOrder) => {
        const space =
            (order as CateringOrder & { space?: Space }).space ||
            order.event?.system;
        const level =
            org.levelWithID([...(space?.zones || [])]) ||
            (space as Partial<Space>)?.level;
        if (!level?.id) return null;
        return { id: level.id, name: level.display_name || level.name };
    };
}
