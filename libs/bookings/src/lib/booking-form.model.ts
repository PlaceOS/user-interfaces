import {
    Injector,
    signal,
    untracked,
    type WritableSignal,
} from '@angular/core';
import {
    disabled,
    email,
    form,
    required,
    validate,
    type FieldTree,
} from '@angular/forms/signals';
import {
    Booking,
    BookingType,
    current_user,
    currentUser,
    guardModelUndefinedWrites,
    onFieldChange,
    settingSignal,
    setupFormTimeSync,
    User,
    type FormTimeSyncHandle,
    type SignalFormRef,
} from '@placeos/common';
import { addMinutes, isAfter } from 'date-fns';

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
    booking_type: BookingType;
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
    phone?: string;
    permission: string;
    images: any[];
    tags: string[];
    plate_number: string;
    vehicle_type: string;
    request_type: string;
    requires_manual_approval: boolean;
    space_restrictions: string | boolean;
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
    attachments: string[];
    update_master: boolean;
    self_registered: boolean;
    is_assgined: boolean;
}

export function bookingAttachments(booking: Booking = new Booking()): string[] {
    booking = booking || new Booking();
    const extension_data = booking.extension_data || {};
    return [
        ...(extension_data.attachments || []),
        ...(extension_data.p2_document_names || []),
    ].filter((item) => !!item);
}

/** Host (`user`) of a booking, falling back to the signed-in user for new
 * bookings. Delegate bookings are made on behalf of someone else, so seeding
 * this from the current user would silently reassign the host on save. */
export function bookingHostUser(booking: Booking = new Booking()): User {
    if (!booking?.user_email) return currentUser();
    return new User({
        id: booking.user_id || '',
        email: booking.user_email,
        name: booking.user_name || booking.user_email,
    });
}

/** Build the raw booking form value from a booking. */
export function bookingFormValue(
    booking: Booking = new Booking(),
): BookingFormValue {
    const extension_data = booking.extension_data || {};
    const visitor_name =
        booking.booking_type === 'visitor'
            ? extension_data.visitor_name || booking.asset_name || ''
            : booking.asset_name || booking.description;
    // Every field must be non-`undefined`: the signal-forms FieldTree only
    // exposes a sub-field for keys whose value is defined, so an `undefined`
    // seed would make `[formField]="form.x"` bind to nothing at runtime.
    return {
        id: booking.id || '',
        parent_id: booking.parent_id || '',
        event_id: booking.event_id || '',
        ical_uid: extension_data.ical_uid || '',
        date: booking.date ?? 0,
        date_end: booking.date_end ?? 0,
        all_day: booking.all_day ?? false,
        name: extension_data.name || booking.asset_name || '',
        duration: booking.duration ?? 0,
        booking_type: booking.booking_type,
        zones: booking.zones || [],
        title: booking.title || '',
        description: booking.description || '',
        booking_asset: {},
        resources: [],
        company: extension_data.company || '',
        asset_id: booking.asset_id || '',
        asset_name: visitor_name || '',
        assets: extension_data.assets || [],
        attendees: booking.attendees || [],
        map_id: extension_data.map_id || '',
        featured: extension_data.featured || false,
        user: bookingHostUser(booking),
        user_id: booking.user_id || '',
        group: booking.group ?? {},
        user_email: booking.user_email || '',
        user_name: booking.user_name || '',
        timezone: booking.timezone || '',
        booked_by: currentUser(),
        booked_by_id: booking.booked_by_id || '',
        booked_by_email: booking.booked_by_email || '',
        secondary_resource:
            extension_data.other_asset_type ||
            extension_data.secondary_resource ||
            {},
        location: extension_data.location || '',
        attendance_type: extension_data.attendance_type || 'ANY',
        phone: extension_data.phone || '',
        permission: booking.permission || 'PRIVATE',
        images: booking.images || [],
        tags: booking?.tags || [],
        plate_number: extension_data.plate_number || '',
        vehicle_type: extension_data.vehicle_type || 'car',
        request_type: extension_data.request_type || 'standard',
        requires_manual_approval:
            extension_data.requires_manual_approval ?? false,
        space_restrictions: extension_data.space_restrictions ?? false,
        extra_space_restrictions: extension_data.extra_space_restrictions ?? [],
        approver_group: extension_data.approver_group || '',
        prefer_booked_location_first:
            extension_data.prefer_booked_location_first ?? false,
        pass_number: extension_data.pass_number || '',
        international: extension_data.international ?? false,
        recurrence_custom: extension_data.recurrence_custom ?? false,
        recurrence_type: booking.recurrence_type || 'none',
        recurrence_days: booking.recurrence_days ?? 0,
        recurrence_nth_of_month: booking.recurrence_nth_of_month ?? 0,
        recurrence_interval: booking.recurrence_interval ?? 0,
        recurrence_end: booking.recurrence_end ?? 0,
        recurrence_instances: extension_data.recurrence_instances ?? 0,
        notes: extension_data.notes || '',
        attachments: bookingAttachments(booking),
        update_master: false,
        self_registered: false,
        is_assgined: false,
    } as BookingFormValue;
}

