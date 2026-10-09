import { computed, inject, Injectable, signal } from '@angular/core';
import {
    BookingAsset,
    BookingFormService,
    BookingFormValue,
    removeBooking,
    showBooking,
    updateBooking,
} from '@placeos/bookings';
import {
    Booking,
    errorMessage,
    OrganisationService,
    randomString,
    unique,
} from '@placeos/common';
import { bookingMatchesWindow, bookingWindow } from './outlook-event';
import { OutlookEventService } from './outlook-event.service';

/** Outlook item property that holds the linked PlaceOS desk booking ID. */
export const DESK_BOOKING_PROPERTY = 'placeos_desk_booking_id';
/** Outlook item property that holds the linked PlaceOS parking booking ID. */
export const PARKING_BOOKING_PROPERTY = 'placeos_parking_booking_id';

/** Asset ID prefix of a parking request that has no space yet. */
const UNALLOCATED_PREFIX = 'unallocated-';

/** Whether the booking is a parking request that has no space yet */
export function isParkingRequest(booking: Pick<Booking, 'asset_id'>) {
    return !!booking.asset_id?.startsWith(UNALLOCATED_PREFIX);
}

/** Placeholder asset for a parking request. The parking team assigns a space. */
export function parkingRequestAsset(): BookingAsset {
    const id = `${UNALLOCATED_PREFIX}${randomString(8)}`;
    return { id, name: 'Parking request', bookable: true, features: [] };
}

export type BookingLinkState = 'idle' | 'saving' | 'failed';

/** Booking form fields that a resource type adds to the booking */
export type BookingLinkFields = Partial<
    Pick<BookingFormValue, 'plate_number' | 'description' | 'location'>
>;

/**
 * Link between the Outlook event and one PlaceOS booking of a resource type.
 *
 * "Add to event" books the resource at once. The event is saved first so the
 * booking always belongs to an event that exists in the calendar. The link is
 * stored in both directions: the booking ID on the Outlook item, and the item
 * ID and iCalUId in the booking `extension_data`.
 */
export abstract class BookingLinkService {
    private _outlook = inject(OutlookEventService);
    private _form = inject(BookingFormService);
    private _org = inject(OrganisationService);

    protected abstract readonly type: 'desk' | 'parking';
    /** Outlook item property that holds the booking ID */
    protected abstract readonly property: string;
    /** Resource name used in messages, for example `a desk` */
    public abstract readonly resource: string;

    private readonly _booking = signal<Booking | null>(null);
    /** Outlook item version that `_booking` belongs to */
    private readonly _booking_version = signal(-1);
    private readonly _state = signal<BookingLinkState>('idle');
    private readonly _error = signal('');

    /**
     * Booking linked to the Outlook event. Empty as soon as a pinned pane
     * moves to a different item, so actions never use the previous item's
     * booking.
     */
    public readonly booking = computed(() =>
        this._booking_version() === this._outlook.item_version()
            ? this._booking()
            : null,
    );
    public readonly state = this._state.asReadonly();
    public readonly error = this._error.asReadonly();
    /** Whether the linked booking no longer matches the Outlook event time */
    public readonly out_of_sync = computed(() => {
        const booking = this.booking();
        const event = this._outlook.event();
        if (!booking || !event) return false;
        const result = bookingWindow(event, this.resource);
        return !!result.window && !bookingMatchesWindow(booking, result.window);
    });

    /** Load the booking linked to the current Outlook item */
    public async load() {
        const version = this._outlook.item_version();
        const id = await this._outlook.getProperty(this.property);
        const booking = id ? await showBooking(id).catch(() => null) : null;
        const active =
            booking && !booking.deleted && booking.status !== 'cancelled';
        this._setBooking(active ? booking : null, version);
    }

