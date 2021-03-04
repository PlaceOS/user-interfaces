import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {
    switchMap,
    debounceTime,
    distinctUntilChanged,
    map,
} from 'rxjs/operators';

import { BaseClass, SettingsService } from '@user-interfaces/common';
import { searchStaff, User } from '@user-interfaces/users';
import { clearEventFormState } from '../bookings/space-flow/space-flow.service';

const LETTERS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('');

@Component({
    selector: 'a-directory-user-list',
    template: `
        <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        <div class="w-full flex items-center justify-center p-2">
            <a-searchbar
                [(value)]="search_str"
                (valueChange)="search$.next($event)"
                [loading]="loading"
                [autofocus]="true"
                placeholder="Search for a person..."
            ></a-searchbar>
        </div>
        <main class="flex-1 h-1/2 w-full">
            <ng-container
                *ngIf="groupedUsers && user_list.length; else empty_state"
            >
                <ng-container *ngFor="let letter of letters">
                    <ng-container *ngIf="groupedUsers[letter].length">
                        <div class="py-2 px-4 font-medium">{{ letter }}</div>
                        <a-directory-user-list-item
                            *ngFor="let user of groupedUsers[letter]"
                            [user]="user"
                        ></a-directory-user-list-item>
                    </ng-container>
                </ng-container>
            </ng-container>
        </main>
        <a-footer-menu></a-footer-menu>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8">
                <app-icon class="text-5xl">{{
                    search_str && search_str.length >= min_search_length
                        ? 'close'
                        : 'arrow_upward'
                }}</app-icon>
                <div class="text">
                    {{
                        search_str && search_str.length >= min_search_length
                            ? ' No matches for "' + search_str + '"'
                            : 'Type above to search for users'
                    }}
                </div>
            </div>
        </ng-template>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
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

    constructor(
        private _settings: SettingsService
    ) {
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
                        ? searchStaff(query)
                              .toPromise()
                              .catch(() => [])
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
        clearEventFormState();
    }

    public get letters(): string[] {
        return LETTERS;
    }

    private buildGroups(users: User[]) {
        const sorted = users.sort((a, b) => a.name.localeCompare(b.name));
        for (const letter of this.letters) {
            this.groupedUsers[letter] = sorted.filter((f) =>
                f.name.startsWith(letter)
            );
        }
    }
}
