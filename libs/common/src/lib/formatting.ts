export interface RecurrenceDetails {
    /** Start of the recurrence in unix ms */
    start: number;
    /** End of the recurrence in unix ms */
    end: number;
    /** Days of the week (or month) on which the event should be repeated */
    days_of_week: number[];
    _pattern?:
        | 'none'
        | 'daily'
        | 'weekly'
        | 'monthly'
        | 'month_day'
        | 'yearly'
        | 'custom_display';
    /** Original end type before serialisation */
    _end_type?: 'never' | 'date' | 'instances';
    /** Frequency of the event */
    pattern: 'daily' | 'weekly' | 'monthly' | 'month_day' | 'yearly';
    /** Interval to be used with pattern */
    interval: number;
    /** Number of re-occurences to create for this event */
    occurrences?: number;
}
