import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import {
    add,
    isBefore,
    isAfter,
    formatDuration,
    differenceInMinutes,
    getTime,
    isSameDay,
    format,
    startOfMinute,
    setHours,
    setMinutes,
    addMinutes,
} from 'date-fns';
import { timePeriodsIntersect, unique } from '@user-interfaces/common';

import { CalendarEvent } from './event.class';
import { SpaceRuleOptions, SpaceRules, SpaceCheckOptions } from './event.interfaces';

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

let BOOKING_DATE = add(setMinutes(setHours(new Date(), 6), 0), { days: -1 });

export function generateEventForm(event: CalendarEvent): FormGroup {
    const form = new FormGroup({
        id: new FormControl(event.id),
        host: new FormControl(event.host, [Validators.required]),
        creator: new FormControl(event.creator, [Validators.required]),
        calendar: new FormControl(event.calendar),
        attendees: new FormControl(event.attendees || []),
        resources: new FormControl(event.resources || []),
        title: new FormControl(event.title, [Validators.required]),
        body: new FormControl(event.body),
        private: new FormControl(event.private),
        date: new FormControl(event.date, [Validators.required, isFuture]),
        duration: new FormControl(event.duration),
        all_day: new FormControl(event.all_day),
        recurring: new FormControl(event.recurring),
        recurrence: new FormControl(event.recurrence),
        recurring_master_id: new FormControl(event.recurring_master_id),
        master: new FormControl(event.master),
        attachments: new FormControl(event.attachments),
        catering: new FormControl(event.extension_data.catering || []),
        // has_catering: new FormControl(event.has_catering || false),
        visitor_type: new FormControl(event.extension_data.visitor_type),
        location: new FormControl(event.location),
        needs_space: new FormControl(true),
        needs_parking: new FormControl(event.needs_parking || false),
        system: new FormControl(event.system),
    });
    return form;
}

/** Array is not empty */
export function isNotEmpty(control: AbstractControl): { [key: string]: boolean } | null {
    if (Array.isArray(control.value) && !control.value.length) {
        return { isNotEmpty: true };
    }
    return null;
}

/** Check that date in unix ms is in the future */
export function isFuture(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && isBefore(new Date(control.value), new Date())) {
        return { isFuture: true };
    }
    return null;
}

/**
 * Set the initial time used for generating mock bookings
 * @param time New initial time as ms from UTC epoch
 */
export function setMockBookingStartDatetime(time: number) {
    BOOKING_DATE = startOfMinute(new Date(time));
}

/**
 * Get booking rules for the given user and space
 * @param user User to determine applicable rules
 * @param space Space to get rules for
 * @param time Booking start time in ms since UTC epoch
 * @param rules List of booking rules for the building
 */
export function rulesForSpace(options: SpaceRuleOptions): SpaceRules {
    if (!options) {
        throw Error('Options are needed to check for rule matches');
    }
    const space_rules_for_user: SpaceRules = {
        auto_approve: true,
        hide: true,
    };
    /* istanbul ignore else */
    if (options.space) {
        for (const type of Object.keys(options.rules)) {
            if (
                options.rules.hasOwnProperty(type) &&
                options.rules[type] instanceof Array &&
                options.space.zones.find((zone) => zone === type)
            ) {
                for (const rule_block of options.rules[type]) {
                    /* istanbul ignore else */
                    if (
                        checkRules({
                            user: options.user,
                            space: options.space,
                            time: options.time,
                            recurr_end: options.recurr_end,
                            duration: options.duration,
                            rules: rule_block.conditions,
                        })
                    ) {
                        const ruleset = rule_block.rules;
                        const conditions = rule_block.conditions;
                        space_rules_for_user.hide = false;
                        /* istanbul ignore else */
                        if (conditions.max_length) {
                            space_rules_for_user.max_length = stringToMinutes(
                                conditions.max_length as string
                            );
                        }
                        /* istanbul ignore else */
                        if (conditions.min_length) {
                            space_rules_for_user.min_length = stringToMinutes(
                                conditions.min_length as string
                            );
                        }
                        // NOTE: use max_length in conditions instead of book_length in rules
                        // if (ruleset.book_length) {
                        //     space_rules_for_user.max_length = stringToMinutes(ruleset.book_length as string);
                        // }
                        /* istanbul ignore else */
                        if (ruleset.auto_approve !== undefined) {
                            space_rules_for_user.auto_approve = ruleset.auto_approve;
                        }
                        break;
                    }
                }
            }
            /* istanbul ignore else */
            if (!space_rules_for_user.hide) {
                break;
            }
        }
    }
    return space_rules_for_user;
}

