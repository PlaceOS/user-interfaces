import { Calendar, Space } from '@placeos/common';
import { orThrow } from '@placeos/ts-client/compat';
import {
    calendars,
    type CalendarsAvailability,
    type ControlSystem,
} from '@placeos/ts-client/staff';
import { differenceInMinutes } from 'date-fns';

import { OrganisationService } from '@placeos/common';
import {
    CalendarAvailabilityQueryParams,
    CalendarPermission,
} from './calendar.interfaces';

type StaffAvailabilityQuery = Parameters<typeof calendars.availability>[0];

/**
 * Input of the staff availability and free busy operations for the given
 * parameters. The API document has no `ignore` parameter, so it is not sent
 */
function availabilityQuery(
    q: CalendarAvailabilityQueryParams,
): StaffAvailabilityQuery {
    return {
        period_start: q.period_start,
        period_end: q.period_end,
        calendars: q.calendars,
        zone_ids: q.zone_ids,
        system_ids: q.system_ids,
        features: q.features,
        capacity: q.capacity,
    };
}

/** App `Space` for a system of the staff API, with mutable copies of its lists */
function toSpace(system: ControlSystem): Space {
    return new Space({
        ...system,
        zones: [...(system.zones || [])],
        features: [...(system.features || [])],
        images: [...(system.images || [])],
        camera_snapshot_urls: [...(system.camera_snapshot_urls || [])],
    });
}

/** App `Calendar` for the availability of a room or person */
function toCalendar(item: CalendarsAvailability): Calendar {
    return new Calendar({
        id: item.id,
        resource: item.system ? toSpace(item.system) : undefined,
        availability: (item.availability || []).map((block) => ({
            date: block.starts_at * 1000,
            duration: differenceInMinutes(
                block.ends_at * 1000,
                block.starts_at * 1000,
            ),
            status: block.status,
        })),
    });
}

/** List calendars associated with the logged in user */
export async function queryCalendars(): Promise<Calendar[]> {
    const list = await calendars.query().then(orThrow);
    return list.map((c) => new Calendar(c));
}

/** List room calendars for available spaces based on the given query */
export async function queryCalendarAvailability(
    q: CalendarAvailabilityQueryParams,
): Promise<Calendar[]> {
    const list = await calendars
        .availability(availabilityQuery(q))
        .then(orThrow);
    // The API sends 204 without data when no calendar matches
    return (list || []).map(toCalendar);
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

/** Busy times of the given calendars, as the API sends them */
export async function queryUserFreeBusy(
    q: CalendarAvailabilityQueryParams,
): Promise<readonly CalendarsAvailability[]> {
    return calendars.freeBusy(availabilityQuery(q)).then(orThrow);
}

/** List room calendars for available spaces based on the given query */
export async function querySpaceFreeBusy(
    q: CalendarAvailabilityQueryParams,
    org?: OrganisationService,
): Promise<Space[]> {
    const list = await calendars.freeBusy(availabilityQuery(q)).then(orThrow);
    return calendarsToSpaces(list.map(toCalendar), org);
}

/**
 * Check the current user's permission on a target user's calendar. The API
 * document has only `can_edit`, so `has_access` is `false` and `role` is empty
 */
export async function queryCalendarPermission(
    user_email: string,
): Promise<CalendarPermission> {
    const data = await calendars.checkPermission({ user_email }).then(orThrow);
    return { can_edit: data.can_edit, has_access: false, role: '' };
}
