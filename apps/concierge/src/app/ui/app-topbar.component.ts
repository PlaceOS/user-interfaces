import { Component } from '@angular/core';
import { ApplicationIcon, SettingsService, currentUser } from '@placeos/common';
import { UserControlsComponent } from '@placeos/components';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="flex items-center border-b border-base-200 p-2">
            <div class="w-64">
                <a [routerLink]="['/']">
                    <img class="h-12" [src]="logo.src" />
                </a>
            </div>
            <!-- <mat-form-field
                appearance="outline"
                class="flex-1 max-w-[65vw] h-[3.25rem]"
            >
                <app-icon matPrefix class="text-2xl relative -left-1">
                    search
                </app-icon>
                <input
                    matInput
                    placeholder="Search for bookings, people or locations"
                />
            </mat-form-field> -->
            <div class="flex-1 flex items-center justify-end space-x-2">
                <button btn icon matRipple>
                    <app-icon class="text-2xl">notifications</app-icon>
                </button>
                <button
                    matRipple
                    avatar
                    name="user-controls"
                    class="h-10 w-10 rounded-full mr-2 bg-base-200 flex items-center justify-center"
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
        return (
            (this._settings.get('theme') === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    }

    public get user() {
        return currentUser();
    }

    constructor(private _settings: SettingsService) {}
}
