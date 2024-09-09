import { showUser } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { delay, map, retry } from 'rxjs/operators';

import { StaffUser } from '../../../users/src/lib/user.class';

const EMPTY_USER = new StaffUser();

const _current_user = new BehaviorSubject<StaffUser>(null);
const _change = new BehaviorSubject(0);

export const current_user = _current_user.asObservable();

declare let jest;

setTimeout(() => {
    try {
        if (jest) return;
    } catch {}
    combineLatest([showUser('current'), _change])
        .pipe(
            delay(1000),
            retry(10),
            map(([i]) => new StaffUser(i as any)),
        )
        .subscribe((user) => _current_user.next(user));
}, 300);

export function reloadUserData() {
    setTimeout(async () => {
        const user = await showUser('current').toPromise();
        _current_user.next(new StaffUser(user as any));
    }, 300);
}

/** Get the current user details */
export function currentUser() {
    return _current_user.getValue() || EMPTY_USER;
}
