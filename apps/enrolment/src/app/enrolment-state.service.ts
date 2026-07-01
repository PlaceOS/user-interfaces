import { Injectable, computed, effect, resource, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { email, form, required, validate } from '@angular/forms/signals';
import { checkinBooking, showBooking, updateBooking } from '@placeos/bookings';
import { Booking, CalendarEvent, patchSignalModel } from '@placeos/common';
import { checkinEventGuest, showEvent } from '@placeos/events';
import { setToken } from '@placeos/ts-client';
import { showGuest, updateGuest } from '@placeos/users';
import { getUnixTime } from 'date-fns';

export type EnrolmentView =
    | 'event'
    | 'guest'
    | 'vip-guest'
    | 'error'
    | 'complete';

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

export interface EnrolmentFormValue {
    name: string;
    email: string;
    organisation: string;
    phone: string;
    assistance_required: boolean;
    preferred_beverage: string;
    attachments: any[];
    vaccination_proof: any;
    accepted_terms_conditions: boolean;
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
    private _loading = signal('Loading your details...');
    private _error = signal('link');
    private _event_id = signal('');
    private _guest_id = signal('');
    private _booking_id = signal('');
    private _view = signal<EnrolmentView>('error');
    private _is_vip = signal(false);

    public readonly model = signal<EnrolmentFormValue>({
        name: '',
        email: '',
        organisation: '',
        phone: '',
        assistance_required: false,
        preferred_beverage: '',
        attachments: [],
        vaccination_proof: null,
        accepted_terms_conditions: false,
    });

    public readonly form = form(this.model, (p) => {
        required(p.name);
        required(p.email);
        email(p.email);
        required(p.organisation);
        validate(p.accepted_terms_conditions, ({ value }) =>
            value() ? undefined : { kind: 'required' },
        );
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

    private readonly _guest = resource({
        params: () => this._guest_id() || undefined,
        loader: async ({ params: id }) => {
            this._loading.set('Loading your details...');
            const guest = await showGuest(id);
            if (!guest) this.setError('guest');
            else patchSignalModel(this.model, { ...guest });
            return guest;
        },
    });

    private readonly _event = resource({
        params: () => ({
            id: this._event_id(),
            guest: this._guest.value(),
            error: this._error(),
        }),
        loader: async ({ params }) => {
            if (!params.guest || !params.id || params.error) return undefined;
            this._loading.set('Loading your meeting details...');
            const event = await showEvent(params.id);
            this._checkEvent(event);
            return event;
        },
    });

    private readonly _vip_booking = resource({
        params: () => this._booking_id() || undefined,
        loader: async ({ params: id }) => {
            this._loading.set('Loading your VIP details...');
            return showBooking(id).catch(() => {
                this.setError('booking');
                return null;
            });
        },
    });

    public readonly guest = computed(() => this._guest.value());
    public readonly event = computed(() => this._event.value());
    public readonly vip_booking = computed(() => this._vip_booking.value());

    public readonly loading = this._loading.asReadonly();
    public readonly error = this._error.asReadonly();
    public readonly view = this._view.asReadonly();
    public readonly is_vip = this._is_vip.asReadonly();

    constructor() {
        effect(() => {
            const booking = this._vip_booking.value();
            if (booking) this._checkVipBooking(booking);
        });
    }

    public setView(value: EnrolmentView) {
        this._view.set(value);
    }

    public setError(error_name: string) {
        this._error.set(error_name);
        this._view.set('error');
        this._loading.set('');
    }

    public async checkin() {
        if (this.form().dirty()) await this.updateGuest();
        this._loading.set('Checking you in...');
        await checkinEventGuest(this._event_id(), this._guest_id(), true);
        this._view.set('complete');
        this._loading.set('');
    }

    public async updateGuest() {
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this._loading.set('Updating your details...');
        const details = this._guest.value();
        await updateGuest(details.id, { ...details, ...this.model() });
        this._loading.set('');
    }

    public handleUserToken(token: string) {
        setToken(token);
        const data = parseJWT(token);
        const user = data.u;
        const [event_id] = user.r;
        const booking_id = user.b || data.booking_id;
        if (user && getUnixTime(Date.now()) <= data.exp) {
            if (booking_id) {
                this._is_vip.set(true);
                this._booking_id.set(booking_id);
            } else {
                this._event_id.set(event_id);
                this._guest_id.set(user.e);
            }
        } else {
            this.setError('link');
        }
    }

    public async updateVipDetails() {
        this.vip_form.markAllAsTouched();
        this._loading.set('Updating your details...');
        const booking = this._vip_booking.value();
        if (!booking) {
            this._loading.set('');
            return;
        }
        const vip_data = this.vip_form.value;
        await updateBooking(booking.id, {
            extension_data: {
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
            },
        });
        this._loading.set('');
    }

    public async checkinVip() {
        if (this.vip_form.dirty) await this.updateVipDetails();
        this._loading.set('Checking you in...');
        const booking = this._vip_booking.value();
        if (!booking) {
            this._loading.set('');
            return;
        }
        await checkinBooking(booking.id, true);
        this._view.set('complete');
        this._loading.set('');
    }

    private _checkEvent(event: CalendarEvent) {
        if (!event) this.setError('meeting');
        else if (event.state === 'done') this.setError('link');
        else if (event.status === 'declined') this.setError('cancelled');
        this._loading.set('');
    }

    private _checkVipBooking(booking: Booking) {
        if (!booking) return this.setError('booking');
        if (booking.checked_out_at) return this.setError('checked_out');
        if (booking.status === 'declined' || booking.rejected) {
            return this.setError('cancelled');
        }
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
            beverage_preference:
                ext.beverage_preference || ext.welcome_beverage || 'none',
            beverage_notes:
                ext.beverage_notes || ext.welcome_beverage_custom || '',
        });
        this._view.set('vip-guest');
        this._loading.set('');
    }
}
