import { get } from '@placeos/ts-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { toQueryString } from '@placeos/common';

import { Calendar } from './calendar.class';
import { Space } from '../../../spaces/src/lib/space.class';
import { OrganisationService } from '@placeos/organisation';
import { CalendarAvailabilityQueryParams } from './calendar.interfaces';

const CALENDAR_ENDPOINT = '/api/staff/v1/calendars';

/** List calendars associated with the logged in user */
export function queryCalendars(): Observable<Calendar[]> {
    return get(CALENDAR_ENDPOINT).pipe(
        map((i) => i.map((c) => new Calendar(i as any)))
    );
}

/** List room calendars for available spaces based on the given query */
export function queryCalendarAvailability(
    q: CalendarAvailabilityQueryParams
): Observable<Calendar[]> {
    const query = toQueryString(q);
    return get(
        `${CALENDAR_ENDPOINT}/availability${query ? '?' + query : ''}`
    ).pipe(map((i) => i.map((c) => new Calendar(c as any))));
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
                    })
            )
            .filter((space) => space.bookable)
    );

/** List available spaces based on the given query */
export function querySpaceAvailability(
    q: CalendarAvailabilityQueryParams,
    org?: OrganisationService
): Observable<Space[]> {
    return queryCalendarAvailability(q).pipe(calendarsToSpaces(org));
}

/** List room calendars for available spaces based on the given query */
export function querySpaceFreeBusy(
    q: CalendarAvailabilityQueryParams,
    org?: OrganisationService
): Observable<Space[]> {
    const query = toQueryString(q);
    return get(
        `${CALENDAR_ENDPOINT}/free_busy${query ? '?' + query : ''}`
    ).pipe(map((i) => i.map((c) => new Calendar(c as any))), calendarsToSpaces(org));
}
