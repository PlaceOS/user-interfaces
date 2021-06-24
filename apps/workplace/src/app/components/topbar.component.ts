import { Component } from '@angular/core';
import {
    ApplicationIcon,
    currentUser,
    SettingsService,
    VERSION,
} from '@placeos/common';
import { logout } from '@placeos/ts-client';

@Component({
    selector: 'topbar',
    template: `
        <div
            class="flex items-center justify-between h-16 bg-secondary border-b border-gray-200 text-white"
        >
            <div icon class="p-2 h-full flex items-center" *ngIf="logo">
                <img class="h-10 sm:h-12" [src]="logo?.src" />
            </div>
            <h2 *ngIf="title; else search">{{ title }}</h2>
            <a-user-avatar
                class="m-3 text-lg"
                [user]="user"
                [matMenuTriggerFor]="menu"
            ></a-user-avatar>
        </div>
        <mat-menu #menu="matMenu">
            <div
                mat-menu-item
                class="flex items-center pointer-events-none leading-tight pl-0"
            >
                <a-user-avatar
                    class="m-3 text-lg"
                    [user]="user"
                ></a-user-avatar>
                <div class="flex flex-col">
                    <div class="text-lg">{{ user.name }}</div>
                    <div class="text-xs opacity-60">{{ user.email }}</div>
                </div>
            </div>
            <div
                mat-menu-item
                class="px-2 h-auto leading-loose pointer-events-none"
            >
                <ng-container *ngFor="let group of user.groups || []">
                    <span
                        class="py-1 px-2 m-1 rounded-2xl text-xs bg-gray-500 text-white"
                        *ngIf="group"
                    >
                        {{ group }}
                    </span>
                </ng-container>
            </div>
            <button mat-menu-item (click)="logout()">
                <div class="flex items-center space-x-2">
                    <app-icon class="text-xl">logout</app-icon>
                    <div>Logout</div>
                </div>
            </button>
            <div
                mat-menu-item
                class="flex flex-col justify-center pointer-events-none leading-tight"
            >
                <div>
                    Version: <i>{{ version.hash }}</i>
                </div>
                <div class="text-xs opacity-60">
                    {{ version.time | date: 'longDate' }} ~
                    {{ version.time | date: 'shortTime' }}
                </div>
            </div>
        </mat-menu>
        <ng-template #search>
            <global-search class="flex-1 mx-2"></global-search>
        </ng-template>
    `,
    styles: [``],
})
export class TopbarComponent {
    public show_menu: boolean;

    /** Application logo to display */
    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_dark');
    }
    /** Text to display for page title */
    public get title(): string {
        return this._settings.value('page_title');
    }

    public get user() {
        return currentUser();
    }

    public get version() {
        return VERSION;
    }

    constructor(private _settings: SettingsService) {}

    public logout() {
        logout();
        location.href = '/logout';
    }
}
