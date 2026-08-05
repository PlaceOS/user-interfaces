import { Injectable, computed, resource, signal } from '@angular/core';
import { email, form, required, validate } from '@angular/forms/signals';
import { CalendarEvent, patchSignalModel } from '@placeos/common';
import { checkinEventGuest, showEvent } from '@placeos/events';
import { setToken } from '@placeos/ts-client';
import { showGuest, updateGuest } from '@placeos/users';
import { getUnixTime } from 'date-fns';

export type EnrolmentView = 'event' | 'guest' | 'error' | 'complete';

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
    // Seeded empty: the event resource skips loading while an error is set, so
    // a non-empty default would block the meeting details from ever loading.
    private _error = signal('');
    private _event_id = signal('');
    private _guest_id = signal('');
    private _view = signal<EnrolmentView>('error');

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

    public readonly guest = computed(() => this._guest.value());
    public readonly event = computed(() => this._event.value());

    public readonly loading = this._loading.asReadonly();
    public readonly error = this._error.asReadonly();
    public readonly view = this._view.asReadonly();

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
        if (user && getUnixTime(Date.now()) <= data.exp) {
            this._event_id.set(event_id);
            this._guest_id.set(user.e);
        } else {
            this.setError('link');
        }
    }

    private _checkEvent(event: CalendarEvent) {
        if (!event) this.setError('meeting');
        else if (event.state === 'done') this.setError('link');
        else if (event.status === 'declined') this.setError('cancelled');
        this._loading.set('');
    }
}
