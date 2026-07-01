import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@placeos/common';

import { showGuest } from './guests.fn';
import { showStaff } from './staff.fn';

const USER_LIST: User[] = [];
const INFLIGHT_REQUESTS: Map<string, Promise<User>> = new Map();

const EMPTY_USER: User = {} as any;

export function addUser(user: User): void {
    USER_LIST.push(user);
}

export function replaceUser(user: User): void {
    const index = USER_LIST.findIndex(({ id }) => id === user.id);
    if (index !== -1) USER_LIST[index] = user;
    else USER_LIST.push(user);
}

async function fetchUser(user_id: string): Promise<User> {
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
     */
    public async transform(user_id: string): Promise<User> {
        if (!user_id) return EMPTY_USER;
        const user = USER_LIST.find(
            ({ id, email }) => id === user_id || email === user_id,
        );
        if (user) return user;
        const existing = INFLIGHT_REQUESTS.get(user_id);
        if (existing) return existing;
        const request = fetchUser(user_id).finally(() =>
            INFLIGHT_REQUESTS.delete(user_id),
        );
        INFLIGHT_REQUESTS.set(user_id, request);
        return request;
    }
}
