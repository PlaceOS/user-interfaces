import { Pipe } from '@angular/core';
import { showGuest } from './guests.fn';
import { showStaff } from './staff.fn';
import { User } from './user.class';

const USER_LIST: User[] = [];

const EMPTY_USER = new User();

@Pipe({
    name: 'user',
})
export class UserPipe {
    /**
     * Get details of the user with the given ID
     * @param user_id ID or Email of the user
     */
    public async transform(user_id: string): Promise<User> {
        if (!user_id) return EMPTY_USER;
        let user = USER_LIST.find(
            ({ id, email }) => id === user_id || email === user_id
        );
        if (user) return user;
        user = await showStaff(user_id)
            .toPromise()
            .catch(() => null);
        if (user) {
            USER_LIST.push(user);
            return user;
        }
        user = await showGuest(user_id)
            .toPromise()
            .catch(() => null);
        if (user) {
            USER_LIST.push(user);
            return user;
        }
        return EMPTY_USER;
    }
}
