
import { Pipe, PipeTransform } from '@angular/core';
import { searchStaff, StaffUser } from '@placeos/users';

const USER_LIST: StaffUser[] = [];
const SEARCHING = {};

@Pipe({
    name: 'user',
})
export class GetUserPipe implements PipeTransform {

    /**
     * Get staff memeber details
     * @param id ID, Email or Staff ID of the user
     */
    public async transform(id: string): Promise<StaffUser | null> {
        let user = USER_LIST.find(_ => _.id === id || _.email === id || _.staff_id === id);
        if (!user && !SEARCHING[id]) {
            SEARCHING[id] = true;
            const users = await searchStaff(id).toPromise();
            user = users[0];
            delete SEARCHING[id];
        }
        if (user) USER_LIST.push(user);
        return user;
    }

    public static addUser(user: StaffUser) {
        USER_LIST.push(user);
    }
}

