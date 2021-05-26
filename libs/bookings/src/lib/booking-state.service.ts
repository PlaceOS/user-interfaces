import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BaseClass, getInvalidFields } from '@placeos/common';
import { getUnixTime } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Booking } from './booking.class';
import { generateBookingForm } from './booking.utilities';
import { queryBookings, saveBooking } from './bookings.fn';

export type BookingFlowView = 'form' | 'map' | 'confirm' | 'success';

const BOOKING_URLS = ['book/desks'];

export interface BookingFlowOptions {
    /** Type of booking being made */
    type: 'desk' | 'parking';
    /** Start time of booking */
    start?: number;
    /** End time of booking */
    end?: number;
    /** Zone to check available */
    zone_id?: string;
    /** List of features that the asset should associate */
    features?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class BookingStateService extends BaseClass {
    private _view = new BehaviorSubject<BookingFlowView>('form');
    private _options = new BehaviorSubject<BookingFlowOptions>({ type: 'desk' });
    private _form = new BehaviorSubject<FormGroup>(null);
    private _booking = new BehaviorSubject<Booking>(null);
    private _loading = new BehaviorSubject<string>('');

    public last_success: Booking = new Booking(
        JSON.parse(sessionStorage.getItem('PLACEOS.last_booked_booking') || '{}')
    );
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.pipe(shareReplay(1));

    public get view() {
        return this._view.getValue();
    }

    public get form() {
        return this._form.getValue();
    }

    public get booking() {
        return this._booking.getValue();
    }

    public newForm(booking: Booking = new Booking()) {
        this._form.next(generateBookingForm(booking));
        this.subscription(
            'form_change',
            this._form.getValue().valueChanges.subscribe(() => this.storeForm())
        );
        this._booking.next(booking);
        this._options.next({ type: this._options.getValue().type });
    }


    constructor(private _router: Router) {
        super();
        this.subscription(
            'router.bookings',
            this._router.events.subscribe((booking: Event) => {
                if (
                    booking instanceof NavigationEnd &&
                    !BOOKING_URLS.find((_) => booking.url.includes(_))
                ) {
                    this.clearForm();
                }
            })
        );
    }

    public setView(value: BookingFlowView) {
        this._view.next(value);
    }

    public setOptions(value: Partial<BookingFlowOptions>) {
        this._options.next({ ...this._options.getValue(), ...value });
    }

    public resetForm() {
        if (!this._form.getValue()) this.newForm();
        const booking = this._booking.getValue();
        this._form
            .getValue()
            .patchValue({ ...(booking || {}), ...(booking?.extension_data || {}) });
        this._options.next({ type: this._options.getValue().type });
    }

    public clearForm() {
        sessionStorage.removeItem('PLACEOS.booking_form');
        this.newForm();
    }

    public storeForm() {
        sessionStorage.setItem(
            'PLACEOS.booking_form',
            JSON.stringify(this._form.getValue()?.value || {})
        );
    }

    public loadForm() {
        if (!this._form.getValue()) this.newForm();
        this._form.getValue().patchValue({
            ...JSON.parse(sessionStorage.getItem('PLACEOS.booking_form') || '{}'),
        });
    }

    public async postForm() {
        const form = this._form.getValue();
        if (!form) throw 'No form for booking';
        if (!form.valid)
            throw `Some form fields are invalid. [${getInvalidFields(form).join(
                ', '
            )}]`;
        const spaces = form.get('resources')?.value || [];
        const space_list = spaces.length
            ? await queryBookings({
                  period_start: getUnixTime(form.get('date').value),
                  period_end: getUnixTime(
                      form.get('date').value +
                          form.get('duration').value * 60 * 1000
                  ),
                  type: this._options.getValue().type
              }).toPromise()
            : [];
        if (space_list.length !== spaces.length)
            throw `${
                spaces.length - space_list.length
            } space(s) are not available at the selected time`;
        const result = await saveBooking(new Booking(this._form.getValue().value)).toPromise();
        this.clearForm();
        this.last_success = result;
        sessionStorage.setItem('PLACEOS.last_booked_booking', JSON.stringify(result));
        this.setView('success');
        return result;
    }
}
