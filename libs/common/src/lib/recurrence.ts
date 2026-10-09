import {
    addDays,
    addMonths,
    addWeeks,
    addYears,
    differenceInCalendarDays,
    differenceInCalendarMonths,
    endOfDay,
    endOfMonth,
    endOfWeek,
    format,
    getUnixTime,
    isSameDay,
} from 'date-fns';
import { RecurrenceDetails } from './formatting';

export enum WeekOfMonth {
    First = 1,
    Second = 2,
    Third = 3,
    Fourth = 4,
    Fifth = 5,
    Last = -1,
    SecondLast = -2,
    ThirdLast = -3,
    FourthLast = -4,
    FifthLast = -5,
}

export enum RecurrDays {
    SUNDAY = 1 << 0,
    MONDAY = 1 << 1,
    TUESDAY = 1 << 2,
    WEDNESDAY = 1 << 3,
    THURSDAY = 1 << 4,
    FRIDAY = 1 << 5,
    SATURDAY = 1 << 6,
    ALL = (1 << 7) - 1,
}

export const DAYS_OF_WEEK_INDEX = [
    RecurrDays.SUNDAY,
    RecurrDays.MONDAY,
    RecurrDays.TUESDAY,
    RecurrDays.WEDNESDAY,
    RecurrDays.THURSDAY,
    RecurrDays.FRIDAY,
    RecurrDays.SATURDAY,
];

export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type WeekIndex = 1 | 2 | 3 | 4 | 5 | -1;
export type RecurrType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';
export type MonthlyType = 'day_of_month' | 'day_of_week';
export type RecurrEndType = 'never' | 'date' | 'instances';

export interface Recurrence {
    _custom: boolean;
    type: RecurrType;
    interval: number;
    weekdays?: Set<DayIndex>;
    week?: WeekIndex;
    monthly_type?: MonthlyType;
    end_type: RecurrEndType;
    end_date?: number;
    end_instances?: number;
}

export const NO_RECURR: Recurrence = {
    _custom: false,
    type: 'none',
    end_type: 'never',
    interval: 1,
};

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

function weekOfMonth(date: number): WeekIndex {
    const date_obj = new Date(date);
    const day = date_obj.getDate();
    const week = Math.floor(day / 7) + (day % 7 ? 1 : 0);
    if ((week === 4 && day >= 25) || week === 5) return -1;
    return week as WeekIndex;
}

function monthlyWeekdayStart(
    date: number,
    week: WeekIndex,
    day_of_week: DayIndex,
): number {
    const date_obj = new Date(date);
    const year = date_obj.getFullYear();
    const month = date_obj.getMonth();
    let day_of_month: number;

    if (week < 0) {
        const last_day = new Date(year, month + 1, 0);
        day_of_month =
            last_day.getDate() -
            ((last_day.getDay() - day_of_week + 7) % 7) +
            (week + 1) * 7;
    } else {
        const first_day = new Date(year, month, 1);
        day_of_month =
            1 + ((day_of_week - first_day.getDay() + 7) % 7) + (week - 1) * 7;
    }

    const recurrence_date = new Date(date);
    recurrence_date.setDate(day_of_month);
    if (recurrence_date.getMonth() !== month) {
        recurrence_date.setDate(day_of_month - 7);
    }
    return recurrence_date.valueOf();
}

function startOfWeekMs(date: number): number {
    const date_obj = new Date(date);
    date_obj.setDate(date_obj.getDate() - date_obj.getDay());
    date_obj.setHours(0, 0, 0, 0);
    return date_obj.valueOf();
}

function validWeekdays(days?: Set<DayIndex>): DayIndex[] {
    if (!days?.size) return [];
    return Array.from(days)
        .filter((day) => day >= 0 && day < 7)
        .sort((a, b) => a - b);
}

/**
 * Usable instance count for a recurrence, or `undefined` when there isn't one.
 * Instance counts are read back from untyped booking/event data, where they can
 * arrive as strings or empty values. Anything that isn't a whole number of one
 * or more instances is not a count, so the recurrence ends by date instead.
 */
export function recurrenceInstanceCount(value: unknown): number | undefined {
    const count =
        typeof value === 'number'
            ? value
            : typeof value === 'string'
              ? Number(value)
              : NaN;
    return Number.isFinite(count) && count >= 1 ? Math.floor(count) : undefined;
}

