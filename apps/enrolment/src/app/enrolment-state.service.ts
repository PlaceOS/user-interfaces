import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarEvent, checkinEventGuest, showEvent } from '@placeos/events';
import { setToken } from '@placeos/ts-client';
import { showGuest, updateGuest } from '@placeos/users';
import { getUnixTime } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, shareReplay, switchMap, take, tap } from 'rxjs/operators';

export type EnrolmentView = 'event' | 'guest' | 'error' | 'complete';

export function parseJWT(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
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
    private _view = new BehaviorSubject<EnrolmentView>('error');

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
        shareReplay(1)
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
        shareReplay(1)
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
            Validators.requiredTrue
        ),
    });

    public readonly loading = this._loading.asObservable();
    public readonly error = this._error.asObservable();
    public readonly view = this._view.asObservable();

    constructor() {
        this.guest.subscribe();
        this.event.subscribe();
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
            true
        ).toPromise();
        this._view.next('complete');
        this._loading.next('');
    }

    public async updateGuest() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this._loading.next('Updating your details...');
        const details = await this.guest.pipe(take(1)).toPromise();
        await updateGuest(details.id, { ...details, ...this.form.value });
        this._loading.next('');
    }

    public handleUserToken(token: string) {
        setToken(token);
        const data = parseJWT(token);
        const user = data.u;
        const [event_id] = user.r;
        if (user && getUnixTime(Date.now()) <= data.exp) {
            this._event_id.next(event_id);
            this._guest_id.next(user.e);
        } else {
            this.setError('link');
        }
    }

    private _checkEvent(event: CalendarEvent) {
        if (!event) this.setError('meeting');
        else if (event.state === 'done') this.setError('link');
        else if (event.status === 'declined') this.setError('cancelled');
        this._loading.next('');
    }
}
