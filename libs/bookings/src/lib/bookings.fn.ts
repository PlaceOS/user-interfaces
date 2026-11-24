import { type CallError, type JsonValue } from '@placeos/ts-client';
import {
    CallFailed,
    orThrow,
    orThrowPage,
    type Page,
} from '@placeos/ts-client/compat';
import { bookings, Booking as StaffBooking } from '@placeos/ts-client/staff';

import {
    appDetails,
    BookableResource,
    Booking,
    BookingClash,
    BookingComplete,
    BookingType,
    CalendarEvent,
    cleanObject,
    currentUser,
    flatten,
    fromBookingRecurrence,
    isRecurrenceInstanceDate,
    readAttendeeFlags,
    setting,
    unique,
    User,
    VERSION,
} from '@placeos/common';

import {
    addDays,
    addMinutes,
    type Day,
    endOfDay,
    getUnixTime,
    set,
    startOfDay,
    startOfWeek,
    subDays,
} from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';
import { requestBody } from './request-body';

export interface WaitlistWeekStart {
    /** Day of the week the waitlist week starts on. `0` is Sunday */
    day?: number;
    /** Hour of the day the waitlist week starts at */
    hour?: number;
    /** Minute of the hour the waitlist week starts at */
    minute?: number;
}

/**
 * Whether a date falls within the currently active parking waitlist week. The
 * week boundary is a configurable day and wall clock time, defaulting to
 * Friday at 18:00. The boundary is applied in the building's timezone when
 * building timezones are enabled, otherwise in the local timezone.
 */
export function isInWaitlistWeek(
    date: number | Date,
    building_timezone?: string,
    week_start: WaitlistWeekStart = setting('app.parking.waitlist_week_start'),
) {
    const day = week_start?.day ?? 5;
    const hour = week_start?.hour ?? 18;
    const minute = week_start?.minute ?? 0;
    const timezone =
        (setting('app.parking.use_building_timezone') ??
        setting('app.bookings.use_building_timezone'))
            ? building_timezone
            : '';
    const now = Date.now();
    const zoned_now = timezone ? toZonedTime(now, timezone) : new Date(now);
    let current_week_start = set(
        startOfWeek(zoned_now, { weekStartsOn: day as Day }),
        { hours: hour, minutes: minute, seconds: 0, milliseconds: 0 },
    );
    if (zoned_now < current_week_start) {
        current_week_start = subDays(current_week_start, 7);
    }
    const next_week_start = addDays(current_week_start, 7);
    const asUTC = (value: Date) =>
        timezone ? fromZonedTime(value, timezone).valueOf() : value.valueOf();
    return (
        date.valueOf() >= asUTC(current_week_start) &&
        date.valueOf() < asUTC(next_week_start)
    );
}

export interface BookingsQueryParams {
    /** Comma seperated list of zone ids to check availability */
    zones?: string;
    /** User ID to filter bookings */
    user?: string;
    /** Email address to filter bookings */
    email?: string;
    /** Epoch in seconds for the start of the availability period */
    period_start: number;
    /** Epoch in seconds for the end of the availability period */
    period_end: number;
    /** Category of booking */
    type: BookingType;
    /** Include checked out bookings in the response */
    include_checked_out?: boolean;
    /** Include bookings made by the current user in the response */
    include_booked_by?: boolean;
    /** Include deleted bookings in the response */
    include_deleted?: boolean;
    /** Include deleted bookings in the response */
    deleted?: boolean;
    /**  */
    event_id?: string;
    /**  */
    booking_id?: string;
    /**  */
    ical_uid?: string;
    /** Set the size of the page */
    limit?: number;
    /** Whether to also query rejected bookings */
    rejected?: boolean;
    /** Include the parent booking of each booking, as `linked_parent_booking` */
    include_parent_bookings?: boolean;
}

type StaffBookingQuery = NonNullable<Parameters<typeof bookings.query>[0]>;
type StaffBookedQuery = NonNullable<Parameters<typeof bookings.booked>[0]>;

