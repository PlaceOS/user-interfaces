import { Component, inject } from '@angular/core';
import {
    OrganisationService,
    SettingsService,
    currentUser,
} from '@placeos/common';
import { UserControlsComponent } from '@placeos/components';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="flex items-center border-b border-base-200 p-2">
            <div class="w-64">
                <a [routerLink]="['/']">
                    <img auth class="h-12" [source]="logo?.src || logo" />
                </a>
            </div>
            <!-- <mat-form-field
                appearance="outline"
                class="flex-1 max-w-[65vw] h-[3.25rem]"
            >
                <icon matPrefix class="text-2xl relative -left-1">
                    search
                </icon>
                <input
                    matInput
                    placeholder="Search for bookings, people or locations"
                />
            </mat-form-field> -->
            <div class="flex flex-1 items-center justify-end space-x-2">
                <button btn icon matRipple>
                    <icon class="text-2xl">notifications</icon>
                </button>
                <button
                    matRipple
                    avatar
                    name="user-controls"
                    class="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
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
    standalone: false,
})
export class ApplicationTopbarComponent {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly user_controls = UserControlsComponent;

    public get logo() {
        return (
            (this._settings.theme === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    }

    public get user() {
        return currentUser();
    }
}
