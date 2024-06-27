import { Pipe } from '@angular/core';
import { StaffUser, User } from '../../../users/src/lib/user.class';
import { showUser } from '@placeos/ts-client';

const USER_LIST: User[] = [];

const EMPTY_USER = new StaffUser();

@Pipe({
    name: 'placeuser',
})
export class PlaceUserPipe {
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
        user = await showUser(user_id)
            .toPromise()
            .catch(() => null);
        if (user) {
            user = new StaffUser(user);
            USER_LIST.push(user);
            console.log('Place User:', user);
            return user;
        }
        return EMPTY_USER;
    }
}