/** Input of the staff `bookings.query` operation for the given parameters */
function bookingQuery(q: BookingsQueryParams): StaffBookingQuery {
    return {
        period_start: q.period_start,
        period_end: q.period_end,
        type: q.type,
        zones: q.zones,
        user: q.user,
        email: q.email,
        include_checked_out: q.include_checked_out,
        include_booked_by: q.include_booked_by,
        include_deleted: q.include_deleted,
        deleted: q.deleted,
        event_id: q.event_id,
        ical_uid: q.ical_uid,
        limit: q.limit,
        rejected: q.rejected,
        include_parent_bookings: q.include_parent_bookings,
    };
}

/**
 * Input of the staff `bookings.booked` operation for the given parameters.
 * The operation has no deleted, checked out or rejected filters
 */
function bookedQuery(q: BookingsQueryParams, limit: number): StaffBookedQuery {
    return {
        period_start: q.period_start,
        period_end: q.period_end,
        type: q.type,
        zones: q.zones,
        user: q.user,
        email: q.email,
        include_booked_by: q.include_booked_by,
        event_id: q.event_id,
        ical_uid: q.ical_uid,
        limit,
    };
}

/**
 * Integer id of a booking for the staff API. The app types booking ids as
 * strings, and the API sends and reads them as integers
 * @param id Id of the booking
 */
export function bookingId(id: string | number): number {
    const value = Number(id);
    if (`${id}`.trim() === '' || !Number.isSafeInteger(value)) {
        throw new Error(`Booking id is not an integer: ${id}`);
    }
    return value;
}

/**
 * App `Booking` from the data of the staff API.
 * The class reads the raw API data, as it did in 6.x. Its constructor type
 * has the app types of the fields, such as a string `id`, so the data needs
 * a cast until the class accepts the staff `Booking` type.
 * @param data Booking from the staff API
 */
export function toBooking(data: StaffBooking): Booking {
    return new Booking(data as unknown as Partial<BookingComplete>);
}

/** Page of a list with each item changed by `fn`, also on the next pages */
function mapPage<T, U>(
    page: Page<readonly T[]>,
    fn: (item: T) => U,
): Page<U[]> {
    const next = page.next;
    return {
        data: page.data.map(fn),
        total: page.total,
        next_offset: page.next_offset,
        next: next ? () => next()?.then((_) => mapPage(_, fn)) ?? null : null,
    };
}

function bookingUtmSource() {
    return `${appDetails().app_name}_${VERSION.hash}_${currentUser().email || ''}`;
}

function withAppVersion(data: NewBookingData): NewBookingData {
    const booking_data = {
        ...(data instanceof Booking ? data.toJSON() : data),
    };
    delete booking_data.created_at;
    return {
        ...booking_data,
        extension_data: {
            ...(booking_data.extension_data || {}),
            ...appDetails(),
        },
    };
}

/** Request body of a booking with the app version in its extension data */
function bookingBody(data: NewBookingData) {
    return requestBody(StaffBooking, withAppVersion(data));
}

/**
 * Get a single page of bookings. Returns an empty list when the request fails.
 * @param q Parameters to pass to the API request
 */
export async function queryBookings(
    q: BookingsQueryParams,
): Promise<Booking[]> {
    return queryBookingsOrThrow(q).catch(() => []);
}

/**
 * Get a single page of bookings. Throws when the request fails, so callers
 * can tell an error apart from an empty list.
 * @param q Parameters to pass to the API request
 */
export async function queryBookingsOrThrow(
    q: BookingsQueryParams,
): Promise<Booking[]> {
    const list = await bookings.query(bookingQuery(q)).then(orThrow);
    return list.map(toBooking);
}

/**
 * List resources that are booked within the given parameters
 * @param q Parameters to pass to the API request
 */
export async function bookedResourceList(
    q: BookingsQueryParams,
    resource_count?: number,
): Promise<string[]> {
    try {
        let page = await bookings
            .booked(bookedQuery(q, Math.max(200, resource_count || 0)))
            .then(orThrowPage);
        const list = [...page.data];
        let count = 1;
        while (
            page.next &&
            (!page.total || list.length < page.total) &&
            count <= MAX_PAGES
        ) {
            const next = page.next();
            if (!next) break;
            page = await next;
            list.push(...page.data);
            count += 1;
        }
        return unique(list);
    } catch (_) {
        return [];
    }
}

