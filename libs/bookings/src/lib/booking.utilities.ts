import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    Booking,
    CalendarEvent,
    current_user,
    currentUser,
    flatten,
    OrganisationService,
    setupFormTimeSync,
} from '@placeos/common';
import {
    createViewer,
    getViewer,
    Point,
    removeViewer,
} from '@placeos/svg-viewer';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import { endInFuture } from 'libs/events/src/lib/validators';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { Locker, LockerBank } from './locker.class';

function setBookingAsset(form: FormGroup, resource: any) {
    if (!resource) return form.patchValue({ asset_id: undefined });
    form.patchValue(
        {
            asset_id: resource.id,
            asset_name: resource.name,
            name: resource.display_name || resource.name || resource.id,
            map_id: resource.map_id || resource.id,
            description: resource.name,
            zones: resource.zone
                ? [resource.zone?.parent_id, resource.zone?.id]
                : [],
            booking_asset: resource,
        },
        { emitEvent: false },
    );
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

export function generateBookingForm(booking: Booking = new Booking()) {
    const visitor_name =
        booking.booking_type === 'visitor'
            ? booking.extension_data?.visitor_name || booking.asset_name || ''
            : booking.asset_name || booking.description;
    const form = new FormGroup({
        id: new FormControl(booking.id || ''),
        parent_id: new FormControl(booking.parent_id || ''),
        event_id: new FormControl(booking.event_id || ''),
        ical_uid: new FormControl(booking.extension_data.ical_uid || ''),
        date: new FormControl(booking.date, [Validators.required]),
        date_end: new FormControl(booking.date_end),
        all_day: new FormControl(booking.all_day ?? false),
        name: new FormControl(
            booking.extension_data.name || booking.asset_name || '',
        ),
        duration: new FormControl(booking.duration, [endInFuture]),
        booking_type: new FormControl(booking.booking_type),
        zones: new FormControl(booking.zones),
        title: new FormControl(booking.title),
        description: new FormControl(booking.description),
        booking_asset: new FormControl(null),
        resources: new FormControl([]),
        company: new FormControl(booking.extension_data?.company || ''),
        asset_id: new FormControl(booking.asset_id, [Validators.required]),
        asset_name: new FormControl(visitor_name),
        assets: new FormControl(booking.extension_data?.assets || []),
        attendees: new FormControl(booking.attendees || []),
        map_id: new FormControl(booking.extension_data?.map_id),
        featured: new FormControl(booking.extension_data?.featured || false),
        user: new FormControl(currentUser()),
        user_id: new FormControl(booking.user_id),
        group: new FormControl(booking.group),
        user_email: new FormControl(booking.user_email),
        user_name: new FormControl(booking.user_name),
        timezone: new FormControl(booking.timezone || ''),
        booked_by: new FormControl(currentUser()),
        booked_by_id: new FormControl(booking.booked_by_id),
        booked_by_email: new FormControl(booking.booked_by_email),
        secondary_resource: new FormControl(
            booking.extension_data?.other_asset_type ||
                booking.extension_data?.secondary_resource,
        ),
        location: new FormControl(booking.extension_data.location || ''),
        attendance_type: new FormControl(
            booking.extension_data.attendance_type || 'ANY',
        ),
        phone: new FormControl(booking.extension_data.phone || ''),
        permission: new FormControl(booking.permission || 'PRIVATE'),
        images: new FormControl(booking.images || []),
        tags: new FormControl(booking?.tags || []),
        plate_number: new FormControl(
            booking.extension_data.plate_number || '',
        ),
        vehicle_type: new FormControl(
            booking.extension_data.vehicle_type || 'car',
        ),
        request_type: new FormControl(
            booking.extension_data.request_type || 'standard',
        ),
        space_restrictions: new FormControl(
            booking.extension_data.space_restrictions ?? false,
        ),
        extra_space_restrictions: new FormControl(
            booking.extension_data.extra_space_restrictions ?? [],
        ),
        approver_group: new FormControl(
            booking.extension_data.approver_group || '',
        ),
        prefer_booked_location_first: new FormControl(
            booking.extension_data.prefer_booked_location_first ?? false,
        ),
        pass_number: new FormControl(booking.extension_data.pass_number || ''),
        international: new FormControl(
            booking.extension_data.international ?? false,
        ),
        recurrence_custom: new FormControl(
            booking.extension_data.recurrence_custom ?? false,
        ),
        recurrence_type: new FormControl(booking.recurrence_type || 'none'),
        recurrence_days: new FormControl(booking.recurrence_days),
        recurrence_nth_of_month: new FormControl(
            booking.recurrence_nth_of_month,
        ),
        recurrence_interval: new FormControl(booking.recurrence_interval),
        recurrence_end: new FormControl(booking.recurrence_end),
        recurrence_instances: new FormControl(
            booking.extension_data.recurrence_instances,
        ),
        notes: new FormControl(booking.extension_data.notes || ''),
        p2_document_names: new FormControl(
            booking.extension_data.p2_document_names || [],
        ),
        attachments: new FormControl(booking.extension_data.attachments || []),
        update_master: new FormControl(false),
        self_registered: new FormControl(false),
        is_assgined: new FormControl(false),
        _in_progress: new FormControl(
            booking.state === 'started' || booking.state === 'in_progress',
        ),
    });
    form.controls.user.valueChanges.subscribe((user) => {
        if (!user) return;
        form.patchValue(
            {
                user: user,
                user_id: user?.id,
                user_email: user?.email,
                user_name: user?.name,
            },
            { emitEvent: false },
        );
    });
    current_user.subscribe((user) => {
        if (!user) return;
        form.patchValue(
            {
                booked_by: user,
                booked_by_id: user?.id,
                booked_by_email: user?.email,
            },
            { emitEvent: false },
        );
    });
    form.controls.resources.valueChanges.subscribe((resources) =>
        setBookingAsset(form, (resources || [])[0]),
    );
    (form as any)._time_sync = setupFormTimeSync(form);
    if (booking.state === 'started' || booking.state === 'in_progress') {
        form.get('date').disable();
    }
    return form;
}

export async function findNearbyFeature(
    map_url: string,
    centered_at: Point | string,
    desk_ids: string[] = [],
): Promise<string> {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.top = '-9999px';
    element.style.width = '1000px';
    element.style.height = '1000px';
    document.body.appendChild(element);
    const id = await createViewer({
        url: map_url,
        element,
    });
    const viewer = getViewer(id);
    const point = (typeof centered_at === 'string'
        ? viewer.mappings[centered_at]
        : centered_at) || { x: 0.5, y: 0.5 };
    let dist = 10;
    let closest = '';
    for (const desk of desk_ids) {
        const { x, y } = viewer.mappings[desk] || { x: 2, y: 2 };
        const d = Math.sqrt(
            (x - point.x) * (x - point.x) + (y - point.y) * (y - point.y),
        );
        if (d < dist) {
            dist = d;
            closest = desk;
        }
    }
    document.body.removeChild(element);
    removeViewer(id);
    return closest;
}

export function newBookingFromCalendarEvent(event: CalendarEvent) {
    return new Booking({
        id: event.id,
        user_email: event.host,
        asset_id: event.system?.id,
        asset_name: event.system?.display_name || event.system?.name,
        booking_type: 'room',
        approved: event.status === 'approved',
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
        filter(([bld]) => !!bld),
        switchMap(([bld]) =>
            useRegion()
                ? forkJoin(
                      org.buildingsForRegion().map((building) =>
                          showMetadata(building.id, 'locker_banks').pipe(
                              catchError(() => of(new PlaceMetadata())),
                              map((_) =>
                                  _.details instanceof Array ? _.details : [],
                              ),
                          ),
                      ),
                  ).pipe(map((_: LockerBank[][]) => flatten(_)))
                : showMetadata(bld.id, 'locker_banks').pipe(
                      catchError(() => of(new PlaceMetadata())),
                      map((_) => (_.details instanceof Array ? _.details : [])),
                  ),
        ),
        shareReplay(1),
    );
}

export function loadLockers(
    org: OrganisationService,
    obs: Observable<any>,
    banks$: Observable<LockerBank[]>,
    useRegion: () => boolean,
): Observable<Locker[]> {
    return obs.pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) =>
            combineLatest([
                useRegion()
                    ? forkJoin(
                          org.buildingsForRegion().map((building) =>
                              showMetadata(building.id, 'lockers').pipe(
                                  catchError(() => of(new PlaceMetadata())),
                                  map((_) =>
                                      _.details instanceof Array
                                          ? _.details
                                          : [],
                                  ),
                              ),
                          ),
                      ).pipe(map((_: Locker[][]) => flatten(_)))
                    : showMetadata(bld.id, 'lockers').pipe(
                          catchError(() => of(new PlaceMetadata())),
                          map((_) =>
                              _.details instanceof Array ? _.details : [],
                          ),
                      ),
                banks$,
            ]),
        ),
        map(([lockers, banks]: any) => {
            const locker_list = lockers;
            for (const bank of banks) {
                bank.lockers = lockers
                    .filter((_) => _.bank_id === bank.id)
                    .map((_) => ({ ..._ }));
            }
            for (const locker of locker_list) {
                const bank = banks.find((b) => b.id === locker.bank_id);
                locker.bank = bank;
                locker.tags = bank?.tags || [];
                locker.zone = org.levelWithID(bank?.zones || []);
            }
            return lockers.filter((_) => _.bank);
        }),
        shareReplay(1),
    );
}

