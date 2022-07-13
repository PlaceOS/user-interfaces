import { showUser } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { delay, map, retry } from 'rxjs/operators';

import { StaffUser } from '../../../users/src/lib/user.class';

const EMPTY_USER = new StaffUser();

const _current_user = new BehaviorSubject<StaffUser>(null);

export const current_user = _current_user.asObservable();

declare let jest;

setTimeout(() => {
    try {
        if (jest) return;
    } catch {}
    showUser('current')
        .pipe(
            delay(1000),
            retry(10),
            map((i) => new StaffUser(i))
        )
        .subscribe((user) => _current_user.next(user));
}, 300);

/** Get the current user details */
export function currentUser() {
    return _current_user.getValue() || EMPTY_USER;
}
