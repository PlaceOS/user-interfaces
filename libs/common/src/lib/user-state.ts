
import { showUser } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { delay, map, retry, shareReplay } from 'rxjs/operators';

import { StaffUser } from '../../../users/src/lib/user.class';

const _current_user = new BehaviorSubject<StaffUser>(null);

/** Observable for the currently logged in user */
export const current_user = showUser('current').pipe(
    delay(1000),
    retry(10),
    map((i) => {
        const user = new StaffUser(i);
        _current_user.next(user);
        return user;
    }),
    shareReplay()
);

/** Get the current user details */
export function currentUser() {
    return _current_user.getValue();
}
