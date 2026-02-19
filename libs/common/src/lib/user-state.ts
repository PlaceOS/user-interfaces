import { signal } from '@angular/core';
import { showUser } from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    lastValueFrom,
    of,
    timer,
} from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { StaffUser } from './types/user.class';
import { isPublicMode } from './public-mode';

const EMPTY_USER = {
    name: '<empty>',
    email: '<empty>@dev.place.tech',
} as StaffUser;

const _current_user = new BehaviorSubject<StaffUser>(EMPTY_USER);
const _change = new BehaviorSubject(0);

export const current_user = _current_user.asObservable();
const user_signal = signal(EMPTY_USER);

function setPublicUser() {
    const generic_user = new StaffUser({
        id: 'public-user',
        name: 'Public User',
        email: 'public.user@placeos.example',
    });
    _current_user.next(generic_user);
    user_signal.set(generic_user);
    return generic_user;
}

declare let jest;

setTimeout(() => {
    try {
        if (jest) return;
    } catch {}
    const is_public_mode = isPublicMode();
    const user_request = combineLatest([showUser('current'), _change]).pipe(
        map(([i]) => new StaffUser(i)),
    );
    if (is_public_mode) {
        user_request
            .pipe(
                tap((u) => user_signal.set(u)),
                catchError((error) => {
                    console.warn(
                        'User loading failed in public mode, using local public user data.',
                        error,
                    );
                    return of(setPublicUser());
                }),
            )
            .subscribe((user) => _current_user.next(user));
        return;
    }
    user_request
        .pipe(
            retry({
                count: 10,
                delay: (error, count) => {
                    const delay_ms = Math.min(
                        1000 * Math.pow(2, count),
                        30000,
                    );
                    console.warn(
                        `User loading failed, retrying in ${delay_ms}ms (attempt ${count}/10)`,
                        error,
                    );
                    return timer(delay_ms);
                },
            }),
            tap((u) => user_signal.set(u)),
        )
        .subscribe((user) => _current_user.next(user));
}, 300);

export function reloadUserData() {
    setTimeout(async () => {
        try {
            const p_user = await lastValueFrom(showUser('current'));
            const user = new StaffUser(p_user);
            _current_user.next(user);
            user_signal.set(user);
        } catch (error) {
            if (isPublicMode()) {
                console.warn(
                    'User reload failed in public mode, using local public user data.',
                    error,
                );
                setPublicUser();
                return;
            }
            throw error;
        }
    }, 300);
}

/** Get the current user details */
export function currentUser() {
    return _current_user.getValue() || EMPTY_USER;
}

export function userSignal() {
    return user_signal;
}
