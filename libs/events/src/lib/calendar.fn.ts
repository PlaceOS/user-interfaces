import { Calendar, Space, toQueryString } from '@placeos/common';
import { get } from '@placeos/ts-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OrganisationService } from '@placeos/common';
import {
    CalendarAvailabilityQueryParams,
    CalendarPermission,
} from './calendar.interfaces';

const CALENDAR_ENDPOINT = '/api/staff/v1/calendars';

/** List calendars associated with the logged in user */
export function queryCalendars(): Observable<Calendar[]> {
    return get(CALENDAR_ENDPOINT).pipe(
        map((i) => i.map((c) => new Calendar(c))),
    );
}

/** List room calendars for available spaces based on the given query */
export function queryCalendarAvailability(
    q: CalendarAvailabilityQueryParams,
): Observable<Calendar[]> {
    const query = toQueryString(q);
    return get(
        `${CALENDAR_ENDPOINT}/availability${query ? '?' + query : ''}`,
    ).pipe(map((i) => i.map((c) => new Calendar(c))));
}

const calendarsToSpaces = (org?) =>
    map((list: Calendar[]) =>
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
            .filter((space) => space.bookable),
    );

/** List available spaces based on the given query */
export function querySpaceCalendarAvailability(
    q: CalendarAvailabilityQueryParams,
    org?: OrganisationService,
): Observable<Space[]> {
    return queryCalendarAvailability(q).pipe(calendarsToSpaces(org));
}

export function queryUserFreeBusy(q: CalendarAvailabilityQueryParams) {
    const query = toQueryString(q);
    return get(
        `${CALENDAR_ENDPOINT}/free_busy${query ? '?' + query : ''}`,
    ).pipe(map((i) => i as Calendar[]));
}

/** List room calendars for available spaces based on the given query */
export function querySpaceFreeBusy(
    q: CalendarAvailabilityQueryParams,
    org?: OrganisationService,
): Observable<Space[]> {
    const query = toQueryString(q);
    return get(
        `${CALENDAR_ENDPOINT}/free_busy${query ? '?' + query : ''}`,
    ).pipe(
        map((i) => i.map((c) => new Calendar(c))),
        calendarsToSpaces(org),
    );
}

/** Check the current user's permission on a target user's calendar */
export function queryCalendarPermission(
    user_email: string,
): Observable<CalendarPermission> {
    return get(
        `${CALENDAR_ENDPOINT}/${encodeURIComponent(user_email)}/permission`,
    ).pipe(map((i) => i as CalendarPermission));
}
