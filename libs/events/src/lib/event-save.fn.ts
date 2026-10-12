import type { MatDialog } from '@angular/material/dialog';
import {
    currentUser,
    DEFAULT_SETTINGS,
    getItemWithKeys,
    getTimeInTimezone,
    i18n,
    isWithinBookableHours,
    rulesForResource,
    type BookableHoursRange,
    type BookingClash,
    type BookingRuleset,
    type Building,
    type CalendarEvent,
    type OrganisationService,
    type SettingsService,
    type Space,
    type User,
} from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';

import { queryResourceAvailability } from 'libs/bookings/src/lib/bookings.fn';
import { openRecurringClashModal } from 'libs/components/src/lib/recurring-clash-modal.component';
import type { EventFormValue } from './event-form';
import {
    findEventClashes,
    querySpaceAvailability,
    type CalendarEventShowParams,
} from './events.fn';

/** Comma separated display names of the given spaces. */
export function spaceNames(spaces: Space[]): string {
    return spaces.map((_) => _.display_name || _.name || _.email).join(', ');
}

/**
 * Throw when any of the spaces is already booked for the period.
 * @param ignore Booking to ignore when events are stored as bookings
 * @param event Event being edited. Its own calendar entries are ignored.
 * @param book_internal Whether events are stored as bookings
 */
export async function checkSpacesAvailable(
    spaces: Space[],
    date: number,
    duration: number,
    {
        ignore,
        event,
        book_internal,
    }: { ignore?: string; event: CalendarEvent; book_internal: boolean },
): Promise<true> {
    if (!spaces?.length) return true;
    const id_list = spaces.map((_) => _.id);
    const response = await (book_internal
        ? queryResourceAvailability(id_list, date, duration, ignore)
        : querySpaceAvailability(
              id_list,
              date,
              duration,
              event?.resources[0]?.id ||
                  event?.system?.id ||
                  event?.id ||
                  undefined,
              undefined,
              [event?.date, event?.duration],
          ));
    const unavailable = spaces.filter((_, i) => !response[i]);
    if (unavailable.length) {
        throw i18n(
            unavailable.length > 1
                ? 'CALENDAR_EVENT.SPACES_UNAVAILABLE'
                : 'CALENDAR_EVENT.SPACE_UNAVAILABLE',
            { spaces: spaceNames(unavailable) },
        );
    }
    return true;
}

/**
 * Throw when the booking rules hide any of the spaces from the host.
 * @param rules Booking rules grouped by building ID. Rules for other
 * buildings of the spaces are fetched on demand.
 */
export async function checkSpaceRules(
    org: OrganisationService,
    spaces: Space[],
    { date, duration, host }: { date: number; duration: number; host: User },
    rules: Record<string, BookingRuleset[]>,
): Promise<true> {
    const building_rules = { ...rules };
    const buildings = await org.loadBuildingsForZones(
        spaces.map((space) => space.zones),
    );
    // The booking panel does not eagerly load zone metadata, so the
    // reactive rules resource may still be empty when a booking is
    // submitted. Fetch any missing building rules on demand so they are
    // always enforced regardless of which app submitted the booking.
    for (const space of spaces) {
        const bld = buildings.find((b) => space.zones.includes(b.id));
        if (!bld || building_rules[bld.id]) continue;
        const metadata = await showMetadata(bld.id, 'room_booking_rules').catch(
            () => ({ details: [] }),
        );
        building_rules[bld.id] =
            metadata.details instanceof Array ? metadata.details : [];
    }
    const space_rules = spaces.map((space) => {
        const bld = buildings.find((b) => space.zones.includes(b.id));
        return rulesForResource(
            { date, duration, host, resource: space },
            building_rules[bld?.id],
        );
    });
    const hidden = spaces.filter((_, i) => space_rules[i]?.hidden);
    if (hidden.length) {
        throw i18n(
            'CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN',
            { spaces: spaceNames(hidden) },
            hidden.length,
        );
    }
    return true;
}

/** Resolve an app setting against one building's override stack. */
function buildingSetting<T>(
    org: OrganisationService,
    key: string,
    building: Building,
): T | undefined {
    const keys = key.split('.');
    const override_keys = keys[0] === 'app' ? keys.slice(1) : keys;
    const overrides = [
        org.buildingSettings(building.id),
        org.regionSettings(building.parent_id),
        ...(org.settings || []),
    ];
    for (const override of overrides) {
        const value = getItemWithKeys(override_keys, override);
        if (value != null) return value as T;
    }
    return getItemWithKeys(keys, DEFAULT_SETTINGS) as T | undefined;
}

/**
 * Throw when the event is outside the local bookable hours of any building
 * of the spaces. Without spaces, the active bookable hours apply.
 */
