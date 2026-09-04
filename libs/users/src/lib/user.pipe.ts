import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@placeos/common';

import { showGuest } from './guests.fn';
import { searchStaffByEmailPrefix, showStaff } from './staff.fn';

const USER_LIST: User[] = [];
const INFLIGHT_REQUESTS: Map<string, Promise<User>> = new Map();

const EMPTY_USER: User = {} as any;

type UserLookupMode = 'exact' | 'email-prefix';

export function addUser(user: User): void {
    USER_LIST.push(user);
}

export function replaceUser(user: User): void {
    const index = USER_LIST.findIndex(({ id }) => id === user.id);
    if (index !== -1) USER_LIST[index] = user;
    else USER_LIST.push(user);
}

async function fetchUser(
    user_id: string,
    lookup_mode: UserLookupMode,
): Promise<User> {
    if (lookup_mode === 'email-prefix') {
        const email_prefix = user_id.split('@')[0];
        const [staff] = await searchStaffByEmailPrefix(email_prefix).catch(
            () => [],
        );
        return staff
            ? new User({ name: staff.name, email: user_id })
            : EMPTY_USER;
    }
    let user = await showStaff(user_id).catch(() => null);
    if (user) {
        USER_LIST.push(user);
        return user;
    }
    user = await showGuest(user_id).catch(() => null);
    if (user) {
        USER_LIST.push(user);
        return user;
    }
    return EMPTY_USER;
}

@Pipe({
    name: 'user',
})
export class UserPipe implements PipeTransform {
    /**
     * Get details of the user with the given ID
     * @param user_id ID or Email of the user
     * @param lookup_mode Whether to match the full ID or an email prefix
     */
    public async transform(
        user_id: string,
        lookup_mode: UserLookupMode = 'exact',
    ): Promise<User> {
        if (!user_id) return EMPTY_USER;
        if (lookup_mode === 'exact') {
            const user = USER_LIST.find(
                ({ id, email }) => id === user_id || email === user_id,
            );
            if (user) return user;
        }
        const lookup_key = `${lookup_mode}:${user_id}`;
        const existing = INFLIGHT_REQUESTS.get(lookup_key);
        if (existing) return existing;
        const request = fetchUser(user_id, lookup_mode).finally(() =>
            INFLIGHT_REQUESTS.delete(lookup_key),
        );
        INFLIGHT_REQUESTS.set(lookup_key, request);
        return request;
    }
}
