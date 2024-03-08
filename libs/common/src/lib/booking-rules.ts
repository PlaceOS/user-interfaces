import { addMinutes, isAfter, isBefore } from 'date-fns';
import { User } from 'libs/users/src/lib/user.class';

export interface BookingRuleset {
    id?: string;
    name?: string;
    zone: string;
    rules: BookingRules;
    conditions: BookingRuleConditions;
}

export interface BookingRules {
    auto_approve?: boolean;
    hidden?: boolean;
}

export interface BookableResource extends Record<string, any> {
    id: string;
    zones?: string[];
    zone?: { id: string; name: string };
}

export interface BookingRuleDetails {
    resource: BookableResource;
    date: number;
    duration: number;
    host: User;
}

export interface BookingRuleConditions {
    /** List of user groups that the host must be in */
    groups?: string[];
    /** List of locations that the host must be */
    locations?: string[];
    /** Minimum length of a booking */
    min_length?: number;
    /** Maximum length of a booking */
    max_length?: number;
    /** How far in the future this bookings are allowed */
    is_before?: string;
    /** How far in the future this bookings must be */
    is_after?: string;
    /** How far in the future this bookings must be */
    is_between?: [number, number];
    /** Between the selected date/times */
    is_period?: [number, number];
    /** List of resources that this rule applies to */
    resource_ids?: string[];
}

const MINUTE = 1;
const HOUR = 60;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;

const DURATION_MAP: { [duration: string]: number } = {
    month: MONTH,
    months: MONTH,
    week: WEEK,
    weeks: WEEK,
    day: DAY,
    days: DAY,
    hour: HOUR,
    hours: HOUR,
    minute: MINUTE,
    minutes: MINUTE,
};

const DEFAULT_RULES: BookingRules = {
    auto_approve: true,
    hidden: false,
};

/**
 * Conver time string into minutes
 * @param str timestring e.g. `'1 day'`, `'15 minutes'`, `'2 weeks'`
 */
export function stringToMinutes(str: string): number {
    const parts = (str || '').split(' ');
    return parts.length > 1
        ? +parts[0] * DURATION_MAP[parts[1].toLowerCase()]
        : 0;
}

export function addToDate(add: string, date: Date | number = new Date()) {
    return addMinutes(date, stringToMinutes(add));
}

export function filterResourcesFromRules(
    resources: BookableResource[],
    details: BookingRuleDetails,
    ruleset_list: BookingRuleset[]
) {
    return resources.filter(
        (_) =>
            !rulesForResource({ ...details, resource: _ }, ruleset_list)?.hidden
    );
}

export function rulesForResource(
    details: BookingRuleDetails,
    ruleset_list: BookingRuleset[]
): BookingRules {
    if (!(ruleset_list instanceof Array)) return DEFAULT_RULES;
    for (const ruleset of ruleset_list) {
        if (
            ruleset.zone === '*' ||
            ruleset.zone === details.resource.zone?.id ||
            details.resource.zones?.includes(ruleset.zone)
        ) {
            if (checkRulesMatch(details, ruleset)) {
                // console.log(
                //     'Matched Ruleset:',
                //     details.resource.id,
                //     details,
                //     ruleset
                // );
                return ruleset.rules;
            }
        }
    }
    // console.log(
    //     'No Matched Ruleset:',
    //     details.resource.id,
    //     details,
    //     DEFAULT_RULES
    // );
    return DEFAULT_RULES;
}

export function checkRulesMatch(
    { date, duration, host, resource }: BookingRuleDetails,
    ruleset: BookingRuleset
): boolean {
    const date_obj = new Date(date);
    let matches = 0;
    const { conditions } = ruleset;
    if (!conditions) return true;
    if (
        conditions.groups instanceof Array &&
        conditions.groups.every((_) => host?.groups?.includes(_))
    )
        matches += 1;
    if (
        conditions.is_before &&
        isBefore(addMinutes(date, duration), addToDate(conditions.is_before))
    )
        matches += 1;
    if (conditions.is_after && isAfter(date, addToDate(conditions.is_after)))
        matches += 1;
    if (conditions.min_length && conditions.min_length <= duration)
        matches += 1;
    if (
        conditions.is_between &&
        date_obj.getHours() + date_obj.getMinutes() / 60 >=
            conditions.is_between[0] &&
        date_obj.getHours() + date_obj.getMinutes() / 60 <
            conditions.is_between[1]
    )
        matches += 1;
    if (
        conditions.is_period &&
        date >= conditions.is_period[0] &&
        date < conditions.is_period[1]
    )
        matches += 1;
    if (conditions.max_length && conditions.max_length >= duration)
        matches += 1;
    if (
        conditions.resource_ids &&
        conditions.resource_ids.includes(resource.id)
    )
        matches += 1;
    if (conditions.locations && conditions.locations.includes(resource.name))
        matches += 1;
    return matches >= Object.keys(conditions).length;
}