/**
 * Check if user matches the given ruleset
 * @param user User to determine applicable rules
 * @param space Space to get rules for
 * @param time Booking start time in ms since UTC epoch
 * @param rules List of booking rules for the building
 */
function checkRules(options: SpaceCheckOptions): boolean {
    /* istanbul ignore else */
    if (options.rules) {
        const time = new Date(options.time);
        const recurr = options.recurr_end ? new Date(options.recurr_end) : new Date();
        const count = Object.keys(options.rules).length;
        let matches = 0;
        for (const key of Object.keys(options.rules)) {
            let counter = 0;
            const condition: string[] =
                options.rules[key] instanceof Array
                    ? (options.rules[key] as [])
                    : [options.rules[key] as string];
            switch (key) {
                // case 'groups':
                //     /* istanbul ignore else */
                //     if (options.user && options.user.groups) {
                //         counter = 0;
                //         condition.forEach((i) =>
                //             options.user.groups.find((j) => j === i) ? counter++ : null
                //         );
                //         /* istanbul ignore else */
                //         if (counter > 0) {
                //             matches++;
                //         }
                //     }
                //     break;
                // case 'locations':
                //     /* istanbul ignore else */
                //     if (options.user && options.user.location) {
                //         counter = 0;
                //         condition.forEach((i) =>
                //             (options.user.last_location.name || '').indexOf(i) >= 0
                //                 ? counter++
                //                 : null
                //         );
                //         /* istanbul ignore else */
                //         if (counter >= options.rules[key].length) {
                //             matches++;
                //         }
                //     }
                //     break;
                case 'is_before':
                    /* istanbul ignore else */
                    if (options.time) {
                        const duration = stringToMinutes(condition[0]);
                        const check = add(new Date(), { minutes: duration });
                        let match = isBefore(time, check);
                        /* istanbul ignore else */
                        if (recurr) {
                            match = match && isBefore(recurr, check);
                        }
                        matches += match ? 1 : 0;
                    }
                    break;
                case 'is_after':
                    /* istanbul ignore else */
                    if (options.time) {
                        const duration = stringToMinutes(condition[0]);
                        const check = add(new Date(), { minutes: duration });
                        if (isAfter(time, check)) {
                            matches++;
                        }
                    }
                    break;
                case 'min_length':
                    /* istanbul ignore else */
                    if (
                        options.duration &&
                        durationGreaterThanOrEqual(options.duration, condition[0])
                    ) {
                        matches++;
                    }
                    break;
                case 'max_length':
                    /* istanbul ignore else */
                    if (
                        options.duration &&
                        durationGreaterThanOrEqual(condition[0], options.duration)
                    ) {
                        matches++;
                    }
                    break;
            }
        }
        return matches >= count;
    }
    return false;
}

/**
 * Whether the first input is greater than the last. Converts duration strings into minutes
 * @param duration_1 First input can be a number in minutes or a duration string e.g. `1 hour`
 * @param duration_2 Second input can be a number in minutes or a duration string e.g. `30 minutes`
 */
export function durationGreaterThanOrEqual(
    duration_1: string | number,
    duration_2: string | number
) {
    const first: number = typeof duration_1 === 'string' ? stringToMinutes(duration_1) : duration_1;
    const second: number =
        typeof duration_2 === 'string' ? stringToMinutes(duration_2) : duration_2;
    return first >= second;
}

/**
 * Conver time string into minutes
 * @param str timestring e.g. `'1 day'`, `'15 minutes'`, `'2 weeks'`
 */
export function stringToMinutes(str: string): number {
    const parts = str.split(' ');
    return +parts[0] * DURATION_MAP[parts[1]];
}

/**
 * Get current status within bookings
 * @param bookings List of bookings
 * @param host Host of the new event
 * @param date Datetime of the new event
 */
