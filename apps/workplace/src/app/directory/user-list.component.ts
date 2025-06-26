import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';

import { AsyncHandler, SettingsService } from '@placeos/common';
import { searchStaff, User } from '@placeos/users';

const LETTERS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('');

@Component({
    selector: '[a-directory-user-list]',
    template: `
        <topbar />
        <div class="flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <div
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <div class="flex w-full items-center justify-center p-2">
                    <mat-form-field
                        overlay
                        class="rounded"
                        appearance="outline"
                    >
                        <icon class="text-xl" matPrefix>search</icon>
                        <input
                            matInput
                            [ngModel]="search$.getValue()"
                            (ngModelChange)="search$.next($event)"
                            placeholder="Search for a person..."
                        />
                        @if (loading) {
                            <mat-spinner
                                matSuffix
                                class="top-2"
                                [diameter]="32"
                            ></mat-spinner>
                        }
                    </mat-form-field>
                </div>
                <main class="h-1/2 w-full flex-1">
                    @let user_list = search_results$ | async;
                    @let grouped_users = grouped_results$ | async;
                    @if (user_list.length) {
                        @for (letter of letters; track letter) {
                            @if (grouped_users[letter]?.length) {
                                <div class="px-4 py-2 font-medium">
                                    {{ letter }}
                                </div>
                                @for (
                                    user of grouped_users[letter];
                                    track user
                                ) {
                                    <div
                                        user
                                        class="mb-2 flex flex-wrap items-center overflow-hidden bg-base-100 p-4 hover:bg-base-200 sm:space-x-4"
                                        [class.with-image]="show_image"
                                    >
                                        @if (show_image) {
                                            <a-user-avatar
                                                [user]="user"
                                            ></a-user-avatar>
                                        }
                                        <div
                                            class="ml-4 flex w-1/2 flex-1 flex-col sm:ml-0"
                                        >
                                            <div class="name">
                                                {{ user.name }}
                                            </div>
                                            <a
                                                class="text-sm underline"
                                                name="email"
                                                [href]="
                                                    'mailto:' + user.email
                                                        | safe: 'url'
                                                "
                                            >
                                                {{ user.email }}
                                            </a>
                                        </div>
                                        <div
                                            class="mt-4 flex w-full items-center space-x-2 sm:mt-0 sm:w-auto sm:flex-col sm:space-x-0 sm:space-y-2"
                                        >
                                            <a
                                                btn
                                                matRipple
                                                class="w-32 flex-1 sm:flex-none"
                                                [routerLink]="['/explore']"
                                                [queryParams]="{
                                                    user: user.email,
                                                }"
                                            >
                                                Locate
                                            </a>
                                            @if (user.phone) {
                                                <a
                                                    btn
                                                    matRipple
                                                    class="sm:flex-nones w-32 flex-1"
                                                    [href]="
                                                        'tel:' + user.phone
                                                            | safe: 'url'
                                                    "
                                                >
                                                    Call
                                                </a>
                                            }
                                        </div>
                                    </div>
                                }
                            }
                        }
                    } @else {
                        @let search_str = search$ | async;
                        <div class="flex flex-col items-center p-8">
                            <icon class="text-5xl">{{
                                search_str?.length >= min_search_length
                                    ? 'close'
                                    : 'arrow_upward'
                            }}</icon>
                            <div class="text">
                                {{
                                    search_str?.length >= min_search_length
                                        ? ' No matches for "' + search_str + '"'
                                        : 'Type above to search for users'
                                }}
                            </div>
                        </div>
                    }
                </main>
            </div>
        </div>
        <footer-menu />
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background: #f0f0f0;
            }

            mat-form-field {
                width: 48rem;
                max-width: calc(100% - 2rem);
            }
        `,
    ],
    standalone: false,
})
export class DirectoryUserListComponent extends AsyncHandler {
    private _settings = inject(SettingsService);

    /** Whether space list is being filtered */
    public loading: boolean;
    /** Whether to show menu */
    public show_menu: boolean;
    /** List of values to group users by */
    public readonly letters = LETTERS;
    /** Subject holding the value of the search */
    public readonly search$ = new BehaviorSubject<string>('');
    /** List of users from an API search */
    public readonly search_results$: Observable<User[]> = this.search$.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((query) => {
            this.loading = true;
            return query.length >= this.min_search_length
                ? searchStaff(query).pipe(catchError(() => of([])))
                : of([]);
        }),
        tap((l) => {
            console.log('Results:', l);
            this.loading = false;
        }),
        startWith([]),
        shareReplay(1),
    );
    /** List of user search results groups by first letter */
    public readonly grouped_results$ = this.search_results$.pipe(
        map((list) => this.buildGroups(list)),
    );

    /** Minimum length of the search string needed to initial a search */
    public get min_search_length(): number {
        const length = this._settings.get('app.users.min_search_length');
        return typeof length === 'number' && length >= 0 ? length : 3;
    }

    public get show_image() {
        return this._settings.get('app.users.show_avatars');
    }

    private buildGroups(users: User[]) {
        const grouped_users: Record<string, User[]> = {};
        const sorted = users.sort((a, b) => a.name.localeCompare(b.name));
        for (const letter of this.letters) {
            grouped_users[letter] = sorted.filter((f) =>
                f.name.startsWith(letter),
            );
        }
        return grouped_users;
    }
}