function isWeeklyInstance(
    date: number,
    start_date: number,
    interval: number,
    weekdays?: Set<DayIndex>,
): boolean {
    const day = new Date(date).getDay() as DayIndex;
    const days = validWeekdays(weekdays);
    if (days.length && !days.includes(day)) return false;
    const weeks = Math.floor(
        (startOfWeekMs(date) - startOfWeekMs(start_date)) / WEEK_MS,
    );
    return weeks >= 0 && weeks % Math.max(interval, 1) === 0;
}

export function firstRecurrenceInstance(
    recurrence: Recurrence,
    date: number = Date.now(),
): number {
    if (recurrence.type === 'weekly') {
        for (
            let offset = 0;
            offset < 7 * Math.max(recurrence.interval, 1);
            offset++
        ) {
            const candidate = addDays(date, offset).valueOf();
            if (
                isWeeklyInstance(
                    candidate,
                    date,
                    recurrence.interval,
                    recurrence.weekdays,
                )
            ) {
                return candidate;
            }
        }
    }
    if (
        recurrence.type === 'monthly' &&
        recurrence.monthly_type === 'day_of_week' &&
        recurrence.weekdays?.size
    ) {
        const day = validWeekdays(recurrence.weekdays)[0];
        const week = recurrence.week || weekOfMonth(date);
        for (
            let offset = 0;
            offset <= Math.max(recurrence.interval, 1);
            offset++
        ) {
            const candidate = monthlyWeekdayStart(
                addMonths(date, offset).valueOf(),
                week,
                day,
            );
            if (candidate >= date) return candidate;
        }
    }
    return date;
}

export function recurrenceEndDate(
    recurrence: Recurrence,
    date: number = Date.now(),
): number {
    const instances = Math.max(
        (recurrenceInstanceCount(recurrence.end_instances) || 1) - 1,
        0,
    );
    const interval = Math.max(recurrence.interval, 1);
    const first_instance = firstRecurrenceInstance(recurrence, date);
    if (recurrence.type === 'daily') {
        return endOfDay(
            addDays(first_instance, interval * instances),
        ).valueOf();
    }
    if (recurrence.type === 'weekly') {
        const days = validWeekdays(recurrence.weekdays);
        if (days.length > 1) {
            let count = 0;
            let candidate = first_instance;
            while (count < instances) {
                candidate = addDays(candidate, 1).valueOf();
                if (
                    isWeeklyInstance(
                        candidate,
                        date,
                        interval,
                        recurrence.weekdays,
                    )
                ) {
                    count++;
                }
            }
            return endOfDay(candidate).valueOf();
        }
        return endOfDay(
            addWeeks(first_instance, interval * instances),
        ).valueOf();
    }
    if (
        recurrence.type === 'monthly' &&
        recurrence.monthly_type === 'day_of_week' &&
        recurrence.weekdays?.size
    ) {
        const day = validWeekdays(recurrence.weekdays)[0];
        const week = recurrence.week || weekOfMonth(date);
        return endOfDay(
            monthlyWeekdayStart(
                addMonths(first_instance, interval * instances).valueOf(),
                week,
                day,
            ),
        ).valueOf();
    }
    if (recurrence.type === 'yearly') {
        return endOfDay(
            addYears(first_instance, interval * instances),
        ).valueOf();
    }
    return endOfDay(addMonths(first_instance, interval * instances)).valueOf();
}

/**
 * Whether a given date falls on an instance of a recurrence pattern. Compares
 * at day granularity (time-of-day is ignored — check times separately).
 * @param recurrence Recurrence pattern
 * @param start_date Series start (ms epoch)
 * @param candidate Date to test (ms epoch)
 */
export function isRecurrenceInstanceDate(
    recurrence: Recurrence,
    start_date: number,
    candidate: number,
): boolean {
    if (!recurrence || recurrence.type === 'none') {
        return isSameDay(start_date, candidate);
    }
    const interval = Math.max(recurrence.interval, 1);
    const first = firstRecurrenceInstance(recurrence, start_date);
    if (differenceInCalendarDays(candidate, first) < 0) return false;
    if (recurrence.end_date && candidate > recurrence.end_date) return false;
    if (recurrence.type === 'daily') {
        return differenceInCalendarDays(candidate, first) % interval === 0;
    }
    if (recurrence.type === 'weekly') {
        return isWeeklyInstance(
            candidate,
            start_date,
            interval,
            recurrence.weekdays,
        );
    }
    if (
        recurrence.type === 'monthly' &&
        recurrence.monthly_type === 'day_of_week' &&
        recurrence.weekdays?.size
    ) {
        const day = validWeekdays(recurrence.weekdays)[0];
        const week = recurrence.week || weekOfMonth(candidate);
        const instance = monthlyWeekdayStart(candidate, week, day);
        if (!isSameDay(instance, candidate)) return false;
        const months = differenceInCalendarMonths(candidate, first);
        return months >= 0 && months % interval === 0;
    }
    return isSameDay(first, candidate);
}