    /**
     * Book the resource for the Outlook event. Cancels the booking again when
     * Outlook cannot store the link, because nothing could find it later.
     */
    public async add(asset: BookingAsset, fields: BookingLinkFields = {}) {
        const version = this._outlook.item_version();
        await this._run(async () => {
            const item_id = await this._outlook.ensureSaved();
            const booking = await this._post(asset, fields);
            const saved = this._outlook.saved_event();
            const linked = await updateBooking(booking.id, {
                extension_data: {
                    ...booking.extension_data,
                    outlook_item_id: this._outlook.restId(item_id),
                    ...(saved?.ical_uid ? { ical_uid: saved.ical_uid } : {}),
                },
            }).catch(() => booking);
            try {
                await this._outlook.setProperty(this.property, linked.id);
            } catch (error) {
                await removeBooking(linked.id).catch(() => null);
                throw error;
            }
            this._setBooking(linked, version);
        });
    }

    /** Move the linked booking to the current Outlook event time */
    public async update() {
        const booking = this.booking();
        if (!booking) return;
        const version = this._outlook.item_version();
        await this._run(async () => {
            const asset = this._assetFromBooking(booking);
            this._setBooking(await this._post(asset, {}, booking), version);
        });
    }

    /** Cancel the linked booking and remove the link from the event */
    public async remove() {
        const booking = this.booking();
        if (!booking) return;
        const version = this._outlook.item_version();
        await this._run(async () => {
            await removeBooking(booking.id);
            await this._outlook.setProperty(this.property, '');
            this._setBooking(null, version);
        });
    }

    /** Clear the last error */
    public clearError() {
        this._error.set('');
        if (this._state() === 'failed') this._state.set('idle');
    }

    /**
     * Save the booking with the booking form service so that site rules,
     * restrictions and approval settings apply as they do in the workplace
     * app.
     */
    private async _post(
        asset: BookingAsset,
        fields: BookingLinkFields,
        existing?: Booking,
    ) {
        const event = await this._outlook.refresh();
        if (!event)
            throw this._outlook.error() || 'Unable to read the Outlook event.';
        const result = bookingWindow(event, this.resource);
        if (!result.window) throw result.reason;
        const { date, duration, all_day } = result.window;
        this._form.newForm(this.type, existing);
        const zone = asset.zone;
        const org = this._org;
        this._form.model.update((m) => ({
            ...m,
            ...fields,
            title: event.subject,
            date,
            duration,
            all_day,
            resources: [asset],
            asset_id: asset.id,
            asset_name: asset.name || asset.id,
            map_id: asset.map_id || asset.id,
            booking_asset: asset,
            // An existing booking keeps its zones when the asset has no zone.
            // A new booking without a zone, such as a parking request, belongs
            // to the building.
            zones: zone
                ? unique(
                      [
                          org.organisation.id,
                          org.region?.id,
                          zone.parent_id,
                          zone.id,
                      ].filter((_) => !!_),
                  )
                : existing
                  ? m.zones
                  : unique(
                        [
                            org.organisation.id,
                            org.region?.id,
                            org.building?.id,
                        ].filter((_) => !!_),
                    ),
        }));
        return this._form.postForm(false, false);
    }

    /** Keep the booking only when the Outlook item did not change */
    private _setBooking(booking: Booking | null, version: number) {
        if (version !== this._outlook.item_version()) return;
        this._booking.set(booking);
        this._booking_version.set(version);
    }

    private _assetFromBooking(booking: Booking): BookingAsset {
        return {
            id: booking.asset_id,
            name: booking.asset_name || booking.asset_id,
            bookable: true,
            features: [],
        };
    }

    private async _run(action: () => Promise<void>) {
        this._state.set('saving');
        this._error.set('');
        try {
            await action();
            this._state.set('idle');
        } catch (error) {
            this._error.set(
                errorMessage(error) || `Unable to save ${this.resource}.`,
            );
            this._state.set('failed');
        }
    }
}

/** Link between the Outlook event and a PlaceOS desk booking */
@Injectable({ providedIn: 'root' })
export class DeskLinkService extends BookingLinkService {
    protected readonly type = 'desk';
    protected readonly property = DESK_BOOKING_PROPERTY;
    public readonly resource = 'a desk';
}

/**
 * Link between the Outlook event and a PlaceOS parking booking. The booking
 * is for a parking space, or a parking request that the parking team assigns
 * a space to later.
 */
@Injectable({ providedIn: 'root' })
export class ParkingLinkService extends BookingLinkService {
    protected readonly type = 'parking';
    protected readonly property = PARKING_BOOKING_PROPERTY;
    public readonly resource = 'parking';
}
