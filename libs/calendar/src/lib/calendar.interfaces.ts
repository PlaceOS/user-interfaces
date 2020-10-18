export interface CalenderAvailabilityParams {
    /** Comma seperated list of zone ids to filter the spaces on */
    zone_ids?: string;
    /** Comma seperated list of space ids to grab  */
    system_ids?: string;
    /** Comma seperated list of calendars to grab */
    calendars?: string;
    /** Minimum capacity required */
    capacity?: number;
    /** Comma seperated list of features to filter for */
    features?: string;
    /** Unix epoch start time in seconds */
    period_start?: number;
    /** Unix epoch end time in seconds */
    period_end?: number;
    /** ID of a booking to ignore in availability check */
    ignore?: string;
}

export interface CalendarAvailability {
    duration: number;
    date: number;
    status: string;
}
