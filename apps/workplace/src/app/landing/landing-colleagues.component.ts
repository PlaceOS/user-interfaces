import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass, notifySuccess, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { User } from '@placeos/users';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-colleagues',
    template: `
        <div
            class="flex items-center justify-between py-2 mx-2 border-b border-gray-200"
        >
            <h2 class="mx-2" i18n>{{ (contacts | async)?.length || 0 }} { (contacts | async)?.length, plural, =1 { Person } other { People } }</h2>
            <!-- <div class="flex items-center space-x-2 text-primary">
                <button
                    mat-icon-button
                    class="!border !border-solid !border-primary"
                >
                    <app-icon>search</app-icon>
                </button>
                <button
                    mat-icon-button
                    class="!border !border-solid !border-primary"
                >
                    <app-icon>filter_list</app-icon>
                </button>
            </div> -->
        </div>
        <div class="flex-1 h-1/2 w-full space-y-4 overflow-auto pt-4">
            <ng-container *ngIf="(contacts | async)?.length; else empty_state">
                <div
                    class="flex items-center px-2 space-x-2 relative"
                    user
                    *ngFor="let user of contacts | async"
                >
                    <div class="text-xl relative">
                        <a-user-avatar [user]="user"></a-user-avatar>
                        <div
                            class="rounded-full h-3 w-3 border border-white dark:border-neutral-400 absolute bottom-1 right-1"
                            [class.bg-error]="!user.location"
                            [class.bg-success]="user.location"
                        ></div>
                    </div>
                    <div class="leading-tight flex-1 w-1/2">
                        <div class="truncate">{{ user.name }}</div>
                        <div class="text-sm truncate">
                            {{ user.organisation }}
                        </div>
                        <div class="text-xs opacity-60 truncate">
                            {{ user.location }}
                        </div>
                    </div>
                    <button
                        mat-icon-button
                        class="rounded bg-gray-300"
                        [matMenuTriggerFor]="menu"
                    >
                        <app-icon>more_horiz</app-icon>
                    </button>
                    <mat-menu #menu="matMenu" xPosition="before">
                        <!-- <button mat-menu-item (click)="viewUser(user)" class="flex items-center space-x-2">
                                <app-icon class="text-2xl">face</app-icon>
                                <div>View Colleague</div>
                            </button> -->
                        <button
                            mat-menu-item
                            (click)="newMeeting(user)"
                            class="flex items-center space-x-2"
                        >
                            <app-icon class="text-2xl">today</app-icon>
                            <div>{{ "WPA.CREATE_MEETING" | translate }}</div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="removeContact(user)"
                            class="flex items-center space-x-2"
                        >
                            <app-icon class="text-2xl">cancel</app-icon>
                            <div>{{ "WPA.REMOVE_COLLEAGUE" | translate }}</div>
                        </button>
                        <!-- <button mat-menu-item (click)="viewUser(user)" class="flex items-center space-x-2">
                                <app-icon class="text-2xl">report</app-icon>
                                <div>Block Colleague</div>
                            </button> -->
                    </mat-menu>
                </div>
            </ng-container>
        </div>
        <button
            mat-button
            class="inverse w-[calc(100%-1rem)] m-2"
            (click)="openSearch()"
        >
        {{ "WPA.ADD" | translate }}
        </button>
        <div
            search
            [class.hidden]="!show_search"
            class="absolute inset-x-2 top-2 bottom-[3.5rem] rounded-lg overflow-hidden flex flex-col bg-white dark:bg-neutral-600 shadow border border-gray-200"
        >
            <input
                #search_input
                [ngModel]="(options | async)?.search"
                (ngModelChange)="updateSearch($event)"
                placeholder="Search for users..."
                class="w-full border-b border-gray-200 p-2 rounded-t-lg"
            />
            <button
                mat-icon-button
                class="absolute top-0 right-0"
                (click)="show_search = false"
            >
                <app-icon>close</app-icon>
            </button>
            <div
                class="overflow-auto flex-1 h-1/2 flex flex-col space-y-2"
                *ngIf="!(loading | async); else load_state"
            >
                <ng-container
                    *ngIf="(search_results | async)?.length; else search_empty"
                >
                    <button
                        matRipple
                        class="flex items-center p-2 space-x-2 w-full text-left"
                        *ngFor="let user of search_results | async"
                        (click)="addUser(user)"
                    >
                        <div class="text-base relative">
                            <a-user-avatar [user]="user"></a-user-avatar>
                            <div
                                class="rounded-full h-3 w-3 border border-white dark:border-neutral-400 absolute bottom-1 right-1"
                                [class.bg-error]="!user.location"
                                [class.bg-success]="user.location"
                            ></div>
                        </div>
                        <div class="leading-tight">
                            <div class="truncate">{{ user.name }}</div>
                            <div class="text-sm truncate">
                                {{ user.organisation }}
                            </div>
                        </div>
                    </button>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="w-full h-full flex flex-col items-center justify-center space-y-2 p-8"
            >
                <img src="assets/icons/no-contacts.svg" />
                <p class="opacity-60 text-sm text-center" i18n>
                    {{ "WPA.COLLEAGUES_EMPTY" | translate }}
                </p>
            </div>
        </ng-template>
        <ng-template #search_empty>
            <div
                class="w-full h-full flex flex-col items-center justify-center space-y-2 p-8"
            >
                <p class="opacity-60 text-sm text-center">
                    {{
                        !(options | async)?.search
                            ? 'Start typing to search for users.'
                            : 'Unable for find any users matching "' +
                              (options | async)?.search +
                              '"'
                    }}
                </p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                class="w-full h-full flex flex-col items-center justify-center space-y-2 p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p class="opacity-60 text-sm text-center">{{ "WPA.COLLEAGUES_SEARCHING" | translate }}</p>
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
})
export class LandingColleaguesComponent extends BaseClass {
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
                        (user) => user.id !== _.id && user.email !== _.email
                    )
            )
        )
    );

    public readonly options = this._state.options;

    public readonly loading = this._state.loading;

    public readonly addUser = async (u) => {
        await this._state.addContact(u);
        notifySuccess(`Successfully added "${u.name}" to contacts`);
        this.show_search = false;
    };

    public readonly removeUser = async (u) => {
        await this._state.removeContact(u);
        notifySuccess(`Successfully removed "${u.name}" from contacts`);
    };

    public readonly updateSearch = (s) => this._state.setOptions({ search: s });

    @ViewChild('search_input', { static: true })
    private _input_el!: ElementRef<HTMLInputElement>;

    constructor(
        private _state: LandingStateService,
        private _settings: SettingsService,
        private _event_form: EventFormService,
        private _router: Router
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