export async function checkBuildingBookableHours(
    org: OrganisationService,
    settings: SettingsService,
    spaces: Space[],
    date: number,
    date_end: number,
    organiser_timezone: string,
) {
    const buildings = await org.loadBuildingsForZones(
        spaces.map((space) => space.zones),
    );
    await Promise.all(
        buildings.map((building) => org.loadBuildingData(building)),
    );
    const policies = buildings.length
        ? buildings.map((building) => ({
              hours: buildingSetting<BookableHoursRange>(
                  org,
                  'app.events.bookable_hours',
                  building,
              ),
              timezone: building.timezone || organiser_timezone,
          }))
        : [
              {
                  hours: settings.get<BookableHoursRange>(
                      'app.events.bookable_hours',
                  ),
                  timezone: organiser_timezone,
              },
          ];
    for (const { hours, timezone } of policies) {
        if (!hours) continue;
        const { hours: end_hour, minutes: end_minute } = getTimeInTimezone(
            date_end,
            timezone,
        );
        const end_minutes = end_hour * 60 + end_minute;
        const end_is_valid =
            end_minutes >= hours.start * 60 && end_minutes <= hours.end * 60;
        if (!isWithinBookableHours(date, hours, timezone) || !end_is_valid) {
            throw i18n('FORM.BOOKABLE_HOURS_ERROR');
        }
    }
}

/**
 * Check for clashing events in a recurring event series
 * @param event The calendar event to check for clashes
 * @returns true if no clashes or user confirmed to continue
 * @throws Error if first instance clashes or clashes not allowed
 */
export async function checkRecurringClashes(
    event: CalendarEvent,
    settings: SettingsService,
    dialog: MatDialog,
): Promise<boolean> {
    if (!event.recurring) {
        return true;
    }

    const clashes = (await findEventClashes(event, {
        include_clash_time: true,
    })) as BookingClash[];

    if (!clashes?.length) {
        return true;
    }

    const sorted_clashes = [...clashes].sort(
        (a, b) => a.booking_start - b.booking_start,
    );

    const event_start_unix = Math.floor(event.date / 1000);
    const first_clash = sorted_clashes[0];
    const is_first_instance_clash =
        first_clash.booking_start === event_start_unix;

    if (is_first_instance_clash) {
        throw i18n('CALENDAR_EVENT.FIRST_INSTANCE_CLASH');
    }

    const allow_clashes =
        settings.get('app.events.allow_recurring_instance_clashes') ?? false;

    if (!allow_clashes) {
        throw i18n('CALENDAR_EVENT.RECURRING_CLASHES_NOT_ALLOWED', {
            count: clashes.length,
        });
    }

    const result = await openRecurringClashModal(
        { clashes: sorted_clashes },
        dialog,
    );

    if (result?.reason !== 'done') {
        throw 'User cancelled';
    }

    return true;
}

/**
 * Build the query used to save an event. The calendar is only set when the
 * current user owns the event, or when the caller forces it.
 * @param event Event before the edit. Empty for a new event.
 * @param value Form value being saved
 * @param spaces Spaces booked for the event
 */
export function eventSaveQuery(
    event: CalendarEvent,
    value: EventFormValue,
    spaces: Space[],
    options: {
        notify_new_attendees_only: boolean;
        ignore_owner: boolean;
        force_calendar: boolean;
    },
): CalendarEventShowParams {
    const query: CalendarEventShowParams = event.id
        ? {
              system_id:
                  event?.resources[0]?.id || event?.system?.id || spaces[0]?.id,
          }
        : {};
    if (options.notify_new_attendees_only)
        query.notify_existing_attendees = false;
    const user_email = currentUser()?.email?.toLowerCase() || '';
    const source_calendar =
        event.calendar ||
        event.host ||
        event.creator ||
        value.calendar ||
        value.creator;
    const target_calendar = value.host || value.creator;
    const query_calendar = event.id ? source_calendar : target_calendar;
    const owner_fields = event.id
        ? [event.host, event.creator, event.calendar]
        : [value.host, value.creator, value.calendar];
    const is_owner = owner_fields.some(
        (_) => _?.toLowerCase?.() === user_email,
    );
    if (
        ((is_owner && !options.ignore_owner) || options.force_calendar) &&
        query_calendar
    )
        query.calendar = query_calendar;
    return query;
}

/** Status and message fields that API errors can hold. */
interface ErrorDetails {
    status?: number;
    message?: unknown;
}

/** Shape of an error from the API client, possibly nested in `error`. */
type ApiError = ErrorDetails & { error?: string | ErrorDetails };

/** Readable message of a thrown error, or an empty string. */
export function errorMessage(error: unknown): string {
    if (typeof error === 'string') return error;
    if (error instanceof Error && error.message) return error.message;
    const api_error = error as ApiError | null | undefined;
    const nested = api_error?.error;
    if (typeof nested === 'string') return nested;
    if (typeof api_error?.message === 'string') return api_error.message;
    if (typeof nested?.message === 'string') return nested.message;
    return '';
}

/** Whether a thrown error means that the user may not save the event. */
export function isPermissionError(error: unknown): boolean {
    const api_error = error as ApiError | null | undefined;
    const nested = api_error?.error;
    const status =
        api_error?.status || (typeof nested === 'object' && nested?.status);
    if (status === 403) return true;
    const message = errorMessage(error).toLowerCase();
    return /forbidden|permission|authori[sz]ed|not permitted/.test(message);
}
