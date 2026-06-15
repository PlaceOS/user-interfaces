import { Calendar, Space, toQueryString } from '@placeos/common';
import { get } from '@placeos/ts-client';

import { OrganisationService } from '@placeos/common';
import {
    CalendarAvailabilityQueryParams,
    CalendarPermission,
} from './calendar.interfaces';

const CALENDAR_ENDPOINT = '/api/staff/v1/calendars';

/** List calendars associated with the logged in user */
export async function queryCalendars(): Promise<Calendar[]> {
    const list = await get(CALENDAR_ENDPOINT);
    return list.map((c) => new Calendar(c));
}

/** List room calendars for available spaces based on the given query */
export async function queryCalendarAvailability(
    q: CalendarAvailabilityQueryParams,
): Promise<Calendar[]> {
    const query = toQueryString(q);
    const list = await get(
        `${CALENDAR_ENDPOINT}/availability${query ? '?' + query : ''}`,
    );
    return list.map((c) => new Calendar(c));
}

const calendarsToSpaces = (list: Calendar[], org?: OrganisationService) =>
    list
        .filter((cal) => !!cal.resource)
        .map(
            (cal) =>
                new Space({
                    ...cal.resource,
                    level: org?.levelWithID(cal.resource.zones),
                    availability: cal.availability,
                }),
        )
        .filter((space) => space.bookable);

/** List available spaces based on the given query */
export async function querySpaceCalendarAvailability(
    q: CalendarAvailabilityQueryParams,
    org?: OrganisationService,
): Promise<Space[]> {
    return calendarsToSpaces(await queryCalendarAvailability(q), org);
}

export async function queryUserFreeBusy(
    q: CalendarAvailabilityQueryParams,
): Promise<Calendar[]> {
    const query = toQueryString(q);
    return (await get(
        `${CALENDAR_ENDPOINT}/free_busy${query ? '?' + query : ''}`,
    )) as Calendar[];
}

/** List room calendars for available spaces based on the given query */
export async function querySpaceFreeBusy(
    q: CalendarAvailabilityQueryParams,
    org?: OrganisationService,
): Promise<Space[]> {
    const query = toQueryString(q);
    const list = await get(
        `${CALENDAR_ENDPOINT}/free_busy${query ? '?' + query : ''}`,
    );
    return calendarsToSpaces(
        list.map((c) => new Calendar(c)),
        org,
    );
}

/** Check the current user's permission on a target user's calendar */
export async function queryCalendarPermission(
    user_email: string,
): Promise<CalendarPermission> {
    return (await get(
        `${CALENDAR_ENDPOINT}/${encodeURIComponent(user_email)}/permission`,
    )) as CalendarPermission;
}
