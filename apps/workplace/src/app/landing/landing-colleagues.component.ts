import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    ElementRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    i18n,
    notifySuccess,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import {
    IconComponent,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-colleagues',
    template: `
        <div
            class="bg-base-200 mx-2 flex items-center justify-between rounded-sm p-2 text-sm"
        >
            <h2>
                {{
                    'APP.WORKPLACE.COLLEAGUES_COUNT'
                        | translate: { count: contacts().length || 0 }
                }}
            </h2>
        </div>
        <div class="h-1/2 w-full flex-1 space-y-4 overflow-auto pt-4">
            @if (contacts().length) {
                @for (user of contacts(); track user) {
                    <div class="relative flex items-center space-x-2 px-2" user>
                        <div class="relative text-xl">
                            <a-user-avatar [user]="user"></a-user-avatar>
                            @if (!user.outsideHours?.()) {
                                <div
                                    class="absolute right-1 bottom-1 h-3 w-3 rounded-full border border-white"
                                    [class.bg-error]="
                                        user.location === 'aol' ||
                                        user.location === 'ooo'
                                    "
                                    [class.bg-success]="user.location === 'wfo'"
                                    [class.bg-warning]="user.location === 'wfh'"
                                    [class.bg-neutral]="!user.location"
                                    [matTooltip]="user.location_name"
                                ></div>
                            }
                        </div>
                        <div class="w-1/2 flex-1 leading-tight">
                            <div class="truncate" [matTooltip]="user.name">
                                {{ user.name }}
                            </div>
                            <div
                                class="truncate text-sm"
                                [matTooltip]="user.organisation"
                            >
                                {{ user.organisation }}
                            </div>
                            <div class="truncate text-xs opacity-60">
                                {{ user.location_name }}
                            </div>
                        </div>
                        <button
                            icon
                            default
                            name="colleague-more"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>more_horiz</icon>
                        </button>
                        <mat-menu #menu="matMenu" xPosition="before">
                            <button
                                mat-menu-item
                                name="meeting-with-colleague"
                                (click)="newMeeting(user)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">today</icon>
                                    <div>
                                        {{
                                            'APP.WORKPLACE.COLLEAGUE_NEW_MEETING'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                name="remove-colleague"
                                mat-menu-item
                                (click)="removeUser(user)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">cancel</icon>
                                    <div>
                                        {{
                                            'APP.WORKPLACE.COLLEAGUE_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                }
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
                >
                    <img src="assets/icons/no-contacts.svg" />
                    <p class="text-center text-sm opacity-60">
                        {{ 'APP.WORKPLACE.COLLEAGUES_EMPTY' | translate }}
                    </p>
                </div>
            }
        </div>
        <button
            btn
            name="open-colleague-search"
            matRipple
            class="inverse m-2 w-[calc(100%-1rem)]"
            (click)="openSearch()"
        >
            {{ 'APP.WORKPLACE.COLLEAGUE_ADD' | translate }}
        </button>
        <div
            search
            [class.hidden]="!show_search()"
            class="border-base-200 bg-base-100 absolute inset-x-2 top-2 bottom-16 flex flex-col overflow-hidden rounded-sm border"
        >
            <input
                #search_input
                [ngModel]="options().search"
                (ngModelChange)="updateSearch($event)"
                [placeholder]="'FORM.USER_SEARCH' | translate"
                class="border-base-200 w-full border-b p-2"
            />
            <button
                icon
                name="close-colleague-search"
                class="absolute top-0 right-0"
                (click)="show_search.set(false)"
            >
                <icon>close</icon>
            </button>
            @if (!loading()) {
                <div class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto">
                    @if (search_results().length) {
                        @for (user of search_results(); track user) {
                            <button
                                matRipple
                                name="add-colleague"
                                class="flex min-h-12 w-full items-center space-x-2 p-1 text-left"
                                (click)="addUser(user)"
                            >
                                <div class="relative text-base">
                                    <a-user-avatar
                                        [user]="user"
                                    ></a-user-avatar>
                                    <!-- <div
                      class="rounded-full h-3 w-3 border border-white absolute bottom-1 right-1"
                      [class.bg-error]="!user.location"
                      [class.bg-success]="user.location"
                    ></div> -->
                                </div>
                                <div class="flex-1 leading-tight">
                                    <div class="truncate">{{ user.name }}</div>
                                    <div class="truncate text-xs opacity-60">
                                        {{ user.organisation || user.email }}
                                    </div>
                                </div>
                            </button>
                        }
                    } @else {
                        <div
                            class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
                        >
                            <p class="text-center text-sm opacity-60">
                                {{
                                    !options().search
                                        ? ('COMMON.SELECT_USER_EMPTY'
                                          | translate)
                                        : ('COMMON.SELECT_USER_EMPTY'
                                          | translate
                                              : {
                                                    text: options().search,
                                                })
                                }}
                            </p>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p class="text-center text-sm opacity-60">
                        {{
                            'APP.WORKPLACE.COLLEAGUE_SEARCH_LOADING' | translate
                        }}
                    </p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            [user]:hover button {
                opacity: 1;
            }

            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        UserAvatarComponent,
        FormsModule,
        MatMenuModule,
    ],
})
export class LandingColleaguesComponent extends AsyncHandler {
    private _state = inject(LandingStateService);
    private _settings = inject(SettingsService);
    private _event_form = inject(EventFormService);
    private _router = inject(Router);

    public show_search = signal(false);
    public readonly contacts = this._state.contacts;

    public readonly search_results = computed(() =>
        this._state
            .search_results()
            .filter(
                (_) =>
                    !this._state
                        .contacts()
                        .find(
                            (user) =>
                                user.id === _.id || user.email === _.email,
                        ),
            ),
    );

    public readonly options = this._state.options;

    public readonly loading = this._state.loading;

    public readonly addUser = async (u) => {
        await this._state.addContact(u);
        notifySuccess(i18n('APP.WORKPLACE.COLLEAGUE_ADDED', { name: u.name }));
        this.show_search.set(false);
    };

    public readonly removeUser = async (u) => {
        await this._state.removeContact(u);
        notifySuccess(
            i18n('APP.WORKPLACE.COLLEAGUE_REMOVED', { name: u.name }),
        );
    };

    public readonly updateSearch = (s) => this._state.setOptions({ search: s });

    private readonly _input_el =
        viewChild.required<ElementRef<HTMLInputElement>>('search_input');

    public newMeeting(user: StaffUser) {
        this._event_form.newForm();
        setTimeout(() => {
            this._event_form.model.update((m) => ({
                ...m,
                attendees: [user],
            }));
        }, 300);
        if (this._settings.get('app.new_features')) {
            this._router.navigate(['/book', 'meeting']);
        } else {
            this._router.navigate(['/book', 'spaces']);
        }
    }

    public openSearch() {
        this.updateSearch('');
        this.show_search.set(true);
        this.timeout('open', () => this._input_el().nativeElement.focus(), 100);
    }
}
