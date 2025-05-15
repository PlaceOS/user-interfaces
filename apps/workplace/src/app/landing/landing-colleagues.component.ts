import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    i18n,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { User } from '@placeos/users';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-colleagues',
    template: `
        <div
            class="mx-2 flex items-center justify-between rounded bg-base-200 p-2 text-sm"
        >
            <h2>
                {{
                    'APP.WORKPLACE.COLLEAGUES_COUNT'
                        | translate: { count: (contacts | async)?.length || 0 }
                }}
            </h2>
        </div>
        <div class="h-1/2 w-full flex-1 space-y-4 overflow-auto pt-4">
            <ng-container *ngIf="(contacts | async)?.length; else empty_state">
                <div
                    class="relative flex items-center space-x-2 px-2"
                    user
                    *ngFor="let user of contacts | async"
                >
                    <div class="relative text-xl">
                        <a-user-avatar [user]="user"></a-user-avatar>
                        <div
                            class="absolute bottom-1 right-1 h-3 w-3 rounded-full border border-white"
                            [class.bg-error]="
                                user.location === 'aol' ||
                                user.location === 'ooo'
                            "
                            [class.bg-success]="user.location === 'wfo'"
                            [class.bg-warning]="user.location === 'wfh'"
                            [class.bg-neutral]="!user.location"
                            [matTooltip]="user.location_name"
                            *ngIf="!user.outsideHours()"
                        ></div>
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
                        name="colleague-more"
                        class="!rounded bg-base-200"
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
            </ng-container>
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
            [class.hidden]="!show_search"
            class="absolute inset-x-2 bottom-16 top-2 flex flex-col overflow-hidden rounded border border-base-200 bg-base-100"
        >
            <input
                #search_input
                [ngModel]="(options | async)?.search"
                (ngModelChange)="updateSearch($event)"
                [placeholder]="'FORM.USER_SEARCH' | translate"
                class="w-full border-b border-base-200 p-2"
            />
            <button
                icon
                name="close-colleague-search"
                class="absolute right-0 top-0"
                (click)="show_search = false"
            >
                <icon>close</icon>
            </button>
            <div
                class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto"
                *ngIf="!(loading | async); else load_state"
            >
                <ng-container
                    *ngIf="(search_results | async)?.length; else search_empty"
                >
                    <button
                        matRipple
                        name="add-colleague"
                        class="flex min-h-12 w-full items-center space-x-2 p-1 text-left"
                        *ngFor="let user of search_results | async"
                        (click)="addUser(user)"
                    >
                        <div class="relative text-base">
                            <a-user-avatar [user]="user"></a-user-avatar>
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
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
            >
                <img src="assets/icons/no-contacts.svg" />
                <p class="text-center text-sm opacity-60">
                    {{ 'APP.WORKPLACE.COLLEAGUES_EMPTY' | translate }}
                </p>
            </div>
        </ng-template>
        <ng-template #search_empty>
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
            >
                <p class="text-center text-sm opacity-60">
                    {{
                        !(options | async)?.search
                            ? ('APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY'
                              | translate)
                            : ('APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY'
                              | translate: { text: (options | async)?.search })
                    }}
                </p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p class="text-center text-sm opacity-60">
                    {{ 'APP.WORKPLACE.COLLEAGUE_SEARCH_LOADING' | translate }}
                </p>
            </div>
        </ng-template>
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
    standalone: false,
})
export class LandingColleaguesComponent extends AsyncHandler {
    public show_search = false;
    public readonly contacts = this._state.contacts;

    public readonly search_results = combineLatest([
        this._state.search_results,
        this._state.contacts,
    ]).pipe(
        map(([list, contacts]) =>
            list.filter(
                (_) =>
                    !contacts.find(
                        (user) => user.id === _.id || user.email === _.email,
                    ),
            ),
        ),
    );

    public readonly options = this._state.options;

    public readonly loading = this._state.loading;

    public readonly addUser = async (u) => {
        await this._state.addContact(u);
        notifySuccess(i18n('APP.WORKPLACE.COLLEAGUE_ADDED', { name: u.name }));
        this.show_search = false;
    };

    public readonly removeUser = async (u) => {
        await this._state.removeContact(u);
        notifySuccess(
            i18n('APP.WORKPLACE.COLLEAGUE_REMOVED', { name: u.name }),
        );
    };

    public readonly updateSearch = (s) => this._state.setOptions({ search: s });

    @ViewChild('search_input', { static: true })
    private _input_el!: ElementRef<HTMLInputElement>;

    constructor(
        private _state: LandingStateService,
        private _settings: SettingsService,
        private _event_form: EventFormService,
        private _router: Router,
    ) {
        super();
    }

    public newMeeting(user: User) {
        this._event_form.newForm();
        this._event_form.form.patchValue({ attendees: [user] });
        if (this._settings.get('app.new_features')) {
            this._router.navigate(['/book', 'meeting']);
        } else {
            this._router.navigate(['/book', 'spaces']);
        }
    }

    public openSearch() {
        this.updateSearch('');
        this.show_search = true;
        this.timeout('open', () => this._input_el.nativeElement.focus(), 100);
    }
}
