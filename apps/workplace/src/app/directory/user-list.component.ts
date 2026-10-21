import { Component, computed, effect, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { AsyncHandler, SettingsService, User } from '@placeos/common';
import {
    IconComponent,
    SafePipe,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { searchStaff } from '@placeos/users';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { VirtualConciergeButtonComponent } from '../components/virtual-concierge-button.component';

/** Group for names that do not start with a letter from A to Z */
const OTHER_GROUP = '#';
const LETTERS = [...`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(''), OTHER_GROUP];

/** Group of a name: its first letter without accents, or `#` */
function nameGroup(name: string) {
    const letter = (name || '')
        .trim()
        .charAt(0)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
    return LETTERS.includes(letter) ? letter : OTHER_GROUP;
}

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
                        class="rounded-sm"
                        appearance="outline"
                    >
                        <icon class="text-xl" matPrefix>search</icon>
                        <input
                            matInput
                            [(ngModel)]="search"
                            [placeholder]="
                                'COMMON.SELECT_USER_SEARCH' | translate
                            "
                        />
                        @if (loading()) {
                            <mat-spinner
                                matSuffix
                                class="top-2"
                                [diameter]="32"
                            ></mat-spinner>
                        }
                    </mat-form-field>
                </div>
                <main class="h-1/2 w-full flex-1 overflow-auto">
                    @let user_list = search_results();
                    @let grouped_users = grouped_results();
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
                                        class="bg-base-100 hover:bg-base-200 mb-2 flex flex-wrap items-center overflow-hidden p-4 sm:space-x-4"
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
                                            class="mt-4 flex w-full items-center space-x-2 sm:mt-0 sm:w-auto sm:flex-col sm:space-y-2 sm:space-x-0"
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
                                                {{
                                                    'APP.WORKPLACE.DIRECTORY_LOCATE'
                                                        | translate
                                                }}
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
                                                    {{
                                                        'APP.WORKPLACE.DIRECTORY_CALL'
                                                            | translate
                                                    }}
                                                </a>
                                            }
                                        </div>
                                    </div>
                                }
                            }
                        }
                    } @else if (failed()) {
                        <div
                            role="alert"
                            class="flex flex-col items-center space-y-4 p-8 text-center"
                        >
                            <icon class="text-5xl">error</icon>
                            <div>{{ 'COMMON.LOAD_ERROR' | translate }}</div>
                            <button btn (click)="retry()">
                                {{ 'COMMON.RETRY' | translate }}
                            </button>
                        </div>
                    } @else if (!loading()) {
                        @let search_str = search();
                        <div class="flex flex-col items-center p-8">
                            <icon class="text-5xl">{{
                                search_str?.length >= min_search_length
                                    ? 'close'
                                    : 'arrow_upward'
                            }}</icon>
                            <div class="text">
                                {{
                                    search_str?.length >= min_search_length
                                        ? ('APP.WORKPLACE.COLLEAGUE_SEARCH_NO_MATCH'
                                          | translate: { text: search_str })
                                        : ('APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY'
                                          | translate)
                                }}
                            </div>
                        </div>
                    }
                </main>
            </div>
            <virtual-concierge-button />
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
    imports: [
        CommonModule,
        IconComponent,
        FooterMenuComponent,
        TopbarComponent,
        VirtualConciergeButtonComponent,
        SafePipe,
        UserAvatarComponent,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        FormsModule,
        RouterModule,
        TranslatePipe,
    ],
})
export class DirectoryUserListComponent extends AsyncHandler {
    private _settings = inject(SettingsService);

    /** Whether space list is being filtered */
    public readonly loading = signal(false);
    /** Whether the last search failed */
    public readonly failed = signal(false);
    /** Changed to run the search again */
    private _retry = signal(0);
    /** Whether to show menu */
    public show_menu: boolean;
    /** List of values to group users by */
    public readonly letters = LETTERS;
    /** Subject holding the value of the search */
    public readonly search = signal('');
    /** List of users from an API search */
    public readonly search_results = signal<User[]>([]);
    /** List of user search results groups by first letter */
    public readonly grouped_results = computed(() =>
        this.buildGroups(this.search_results()),
    );

    constructor() {
        super();
        effect((onCleanup) => {
            const query = this.search();
            this._retry();
            const timeout = setTimeout(async () => {
                this.failed.set(false);
                if (query.length < this.min_search_length) {
                    this.search_results.set([]);
                    this.loading.set(false);
                    return;
                }
                this.loading.set(true);
                const list = await searchStaff(query).catch(() => {
                    this.failed.set(true);
                    return [];
                });
                this.search_results.set(list);
                this.loading.set(false);
            }, 400);
            onCleanup(() => clearTimeout(timeout));
        });
    }

    public retry() {
        this._retry.update((count) => count + 1);
    }

    /** Minimum length of the search string needed to initial a search */
    public get min_search_length(): number {
        const length = this._settings.get('app.users.min_search_length');
        return typeof length === 'number' && length >= 0 ? length : 3;
    }

    public get show_image() {
        return this._settings.get('app.users.show_avatars');
    }

    private buildGroups(users: User[]) {
        const grouped_users: Record<string, User[]> = Object.fromEntries(
            LETTERS.map((letter) => [letter, []]),
        );
        const sorted = [...users].sort((a, b) =>
            a.name.localeCompare(b.name),
        );
        for (const user of sorted) {
            grouped_users[nameGroup(user.name)].push(user);
        }
        return grouped_users;
    }
}
