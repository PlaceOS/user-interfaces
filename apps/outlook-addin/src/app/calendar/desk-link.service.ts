import { computed, inject, Injectable, signal } from '@angular/core';
import {
    BookingAsset,
    BookingFormService,
    removeBooking,
    showBooking,
    updateBooking,
} from '@placeos/bookings';
import {
    Booking,
    errorMessage,
    OrganisationService,
    unique,
} from '@placeos/common';
import { bookingMatchesWindow, deskWindow } from './outlook-event';
import { OutlookEventService } from './outlook-event.service';

/** Outlook item property that holds the linked PlaceOS desk booking ID. */
export const DESK_BOOKING_PROPERTY = 'placeos_desk_booking_id';

export type DeskLinkState = 'idle' | 'saving' | 'failed';

/**
 * Link between the Outlook event and a PlaceOS desk booking.
 *
 * "Add to event" reserves the desk at once. The event is saved first so the
 * booking always belongs to an event that exists in the calendar. The link is
 * stored in both directions: the booking ID on the Outlook item, and the item
 * ID and iCalUId in the booking `extension_data`.
 */
@Injectable({ providedIn: 'root' })
export class DeskLinkService {
    private _outlook = inject(OutlookEventService);
    private _form = inject(BookingFormService);
    private _org = inject(OrganisationService);

    private readonly _booking = signal<Booking | null>(null);
    private readonly _state = signal<DeskLinkState>('idle');
    private readonly _error = signal('');

    /** Desk booking linked to the Outlook event */
    public readonly booking = this._booking.asReadonly();
    public readonly state = this._state.asReadonly();
    public readonly error = this._error.asReadonly();
    /** Whether the linked booking no longer matches the Outlook event time */
    public readonly out_of_sync = computed(() => {
        const booking = this._booking();
        const event = this._outlook.event();
        if (!booking || !event) return false;
        const result = deskWindow(event);
        return !!result.window && !bookingMatchesWindow(booking, result.window);
    });

    /** Load the booking linked to the current Outlook item */
    public async load() {
        const id = await this._outlook.getProperty(DESK_BOOKING_PROPERTY);
        if (!id) return this._booking.set(null);
        const booking = await showBooking(id).catch(() => null);
        const active =
            booking && !booking.deleted && booking.status !== 'cancelled';
        this._booking.set(active ? booking : null);
    }

    /** Reserve the desk for the Outlook event */
    public async add(desk: BookingAsset) {
        await this._run(async () => {
            const item_id = await this._outlook.ensureSaved();
            const booking = await this._post(desk);
            const saved = this._outlook.saved_event();
            const linked = await updateBooking(booking.id, {
                extension_data: {
                    ...booking.extension_data,
                    outlook_item_id: this._outlook.restId(item_id),
                    ...(saved?.ical_uid ? { ical_uid: saved.ical_uid } : {}),
                },
            }).catch(() => booking);
            await this._outlook.setProperty(DESK_BOOKING_PROPERTY, linked.id);
            this._booking.set(linked);
        });
    }

    /** Move the linked booking to the current Outlook event time */
    public async update() {
        const booking = this._booking();
        if (!booking) return;
        await this._run(async () => {
            const desk = this._deskFromBooking(booking);
            this._booking.set(await this._post(desk, booking));
        });
    }

    /** Cancel the linked booking and remove the link from the event */
    public async remove() {
        const booking = this._booking();
        if (!booking) return;
        await this._run(async () => {
            await removeBooking(booking.id);
            await this._outlook.setProperty(DESK_BOOKING_PROPERTY, '');
            this._booking.set(null);
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
    private async _post(desk: BookingAsset, existing?: Booking) {
        const event = await this._outlook.refresh();
        if (!event) throw 'Unable to read the Outlook event.';
        const result = deskWindow(event);
        if (!result.window) throw result.reason;
        const { date, duration, all_day } = result.window;
        this._form.newForm('desk', existing);
        const zone = desk.zone;
        this._form.model.update((m) => ({
            ...m,
            title: event.subject,
            date,
            duration,
            all_day,
            resources: [desk],
            asset_id: desk.id,
            asset_name: desk.name || desk.id,
            map_id: desk.map_id || desk.id,
            booking_asset: desk,
            // An existing booking keeps its zones when the desk has no zone.
            zones: zone
                ? unique(
                      [
                          this._org.organisation.id,
                          this._org.region?.id,
                          zone.parent_id,
                          zone.id,
                      ].filter((_) => !!_),
                  )
                : m.zones,
        }));
        return this._form.postForm(false, false);
    }

    private _deskFromBooking(booking: Booking): BookingAsset {
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
            this._error.set(errorMessage(error) || 'Unable to save the desk.');
            this._state.set('failed');
        }
    }
}
