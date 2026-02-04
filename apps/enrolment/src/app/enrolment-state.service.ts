import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Booking, CalendarEvent, nextValueFrom } from '@placeos/common';
import { checkinEventGuest, showEvent } from '@placeos/events';
import { checkinBooking, showBooking, updateBooking } from '@placeos/bookings';
import { setToken } from '@placeos/ts-client';
import { showGuest, updateGuest } from '@placeos/users';
import { getUnixTime } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, filter, shareReplay, switchMap, tap } from 'rxjs/operators';

export type EnrolmentView = 'event' | 'guest' | 'vip-guest' | 'error' | 'complete';

export interface VipGuestData {
    vip_title: string;
    vip_full_name: string;
    vip_contact_number: string;
    assistant_name: string;
    assistant_contact_number: string;
    protocol_officer_name: string;
    protocol_officer_contact_number: string;
    vehicle_plate_number: string;
    vehicle_plate_type: string;
    beverage_preference: 'none' | 'standard' | 'custom';
    beverage_notes: string;
}

export function parseJWT(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(''),
    );
    return JSON.parse(jsonPayload);
}

@Injectable({
    providedIn: 'root',
})
export class EnrolmentStateService {
    private _loading = new BehaviorSubject('Loading your details...');
    private _error = new BehaviorSubject('link');
    private _event_id = new BehaviorSubject('');
    private _guest_id = new BehaviorSubject('');
    private _booking_id = new BehaviorSubject('');
    private _view = new BehaviorSubject<EnrolmentView>('error');
    private _is_vip = new BehaviorSubject(false);

    public readonly guest = this._guest_id.pipe(
        filter((id) => !!id),
        switchMap((id) => {
            this._loading.next('Loading your details...');
            return showGuest(id);
        }),
        tap((guest) => {
            if (!guest) this.setError('guest');
            else this.form.patchValue({ ...guest });
        }),
        shareReplay(1),
    );
    public readonly event = combineLatest([
        this._event_id,
        this.guest,
        this._error,
    ]).pipe(
        filter(([id, _, err]) => !!_ && !!id && !err),
        switchMap(([id]) => {
            this._loading.next('Loading your meeting details...');
            return showEvent(id);
        }),
        tap((e) => this._checkEvent(e)),
        shareReplay(1),
    );

    public readonly vip_booking = this._booking_id.pipe(
        filter((id) => !!id),
        switchMap((id) => {
            this._loading.next('Loading your VIP details...');
            return showBooking(id).pipe(
                catchError(() => {
                    this.setError('booking');
                    return of(null);
                }),
            );
        }),
        tap((booking) => {
            if (!booking) {
                this.setError('booking');
            } else {
                this._checkVipBooking(booking);
            }
        }),
        shareReplay(1),
    );