export interface BookingRecurrence {
    /** Type of recurrence instance */
    recurrence_type: 'none' | 'daily' | 'weekly' | 'monthly';
    /** Bit flags for the recurrence days of the week */
    recurrence_days?: number;
    /** Week of the month to recur on */
    recurrence_nth_of_month?: WeekOfMonth;
    /** How often to recur */
    recurrence_interval?: number;
    /** Unix epoch for the end time of the recurrence in seconds */
    recurrence_end?: number;
    /** Number of recurrence instances for custom display */
    recurrence_instances?: number;

    recurrence_custom?: boolean;
}

export function fromEventRecurrence(r: RecurrenceDetails): Recurrence {
    if (!r.pattern || r._pattern === 'none') {
        return {
            _custom: false,
            type: 'none',
            interval: 1,
            end_type: 'never',
        };
    }

    const occurrences = recurrenceInstanceCount(r.occurrences);
    const recurr: Recurrence = {
        _custom: r._pattern == 'custom_display',
        type: r.pattern as RecurrType,
        interval: r.interval || 1,
        end_type:
            r._end_type ??
            (occurrences ? 'instances' : r.end ? 'date' : 'never'),
    };

    if (r.end) recurr.end_date = r.end;
    if (occurrences) recurr.end_instances = occurrences;

    if (r.pattern === 'weekly' && r.days_of_week?.length) {
        recurr.weekdays = new Set(r.days_of_week as DayIndex[]);
    }

    if (r.pattern === 'monthly') {
        recurr.type = 'monthly';
        recurr.monthly_type = 'day_of_week';
        if (r.days_of_week?.length) {
            recurr.weekdays = new Set(r.days_of_week as DayIndex[]);
        }
        if (r.nth_of_month) {
            recurr.week = r.nth_of_month as WeekIndex;
        } else if (r.start) {
            recurr.week = weekOfMonth(r.start);
        }
    }

    if (r.pattern === 'month_day' && r.days_of_week?.length) {
        recurr.type = 'monthly';
        recurr.monthly_type = 'day_of_week';
        recurr.weekdays = new Set(r.days_of_week as DayIndex[]);
        if (r.nth_of_month) {
            recurr.week = r.nth_of_month as WeekIndex;
        } else if (r.start) {
            recurr.week = weekOfMonth(r.start);
        }
    } else if (r.pattern === 'month_day') {
        recurr.type = 'monthly';
        recurr.monthly_type = 'day_of_month';
    }

    return recurr;
}

export function toEventRecurrence(
    r: Recurrence,
    date: number = Date.now(),
): RecurrenceDetails {
    if (r.type === 'none') {
        return {
            pattern: 'daily',
            _pattern: 'none',
            interval: 1,
            days_of_week: [],
            start: date,
            end: date,
        };
    }
    const recurrence_start = firstRecurrenceInstance(r, date);
    const date_obj = new Date(recurrence_start);
    let end = addMonths(recurrence_start, 6).valueOf();
    if (r.end_type === 'date' && r.end_date) {
        end = r.end_date;
    } else if (r.end_type === 'instances') {
        end = recurrenceEndDate(r, date);
    }
    const details: RecurrenceDetails = {
        _pattern: r._custom ? 'custom_display' : r.type,
        _end_type: r.end_type,
        pattern: r.type,
        interval: r.interval,
        days_of_week: [date_obj.getDay()],
        start: recurrence_start,
        end,
    };
    if (r.end_type === 'instances') {
        const occurrences = recurrenceInstanceCount(r.end_instances);
        if (occurrences) details.occurrences = occurrences;
    }
    if ((r.type === 'weekly' || r.type === 'monthly') && r.weekdays) {
        details.days_of_week = Array.from(r.weekdays);
        if (r.type === 'monthly') {
            details.pattern = 'monthly';
            if (r.week) details.nth_of_month = r.week;
        }
    } else if (r.type === 'monthly') {
        details.days_of_week = [];
        if (r.monthly_type === 'day_of_month') details.pattern = 'month_day';
    }
    if (
        r.end_type === 'never' &&
        (r.type === 'monthly' || r.type === 'yearly')
    ) {
        details.end = endOfMonth(end).valueOf();
    }
    if (r.end_type === 'never' && r.type === 'weekly') {
        details.end = endOfWeek(end).valueOf();
    }
    return details;
}

