import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import {
    OrganisationService,
    SettingsService,
    currentUser,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    UserAvatarComponent,
    UserControlsSidebarComponent,
} from '@placeos/components';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="border-base-200 flex items-center border-b p-2">
            <div class="w-64">
                <a [routerLink]="['/']">
                    <img auth class="h-12" [source]="logo?.src || logo" alt="Home" />
                </a>
            </div>
            <!-- <mat-form-field
                appearance="outline"
                class="flex-1 max-w-[65vw] h-13"
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
                <user-controls-sidebar class="mr-2">
                    <a-user-avatar [user]="user"></a-user-avatar>
                </user-controls-sidebar>
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
    imports: [
        RouterModule,
        UserAvatarComponent,
        MatRippleModule,
        AuthenticatedImageDirective,
        IconComponent,
        UserControlsSidebarComponent,
    ],
})
export class ApplicationTopbarComponent {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

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
