import { Component } from '@angular/core';
import { ApplicationIcon, SettingsService, currentUser } from '@placeos/common';
import { UserControlsComponent } from '@placeos/components';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="flex items-center border-b border-gray-300 p-2">
            <div class="w-64">
                <img class="h-12" [src]="logo.src" />
            </div>
            <input
                class="p-2 bg-black/20 rounded border-none w-[28rem] max-w-[65vw]"
                placeholder="Search for bookings, people or locations"
            />
            <div class="flex-1 flex items-center justify-end space-x-2">
                <button btn icon matRipple>
                    <app-icon class="text-2xl">notifications</app-icon>
                </button>
                <button
                    matRipple
                    avatar
                    name="user-controls"
                    class="h-10 w-10 rounded-full mr-2 bg-gray-200 dark:bg-neutral-800 flex items-center justify-center"
                    customTooltip
                    [content]="user_controls"
                >
                    <a-user-avatar [user]="user"></a-user-avatar>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }
        `,
    ],
})
export class ApplicationTopbarComponent {
    public readonly user_controls = UserControlsComponent;

    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_light') || {};
    }

    public get user() {
        return currentUser();
    }

    constructor(private _settings: SettingsService) {}
}