export function fromBookingRecurrence(r: BookingRecurrence): Recurrence {
    if (!r.recurrence_type || r.recurrence_type === 'none') {
        return {
            _custom: r.recurrence_custom,
            type: 'none',
            interval: 1,
            end_type: 'never',
        };
    }
    const instances = recurrenceInstanceCount(r.recurrence_instances);
    const recurr: Recurrence = {
        _custom: r.recurrence_custom,
        type: r.recurrence_type,
        interval: r.recurrence_interval || 1,
        end_type: instances ? 'instances' : r.recurrence_end ? 'date' : 'never',
    };
    if (r.recurrence_end) {
        recurr.end_date = r.recurrence_end * 1000; // Convert from seconds to milliseconds
    }
    if (instances) {
        recurr.end_instances = instances;
    }

    if (r.recurrence_type === 'daily' && r.recurrence_days) {
        const weekdays = new Set<DayIndex>();
        // Convert bit flags to day indices (0-6)
        for (let i = 0; i < 7; i++) {
            if (r.recurrence_days & (1 << i)) {
                weekdays.add(i as DayIndex);
            }
        }
        recurr.weekdays = weekdays;
        if (weekdays.size < 7) recurr.type = 'weekly';
    }

    if (r.recurrence_type === 'monthly') {
        recurr.monthly_type = 'day_of_week';
        if (r.recurrence_days) {
            const weekdays = new Set<DayIndex>();
            // Convert bit flags to day indices (0-6)
            for (let i = 0; i < 7; i++) {
                if (r.recurrence_days & DAYS_OF_WEEK_INDEX[i]) {
                    weekdays.add(i as DayIndex);
                }
            }
            recurr.weekdays = weekdays;
        }
        if (r.recurrence_nth_of_month) {
            recurr.week = r.recurrence_nth_of_month as WeekIndex;
        }
    }

    return recurr;
}

export function toBookingRecurrence(
    r: Recurrence,
    date: number = Date.now(),
): BookingRecurrence {
    if (r.type === 'none') {
        return {
            recurrence_custom: false,
            recurrence_type: 'none',
            recurrence_days: undefined,
            recurrence_nth_of_month: undefined,
            recurrence_interval: undefined,
            recurrence_end: undefined,
            recurrence_instances: undefined,
        };
    }

    const booking: BookingRecurrence = {
        recurrence_custom: r._custom,
        recurrence_type: r.type === 'yearly' ? 'monthly' : r.type,
        recurrence_days: undefined,
        recurrence_nth_of_month: undefined,
        recurrence_interval: r.type === 'yearly' ? r.interval * 12 : r.interval,
        recurrence_end: undefined,
        recurrence_instances: undefined,
    };

    if (r.end_type === 'date' && r.end_date) {
        booking.recurrence_end = getUnixTime(r.end_date); // Convert from milliseconds to seconds
    } else if (r.end_type === 'instances') {
        booking.recurrence_instances = recurrenceInstanceCount(r.end_instances);
        booking.recurrence_end = getUnixTime(recurrenceEndDate(r, date));
    }

    if (r.type === 'daily') {
        booking.recurrence_days = RecurrDays.ALL;
    }

    if (r.type === 'weekly' && r.weekdays) {
        let days = 0;
        // Convert day indices (0-6) to bit flags
        r.weekdays.forEach((day) => {
            days |= DAYS_OF_WEEK_INDEX[day];
        });
        booking.recurrence_days = days;
        booking.recurrence_type = 'daily';
    }

    if ((r.type === 'monthly' || r.type === 'yearly') && r.weekdays) {
        let days = 0;
        // Convert day indices (0-6) to bit flags
        r.weekdays.forEach((day) => {
            days |= 1 << day;
        });
        booking.recurrence_days = days;
    }

    if ((r.type === 'monthly' || r.type === 'yearly') && r.week) {
        booking.recurrence_nth_of_month = r.week;
    }
    return booking;
}

