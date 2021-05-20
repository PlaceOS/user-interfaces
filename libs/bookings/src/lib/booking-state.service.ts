import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Booking } from './booking.class';

export type BookingFlowView = 'form';

export interface BookingFlowOptions {
    /** Type of booking being made */
    type?: 'desk' | 'parking';
    /** Start time of booking */
    start?: number;
    /** End time of booking */
    end?: number;
    /** Zone to check available */
    zone_id?: string;
}

@Injectable({
    providedIn: 'root',
})
export class BookingStateService {
    private _view = new BehaviorSubject<BookingFlowView>('form');
    private _options = new BehaviorSubject<BookingFlowOptions>({});
    private _form = new BehaviorSubject<FormGroup>(null);
    private _booking = new BehaviorSubject<Booking>(null);

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
        this._booking.next(booking);
        this._options.next({});
    }

    public resetForm() {
        if (!this._form.getValue()) this.newForm();
        const booking = this._booking.getValue() || ({} as any);
        this._form
            .getValue()
            .patchValue({ ...booking, ...booking.extension_data });
    }

    public clearForm() {
        this.newForm();
    }

    public storeForm() {
        localStorage.setItem(
            'PLACEOS.booking_form',
            JSON.stringify(this._form.getValue()?.value || {})
        );
    }

    public loadForm() {
        if (!this._form.getValue()) this.newForm();
        this._form.getValue().patchValue({
            ...JSON.parse(localStorage.getItem('PLACEOS.booking_form') || '{}'),
        });
    }
}