/** Copy the selected resource onto the booking asset fields of the form model. */
function setBookingAsset(
    model: WritableSignal<BookingFormValue>,
    resource: any,
) {
    if (!resource) {
        // Use '' rather than `undefined`: an undefined value removes the
        // `asset_id` sub-field from the signal-forms FieldTree, breaking any
        // `[formField]="form.asset_id"` binding (`this.field() is not a function`).
        model.update((m) => ({ ...m, asset_id: '' }));
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

    // Keep every key defined so signal-forms never drops a sub-field bound via
    // `[formField]` (an undefined value triggers `this.field() is not a
    // function`). Guards writes synchronously — no reactive surface.
    guardModelUndefinedWrites(model, bookingFormValue(new Booking()));

    const require_plate_number = settingSignal<boolean>(
        'parking.require_plate_number',
        false,
    );
    const require_space_restriction = settingSignal<boolean>(
        'parking.require_space_restriction',
        false,
    );
    const booking_form = form<BookingFormValue>(
        model,
        (p) => {
            required(p.date);
            required(p.asset_id);
            // Visitor bookings use asset_id to hold the visitor's email address.
            email(p.asset_id, {
                when: ({ valueOf }) => valueOf(p.booking_type) === 'visitor',
            });
            // Parking requests can require a vehicle plate number via settings.
            // Scope to parking bookings so the required state never bleeds into
            // desk/visitor forms sharing this FieldTree.
            required(p.plate_number, {
                when: ({ valueOf }) =>
                    valueOf(p.booking_type) === 'parking' &&
                    require_plate_number(),
            });
            validate(p.plate_number, ({ value, valueOf }) =>
                valueOf(p.booking_type) === 'parking' &&
                require_plate_number() &&
                !`${value() || ''}`.trim()
                    ? { kind: 'required' }
                    : undefined,
            );
            validate(p.space_restrictions, ({ value, valueOf }) =>
                valueOf(p.booking_type) === 'parking' &&
                require_space_restriction() &&
                !value()
                    ? { kind: 'required' }
                    : undefined,
            );
            validate(p.duration, ({ value, valueOf }) => {
                const date = valueOf(p.date);
                if (value() <= 0) return { kind: 'duration' };
                return date && isAfter(Date.now(), addMinutes(date, value()))
                    ? { kind: 'duration' }
                    : undefined;
            });
            // Depend only on the date field's own value (`ctx.value()`) and read
            // `id` untracked. `valueOf(p.id)` here threw NG01901 (the resolver
            // can't navigate `.id` from the `date` field), and reading the whole
            // `model()` made this recompute on every model change — extra reactive
            // surface that could feed loops on the explore page.
            disabled(p.date, ({ value }) => {
                if (started) return true;
                return value() < Date.now() && !!untracked(model).id;
            });
        },
        { injector },
    ) as BookingForm;

    // user → user_id/email/name
    onFieldChange(
        model,
        (v) => v.user,
        (user) => {
            if (!user) return;
            // Coalesce to '' so the sub-fields are never removed from the
            // FieldTree (an undefined value breaks `[formField]="form.user_*"`).
            model.update((m) => ({
                ...m,
                user,
                user_id: (user as any)?.id ?? '',
                user_email: (user as any)?.email ?? '',
                user_name: (user as any)?.name ?? '',
            }));
        },
        injector,
    );
    // resources → booking asset fields
    onFieldChange(
        model,
        (v) => v.resources,
        (resources) => {
            // Visitor bookings store the visitor email in `asset_id`; they do
            // not select a booking resource. Form resets replace `resources`
            // with a new empty array, which must not clear that email on edit.
            if (untracked(model).booking_type === 'visitor') return;
            setBookingAsset(model, (resources || [])[0]);
        },
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
    (booking_form as BookingForm)._time_sync = time_sync;
    (model as any)._time_sync = time_sync;
    return { model, form: booking_form, time_sync };
}
