import { Component, ElementRef, ViewChild } from '@angular/core';
import { BaseClass } from '@user-interfaces/common';

import { DashboardStateService } from './dashboard-state.service';

@Component({
    selector: 'dashboard-contacts',
    template: `
        <h3 class="m-0 mb-2 font-medium text-xl">Contacts</h3>
        <div name="contact-list" class="bg-gray-400 rounded-lg p-2 pl-0 space-y-2 flex flex-wrap">
            <div
                name="contact"
                *ngFor="let user of contacts | async"
                class="bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative"
            >
                <a-user-avatar class="text-2xl mb-2" [user]="user"></a-user-avatar>
                <div name="contact-name" class="text-sm mb-2">{{ user.name }}</div>
                <div name="location" class="flex items-center text-sm">
                    <div name="dot" class="mr-2"></div>
                    Level 12
                </div>
                <button mat-icon-button name="close" (click)="removeUser(user)">
                    <app-icon
                        [icon]="{ class: 'material-icons', content: 'close' }"
                    ></app-icon>
                </button>
            </div>
            <button
                name="contact"
                mat-button
                class="rounded-lg flex-1 w-full"
                [matMenuTriggerFor]="menu"
                (menuOpened)="focusInput()"
                (menuClosed)="clearInput()"
            >
                <div class="flex flex-col items-center p-4 text-black w-full">
                    <app-icon
                        class="text-2xl"
                        [icon]="{ class: 'material-icons', content: 'person_add' }"
                    ></app-icon>
                    <span class="w-full leading-tight whitespace-normal"
                        >Click to add a person to contacts</span
                    >
                </div>
            </button>
        </div>
        <mat-menu #menu="matMenu" xPosition="before">
            <div
                mat-menu-item
                class="p-0"
                (click)="$event.stopPropagation(); $event.preventDefault()"
            >
                <input
                    #input
                    class="w-full p-2 text-base"
                    [(ngModel)]="search_str"
                    (ngModelChange)="updateSearch(search_str)"
                    placeholder="Search for user..."
                />
            </div>
            <button mat-menu-item *ngIf="!(search_results | async).length">
                {{ !search_str ? 'Type to search for users...' : 'No matches for "' + search_str + '"'}}
            </button>
            <button mat-menu-item *ngFor="let user of search_results | async | slice:0:8" (click)="addUser(user)">
                <div class="flex items-center leading-tight">
                    <a-user-avatar class="text-xl mr-2" [user]="user"></a-user-avatar>
                    <div class="flex-1">
                        <div>{{ user.name }}</div>
                        <div class="text-xs text-dark-fade">{{ user.email }}</div>
                    </div>
                </div>
            </button>
        </mat-menu>
    `,
    styles: [
        `
            :host {
                padding: 1em;
                min-width: 16rem;
            }

            [name='contact-list'] {
                padding: 0 0.5rem 0.5rem 0;
            }

            [name='contact'] {
                min-width: 8rem;
                width: 8rem;
                margin-left: 0.5rem;
                margin-top: 0.5rem;
            }

            [name='contact-name'] {
                font-weight: 400;
            }

            [name='dot'] {
                height: 8px;
                width: 8px;
                border-radius: 8px;
                background-color: #22992e;
            }

            button[name='close'] {
                position: absolute;
                display: none;
                top: .25rem;
                right: .25rem;
            }

            [name='contact']:hover button[name='close'] {
                display: initial;
            }

            button[name='contact'] {
                background-color: #f0f0f0;
                border: none;
                min-width: calc(100% - 0.5rem) !important;
            }
        `,
    ],
})
export class DashboardContactsComponent extends BaseClass {
    public readonly contacts = this._state.contacts;

    public readonly search_results = this._state.contacts_search;

    public readonly addUser = (u) => this._state.addContact(u);

    public readonly removeUser = (u) => this._state.removeContact(u);

    public readonly updateSearch = (s) => this._state.updateContactSearch(s);

    public search_str: string = '';

    @ViewChild('input') private _input_el: ElementRef;

    constructor(private _state: DashboardStateService) {
        super();
    }

    public ngOnInit() {
        this._state.updateContacts();
    }

    public focusInput() {
        this.timeout('focus', () => {
            if (this._input_el) {
                this._input_el.nativeElement.focus();
            }
        });
    }

    public clearInput() {
        this.search_str = '';
        this._state.clearContactSearch();
    }
}
