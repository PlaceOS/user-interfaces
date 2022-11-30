import { Component } from '@angular/core';
import {
    ApplicationIcon,
    ApplicationLinkInternal,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'sidebar',
    template: `
        <div class="flex flex-col bg-primary dark:bg-slate-800 w-48 text-white h-full">
            <div class="logo w-full flex items-center justify-center p-3 mb-4">
                <img class="w-full" [src]="logo.src" />
            </div>
            <div class="flex-1 overflow-auto space-y-2">
                <ng-container *ngFor="let tile of links">
                    <a
                        class="flex items-center mx-2 space-x-2 hover:bg-white/20 px-2 py-1 rounded"
                        [routerLink]="['/' + tile.route]"
                        routerLinkActive="active"
                    >
                        <app-icon
                            class="text-2xl"
                            [icon]="tile.icon"
                        ></app-icon>
                        <div class="text-base">{{ tile.name }}</div>
                    </a>
                </ng-container>
            </div>
            <button
                mat-ripple
                class="w-full flex items-center space-x-2 p-3 border-t border-neutral-500 hover:bg-white/20"
                *ngIf="(buildings | async).length > 1"
                [matMenuTriggerFor]="menu"
            >
                <app-icon>business</app-icon>
                <div class="truncate">
                    {{
                        (active_building | async).display_name ||
                            (active_building | async).name
                    }}
                </div>
            </button>
        </div>
        <mat-menu #menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let building of buildings | async"
                (click)="setBuilding(building)"
                class="w-40"
            >
                {{ building.display_name || building.name }}
            </button>
        </mat-menu>
    `,
    styles: [
        `
            a.active {
                background-color: var(--ternary) !important;
                color: #000E !important;
            }
        `,
    ],
})
export class SidebarComponent {
    public get links(): ApplicationLinkInternal[] {
        return this._settings.get('app.general.menu') || [];
    }
    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_dark') || {};
    }

    public readonly buildings = this._org.active_buildings;
    public readonly active_building = this._org.active_building;
    public readonly setBuilding = (b) => (this._org.building = b);

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}
}
