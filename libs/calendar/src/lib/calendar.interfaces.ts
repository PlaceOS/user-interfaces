
export interface CalendarAvailabilityQueryParams {
    /** Comma seperated list of zone ids to check availability */
    zone_ids?: string;
    /** Comma seperated list of system(space) ids to check availability */
    system_ids?: string;
    /** Comma seperated list of calendar ids to check availability */
    calendars?: string;
    /** Minimum capacity required */
    capacity?: number;
    /** Comma seperated of space features to filter */
    features?: string;
    /** Epoch in seconds for the start of the availability period */
    period_start: number;
    /** Epoch in seconds for the end of the availability period */
    period_end: number;
    /** ID of a booking to ignore in availability check */
    ignore?: string;
}

export interface CalendarAvailability {
    duration: number;
    date: number;
    status: string;
}
