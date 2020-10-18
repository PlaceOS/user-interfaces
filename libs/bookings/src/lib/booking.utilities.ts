import { FormGroup } from '@angular/forms';
import { formatDuration } from 'date-fns';

import { BookingRule, SpaceCheckOptions, SpaceRules, SpaceRuleOptions } from './booking.interfaces';

import { CateringItem } from '../../../catering/src/lib/catering-item.class';
import { HashMap, predictableRandomInt } from '@user-interfaces/common';
import { User } from '../../../users/src/lib/user.class';
import { generateMockUser } from '../../../users/src/lib/user.utilities';
import { CalendarEvent } from '@user-interfaces/events';
import { Space } from '../../../spaces/src/lib/space.class';

import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

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

let BOOKING_COUNT = 0;
let BOOKING_DATE = dayjs().hour(6).minute(0).subtract(1, 'd').startOf('m');

/**
 * Set the initial time used for generating mock bookings
 * @param time New initial time as ms from UTC epoch
 */
export function setMockBookingStartDatetime(time: number) {
    BOOKING_DATE = dayjs(time).startOf('m');
}

const randomQuarterHours = () => predictableRandomInt(5, 2) * 15;

/**
 * Create mock raw API data for a booking
 * @param override Overrides the properties of the generated booking with it's own
 */