export interface BookingClashQueryOptions {
    // Requires multple assets in the booking to use
    return_available?: boolean;
    // Added the time that the clashes occur with each returned asset
    include_clash_time?: boolean;
}

/** Whether a JSON value is an object, not an array or a scalar */
function isJsonRecord(
    value: JsonValue,
): value is { readonly [key: string]: JsonValue } {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** A clash from the JSON list of the clashing assets endpoint, or `null` */
export function toBookingClash(item: JsonValue): BookingClash | null {
    if (!isJsonRecord(item)) return null;
    const { asset_id, booking_start, booking_end } = item;
    if (typeof asset_id !== 'string') return null;
    return {
        asset_id,
        booking_start: typeof booking_start === 'number' ? booking_start : 0,
        booking_end: typeof booking_end === 'number' ? booking_end : 0,
    };
}

/**
 * List resources that clash within the given parameters
 * @param q Parameters to pass to the API request
 */
export async function findBookingClashes(
    booking: Booking,
    q: BookingClashQueryOptions = {},
): Promise<string[] | BookingClash[]> {
    try {
        const list = await bookings
            .clashingAssets({
                return_available: q.return_available,
                include_clash_time: q.include_clash_time,
                body: requestBody(StaffBooking, booking.toJSON()),
            })
            .then(orThrow);
        return q.include_clash_time
            ? list.map(toBookingClash).filter((_) => !!_)
            : list.filter((_): _ is string => typeof _ === 'string');
    } catch (_) {
        return [];
    }
}

/**
 * List bookings with link to next page of bookings
 * @param q Parameters to pass to the API request
 */
export function queryPagedBookings(
    q: BookingsQueryParams,
): Promise<Page<Booking[]>> {
    return bookings
        .query(bookingQuery(q))
        .then(orThrowPage)
        .then((page) => mapPage(page, toBooking));
}

const MAX_PAGES = 50;

/**
 * List all bookings, each booking ID once. Returns an empty list when a
 * request fails. Use `queryAllBookingsOrThrow` to keep each instance of a
 * recurring booking.
 * @param q Parameters to pass to the API request
 * @param options.signal Stops requests for more pages after an abort.
 * The function then returns an empty list, so callers must discard it.
 */
export async function queryAllBookings(
    q: BookingsQueryParams,
    options: { signal?: AbortSignal } = {},
): Promise<Booking[]> {
    try {
        return unique(await queryAllBookingPages(q, options.signal), 'id');
    } catch (_) {
        return [];
    }
}

/**
 * List all bookings. Rejects when a request fails. Keeps each instance of a
 * recurring booking, as instances share an ID.
 * @param q Parameters to pass to the API request
 * @param options.signal Stops requests for more pages after an abort.
 * The function then returns an empty list, or rejects if a request in
 * progress fails, so callers must discard the result.
 */
export async function queryAllBookingsOrThrow(
    q: BookingsQueryParams,
    options: { signal?: AbortSignal } = {},
): Promise<Booking[]> {
    const list = await queryAllBookingPages(q, options.signal);
    const keys = new Set<string>();
    return list.filter((booking) => {
        const key = `${booking.id}:${booking.instance || ''}`;
        if (keys.has(key)) return false;
        keys.add(key);
        return true;
    });
}

/** Every page of bookings, up to `MAX_PAGES`. Empty after an abort. */
async function queryAllBookingPages(
    q: BookingsQueryParams,
    signal?: AbortSignal,
): Promise<Booking[]> {
    if (signal?.aborted) return [];
    let page = await queryPagedBookings(q);
    const list = [...page.data];
    let count = 1;
    while (page.next && count <= MAX_PAGES) {
        if (signal?.aborted) return [];
        const next = page.next();
        if (!next) break;
        page = await next;
        list.push(...page.data);
        count += 1;
    }
    return signal?.aborted ? [] : list;
}

/**
 * Get booking details
 * @param id ID of the booking to grab
 * @param q Parameters to pass to the API request
 */
export async function showBooking(id: string): Promise<Booking> {
    return toBooking(await bookings.show({ id: bookingId(id) }).then(orThrow));
}

/**
 * Fields sent to create a booking. staff-api stores `parent_id` as an
 * integer, while booking ids are typed as strings in this app
 */
export type NewBookingData = Omit<Partial<Booking>, 'parent_id'> & {
    parent_id?: string | number;
};

/**
 * `parent_id` value that links a new booking to a parent booking. A numeric
 * id is sent as the integer that staff-api reads. Other ids, such as the ones
 * from the mock API, are sent unchanged
 * @param id Id of the parent booking
 */
export function parentBookingId(id: string | number): string | number {
    if (!id) throw new Error('Missing parent booking id');
    const parent_id = Number(id);
    return Number.isSafeInteger(parent_id) ? parent_id : id;
}

/**
 * Create new booking and add it to the database
 * @param data New booking fields
 */
export async function createBooking(
    data: NewBookingData,
    q?: { event_id?: string; ical_uid?: string },
): Promise<Booking> {
    const booking = await bookings
        .create({
            utm_source: bookingUtmSource(),
            ...(q?.event_id ? { event_id: q.event_id } : {}),
            ...(q?.ical_uid ? { ical_uid: q.ical_uid } : {}),
            body: bookingBody(data),
        })
        .then(orThrow);
    return toBooking(booking);
}

/**
 * Update an existing booking
 * @param id ID of the booking to update
 * @param data New values for booking fields
 * @param _method Not used. The API has one update action, so PUT and PATCH
 *   both send PATCH
 */
export async function updateBooking(
    id: string,
    data: Partial<Booking>,
    _method: 'put' | 'patch' = 'patch',
): Promise<Booking> {
    const booking = await bookings
        .update({ id: bookingId(id), body: bookingBody(data) })
        .then(orThrow);
    return toBooking(booking);
}

/**
 * Update the induction status of an existing booking
 * @param id ID of the booking to update
 * @param status New induction status of the booking
 */
export async function updateBookingInductionStatus(
    id: string,
    status: 'tentative' | 'accepted' | 'declined',
): Promise<Booking> {
    const booking = await bookings
        .updateInduction({ id: bookingId(id), induction: status })
        .then(orThrow);
    return toBooking(booking);
}

/**
 * Update instance of an existing booking series
 * @param id ID of the booking to update
 * @param start_time Unix seconds of the start time of the booking
 * @param data New values for booking fields
 * @param _method Not used. The API has one update action, so PUT and PATCH
 *   both send PATCH
 */
export async function updateBookingInstance(
    id: string,
    start_time: number,
    data: Partial<Booking>,
    _method: 'put' | 'patch' = 'patch',
): Promise<Booking> {
    const booking = await bookings
        .updateInstance({
            id: bookingId(id),
            instance: start_time,
            body: bookingBody(data),
        })
        .then(orThrow);
    return toBooking(booking);
}

/**
 * Save changes to or create a booking
 * @param data State of the booking
 * @param q Parameters to pass to the API request
 */
export const saveBooking = async (
    data: Partial<Booking>,
    q?: {
        booking_id?: string;
        event_id?: string;
        ical_uid?: string;
        instance?: number;
    },
): Promise<Booking> => {
    const id = data.id;
    delete (data as any).id;
    const instance = q?.instance;
    if (q) delete q.instance;
    return id
        ? instance
            ? updateBookingInstance(
                  id,
                  data.instance || data.booking_start,
                  data,
              )
            : updateBooking(id, data)
        : createBooking(cleanObject(data, ['', null, undefined]) || {}, q);
};

/**
 * Remove booking from the database
 * @param id ID of the booking to remove
 * @param q Set `instance` and `start_time` to remove only one instance of a
 *   recurring booking
 */
export async function removeBooking(
    id: string,
    q: { instance?: boolean; start_time?: number } = {},
): Promise<void> {
    if (q.instance) {
        return removeBookingInstance(id, q.start_time);
    }
    return bookings
        .destroy({ id: bookingId(id), utm_source: bookingUtmSource() })
        .then(orThrow)
        .then(() => undefined);
}

/** Whether two bookings overlap by time-of-day (all-day spans the whole day) */
function bookingsTimeOfDayOverlap(a: Booking, b: Booking): boolean {
    const window = (bk: Booking): [number, number] => {
        if (bk.all_day) return [0, 24 * 60];
        const date = new Date(bk.date);
        const start = date.getHours() * 60 + date.getMinutes();
        return [start, start + (bk.duration || 0)];
    };
    const [a_start, a_end] = window(a);
    const [b_start, b_end] = window(b);
    return a_start < b_end && b_start < a_end;
}

/** Find active bookings that overlap with instances of a recurring booking. */
async function overlappingRecurringBookings(
    booking: Booking,
    type: BookingType,
    window_days = 28,
): Promise<Booking[]> {
    if (!booking?.recurrence_type || booking.recurrence_type === 'none') {
        return [];
    }
    const email = booking.user_email;
    if (!email) return [];
    const now = Date.now();
    const existing = await queryBookings({
        period_start: getUnixTime(startOfDay(now)),
        period_end: getUnixTime(endOfDay(addDays(now, window_days))),
        type,
        email,
        limit: 1000,
    });
    const recurrence = fromBookingRecurrence(booking);
    return existing.filter(
        (other) =>
            // The API sends integer ids, and the app can hold string ones
            `${other.id}` !== `${booking.id}` &&
            `${other.parent_id}` !== `${booking.id}` &&
            other.status !== 'declined' &&
            other.status !== 'cancelled' &&
            !other.rejected &&
            isRecurrenceInstanceDate(recurrence, booking.date, other.date) &&
            bookingsTimeOfDayOverlap(booking, other),
    );
}

/**
 * Reject the assignee's bookings that overlap with instances of a recurring
 * booking.
 */
export async function rejectOverlappingRecurringBookings(
    booking: Booking,
    type: BookingType,
    window_days = 28,
): Promise<string[]> {
    const overlapping = await overlappingRecurringBookings(
        booking,
        type,
        window_days,
    );
    await Promise.all(
        overlapping.map((other) =>
            (other.instance
                ? rejectBookingInstance(other.id, other.instance)
                : rejectBooking(other.id)
            ).catch(() => null),
        ),
    );
    return overlapping.map((_) => _.id);
}

/**
 * Cancel the assignee's bookings that overlap with instances of a recurring
 * booking. Cancellation is persistent when an approval arrives later.
 */
export async function cancelOverlappingRecurringBookings(
    booking: Booking,
    type: BookingType,
    window_days = 28,
): Promise<string[]> {
    const overlapping = await overlappingRecurringBookings(
        booking,
        type,
        window_days,
    );
    await Promise.all(
        overlapping.map((other) =>
            (other.instance
                ? removeBookingInstance(other.id, other.instance)
                : removeBooking(other.id)
            ).catch(() => null),
        ),
    );
    return overlapping.map((_) => _.id);
}

/**
 * Remove instance of an existing booking series
 * @param id ID of the booking to update
 * @param start_time Unix seconds of the start time of the booking
 */
export async function removeBookingInstance(
    id: string,
    start_time: number,
): Promise<void> {
    return bookings
        .destroyInstance({
            id: bookingId(id),
            instance: start_time,
            utm_source: bookingUtmSource(),
        })
        .then(orThrow)
        .then(() => undefined);
}

/**
 * Set the approval state of the booking to `approved`
 * @param id ID of the booking to approve
 * @param system_id Associated system to approve
 */
export async function approveBooking(id: string): Promise<Booking> {
    return toBooking(
        await bookings.approve({ id: bookingId(id) }).then(orThrow),
    );
}

/**
 * Set the approval state of the booking instance to `approved`
 * @param id ID of the booking to reject
 * @param start_time Start time of the booking instance
 */
export async function approveBookingInstance(
    id: string,
    start_time: number,
): Promise<Booking> {
    return toBooking(
        await bookings
            .approveInstance({ id: bookingId(id), instance: start_time })
            .then(orThrow),
    );
}

/**
 * Set the approval state of the booking to `rejected`
 * @param id ID of the booking to reject
 * @param system_id Associated system to reject
 */
export async function rejectBooking(id: string): Promise<Booking> {
    return toBooking(
        await bookings.reject({ id: bookingId(id) }).then(orThrow),
    );
}

/**
 * Set the approval state of the booking instance to `rejected`
 * @param id ID of the booking to reject
 * @param start_time Start time of the booking instance
 */
export async function rejectBookingInstance(
    id: string,
    start_time: number,
): Promise<Booking> {
    return toBooking(
        await bookings
            .rejectInstance({ id: bookingId(id), instance: start_time })
            .then(orThrow),
    );
}

/**
 * Throw the error message from the body of a failed check-in response. A
 * failure without an HTTP body, such as a network failure, throws the error
 * of the call.
 * @param error Error of the check-in call
 */
function checkinError(error: CallError): never {
    const body = error.kind === 'http' ? error.body : null;
    const record = body !== null && isJsonRecord(body) ? body : {};
    throw record['error'] || record['message'] || body || new CallFailed(error);
}

/**
 * Set the checkin state of a booking
 * @param id ID of the booking to grab
 * @param state New checkin state of the booking
 */
export async function checkinBooking(
    id: string,
    state: boolean,
): Promise<Booking> {
    const result = await bookings.checkIn({
        id: bookingId(id),
        state,
        utm_source: bookingUtmSource(),
    });
    if (result.ok === false) checkinError(result.error);
    return toBooking(result.value.data);
}

/**
 * Set the checkin state of a booking instance
 * @param id ID of the booking to grab
 * @param start_time Start time of the booking instance
 * @param state New checkin state of the booking instance
 */
export async function checkinBookingInstance(
    id: string,
    start_time: number,
    state: boolean,
): Promise<Booking> {
    const result = await bookings.checkInInstance({
        id: bookingId(id),
        instance: start_time,
        state,
        utm_source: bookingUtmSource(),
    });
    if (result.ok === false) checkinError(result.error);
    return toBooking(result.value.data);
}

/**
 * Set the checkin state of a booking, changing only the single occurrence when
 * the booking belongs to a recurring series. The first occurrence of a series
 * is the master booking so it has no `instance`, and checking it in without
 * one would change the state of every future occurrence.
 * @param booking Booking to change the checkin state of
 * @param state New checkin state of the booking
 */
export async function setBookingCheckedIn(
    booking: Booking,
    state: boolean,
): Promise<Booking> {
    const is_recurring =
        !!booking.instance ||
        (!!booking.recurrence_type && booking.recurrence_type !== 'none');
    return is_recurring
        ? checkinBookingInstance(
              booking.id,
              booking.instance || booking.booking_start,
              state,
          )
        : checkinBooking(booking.id, state);
}

/**
 * Filter list of resources based of the bookings found in the given query
 * @param asset_id_list List of resource IDs
 * @param ignore ID of a booking that does not make a resource unavailable,
 * such as the booking that is edited. The ID of a `Booking` from the API is a
 * number, so the IDs are compared as strings
 */
export async function queryResourceAvailability(
    id_list: string[],
    start: number,
    duration: number,
    ignore?: string | number,
    type: BookingType = 'room',
): Promise<boolean[]> {
    const bookings = await queryBookings({
        type,
        period_start: getUnixTime(start),
        period_end: getUnixTime(addMinutes(start, duration)),
    });
    return id_list.map(
        (id) =>
            !bookings.find(
                (b) =>
                    (b.asset_id === id || b.asset_ids.includes(id)) &&
                    (!ignore || `${ignore}` !== `${b.id}`),
            ),
    );
}

/**
 * Bookings of the given type that this app linked to the event. A native
 * booking event already holds its child bookings from the API. For a calendar
 * event, the API ignores the period when given an event id, so bookings are
 * found wherever they sit in time; the period is only used by the mock API.
 * Rejects when the request fails
 * @param event Event the bookings are linked to
 * @param type Type of the linked bookings
 */
async function linkedBookingsForEvent(
    event: CalendarEvent,
    type: BookingType,
): Promise<Booking[]> {
    if (event.from_bookings) {
        return event.linked_bookings
            .filter((_) => _.booking_type === type)
            .map((_) => new Booking(_ as unknown as Partial<Booking>));
    }
    const bookings = await queryBookingsOrThrow({
        type,
        event_id: event.id,
        period_start: getUnixTime(event.date),
        period_end: getUnixTime(addMinutes(event.date, event.duration)),
        limit: 500,
    });
    return bookings.filter((_) => _.extension_data?.parent_id === event.id);
}

/**
 * Ids of the linked bookings of the given type that were made for an earlier
 * copy of the event. A host change moves the event to the new host's calendar
 * under a new id, and the API keeps the old host's bookings linked to it. A
 * native booking keeps its id, so it has none
 * @param event Parent event
 * @param type Type of the linked bookings
 */
function replacedEventBookingIds(
    event: CalendarEvent,
    type: BookingType,
): string[] {
    if (event.from_bookings) return [];
    return (event.linked_bookings || [])
        .filter((_) => {
            const parent_id = _.extension_data?.parent_id;
            return (
                _.booking_type === type && !!parent_id && parent_id !== event.id
            );
        })
        .map((_) => _.id);
}

/**
 * Whether a linked booking was created for the given resource
 * @param booking Existing linked booking
 * @param item Resource on the event
 */
function bookingMatchesResource(
    booking: Booking,
    item: BookableResource,
): boolean {
    if (item.id && booking.extension_data?.details?.id === item.id) {
        return true;
    }
    if (item.email && booking.attendees?.find((_) => _.email === item.email)) {
        return true;
    }
    return !!booking.asset_ids?.find((id) =>
        item.items?.find((i) => i.item_ids?.includes(id)),
    );
}

/**
 * JSON of a resource's details with object keys sorted, so the stored copy
 * compares equal to the live one whatever key order the API returns.
 * `deliver_at_time` is left out as it comes from the event time, which is
 * compared on its own, and falls back to the current time without an event
 * @param details Resource details
 */
function detailsKey(details: unknown): string {
    const data = JSON.parse(JSON.stringify(details ?? null));
    if (data && typeof data === 'object') delete data.deliver_at_time;
    return JSON.stringify(data, (_, value) =>
        value && typeof value === 'object' && !Array.isArray(value)
            ? Object.fromEntries(
                  Object.entries(value).sort(([a], [b]) => (a < b ? -1 : 1)),
              )
            : value,
    );
}

/** Sorted, comma separated emails of a list of attendees */
function attendeeEmails(list: readonly Partial<User>[] = []): string {
    return list
        .map((_) => _.email?.toLowerCase())
        .sort()
        .join(',');
}

/**
 * Fields to PATCH on a linked booking so it matches the event, or `null` when
 * nothing differs. Only changed fields are sent, so the API does not treat an
 * unchanged time or attendee list as a change. Times are sent as
 * `booking_start`/`booking_end`, as the API ignores `date` and `duration`
 * @param booking Existing linked booking
 * @param desired Booking the event now requires
 */
function linkedBookingChanges(
    booking: Booking,
    desired: Booking,
): Partial<Booking> | null {
    const changes: { -readonly [K in keyof Booking]?: Booking[K] } = {};
    if (
        booking.booking_start !== desired.booking_start ||
        booking.booking_end !== desired.booking_end
    ) {
        changes.booking_start = desired.booking_start;
        changes.booking_end = desired.booking_end;
        changes.all_day = desired.all_day;
    }
    for (const key of ['title', 'description', 'asset_name'] as const) {
        if (booking[key] !== desired[key]) changes[key] = desired[key];
    }
    if (booking.user_email.toLowerCase() !== desired.user_email.toLowerCase()) {
        changes.user_email = desired.user_email;
    }
    if (booking.asset_id !== desired.asset_id) {
        changes.asset_id = desired.asset_id;
        changes.asset_ids = desired.asset_ids;
    }
    if ([...booking.zones].sort().join() !== [...desired.zones].sort().join()) {
        changes.zones = desired.zones;
    }
    if (
        attendeeEmails(booking.attendees) !== attendeeEmails(desired.attendees)
    ) {
        changes.attendees = desired.attendees;
    }
    const details_changed =
        detailsKey(booking.extension_data?.details) !==
        detailsKey(desired.extension_data?.details);
    if (!details_changed && !Object.keys(changes).length) return null;
    return { ...changes, extension_data: desired.extension_data };
}

/**
 * Lift the international and internal/external flags off a visitor onto the
 * booking extension data, where the visitor report reads them. Flags on the
 * visitor's `extension_data` win over top-level ones.
 * @param item Visitor being booked
 */
function visitorFlagExtension(item: BookableResource) {
    return {
        ...readAttendeeFlags(item),
        ...readAttendeeFlags(item.extension_data || {}),
    };
}

/**
 * Sync the bookings linked to an event with the event's current resources of
 * the given type. Bookings for resources still on the event are updated in
 * place so their ids, approval state and check-in survive an edit; bookings are
 * created for new resources and removed for resources no longer on the event.
 * Bookings left by a host change are removed and created again for the new
 * host. Call with an empty list to remove every linked booking of the type
 * @param event Parent event
 * @param type Type of linked booking to sync
 * @param resources Resources of that type currently on the event
 */
export async function createBookingsForEvent(
    event: CalendarEvent,
    type: BookingType,
    resources: readonly BookableResource[],
) {
    const existing = await linkedBookingsForEvent(event, type);
    const zones =
        (event.system?.zones as any) ||
        unique(flatten(event.resources.map((_) => _.zones))) ||
        [];
    const kept = new Set<string>();
    const created_bookings: Booking[] = [];
    try {
        // Linked booking changes update the parent event, so process each
        // request in order to avoid concurrent writes to the same event.
        // The old host's bookings go first, as the API rejects a new booking
        // that clashes with one of them.
        for (const id of replacedEventBookingIds(event, type)) {
            await removeBooking(id);
        }
        for (const item of resources) {
            const booking = existing.find(
                (_) => !kept.has(_.id) && bookingMatchesResource(_, item),
            );
            const assigned_space =
                type === 'catering-order' && item.system_id
                    ? event.resources.find(
                          (_) =>
                              _.id === item.system_id ||
                              _.email === item.system_id,
                      )
                    : undefined;
            const resource_id =
                assigned_space?.id || item.system_id || item.email || item.id;
            const resource_name =
                assigned_space?.display_name ||
                assigned_space?.name ||
                item.name;
            const desired = new Booking({
                type,
                booking_type: type,
                date: event.date,
                duration: event.duration,
                description: event.title || item.name,
                user_email: event.host,
                asset_id: resource_id,
                asset_name: resource_name,
                title: event.title,
                attendees: item.email ? [new User(item)] : [],
                extension_data: {
                    parent_id: event.id,
                    name: resource_name,
                    location_id: assigned_space?.id || event.location,
                    details: item,
                    ...(type === 'visitor' ? visitorFlagExtension(item) : {}),
                },
                zones: assigned_space?.zones || zones,
            });
            if (booking) {
                kept.add(booking.id);
                const changes = linkedBookingChanges(booking, desired);
                if (changes) await updateBooking(booking.id, changes);
                continue;
            }
            created_bookings.push(
                event.from_bookings
                    ? await createBooking({
                          ...desired.toJSON(),
                          parent_id: parentBookingId(event.id),
                      })
                    : await createBooking(desired.toJSON(), {
                          ical_uid: event.ical_uid,
                          event_id: event.id,
                      }),
            );
        }
        for (const booking of existing) {
            if (!kept.has(booking.id)) await removeBooking(booking.id);
        }
    } catch (error) {
        await Promise.all(
            created_bookings
                .filter((booking) => !!booking.id)
                .map((booking) =>
                    removeBooking(booking.id).catch(() => undefined),
                ),
        );
        throw error;
    }
}
