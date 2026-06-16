import { Injector, signal, type WritableSignal } from '@angular/core';
import {
    disabled,
    email,
    form,
    required,
    validate,
    type FieldTree,
} from '@angular/forms/signals';
import {
    queryLockerAssetsForZones,
    queryLockerBankAssetsForZones,
} from '@placeos/assets';
import {
    Booking,
    CalendarEvent,
    current_user,
    currentUser,
    fromEventRecurrence,
    onFieldChange,
    OrganisationService,
    Point,
    settingSignal,
    setupFormTimeSync,
    toBookingRecurrence,
    type FormTimeSyncHandle,
    type SignalFormRef,
    User,
} from '@placeos/common';
import { getMapDetails } from '@placeos/components';
import { PlaceAsset } from '@placeos/ts-client';
import { addMinutes, isAfter } from 'date-fns';
import { combineLatest, from, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { Locker, LockerBank } from './locker.class';

function parseJson<T>(value: string, fallback: T): T {
    if (!value) return fallback;
    try {
        return JSON.parse(value) as T;
    } catch {
        return fallback;
    }
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

function setBookingAsset(
    model: WritableSignal<BookingFormValue>,
    resource: any,
) {
    if (!resource) {
        model.update((m) => ({ ...m, asset_id: undefined }));
        return;
    }
    model.update((m) => ({
        ...m,
        asset_id: resource.id,
        asset_name: resource.name,
        name: resource.display_name || resource.name || resource.id,
        map_id: resource.map_id || resource.id,
        description: resource.name,
        zones: resource.zone
            ? [resource.zone?.parent_id, resource.zone?.id]
            : [],
        booking_asset: resource,
    }));
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

const formatEmailName = (value: string) => {
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

/** Raw value held by the booking form model. */
export interface BookingFormValue {
    id: string;
    parent_id: string;
    event_id: string;
    ical_uid: string;
    date: number;
    date_end: number;
    all_day: boolean;
    name: string;
    duration: number;
    booking_type: any;
    zones: string[];
    title: string;
    description: string;
    booking_asset: any;
    resources: any[];
    company: string;
    asset_id: string;
    asset_name: string;
    assets: any[];
    attendees: any[];
    map_id: string;
    featured: boolean;
    user: User;
    user_id: string;
    group: any;
    user_email: string;
    user_name: string;
    timezone: string;
    booked_by: User;
    booked_by_id: string;
    booked_by_email: string;
    secondary_resource: any;
    location: string;
    attendance_type: string;
    phone: string;
    permission: string;
    images: any[];
    tags: string[];
    plate_number: string;
    vehicle_type: string;
    request_type: string;
    requires_manual_approval: boolean;
    space_restrictions: boolean;
    extra_space_restrictions: any[];
    approver_group: string;
    prefer_booked_location_first: boolean;
    pass_number: string;
    international: boolean;
    recurrence_custom: boolean;
    recurrence_type: string;
    recurrence_days: any;
    recurrence_nth_of_month: any;
    recurrence_interval: any;
    recurrence_end: any;
    recurrence_instances: any;
    notes: string;
    p2_document_names: string[];
    attachments: any[];
    update_master: boolean;
    self_registered: boolean;
    is_assgined: boolean;
}

/** Build the raw booking form value from a booking. */
export function bookingFormValue(
    booking: Booking = new Booking(),
): BookingFormValue {
    const visitor_name =
        booking.booking_type === 'visitor'
            ? booking.extension_data?.visitor_name || booking.asset_name || ''
            : booking.asset_name || booking.description;
    // Every field must be non-`undefined`: the signal-forms FieldTree only
    // exposes a sub-field for keys whose value is defined, so an `undefined`
    // seed would make `[formField]="form.x"` bind to nothing at runtime.
    return {
        id: booking.id || '',
        parent_id: booking.parent_id || '',
        event_id: booking.event_id || '',
        ical_uid: booking.extension_data.ical_uid || '',
        date: booking.date ?? 0,
        date_end: booking.date_end ?? 0,
        all_day: booking.all_day ?? false,
        name: booking.extension_data.name || booking.asset_name || '',
        duration: booking.duration ?? 0,
        booking_type: booking.booking_type || '',
        zones: booking.zones || [],
        title: booking.title || '',
        description: booking.description || '',
        booking_asset: null,
        resources: [],
        company: booking.extension_data?.company || '',
        asset_id: booking.asset_id || '',
        asset_name: visitor_name || '',
        assets: booking.extension_data?.assets || [],
        attendees: booking.attendees || [],
        map_id: booking.extension_data?.map_id || '',
        featured: booking.extension_data?.featured || false,
        user: currentUser(),
        user_id: booking.user_id || '',
        group: booking.group ?? null,
        user_email: booking.user_email || '',
        user_name: booking.user_name || '',
        timezone: booking.timezone || '',
        booked_by: currentUser(),
        booked_by_id: booking.booked_by_id || '',
        booked_by_email: booking.booked_by_email || '',
        secondary_resource:
            booking.extension_data?.other_asset_type ||
            booking.extension_data?.secondary_resource ||
            null,
        location: booking.extension_data.location || '',
        attendance_type: booking.extension_data.attendance_type || 'ANY',
        phone: booking.extension_data.phone || '',
        permission: booking.permission || 'PRIVATE',
        images: booking.images || [],
        tags: booking?.tags || [],
        plate_number: booking.extension_data.plate_number || '',
        vehicle_type: booking.extension_data.vehicle_type || 'car',
        request_type: booking.extension_data.request_type || 'standard',
        requires_manual_approval:
            booking.extension_data.requires_manual_approval ?? false,
        space_restrictions: booking.extension_data.space_restrictions ?? false,
        extra_space_restrictions:
            booking.extension_data.extra_space_restrictions ?? [],
        approver_group: booking.extension_data.approver_group || '',
        prefer_booked_location_first:
            booking.extension_data.prefer_booked_location_first ?? false,
        pass_number: booking.extension_data.pass_number || '',
        international: booking.extension_data.international ?? false,
        recurrence_custom: booking.extension_data.recurrence_custom ?? false,
        recurrence_type: booking.recurrence_type || 'none',
        recurrence_days: booking.recurrence_days ?? null,
        recurrence_nth_of_month: booking.recurrence_nth_of_month ?? null,
        recurrence_interval: booking.recurrence_interval ?? null,
        recurrence_end: booking.recurrence_end ?? null,
        recurrence_instances: booking.extension_data.recurrence_instances ?? null,
        notes: booking.extension_data.notes || '',
        p2_document_names: booking.extension_data.p2_document_names || [],
        attachments: booking.extension_data.attachments || [],
        update_master: false,
        self_registered: false,
        is_assgined: false,
    } as BookingFormValue;
}

/** FieldTree for the booking form, with attached time-sync handle. */
export type BookingForm = FieldTree<BookingFormValue> & {
    _time_sync?: FormTimeSyncHandle;
};

export type BookingFormRef = SignalFormRef<BookingFormValue, BookingForm> & {
    /** Time-sync handle for runtime duration/bookable-hours reconfiguration. */
    time_sync: FormTimeSyncHandle;
};

export function generateBookingForm(
    booking: Booking = new Booking(),
    injector?: Injector,
): BookingFormRef {
    const started = booking.state === 'started';
    const model: WritableSignal<BookingFormValue> = signal(
        bookingFormValue(booking),
    );

    const require_plate_number = settingSignal<boolean>(
        'parking.require_plate_number',
        false,
    );
    const booking_form = form<BookingFormValue>(model, (p) => {
        required(p.date);
        required(p.asset_id);
        // Visitor bookings use asset_id to hold the visitor's email address.
        email(p.asset_id, {
            when: ({ valueOf }) => valueOf(p.booking_type) === 'visitor',
        });
        // Parking requests can require a vehicle plate number via settings.
        required(p.plate_number, {
            when: () => require_plate_number(),
        });
        validate(p.duration, ({ value, valueOf }) => {
            const date = valueOf(p.date);
            return date && isAfter(Date.now(), addMinutes(date, value()))
                ? { kind: 'duration' }
                : undefined;
        });
        disabled(p.date, {
            when: ({ valueOf }) =>
                started || (valueOf(p.date) < Date.now() && !!valueOf(p.id)),
        });
    }, { injector }) as BookingForm;

    // user → user_id/email/name
    onFieldChange(
        model,
        (v) => v.user,
        (user) => {
            if (!user) return;
            model.update((m) => ({
                ...m,
                user,
                user_id: (user as any)?.id,
                user_email: (user as any)?.email,
                user_name: (user as any)?.name,
            }));
        },
        injector,
    );
    // resources → booking asset fields
    onFieldChange(
        model,
        (v) => v.resources,
        (resources) => setBookingAsset(model, (resources || [])[0]),
        injector,
    );
    // Keep booked_by synced to the current user
    current_user.subscribe((user) => {
        if (!user) return;
        model.update((m) => ({
            ...m,
            booked_by: user,
            booked_by_id: user?.id,
            booked_by_email: user?.email,
        }));
    });

    const time_sync = setupFormTimeSync(model, {}, injector);
    return { model, form: booking_form, time_sync };
}

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

export function newBookingFromCalendarEvent(event: CalendarEvent) {
    const date = event.date || event.event_start * 1000;
    const recurrence = event.recurrence?.pattern
        ? toBookingRecurrence(
              fromEventRecurrence(event.recurrence),
              date,
          )
        : {};
    return new Booking({
        id: event.id,
        user_email: event.host,
        date,
        duration: event.duration,
        asset_id: event.system?.id || (event as any).system_id,
        asset_name: event.system?.display_name || event.system?.name,
        booking_type: 'room',
        approved: event.status === 'approved',
        ...recurrence,
        extension_data: {
            ...event,
        },
    });
}

export function loadLockerBanks(
    org: OrganisationService,
    obs: Observable<any>,
    useRegion: () => boolean,
): Observable<LockerBank[]> {
    return obs.pipe(
        filter(([bld, region]) => !!(useRegion() ? region || org.region : bld)),
        switchMap(([bld, region]) => {
            const scope_id = useRegion()
                ? region?.id || org.region?.id
                : bld?.id;
            return from(queryLockerBankAssetsForZones([scope_id])).pipe(
                catchError(() => of([])),
            );
        }),
        map((assets) => assets.map(lockerBankFromAsset)),
        map((banks) => {
            for (const bank of banks) {
                bank.zone = org.levelWithID(bank.zones || []) as any;
            }
            return banks;
        }),
        shareReplay(1),
    );
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
        bank.lockers = lockers
            .filter((_) => _.bank_id === bank.id)
            .map((_) => ({ ..._ }));
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

export function loadLockers(
    org: OrganisationService,
    obs: Observable<any>,
    banks$: Observable<LockerBank[]>,
    useRegion: () => boolean,
): Observable<Locker[]> {
    return obs.pipe(
        filter(([bld, region]) => !!(useRegion() ? region || org.region : bld)),
        switchMap(([bld, region]) => {
            const scope_id = useRegion()
                ? region?.id || org.region?.id
                : bld?.id;
            return combineLatest([
                from(queryLockerAssetsForZones([scope_id])).pipe(
                    catchError(() => of([])),
                ),
                banks$,
            ]);
        }),
        map(([assets, banks]) => {
            const lockers = assets.map((_) => lockerFromAsset(_, banks));
            for (const bank of banks) {
                bank.lockers = lockers
                    .filter((_) => _.bank_id === bank.id)
                    .map((_) => ({ ..._ }));
            }
            return lockers.filter((_) => _.bank);
        }),
        shareReplay(1),
    );
}
