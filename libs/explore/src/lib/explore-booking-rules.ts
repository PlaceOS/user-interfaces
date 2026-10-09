import { BookingRuleset } from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';

/**
 * Load the booking rules for one type of resource in a building.
 * Gives an empty list when the building has no rules or the request fails.
 * @param building_id ID of the building zone
 * @param type Prefix of the metadata key, e.g. `desk` for `desk_booking_rules`
 */
export function loadBookingRules(
    building_id: string,
    type: 'desk' | 'parking' | 'room',
): Promise<BookingRuleset[]> {
    return showMetadata(building_id, `${type}_booking_rules`)
        .then((_) =>
            _?.details instanceof Array ? (_.details as BookingRuleset[]) : [],
        )
        .catch(() => [] as BookingRuleset[]);
}