export function formatRecurrence(
    recurrence: Recurrence,
    selected_date = Date.now(),
): string {
    const {
        type,
        interval,
        weekdays,
        week,
        monthly_type,
        end_type,
        end_date,
        end_instances,
    } = recurrence;
    const safe_interval = interval > 0 ? interval : 1;
    const selected_date_obj = new Date(selected_date);
    const selected_day = selected_date_obj.getDay() as DayIndex;
    const selected_day_of_month = selected_date_obj.getDate();

    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const weekNames: Record<WeekOfMonth, string> = {
        [WeekOfMonth.First]: 'First',
        [WeekOfMonth.Second]: 'Second',
        [WeekOfMonth.Third]: 'Third',
        [WeekOfMonth.Fourth]: 'Fourth',
        [WeekOfMonth.Fifth]: 'Fifth',
        [WeekOfMonth.Last]: 'Last',
        [WeekOfMonth.SecondLast]: 'Second Last',
        [WeekOfMonth.ThirdLast]: 'Third Last',
        [WeekOfMonth.FourthLast]: 'Fourth Last',
        [WeekOfMonth.FifthLast]: 'Fifth Last',
    };

    function formatList(items: string[]): string {
        if (items.length === 0) return '';
        if (items.length === 1) return items[0];
        return (
            items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1]
        );
    }

    function plural(n: number, singular: string): string {
        return n > 1 ? singular + 's' : singular;
    }

    function validWeekdays(days?: Set<DayIndex>): DayIndex[] {
        if (!days?.size) return [];
        return Array.from(days)
            .filter((day) => day >= 0 && day < 7)
            .sort((a, b) => a - b);
    }

    function selectedWeek(): WeekIndex {
        const day = selected_date_obj.getDate();
        const week = Math.floor(day / 7) + (day % 7 ? 1 : 0);
        if ((week === 4 && day >= 25) || week === 5) return -1;
        return week as WeekIndex;
    }

    function formatEnd(): string {
        switch (end_type) {
            case 'never':
                return '';
            case 'date':
                if (!end_date) return '';
                return ` until ${format(end_date, 'dd MMM yyyy')}`;
            case 'instances': {
                const count = recurrenceInstanceCount(end_instances);
                // Without a usable count the end date is all we can report.
                if (!count) {
                    return end_date
                        ? ` until ${format(end_date, 'dd MMM yyyy')}`
                        : '';
                }
                return ` ends after ${count} ${plural(count, 'instance')}${
                    end_date ? ` (${format(end_date, 'dd MMM yyyy')})` : ''
                }`;
            }
        }
    }

    let result: string;

    switch (type) {
        case 'none':
            result = '';
            break;
        case 'daily':
            result = `Every ${safe_interval} ${plural(safe_interval, 'day')}`;
            break;
        case 'weekly': {
            const days = validWeekdays(weekdays).length
                ? formatList(validWeekdays(weekdays).map((d) => dayNames[d]))
                : dayNames[selected_day];
            result = `Every ${safe_interval} ${plural(safe_interval, 'week')}${
                days ? ' on ' + days : ''
            }`;
            break;
        }
        case 'monthly': {
            const recurrence_days = validWeekdays(weekdays);
            const week_value = week || selectedWeek();
            if (monthly_type === 'day_of_week') {
                const days = recurrence_days.length
                    ? formatList(recurrence_days.map((d) => dayNames[d]))
                    : dayNames[selected_day];
                const week_name =
                    weekNames[week_value] || weekNames[selectedWeek()];
                result = `Every ${safe_interval} ${plural(safe_interval, 'month')} on the ${week_name}${days ? ' ' + days : ''}`;
            } else if (monthly_type === 'day_of_month') {
                result = `Every ${safe_interval} ${plural(safe_interval, 'month')} on day ${selected_day_of_month}`;
            } else {
                result = `Every ${safe_interval} ${plural(safe_interval, 'month')} on day ${selected_day_of_month}`;
            }
            break;
        }
        case 'yearly':
            result = `Every ${safe_interval} ${plural(safe_interval, 'year')} on ${format(selected_date_obj, 'd MMM')}`;
            break;
        default:
            result = 'Unsupported recurrence type';
    }

    return result + formatEnd();
}
