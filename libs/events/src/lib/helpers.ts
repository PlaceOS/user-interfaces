import { HashMap } from '@placeos/common';
import {
    addMinutes,
    addSeconds,
    differenceInMinutes,
    format,
    isAfter,
    isBefore,
    isSameMinute,
    startOfMinute,
} from 'date-fns';
import { Space } from 'libs/spaces/src/lib/space.class';
import {
    BookingRuleDetails,
    BookingRules,
    BookingRuleset,
    BookingRulesmap,
    RecurrenceDetails,
    TimeBlock,
    TimePeriod,
} from './event.interfaces';

export function eventStatus(
    details: HashMap
): 'approved' | 'tentative' | 'declined' {
    if (details.resources?.length) {
        if (
            details.resources.every(
                (i) => i.response_status === 'accepted' || details.approved
            )
        ) {
            return 'approved';
        } else if (
            details.resources.some(
                (i) =>
                    i.response_status === 'tentative' ||
                    i.response_status === 'needsAction'
            )
        ) {
            return 'tentative';
        }
        return 'declined';
    }
    return 'approved';
}

export function formatRecurrence({
    interval,
    pattern,
    end,
}: RecurrenceDetails) {
    let details = '';
    if (interval) {
        switch (pattern) {
            case 'daily':
                details = details.concat(
                    interval > 1 ? `Every ${interval} days` : 'Daily'
                );
                break;
            case 'weekly':
                details = details.concat(
                    interval > 1 ? `Every ${interval} weeks` : 'Weekly'
                );
                break;
            case 'monthly':
                details = details.concat(
                    interval > 1 ? `Every ${interval} months` : 'Monthly'
                );
                break;
        }
        details = details.concat(`, until ${format(end, 'MMM do, yyyy')}`);
    }
    return details;
}

/**
 * Generate a list of free time slots between the given bookings
 * @param list List of bookings to find slots between
 * @param min_size Minimum length of a free slot in minutes
 */
export function getFreeTimeSlots(
    list: TimePeriod[],
    min_size: number = 30
): TimeBlock[] {
    let start = new Date(0);
    const slots: TimeBlock[] = [];
    list.sort((a, b) => a.date - b.date);
    for (const booking of list) {
        const bkn_start = new Date(booking.date);
        const bkn_end = addMinutes(booking.date, booking.duration);
        if (isAfter(booking.date, start)) {
            const diff = Math.abs(differenceInMinutes(bkn_start, start));
            if (diff >= min_size) {
                slots.push({
                    start: start.valueOf(),
                    end: booking.date,
                });
            }
            start = bkn_end;
        } else if (isSameMinute(start, booking.date)) {
            start = bkn_end;
        }
    }
    const s = start.valueOf();
    slots.push({
        start: s,
        end: (s ? s : Date.now()) * 10,
    });
    return slots;
}

export function periodInFreeTimeSlot(
    start: number,
    end: number,
    list: TimePeriod[],
    min_size: number = 30
) {
    const blocks = getFreeTimeSlots(list, min_size);
    for (const blk of blocks) {
        if (
            start >= blk.start &&
            start < blk.end &&
            end > blk.start &&
            end <= blk.end
        ) {
            return true;
        }
    }
    return false;
}

/**
 * Get the next free time slot from the given bookings
 * @param list List of bookings to find the next slot
 * @param date Date to find next slot after in ms since UTC epoch
 * @param min_size Minimum length of the free slot in minutes
 */
export function getNextFreeTimeSlot(
    list: TimePeriod[],
    date: number = new Date().valueOf(),
    min_size: number = 30
): TimeBlock {
    const slots = getFreeTimeSlots(list, min_size);
    const time = addSeconds(startOfMinute(date), 1);
    for (const block of slots) {
        if (isAfter(block.start, time)) {
            return block;
        } else if (isBefore(time, block.end)) {
            const duration = differenceInMinutes(block.end, time);
            if (duration >= min_size) return block;
        }
    }
    return slots[slots.length - 1];
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
    return parts.length > 1 ? +parts[0] * DURATION_MAP[parts[1]] : 0;
}

export function addToDate(add: string, date: Date | number = new Date()) {
    return addMinutes(date, stringToMinutes(add));
}

export function filterSpacesFromRules(
    spaces: Space[],
    details: BookingRuleDetails,
    rulemap: BookingRulesmap
) {
    return spaces.filter(
        (_) => !rulesForSpace({ ...details, space: _ }, rulemap)?.hidden
    );
}

export function rulesForSpace(
    details: BookingRuleDetails,
    rulemap: BookingRulesmap
): BookingRules {
    const { space } = details;
    for (const zone of space.zones) {
        if (rulemap[zone]?.length) {
            for (const ruleset of rulemap[zone]) {
                if (ruleset && checkRulesMatch(details, ruleset))
                    return { ...DEFAULT_RULES, ...ruleset.rules };
            }
        }
    }
    return DEFAULT_RULES;
}

export function checkRulesMatch(
    { date, duration, host }: BookingRuleDetails,
    ruleset: BookingRuleset
): boolean {
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
    if (
        conditions.min_length &&
        stringToMinutes(conditions.min_length) <= duration
    )
        matches += 1;
    if (
        conditions.max_length &&
        stringToMinutes(conditions.max_length) >= duration
    )
        matches += 1;
    return matches >= Object.keys(conditions).length;
}
