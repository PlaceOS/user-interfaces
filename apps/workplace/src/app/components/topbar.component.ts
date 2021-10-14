import { Component } from '@angular/core';
import {
    ApplicationIcon,
    currentUser,
    SettingsService,
    VERSION,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { logout } from '@placeos/ts-client';

@Component({
    selector: 'topbar',
    template: `
        <div
            topbar
            class="flex items-center justify-between h-[3.5rem] bg-white border-b border-gray-200 text-black z-50 shadow relative"
        >
            <a
                logo
                class="p-2 h-full flex items-center"
                [routerLink]="['/']"
                *ngIf="logo"
            >
                <img class="h-10" [src]="logo?.src" />
            </a>
            <div class="flex-1 flex items-center justify-center h-full">
                <top-menu class="hidden sm:block"></top-menu>
            </div>
            <global-search></global-search>
            <button
                matRipple
                class="h-10 w-10 rounded-full mr-2 bg-gray-200 flex items-center justify-center"
                [matMenuTriggerFor]="menu"
            >
                <app-icon class="text-2xl">person</app-icon>
            </button>
        </div>
        <mat-menu #menu="matMenu">
            <div
                mat-menu-item
                class="flex items-center pointer-events-none leading-tight pl-0"
                *ngIf="user"
            >
                <a-user-avatar
                    class="m-3 text-base"
                    [user]="user"
                ></a-user-avatar>
                <div class="flex flex-col">
                    <div class="text-lg">{{ user.name }}</div>
                    <div class="text-xs opacity-60">{{ user.email }}</div>
                </div>
            </div>
            <div
                mat-menu-item
                class="px-2 h-auto leading-loose pointer-events-none border-b border-gray-200"
                *ngIf="user"
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
            <button
                mat-menu-item
                [routerLink]="['/help']"
                routerLinkActive="text-primary"
                *ngIf="features.includes('help')"
            >
                <div class="flex items-center space-x-2">
                    <app-icon class="text-xl">help</app-icon>
                    <div>Help & Support</div>
                </div>
            </button>
            <button
                mat-menu-item
                *ngIf="(buildings | async)?.length > 1"
                [matMenuTriggerFor]="building_menu"
            >
                <div class="flex items-center space-x-2">
                    <app-icon class="text-xl">business</app-icon>
                    <div>Building</div>
                </div>
            </button>
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
        <mat-menu #building_menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let item of buildings | async"
                (click)="setBuilding(item)"
                class="flex items-center space-x-2 text-base"
                [class.text-primary]="(building | async).id === item.id"
            >
                {{ item.name }}
            </button>
        </mat-menu>
        <ng-template #search> </ng-template>
    `,
    styles: [``],
})
export class TopbarComponent {
    public show_menu: boolean;
    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;

    public readonly setBuilding = (b) => (this._org.building = b);

    /** Application logo to display */
    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_light');
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

    public get features(): string[] {
        return this._settings.get('app.features');
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}

    public logout() {
        logout();
        location.href = '/logout';
    }
}