export function generateMockBooking(override: HashMap = {}, resetDate = false) {
    const id = `booking-${BOOKING_COUNT++}`;
    if (!!resetDate) {
        BOOKING_DATE = dayjs().hour(6).minute(0).startOf('m');
    }
    BOOKING_DATE = BOOKING_DATE.add(randomQuarterHours(), 'm');
    const start = BOOKING_DATE.valueOf();
    const duration = randomQuarterHours();
    const cateringItem = new CateringItem({
        id: 'Cappucino',
        quantity: 5,
    });
    return {
        id,
        icaluid: predictableRandomInt(99_999_999),
        title: `A Meeting ${predictableRandomInt(99)}`,
        attendees: Array(predictableRandomInt(5) + 2)
            .fill(0)
            .map((i) => generateMockUser()),
        organiser: generateMockUser(),
        start_epoch: dayjs(start).unix(),
        end_epoch: dayjs(start).add(duration, 'm').unix(),
        date: start,
        duration,
        description: `A Description`,
        notes: [{ type: 'other', message: `Some notes` }],
        location: `Your City`,
        catering: predictableRandomInt(34567) % 3 === 0,
        extension_data: {
            catering_order: [cateringItem],
            catering_notes:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci. Metus dictum at tempor commodo ullamcorper a lacus.',
        },
        link: predictableRandomInt(10) > 5 ? 'https://browser.zoom.fake/j/12' : '',
        room_ids: [],
        ...override,
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
    if (!list) {
        return [
            {
                start: 0,
                end: dayjs().startOf('m').valueOf() * 10,
            },
        ];
    }
    const slots: IBookingSlot[] = [];
    let start = dayjs(0);
    list.sort((a, b) => a.date - b.date);
    for (const booking of list) {
        const bkn_start = dayjs(booking.date);
        const bkn_end = bkn_start.add(booking.duration, 'm');
        if (bkn_start.isAfter(start)) {
            const diff = Math.abs(bkn_start.diff(start, 'm'));
            if (diff >= min_size) {
                slots.push({ start: start.valueOf(), end: bkn_start.valueOf() });
            }
            start = bkn_end;
        } else if (start.startOf('m').valueOf() === bkn_start.startOf('m').valueOf()) {
            start = bkn_end;
        }
    }
    slots.push({
        start: start.valueOf(),
        end: dayjs().startOf('m').valueOf() * 10,
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
    date: number = dayjs().valueOf(),
    min_size: number = 30
): IBookingSlot {
    const slots = getFreeBookingSlots(list, min_size);
    const time = dayjs(date).startOf('m').second(1);
    for (const block of slots) {
        const start = dayjs(block.start).startOf('m');
        const end = dayjs(block.end).startOf('m');
        if (start.isAfter(time, 's')) {
            return block;
        } else if (time.isBefore(end, 's')) {
            const duration = end.diff(time, 'm');
            if (duration >= min_size) {
                return block;
            }
        }
    }
    return slots[slots.length - 1];
}

const STORED_BOOKING_KEY = 'STAFF.booking_form';
export function storeBookingFormData(form: FormGroup) {
    if (localStorage) {
        const data = form ? form.value : {};
        if (form && form.controls && form.controls.extension_data) {
            data.extension_data = form.controls.extension_data.value;
        }
        localStorage.setItem(STORED_BOOKING_KEY, JSON.stringify(data));
    }
}

export function retrieveBookingFormData(): any {
    let formData = {};
    if (localStorage) {
        const form_string = localStorage.getItem(STORED_BOOKING_KEY);
        if (form_string) {
            try {
                formData = JSON.parse(form_string);
            } catch (e) {}
        }
    }
    return formData;
}

export function clearBookingFormData() {
    if (localStorage && !!retrieveBookingFormData()) {
        localStorage.removeItem(STORED_BOOKING_KEY);
    }
}

const STORED_DESK_BOOKING_KEY = 'STAFF.desk_form';
export function storeDeskBookingFormData(form: FormGroup) {
    if (localStorage) {
        const data = form ? form.value : {};
        if (form && form.controls && form.controls.extension_data) {
            data.extension_data = form.controls.extension_data.value;
        }
        localStorage.setItem(STORED_DESK_BOOKING_KEY, JSON.stringify(data));
    }
}

export function retrieveDeskBookingFormData(): any {
    let formData = {};
    if (localStorage) {
        const form_string = localStorage.getItem(STORED_DESK_BOOKING_KEY);
        if (form_string) {
            try {
                formData = JSON.parse(form_string);
            } catch (e) {}
        }
    }
    return formData;
}

export function clearDeskBookingFormData() {
    if (localStorage && !!retrieveDeskBookingFormData()) {
        localStorage.removeItem(STORED_DESK_BOOKING_KEY);
    }
}

/** Filter spaces based on booking rules */
export function filterSpacesRules(
    list: Space[] = [],
    building_settings: HashMap<HashMap>,
    host: User,
    options: {
        date: number;
        duration: number;
        all_day?: boolean;
        visitor_type?: string;
    }
): Space[] {
    return list.filter((space) => {
        const booking_rules = building_settings[space.level.parent_id].details?.booking_rules;
        const { date, all_day, duration, visitor_type } = options;
        const rules = rulesForSpace({
            space,
            time: date,
            duration: all_day ? 24 * 60 : duration,
            visitor_type,
            user: host,
            rules: booking_rules,
        });
        if (visitor_type) {
            return !rules.hide && rules.room_type === visitor_type;
        } else {
            return !rules.hide;
        }
    });
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
        hide: false,
    };
    if (options.space) {
        for (const type of Object.keys(options.rules || {})) {
            if (
                options.rules.hasOwnProperty(type) &&
                options.rules[type] instanceof Array &&
                (options.space.zones || []).find((i) => i === type)
            ) {
                space_rules_for_user.hide = true;
                for (const rule_block of options.rules[type]) {
                    if (
                        checkRules({
                            user: options.user,
                            space: options.space,
                            time: options.time,
                            visitor_type: options.visitor_type,
                            duration: options.duration,
                            rules: rule_block.conditions,
                        })
                    ) {
                        const ruleset = rule_block.rules;
                        const conditions = rule_block.conditions;
                        space_rules_for_user.hide = false;
                        if (conditions.max_length) {
                            space_rules_for_user.max_length = stringToMinutes(
                                conditions.max_length as string
                            );
                        }
                        if (conditions.min_length) {
                            space_rules_for_user.min_length = stringToMinutes(
                                conditions.min_length as string
                            );
                        }
                        // NOTE: use max_length in conditions instead of book_length in rules
                        // if (ruleset.book_length) {
                        //     space_rules_for_user.max_length = stringToMinutes(ruleset.book_length as string);
                        // }
                        if (ruleset.auto_approve !== undefined) {
                            space_rules_for_user.auto_approve = ruleset.auto_approve;
                        }
                        if (ruleset.room_type !== undefined) {
                            space_rules_for_user.room_type = ruleset.room_type;
                        }
                        break;
                    }
                }
                if (!space_rules_for_user.hide) {
                    break;
                }
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
    if (options.rules) {
        const time = dayjs(options.time);
        const count = Object.keys(options.rules).length;
        let matches = 0;
        for (const key of Object.keys(options.rules)) {
            let counter = 0;
            const condition: string[] =
                options.rules[key] instanceof Array
                    ? (options.rules[key] as [])
                    : [options.rules[key] as string];
            switch (key) {
                case 'group':
                case 'groups':
                    if (options.user && options.user.groups) {
                        counter = 0;
                        condition.forEach((i) =>
                            options.user.groups.find((j) => j === i) ? counter++ : null
                        );
                        if (counter > 0) {
                            matches++;
                        }
                    }
                    break;
                case 'location':
                case 'locations':
                    // if (options.user && options.user.location) {
                    //     counter = 0;
                    //     condition.forEach(i =>
                    //         (options.user.last_location.name || '').indexOf(i) >= 0
                    //             ? counter++
                    //             : null
                    //     );
                    //     if (counter >= options.rules[key].length) {
                    //         matches++;
                    //     }
                    // }
                    break;
                case 'is_before':
                    if (options.time) {
                        const duration = stringToMinutes(condition[0]);
                        const check = dayjs().add(duration, 'm');
                        let match = time.isBefore(check, 'm');
                        matches += match ? 1 : 0;
                    }
                    break;
                case 'is_after':
                    if (options.time) {
                        const [amount, unit] = condition[0].split(' ');
                        const check = dayjs().add(+amount, unit as dayjs.OpUnitType);
                        time.isAfter(check, unit as dayjs.OpUnitType) ? matches++ : '';
                    }
                    break;
                case 'from_time':
                    const after_time = dayjs(condition[0], 'HH:mm');
                    if (dayjs().isAfter(after_time, 'm')) {
                        matches++;
                    }
                    break;
                case 'min_length':
                    if (options.duration) {
                        durationGreaterThanOrEqual(options.duration, condition[0]) ? matches++ : '';
                    }
                    break;
                case 'max_length':
                    if (options.duration) {
                        durationGreaterThanOrEqual(condition[0], options.duration) ? matches++ : '';
                    }
                    break;
                case 'visitor_types':
                    if (options.visitor_type) {
                        counter = 0;
                        condition.forEach((i) => (i === options.visitor_type ? counter++ : null));
                        if (counter > 0) {
                            matches++;
                        }
                    }
                    break;
            }
        }
        return matches >= count;
    }
    return false;
}

/**
 * Get minimum duration from ruleset in minutes
 * Default to 5min
 */
export function getMinLength(rule_list: any): number {
    return Object.values(rule_list).reduce((min, block: BookingRule[]) => {
        const min_block = block.reduce((min_length, el) => {
            if (el.conditions.min_length && stringToMinutes(el.conditions.min_length) > min) {
                return stringToMinutes(el.conditions.min_length);
            } else {
                return min_length;
            }
        }, 5);
        if (min_block > min) {
            return min_block;
        } else {
            return min;
        }
    }, 5) as number;
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
    date: number = dayjs().valueOf()
) {
    const free_slots = getFreeBookingSlots(bookings);
    const now = dayjs(date);
    const next_free_slot = free_slots.find((slot) => {
        const start = dayjs(slot.start);
        const end = dayjs(slot.end);
        return start.isAfter(now) || (now.isAfter(start, 's') && now.isBefore(end, 'm'));
    });
    const start = dayjs(next_free_slot.start);
    const end = dayjs(next_free_slot.end);
    const currently_free = now.isAfter(start, 's') && now.isBefore(end, 'm');
    const time_until_next_block = formatDuration({
        minutes: currently_free ? end.diff(now, 'm') : start.diff(now, 'm'),
    });
    const free_tomorrow = !currently_free && !start.isSame(now, 'd');
    const free_today = currently_free && !end.isSame(now, 'd');
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
            ? `Free until ${end.format('h:mma')}(${time_until_next_block})`
            : free_tomorrow
            ? 'Unavailable today'
            : `Free at ${start.format('h:mma')}(${time_until_next_block})`,
    };
}