    public readonly form = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        organisation: new FormControl('', Validators.required),
        phone: new FormControl(''),
        assistance_required: new FormControl(false),
        preferred_beverage: new FormControl(''),
        attachments: new FormControl([]),
        vaccination_proof: new FormControl(),
        accepted_terms_conditions: new FormControl(
            false,
            Validators.requiredTrue,
        ),
    });

    public readonly vip_form = new FormGroup({
        vip_title: new FormControl(''),
        vip_full_name: new FormControl(''),
        vip_contact_number: new FormControl(''),
        assistant_name: new FormControl(''),
        assistant_contact_number: new FormControl(''),
        protocol_officer_name: new FormControl(''),
        protocol_officer_contact_number: new FormControl(''),
        vehicle_plate_number: new FormControl(''),
        vehicle_plate_type: new FormControl(''),
        beverage_preference: new FormControl<'none' | 'standard' | 'custom'>(
            'none',
        ),
        beverage_notes: new FormControl(''),
    });

    public readonly loading = this._loading.asObservable();
    public readonly error = this._error.asObservable();
    public readonly view = this._view.asObservable();
    public readonly is_vip = this._is_vip.asObservable();

    constructor() {
        this.guest.subscribe();
        this.event.subscribe();
        this.vip_booking.subscribe();
    }

    public setView(value: EnrolmentView) {
        this._view.next(value);
    }

    public setError(error_name: string) {
        this._error.next(error_name);
        this._view.next('error');
        this._loading.next('');
    }

    public async checkin() {
        if (this.form.dirty) await this.updateGuest();
        this._loading.next('Checking you in...');
        await checkinEventGuest(
            this._event_id.getValue(),
            this._guest_id.getValue(),
            true,
        ).toPromise();
        this._view.next('complete');
        this._loading.next('');
    }

    public async updateGuest() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this._loading.next('Updating your details...');
        const details = await nextValueFrom(this.guest);
        await updateGuest(details.id, { ...details, ...this.form.value });
        this._loading.next('');
    }

    public handleUserToken(token: string) {
        setToken(token);
        const data = parseJWT(token);
        const user = data.u;
        const [event_id] = user.r;

        // Check if this is a VIP booking token
        const booking_id = user.b || data.booking_id;

        if (user && getUnixTime(Date.now()) <= data.exp) {
            if (booking_id) {
                // VIP booking flow
                this._is_vip.next(true);
                this._booking_id.next(booking_id);
            } else {
                // Standard event/guest flow
                this._event_id.next(event_id);
                this._guest_id.next(user.e);
            }
        } else {
            this.setError('link');
        }
    }

    public async updateVipDetails() {
        this.vip_form.markAllAsTouched();
        this._loading.next('Updating your details...');
        const booking = await nextValueFrom(this.vip_booking);
        if (!booking) {
            this._loading.next('');
            return;
        }

        const vip_data = this.vip_form.value;
        const extension_data = {
            ...booking.extension_data,
            vip_title: vip_data.vip_title,
            vip_full_name: vip_data.vip_full_name,
            vip_contact_number: vip_data.vip_contact_number,
            assistant_name: vip_data.assistant_name,
            assistant_contact_number: vip_data.assistant_contact_number,
            protocol_officer_name: vip_data.protocol_officer_name,
            protocol_officer_contact_number:
                vip_data.protocol_officer_contact_number,
            vehicle_plate_number: vip_data.vehicle_plate_number,
            vehicle_plate_type: vip_data.vehicle_plate_type,
            beverage_preference: vip_data.beverage_preference,
            beverage_notes:
                vip_data.beverage_preference === 'custom'
                    ? vip_data.beverage_notes
                    : '',
        };

        await updateBooking(booking.id, { extension_data }).toPromise();
        this._loading.next('');
    }

    public async checkinVip() {
        if (this.vip_form.dirty) await this.updateVipDetails();
        this._loading.next('Checking you in...');
        const booking = await nextValueFrom(this.vip_booking);
        if (!booking) {
            this._loading.next('');
            return;
        }
        await checkinBooking(booking.id, true).toPromise();
        this._view.next('complete');
        this._loading.next('');
    }

    private _checkEvent(event: CalendarEvent) {
        if (!event) this.setError('meeting');
        else if (event.state === 'done') this.setError('link');
        else if (event.status === 'declined') this.setError('cancelled');
        this._loading.next('');
    }

    private _checkVipBooking(booking: Booking) {
        if (!booking) {
            this.setError('booking');
            return;
        }

        if (booking.checked_out_at) {
            this.setError('checked_out');
            return;
        }

        if (booking.status === 'declined' || booking.rejected) {
            this.setError('cancelled');
            return;
        }

        // Populate VIP form with existing data from booking
        const ext = booking.extension_data || {};
        this.vip_form.patchValue({
            vip_title: ext.vip_title || '',
            vip_full_name: ext.vip_full_name || booking.asset_name || '',
            vip_contact_number: ext.vip_contact_number || ext.phone || '',
            assistant_name: ext.assistant_name || ext.vip_assistant_name || '',
            assistant_contact_number:
                ext.assistant_contact_number || ext.vip_assistant_email || '',
            protocol_officer_name: ext.protocol_officer_name || '',
            protocol_officer_contact_number:
                ext.protocol_officer_contact_number || '',
            vehicle_plate_number: ext.vehicle_plate_number || '',
            vehicle_plate_type: ext.vehicle_plate_type || '',
            beverage_preference: ext.beverage_preference ||
                ext.welcome_beverage || 'none',
            beverage_notes:
                ext.beverage_notes || ext.welcome_beverage_custom || '',
        });

        this._view.next('vip-guest');
        this._loading.next('');
    }
}
