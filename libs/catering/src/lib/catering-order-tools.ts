import type { OrganisationService, Space } from '@placeos/common';
import { CateringOrder } from '@placeos/common';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';

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