export function statusFromBookings(
    bookings: CalendarEvent[],
    bookable: boolean,
    requestable: boolean,
    date: number = getTime(new Date())
) {
    const free_slots = getFreeBookingSlots(bookings);
    const now = new Date(date);
    const next_free_slot = free_slots.find((slot) => {
        const start = new Date(slot.start);
        const end = new Date(slot.end);
        return isAfter(start, now) || timePeriodsIntersect(date, date, slot.start, slot.end);
    });
    const start = new Date(next_free_slot.start);
    const end = new Date(next_free_slot.end);
    const currently_free = timePeriodsIntersect(
        date,
        date,
        next_free_slot.start,
        next_free_slot.end
    );
    const time_until_next_block = formatDuration({
        minutes: currently_free ? differenceInMinutes(end, now) : differenceInMinutes(start, now),
    });
    const free_tomorrow = !currently_free && !isSameDay(start, now);
    const free_today = currently_free && !isSameDay(end, now);
    return {
        status: !bookable
            ? 'Not Bookable'
            : currently_free
            ? requestable
                ? 'Available by Request'
                : 'Available'
            : 'Meeting in Progress',
        available_until: free_today
            ? 'No meetings today'
            : currently_free
            ? `Free until ${format(end, 'h:mm B')}(${time_until_next_block})`
            : free_tomorrow
            ? 'Unavailable today'
            : `Free at ${format(start, 'h:mm B')}(${time_until_next_block})`,
    };
}
export interface IBookingSlot {
    start: number;
    end: number;
}

/**
 * Generate a list of free time slots between the given bookings
 * @param list List of bookings to find slots between
 * @param min_size Minimum length of a free slot in minutes
 */
export function getFreeBookingSlots(list: CalendarEvent[], min_size: number = 30): IBookingSlot[] {
    /* istanbul ignore else */
    if (!list) {
        return [
            {
                start: 0,
                end: startOfMinute(new Date()).getTime() * 10,
            },
        ];
    }
    const slots: IBookingSlot[] = [];
    let start = new Date(0);
    list.sort((a, b) => a.date - b.date);
    for (const booking of list) {
        const bkn_start = new Date(booking.date);
        const bkn_end = add(bkn_start, { minutes: booking.duration });
        if (isAfter(bkn_start, start)) {
            const diff = Math.abs(differenceInMinutes(bkn_start, start));
            /* istanbul ignore else */
            if (diff >= min_size) {
                slots.push({ start: start.valueOf(), end: bkn_start.valueOf() });
            }
            start = bkn_end;
        } else if (startOfMinute(start).getTime() === startOfMinute(bkn_start).getTime()) {
            start = bkn_end;
        }
    }
    slots.push({
        start: start.getTime(),
        end: startOfMinute(new Date()).getTime() * 10,
    });
    return slots;
}

/**
 * Get the next free time slot from the given bookings
 * @param list List of bookings to find the next slot
 * @param date Date to find next slot after in ms since UTC epoch
 * @param min_size Minimum length of the free slot in minutes
 */
export function getNextFreeBookingSlot(
    list: CalendarEvent[],
    date: number = new Date().valueOf(),
    min_size: number = 30
): IBookingSlot {
    const slots = getFreeBookingSlots(list, min_size);
    const time = add(startOfMinute(new Date(date)), { seconds: 1 });
    for (const block of slots) {
        const start = startOfMinute(new Date(block.start));
        const end = startOfMinute(new Date(block.end));
        if (isAfter(start, time)) {
            return block;
        } else if (isBefore(time, end)) {
            const duration = differenceInMinutes(end, time);
            /* istanbul ignore else */
            if (duration >= min_size) {
                return block;
            }
        }
    }
    return slots[slots.length - 1];
}

export function replaceBookings(
    list: CalendarEvent[],
    new_bookings: CalendarEvent[],
    filter_options: { space: string; from: number; to: number }
) {
    const from = filter_options.from;
    const to = filter_options.to;
    const filtered_list = list.filter((booking) => {
        const start = new Date(booking.date);
        const end = addMinutes(start, booking.duration);
        return (
            !booking.resources.find((space) => space.email === filter_options.space) ||
            !timePeriodsIntersect(from, to, start.valueOf(), end.valueOf())
        );
    });
    const updated_list = filtered_list.concat(new_bookings);
    updated_list.sort((a, b) => a.date - b.date);
    return unique(updated_list, 'id');
}
