import { Component } from '@angular/core';
import { ApplicationIcon, currentUser, SettingsService } from '@placeos/common';
import { UserControlsComponent } from './user-controls.component';

const EMPTY = [];

@Component({
    selector: 'topbar',
    template: `
        <div
            topbar
            class="flex items-center justify-between h-[3.5rem] bg-white border-b border-gray-200 dark:border-neutral-700 text-black z-50 shadow relative dark:bg-[#1F2021] dark:text-white"
        >
            <a
                logo
                class="p-2 h-full flex items-center flex-1"
                [routerLink]="['/-']"
            >
                <img
                    class="h-10 hidden dark:block sm:dark:block"
                    [class.dark:hidden]="title"
                    *ngIf="logo_dark"
                    [src]="logo_dark.src"
                />
                <img
                    class="h-10 dark:hidden sm:block"
                    [class.hidden]="title"
                    *ngIf="logo"
                    [src]="logo.src"
                />
                <span *ngIf="title">{{ title }}</span>
            </a>
            <div
                class="flex-3 items-center justify-center h-full w-1/2 hidden sm:flex"
            >
                <top-menu></top-menu>
            </div>
            <div class="flex-1 flex items-center justify-end">
                <global-search *ngIf="search"></global-search>
                <button
                    matRipple
                    avatar
                    class="h-10 w-10 rounded-full mr-2 bg-gray-200 dark:bg-neutral-800 flex items-center justify-center"
                    customTooltip
                    [content]="user_controls"
                >
                    <app-icon class="text-2xl">person</app-icon>
                </button>
            </div>
        </div>
        <mat-menu #menu="matMenu">
            <button
                mat-menu-item
                [routerLink]="new_features ? ['/your-bookings'] : ['/schedule']"
                routerLinkActive="text-primary"
                *ngIf="features?.includes('schedule')"
            >
                <div class="flex items-center space-x-2">
                    <app-icon class="text-xl">event</app-icon>
                    <div i18n>My Day</div>
                </div>
            </button>
        </mat-menu>
    `,
    styles: [
        `
            .flex-3 {
                flex: 3 3 0%;
            }
        `,
    ],
})
export class TopbarComponent {
    public show_menu: boolean;
    public readonly user_controls = UserControlsComponent;

    /** Application logo to display */
    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_light');
    }
    /** Application logo to display */
    public get logo_dark(): ApplicationIcon {
        return this._settings.get('app.logo_dark');
    }
    /** Text to display for page title */
    public get title(): string {
        return this._settings.value('page_title');
    }

    /** Text to display for page title */
    public get search(): boolean {
        return this._settings.get('app.general.search') !== false;
    }

    public get new_features(): boolean {
        return !!this._settings.get('app.new_features');
    }

    public get user() {
        return currentUser();
    }

    public get features(): string[] {
        return this._settings.get('app.features') || EMPTY;
    }

    constructor(private _settings: SettingsService) {}
}
