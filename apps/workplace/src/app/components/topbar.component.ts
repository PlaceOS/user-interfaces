import { Component, inject } from '@angular/core';
import { currentUser, SettingsService } from '@placeos/common';
import { UserControlsComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';

const EMPTY = [];

@Component({
    selector: 'topbar',
    template: `
        <div
            topbar
            class="relative z-50 flex h-[3.5rem] items-center justify-between border-b border-base-200 bg-base-100 shadow"
        >
            <a
                name="nav-logo"
                class="flex h-full w-48 items-center p-2"
                [routerLink]="['/-']"
            >
                <img
                    auth
                    class="h-10 sm:block"
                    [class.hidden]="title"
                    alt="Logo"
                    [source]="logo?.src || logo"
                />
                @if (title) {
                    <span>{{ title }}</span>
                }
            </a>
            <div
                class="relative hidden h-full w-1/2 flex-1 items-center justify-center sm:flex"
            >
                <top-menu></top-menu>
            </div>
            <div class="flex w-48 items-center justify-end">
                @if (search) {
                    <global-search></global-search>
                }
                <button
                    icon
                    matRipple
                    avatar
                    name="user-controls"
                    class="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
                    customTooltip
                    [content]="user_controls"
                >
                    <icon class="text-2xl">person</icon>
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
    standalone: false,
})
export class TopbarComponent {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public show_menu: boolean;
    public readonly user_controls = UserControlsComponent;

    public get logo() {
        return (
            (this._settings.theme === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    }
    /** Text to display for page title */
    public get title(): string {
        return this._settings.value('page_title');
    }

    /** Text to display for page title */
    public get search(): boolean {
        return this._settings.get('app.global_search') !== false;
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
}
