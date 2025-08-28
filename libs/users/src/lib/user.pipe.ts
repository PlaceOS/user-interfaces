import { Pipe, PipeTransform } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { showGuest } from './guests.fn';
import { showStaff } from './staff.fn';
import { User } from './user.class';

const USER_LIST: User[] = [];

const EMPTY_USER = new User();

export function addUser(user: User): void {
    USER_LIST.push(user);
}

export function replaceUser(user: User): void {
    const index = USER_LIST.findIndex(({ id }) => id === user.id);
    if (index !== -1) USER_LIST[index] = user;
    else USER_LIST.push(user);
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
        let user = USER_LIST.find(
            ({ id, email }) => id === user_id || email === user_id,
        );
        if (user) return user;
        user = await lastValueFrom(showStaff(user_id)).catch(() => null);
        if (user) {
            USER_LIST.push(user);
            return user;
        }
        user = await lastValueFrom(showGuest(user_id)).catch(() => null);
        if (user) {
            USER_LIST.push(user);
            return user;
        }
        return EMPTY_USER;
    }
}
