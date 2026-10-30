import { TimeBlock, TimePeriod } from '@placeos/common';
import {
    addMinutes,
    addSeconds,
    differenceInMinutes,
    isAfter,
    isBefore,
    startOfMinute,
} from 'date-fns';

/**
 * Generate a list of free time slots between the given bookings
 * @param list List of bookings to find slots between
 * @param min_size Minimum length of a free slot in minutes
 */
export function getFreeTimeSlots(
    list: TimePeriod[],
    min_size: number = 29,
): TimeBlock[] {
    let start = new Date(0);
    const slots: TimeBlock[] = [];
    list.sort((a, b) => a.date - b.date);
    for (const booking of list) {
        const setup_time =
            booking.setup_time ?? booking.extension_data?.setup_time ?? 0;
        const breakdown_time =
            booking.breakdown_time ??
            booking.extension_data?.breakdown_time ??
            0;
        const bkn_start = new Date(addMinutes(booking.date, -setup_time));
        const bkn_end = addMinutes(
            booking.date,
            booking.duration + breakdown_time,
        );
        if (isAfter(bkn_start, start)) {
            const diff = Math.abs(differenceInMinutes(bkn_start, start));
            if (diff >= min_size) {
                slots.push({
                    start: start.valueOf(),
                    end: bkn_start.valueOf(),
                });
            }
        }
        if (isAfter(bkn_end, start)) {
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

/**
 * Get the next free time slot from the given bookings
 * @param list List of bookings to find the next slot
 * @param date Date to find next slot after in ms since UTC epoch
 * @param min_size Minimum length of the free slot in minutes
 */
export function getNextFreeTimeSlot(
    list: TimePeriod[],
    date: number = new Date().valueOf(),
    min_size: number = 29,
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
