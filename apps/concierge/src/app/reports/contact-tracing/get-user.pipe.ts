import { Pipe, PipeTransform } from '@angular/core';
import { StaffUser } from '@placeos/common';
import { searchStaff } from '@placeos/users';

const USER_LIST: Record<string, Promise<StaffUser>> = {};

@Pipe({
    name: 'user',
})
export class GetUserPipe implements PipeTransform {
    /**
     * Get staff memeber details
     * @param id ID, Email or Staff ID of the user
     */
    public transform(id: string): Promise<StaffUser> {
        if (!id) return Promise.resolve(null);
        if (!USER_LIST[id]) {
            USER_LIST[id] = searchStaff(id)
                .then((_) => _[0] || new StaffUser({ id, name: id }))
                .catch(() => new StaffUser({ id, name: id }));
        }
        return USER_LIST[id];
    }

    public static addUser(user: StaffUser) {
        USER_LIST[user.id] = Promise.resolve(user);
    }
}
