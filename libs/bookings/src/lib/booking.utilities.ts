import {
    queryLockerAssetsForZones,
    queryLockerBankAssetsForZones,
} from '@placeos/assets';
import {
    Booking,
    CalendarEvent,
    fromEventRecurrence,
    OrganisationService,
    Point,
    toBookingRecurrence,
    unique,
} from '@placeos/common';
import { getMapDetails } from '@placeos/components';
import { PlaceAsset } from '@placeos/ts-client';
import { Locker, LockerBank } from './locker.class';

function parseJson<T>(value: string, fallback: T): T {
    if (!value) return fallback;
    try {
        return JSON.parse(value) as T;
    } catch {
        return fallback;
    }
}

export type ParkingRequestStatus = 'pending' | 'approval_required' | 'waitlist';

/**
 * Status of an unresolved parking request.
 * Unapproved manual requests need approval; non-manual requests are only
 * waitlisted when the backend marks their process state accordingly.
 */
export function parkingRequestStatus(
    booking?: Pick<Booking, 'approved' | 'process_state' | 'extension_data'>,
): ParkingRequestStatus {
    const requires_manual_approval =
        !!booking?.extension_data?.requires_manual_approval;
    if (booking?.approved !== false) return 'pending';
    if (requires_manual_approval) return 'approval_required';
    if (booking.process_state === 'wait_list') return 'waitlist';
    return 'pending';
}

export function lockerBankFromAsset(asset: PlaceAsset): LockerBank {
    const data = asset.other_data || {};
    return {
        id: asset.id,
        map_id: asset.map_id || data.map_id || '',
        level_id: asset.zone_id,
        name: asset.identifier || data.name || '',
        height: +(data.height || 3),
        notes: asset.notes || '',
        zones: asset.zones || [asset.zone_id].filter((_) => _),
        tags: (asset as any).tags || parseJson(data.tags, []),
        images: parseJson(data.images, []),
    } as LockerBank;
}

export function lockerFromAsset(
    asset: PlaceAsset,
    banks: LockerBank[],
): Locker {
    const data = asset.other_data || {};
    const bank_id = (asset as any).parent_id || '';
    const bank = banks.find((_) => _.id === bank_id);
    return {
        id: asset.id,
        bank_id,
        map_id: asset.map_id || data.map_id,
        assigned_to: (asset as any).assigned_to || data.assigned_to,
        assigned_name: (asset as any).assigned_name || data.assigned_name,
        name: asset.identifier || data.name || '',
        accessible: data.accessible === 'true',
        bookable: asset.bookable !== false,
        position: parseJson(data.position, [0, 0]),
        size: parseJson(data.size, [1, 1]),
        bank,
        zone: bank?.zone,
        features: asset.features || parseJson(data.features, []),
    } as Locker;
}

const visitorGroupMemberName = (booking: Booking) => {
    const member = (booking.extension_data?.group_members || []).find(
        (item) => item?.email === booking.asset_id,
    );
    const name = `${member?.name || ''}`.trim();
    return name || '';
};

const visitorAttendeeName = (booking: Booking) => {
    const attendee =
        (booking.attendees || []).find(
            (item) => item?.email === booking.asset_id,
        ) || booking.attendees?.[0];
    const name = `${attendee?.name || ''}`.trim();
    return name || '';
};

/** Readable name from an email address, e.g. `jane.doe@x.com` → `Jane Doe`.
 * Values without an `@` are returned unchanged. */
