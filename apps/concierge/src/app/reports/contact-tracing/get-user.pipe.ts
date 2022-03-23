import { Pipe, PipeTransform } from '@angular/core';
import { searchStaff, StaffUser } from '@placeos/users';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

const USER_LIST = {};

@Pipe({
    name: 'user',
})
export class GetUserPipe implements PipeTransform {
    /**
     * Get staff memeber details
     * @param id ID, Email or Staff ID of the user
     */
    public transform(id: string): Observable<StaffUser> {
        if (!id) return of(null);
        if (!USER_LIST[id]) {
            USER_LIST[id] = searchStaff(id).pipe(
                map((_) => _[0] || new StaffUser({ id, name: id })),
                catchError(_ => of(new StaffUser({ id, name: id }))),
                shareReplay(1)
            );
        }
        return USER_LIST[id];
    }

    public static addUser(user: StaffUser) {
        USER_LIST[user.id] = of(user).pipe(shareReplay(1));
    }
}
