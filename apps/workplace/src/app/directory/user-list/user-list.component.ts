import { Component, OnInit} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { BaseClass, SettingsService } from '@user-interfaces/common';
import { StaffService, User } from '@user-interfaces/users';

const LETTERS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('');

@Component({
    selector: 'a-directory-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class DirectoryUserListComponent extends BaseClass implements OnInit {
    /** List of controllable spaces */
    public user_list: User[] = [];
    /** String  */
    public search_str: string;
    /** List of users from an API search */
    public search_results$: Observable<User[]>;
    /** Whether space list is being filtered */
    public loading: boolean;
    /** Subject holding the value of the search */
    public readonly search$ = new Subject<string>();
    /** Whether to show menu */
    public show_menu: boolean;

    public groupedUsers: { [id: string]: User[] } = {};

    /** Minimum length of the search string needed to initial a search */
    public get min_search_length(): number {
        const length = this._settings.get('app.directory.min_search_length');
        return typeof length === 'number' && length >= 0 ? length : 3;
    }

    constructor(private _settings: SettingsService, private _users: StaffService) {
        super();
    }

    public ngOnInit(): void {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap((query) => {
                this.loading = true;
                const retVal =
                    query.length >= this.min_search_length
                        ? this._users.query({ q: query }).catch(() => [])
                        : Promise.resolve(this.user_list || []);
                return retVal;
            }),
            map((list: User[]) => {
                this.loading = false;
                return list;
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => {
                this.user_list = list;
                this.buildGroups(this.user_list);
            })
        );
        this.search$.next('');
    }

    public get letters(): string[] {
        return LETTERS;
    }

    private buildGroups(users: User[]) {
        const sorted = users.sort((a, b) => a.name.localeCompare(b.name));
        for (const letter of this.letters) {
            this.groupedUsers[letter] = sorted.filter((f) => f.name.startsWith(letter));
        }
    }
}
