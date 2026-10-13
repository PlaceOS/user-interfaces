import type { OrganisationService, Space } from '@placeos/common';
import { CateringOrder } from '@placeos/common';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';

// Display details of one catering order: where it goes, who it is for and
// what is in it. Operations on lists of orders are in catering-order-tools.

const SPACE_PIPE = new SpacePipe();

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
