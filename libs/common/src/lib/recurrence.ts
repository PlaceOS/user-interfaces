import {
    addDays,
    addMonths,
    addWeeks,
    addYears,
    endOfDay,
    endOfMonth,
    endOfWeek,
    getUnixTime,
    startOfDay,
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

    const recurr: Recurrence = {
        _custom: r._pattern == 'custom_display',
        type: r.pattern as RecurrType,
        interval: r.interval || 1,
        end_type: r.end ? 'date' : 'never',
    };

    if (r.end) recurr.end_date = r.end;

    if (r.pattern === 'weekly' && r.days_of_week?.length) {
        recurr.weekdays = new Set(r.days_of_week as DayIndex[]);
    }

    if (r.pattern === 'monthly' || r.pattern === 'month_day') {
        recurr.type = 'monthly';
        recurr.monthly_type = 'day_of_week';
        if (r.days_of_week?.length) {
            recurr.weekdays = new Set(r.days_of_week as DayIndex[]);
        }
        // Note: Week of month is not directly mapped from RecurrenceDetails
        // This would need to be calculated based on the first occurrence
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
    const date_obj = new Date(date);
    let end = addMonths(date, 6).valueOf();
    if (r.end_type === 'date' && r.end_date) {
        end = r.end_date;
    } else if (r.end_type === 'instances') {
        const end_step = r.interval * r.end_instances;
        end =
            startOfDay(
                r.type === 'daily'
                    ? addDays(date, end_step)
                    : r.type === 'weekly'
                      ? addWeeks(date, end_step)
                      : addMonths(date, end_step),
            ).valueOf() - 1;
    }
    const details: RecurrenceDetails = {
        _pattern: r._custom ? 'custom_display' : r.type,
        pattern: r.type,
        interval: r.interval,
        days_of_week: [date_obj.getDay()],
        start: date,
        end,
    };
    if ((r.type === 'weekly' || r.type === 'monthly') && r.weekdays) {
        details.days_of_week = Array.from(r.weekdays);
        if (r.type === 'monthly') details.pattern = 'month_day';
    } else if (r.type === 'monthly') {
        details.days_of_week = [];
    }
    if (r.type === 'monthly' || r.type === 'yearly') {
        details.end = endOfMonth(end).valueOf();
    }
    if (r.type === 'weekly') details.end = endOfWeek(end).valueOf();
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
    const recurr: Recurrence = {
        _custom: r.recurrence_custom,
        type: r.recurrence_type,
        interval: r.recurrence_interval || 1,
        end_type: r.recurrence_end ? 'date' : 'never',
    };
    if (r.recurrence_end) {
        recurr.end_date = r.recurrence_end * 1000; // Convert from seconds to milliseconds
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
    if (r.type === 'none') return { recurrence_type: 'none' };

    const booking: BookingRecurrence = {
        recurrence_custom: r._custom,
        recurrence_type: r.type === 'yearly' ? 'monthly' : r.type,
        recurrence_interval: r.type === 'yearly' ? r.interval * 12 : r.interval,
    };

    if (r.end_type === 'date' && r.end_date) {
        booking.recurrence_end = getUnixTime(r.end_date); // Convert from milliseconds to seconds
    } else if (r.end_type === 'instances') {
        booking.recurrence_end = getUnixTime(
            r.type === 'daily'
                ? endOfDay(addDays(date, r.end_instances))
                : r.type === 'weekly'
                  ? endOfWeek(addWeeks(date, r.end_instances))
                  : r.type === 'monthly'
                    ? endOfMonth(addMonths(date, r.end_instances))
                    : addYears(date, 1),
        );
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

export function formatRecurrence(recurrence: Recurrence): string {
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

    function formatEnd(): string {
        switch (end_type) {
            case 'never':
                return '';
            case 'date':
                if (!end_date) return '';
                return ` until ${new Date(end_date).toLocaleDateString(
                    undefined,
                    {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    },
                )}`;
            case 'instances':
                if (!end_instances) return '';
                return ` for ${end_instances} ${plural(end_instances, 'time')}`;
        }
    }

    let result: string;

    switch (type) {
        case 'none':
            result = '';
            break;
        case 'daily':
            result = `Every ${interval} ${plural(interval, 'day')}`;
            break;
        case 'weekly': {
            const days =
                weekdays && weekdays.size
                    ? formatList(
                          Array.from(weekdays)
                              .sort()
                              .map((d) => dayNames[d]),
                      )
                    : '';
            result = `Every ${interval} ${plural(interval, 'week')}${
                days ? ' on ' + days : ''
            }`;
            break;
        }
        case 'monthly': {
            if (monthly_type === 'day_of_week' && week != null && weekdays) {
                const days =
                    weekdays.size > 0
                        ? formatList(
                              Array.from(weekdays)
                                  .sort()
                                  .map((d) => dayNames[d]),
                          )
                        : '';
                result = `Every ${interval} ${plural(interval, 'month')} on the ${
                    weekNames[week]
                }${days ? ' ' + days : ''}`;
            } else {
                result = `Every ${interval} ${plural(interval, 'month')}`;
            }
            break;
        }
        case 'yearly':
            result = `Every ${interval} ${plural(interval, 'year')}`;
            break;
        default:
            result = 'Unsupported recurrence type';
    }

    return result + formatEnd();
}
