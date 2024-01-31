import { HashMap } from '@placeos/common';
import {
    addDays,
    addMinutes,
    addMonths,
    addSeconds,
    addWeeks,
    addYears,
    differenceInMinutes,
    endOfDay,
    format,
    getUnixTime,
    isAfter,
    isBefore,
    isSameMinute,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { RecurrenceDetails, TimeBlock, TimePeriod } from './event.interfaces';

const DAYS_OF_WEEK = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
];

export function eventStatus(
    details: HashMap
): 'approved' | 'tentative' | 'declined' {
    if (details.status === 'cancelled') return 'declined';
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

export function parseRecurrence(data: RecurrenceDetails) {
    let start = data.start || (data as any).range_start * 1000;
    let end = data.end || (data as any).range_end;
    if (data.occurrences > 1) {
        switch (data.pattern) {
            case 'daily':
                end = addDays(
                    start || Date.now(),
                    (data.occurrences - 1) * data.interval
                ).valueOf();
                break;
            case 'weekly':
                end = addWeeks(
                    start || Date.now(),
                    (data.occurrences - 1) * data.interval
                ).valueOf();
                break;
            case 'month_day':
            case 'monthly':
                end = addMonths(
                    start || Date.now(),
                    (data.occurrences - 1) * data.interval
                ).valueOf();
                end = addDays(end, 7).valueOf();
                break;
            case 'yearly':
                end = addYears(
                    start || Date.now(),
                    (data.occurrences - 1) * data.interval
                ).valueOf();
                break;
        }
    }
    return {
        range_start: getUnixTime(startOfDay(start)),
        range_end: getUnixTime(endOfDay(end)),
        interval: data.interval,
        pattern: data.pattern,
        days_of_week:
            data.days_of_week?.map((_) =>
                typeof _ === 'number' ? DAYS_OF_WEEK[_] : _
            ) || [],
    };
}

export function formatRecurrence({
    interval,
    pattern,
    start,
    end,
    occurrences,
}: RecurrenceDetails) {
    let details = '';

    if (interval) {
        switch (pattern) {
            case 'daily':
                details = details.concat(
                    interval > 1 ? `Every ${interval} days` : 'Daily'
                );
                if (occurrences > 1)
                    end = addDays(
                        start || Date.now(),
                        (occurrences - 1) * interval
                    ).valueOf();
                break;
            case 'weekly':
                details = details.concat(
                    interval > 1 ? `Every ${interval} weeks` : 'Weekly'
                );
                if (occurrences > 1)
                    end = addWeeks(
                        start || Date.now(),
                        (occurrences - 1) * interval
                    ).valueOf();
                break;
            case 'month_day':
            case 'monthly':
                details = details.concat(
                    interval > 1 ? `Every ${interval} months` : 'Monthly'
                );
                if (occurrences > 1)
                    end = addMonths(
                        start || Date.now(),
                        (occurrences - 1) * interval
                    ).valueOf();
                break;
            case 'yearly':
                details = details.concat(
                    interval > 1 ? `Every ${interval} yeats` : 'Yearly'
                );
                if (occurrences > 1)
                    end = addYears(
                        start || Date.now(),
                        (occurrences - 1) * interval
                    ).valueOf();
                break;
        }
        if (occurrences >= 1) {
            details = details.concat(`, until ${format(end, 'MMM do, yyyy')}`);
        }
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
    min_size: number = 29
): TimeBlock[] {
    let start = new Date(0);
    const slots: TimeBlock[] = [];
    list.sort((a, b) => a.date - b.date);
    for (const booking of list) {
        const bkn_start = new Date(
            addMinutes(booking.date, -booking.extension_data?.setup_time || 0)
        );
        const bkn_end = addMinutes(
            booking.date,
            booking.duration + (booking.extension_data?.breakdown_time || 0)
        );
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
    min_size: number = 29
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
    min_size: number = 29
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
