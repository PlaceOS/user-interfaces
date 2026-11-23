import {
    BookingRuleConditions,
    BookingRules,
    BookingRuleset,
    jsonRecord,
    jsonRecords,
    jsonStrings,
    type JsonRecord,
} from '@placeos/common';
import { metadata, type JsonValue } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';

/** A number, or a string of a number, as JSON. Other values give `undefined` */
function jsonNumber(value: JsonValue | undefined): number | undefined {
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value.trim() && !isNaN(+value)) {
        return +value;
    }
    return undefined;
}

/** A pair of numbers, such as a period, or `undefined` */
function jsonRange(value: JsonValue | undefined): [number, number] | undefined {
    if (!Array.isArray(value) || value.length !== 2) return undefined;
    const [start, end] = value;
    return typeof start === 'number' && typeof end === 'number'
        ? [start, end]
        : undefined;
}

/** The conditions of a booking rule. Fields with the wrong type are left out */
function toConditions(data: JsonRecord): BookingRuleConditions {
    const conditions: BookingRuleConditions = {};
    for (const key of [
        'groups',
        'locations',
        'resource_ids',
        'tags',
    ] as const) {
        if (Array.isArray(data[key])) conditions[key] = jsonStrings(data[key]);
    }
    for (const key of ['min_length', 'max_length'] as const) {
        const value = jsonNumber(data[key]);
        if (value !== undefined) conditions[key] = value;
    }
    for (const key of ['is_before', 'is_after'] as const) {
        const value = data[key];
        if (typeof value === 'string') conditions[key] = value;
    }
    for (const key of ['is_between', 'is_period'] as const) {
        const value = jsonRange(data[key]);
        if (value) conditions[key] = value;
    }
    return conditions;
}

/** A booking ruleset from the JSON of a `*_booking_rules` metadata */
function toBookingRuleset(data: JsonRecord): BookingRuleset {
    const rules_data = jsonRecord(data['rules']);
    const rules: BookingRules = {};
    for (const key of ['auto_approve', 'hidden'] as const) {
        const value = rules_data[key];
        if (typeof value === 'boolean') rules[key] = value;
    }
    const { id, name, zone } = data;
    return {
        ...(typeof id === 'string' ? { id } : {}),
        ...(typeof name === 'string' ? { name } : {}),
        zone: typeof zone === 'string' ? zone : '',
        rules,
        conditions: toConditions(jsonRecord(data['conditions'])),
    };
}

/**
 * Booking rulesets from the details of a `*_booking_rules` metadata
 * @param details Details of the metadata
 */
export function bookingRulesetsFromJson(
    details: JsonValue | undefined,
): BookingRuleset[] {
    return jsonRecords(details).map(toBookingRuleset);
}

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
    const name = `${type}_booking_rules`;
    return metadata
        .show({ id: building_id, name })
        .then(orThrow)
        .then((data) => bookingRulesetsFromJson(data[name]?.details))
        .catch(() => [] as BookingRuleset[]);
}
