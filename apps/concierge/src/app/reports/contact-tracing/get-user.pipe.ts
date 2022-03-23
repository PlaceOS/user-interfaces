import { Pipe, PipeTransform } from '@angular/core';
import { searchStaff, StaffUser } from '@placeos/users';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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
        if (!USER_LIST[id]) {
            USER_LIST[id] = searchStaff(id).pipe(
                map((_) => _[0] || new StaffUser({ id, name: id })),
                shareReplay(1)
            );
        }
        return USER_LIST[id];
    }
}
