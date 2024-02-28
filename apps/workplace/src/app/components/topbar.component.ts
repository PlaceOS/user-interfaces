import { Component } from '@angular/core';
import { ApplicationIcon, currentUser, SettingsService } from '@placeos/common';
import { UserControlsComponent } from '@placeos/components';

const EMPTY = [];

@Component({
    selector: 'topbar',
    template: `
        <div
            topbar
            class="flex items-center justify-between h-[3.5rem] bg-base-100 border-b border-base-200 z-50 shadow relative"
        >
            <a
                name="nav-logo"
                class="p-2 h-full flex items-center w-48"
                [routerLink]="['/-']"
            >
                <img
                    class="h-10 sm:block"
                    [class.hidden]="title"
                    *ngIf="logo"
                    [src]="logo.src"
                />
                <span *ngIf="title">{{ title }}</span>
            </a>
            <div
                class="flex-1 items-center justify-center h-full w-1/2 hidden sm:flex relative"
            >
                <top-menu></top-menu>
            </div>
            <div class="w-48 flex items-center justify-end">
                <global-search *ngIf="search"></global-search>
                <button
                    icon
                    matRipple
                    avatar
                    name="user-controls"
                    class="h-10 w-10 rounded-full mr-2 bg-base-200 flex items-center justify-center"
                    customTooltip
                    [content]="user_controls"
                >
                    <app-icon class="text-2xl">person</app-icon>
                </button>
            </div>
        </div>
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
        return this._settings.get('theme') === 'dark'
            ? this._settings.get('app.logo_dark')
            : this._settings.get('app.logo_light');
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