export const formatEmailName = (value: string) => {
    if (!value.includes('@')) return value;
    const [local_part] = value.split('@');
    const formatted_local = local_part
        .replace(/[._-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    if (!formatted_local) return value;
    return formatted_local.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const visitorDisplayNameFor = (booking: Booking) => {
    const asset_id = `${booking?.asset_id || ''}`.trim();
    const group_member_name = visitorGroupMemberName(booking);
    if (group_member_name) return group_member_name;
    const attendee_name = visitorAttendeeName(booking);
    if (attendee_name) return attendee_name;
    const asset_name = `${
        booking?.extension_data?.visitor_name || booking?.asset_name || ''
    }`.trim();
    const reason_values = [
        `${booking?.title || ''}`.trim().toLowerCase(),
        `${booking?.description || ''}`.trim().toLowerCase(),
    ].filter((_) => !!_);
    if (
        asset_name &&
        asset_name.toLowerCase() !== asset_id.toLowerCase() &&
        !reason_values.includes(asset_name.toLowerCase())
    ) {
        return asset_name;
    }
    return formatEmailName(asset_id || asset_name || 'Visitor');
};

export async function findNearbyFeature(
    map_url: string,
    centered_at: Point | string,
    desk_ids: string[] = [],
): Promise<string> {
    const details = await getMapDetails(map_url);
    const centerOf = (id: string) => {
        const bounds = details.element_bounds.get(id);
        return bounds
            ? { x: bounds.x + bounds.w / 2, y: bounds.y + bounds.h / 2 }
            : null;
    };
    const point = (typeof centered_at === 'string'
        ? centerOf(centered_at)
        : centered_at) || { x: 0.5, y: 0.5 };
    let dist = 10;
    let closest = '';
    for (const desk of desk_ids) {
        const { x, y } = centerOf(desk) || { x: 2, y: 2 };
        const d = Math.sqrt(
            (x - point.x) * (x - point.x) + (y - point.y) * (y - point.y),
        );
        if (d < dist) {
            dist = d;
            closest = desk;
        }
    }
    return closest;
}

/** Convert an event form value into a native room booking that holds every selected room. */
export function newBookingFromCalendarEvent(event: CalendarEvent) {
    const date = event.date || event.event_start * 1000;
    // Serialized events omit duration and store their start/end in seconds.
    const duration =
        event.duration ?? (event.event_end - event.event_start) / 60;
    const recurrence = event.recurrence?.pattern
        ? toBookingRecurrence(fromEventRecurrence(event.recurrence), date)
        : {};
    const rooms = [event.system, ...(event.resources || [])].filter(
        (_) => !!_?.id,
    );
    // Serialized events store the primary room as `system_id`.
    const { system_id } = event as CalendarEvent & { system_id?: string };
    const asset_ids = unique(
        [...rooms.map((_) => _.id), system_id].filter((_) => !!_),
    );
    return new Booking({
        id: event.id,
        user_id: event.organiser?.id || event.host,
        user_email: event.host,
        user_name: event.organiser?.name || event.host,
        // An empty title uses the booking type default.
        title: event.title || undefined,
        date,
        duration,
        all_day: event.all_day,
        timezone: event.timezone,
        asset_id: asset_ids[0],
        asset_ids,
        asset_name: event.system?.display_name || event.system?.name,
        zones: unique(rooms.flatMap((_) => _.zones || [])),
        booking_type: 'room',
        approved: event.status === 'approved',
        ...recurrence,
        extension_data: {
            ...event,
        },
    });
}

/** Load locker banks for a single zone scope (signal/promise based) */
export async function loadLockerBanksForScope(
    org: OrganisationService,
    scope_id: string,
): Promise<LockerBank[]> {
    if (!scope_id) return [];
    const assets = await queryLockerBankAssetsForZones([scope_id]).catch(
        () => [],
    );
    const banks = assets.map(lockerBankFromAsset);
    for (const bank of banks) {
        bank.zone = org.levelWithID(bank.zones || []) as any;
    }
    return banks;
}

/** Load lockers for a single zone scope, attaching them to their banks */
export async function loadLockersForScope(
    org: OrganisationService,
    scope_id: string,
    banks: LockerBank[],
): Promise<Locker[]> {
    if (!scope_id) return [];
    const assets = await queryLockerAssetsForZones([scope_id]).catch(() => []);
    const lockers = assets.map((_) => lockerFromAsset(_, banks));
    for (const bank of banks) {
        // Lockers listed under a bank carry a copy of the bank without its
        // list: the booking model is walked recursively and must stay acyclic
        const parent = { ...bank, lockers: [] as Locker[] };
        bank.lockers = lockers
            .filter((_) => _.bank_id === bank.id)
            .map((_) => ({ ..._, bank: parent }));
    }
    return lockers.filter((_) => _.bank);
}

/** Load all locker resources for a single zone scope (signal/promise based) */
export async function loadLockerResources(
    org: OrganisationService,
    scope_id: string,
): Promise<Locker[]> {
    const banks = await loadLockerBanksForScope(org, scope_id);
    return loadLockersForScope(org, scope_id, banks);
}