/** Resolve the display name for a visitor booking. Returns empty string if not a visitor booking or no name can be resolved. */
export function visitorDisplayNameFor(booking: Booking): string {
    if (!booking || booking.booking_type !== 'visitor') return '';
    const asset_id = `${booking.asset_id || ''}`.trim();
    const group_member = (booking.extension_data?.group_members || []).find(
        (item) => item?.email === booking.asset_id,
    );
    if (group_member?.name?.trim()) return group_member.name.trim();
    const attendee =
        (booking.attendees || []).find(
            (item) => item?.email === booking.asset_id,
        ) || booking.attendees?.[0];
    if (attendee?.name?.trim()) return attendee.name.trim();
    const asset_name =
        `${booking.extension_data?.visitor_name || booking.asset_name || ''}`.trim();
    const reason_values = [
        `${booking.title || ''}`.trim().toLowerCase(),
        `${booking.description || ''}`.trim().toLowerCase(),
    ].filter((_) => !!_);
    if (
        asset_name &&
        asset_name.toLowerCase() !== asset_id.toLowerCase() &&
        !reason_values.includes(asset_name.toLowerCase())
    ) {
        return asset_name;
    }
    return formatEmailAsName(asset_id || asset_name || '');
}

/** Format an email address as a human-readable name. */
export function formatEmailAsName(value: string): string {
    if (!value || !value.includes('@')) return value || '';
    const [local_part] = value.split('@');
    const formatted_local = local_part
        .replace(/[._-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    if (!formatted_local) return value;
    return formatted_local.replace(/\b\w/g, (char) => char.toUpperCase());
}
