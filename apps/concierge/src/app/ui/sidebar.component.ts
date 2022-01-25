import { Component } from '@angular/core';
import {
    ApplicationIcon,
    ApplicationLinkInternal,
    SettingsService
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'sidebar',
    template: `
        <div class="logo h-20 w-24 flex items-center justify-center">
            <img class="object-center object-contain" [src]="logo.src" />
        </div>
        <div class="flex-1 overflow-y-auto overflow-x-hidden w-24">
            <ng-container *ngFor="let tile of links">
                <a
                    class="flex flex-col justify-center items-center"
                    [routerLink]="['/' + tile.route]"
                    routerLinkActive="active"
                >
                    <app-icon class="text-3xl mb-2" [icon]="tile.icon"></app-icon>
                    <div class="text-xs">{{ tile.name }}</div>
                </a>
            </ng-container>
        </div>
        <button
            mat-icon-button
            class="mx-auto my-4"
            *ngIf="(buildings | async).length > 1"
            [matTooltip]="(active_building | async).display_name || (active_building | async).name"
            matTooltipPosition="right"
            [matMenuTriggerFor]="menu"
        >
            <app-icon>business</app-icon>
        </button>
        <mat-menu #menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let building of buildings | async"
                (click)="setBuilding(building)"
            >
                {{ building.display_name || building.name }}
            </button>
        </mat-menu>
    `,
    styles: [
        `
            :host {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 6em;
                height: 100%;
                background-color: var(--secondary);
                border-right: 1px solid #ccc;
                z-index: 10;
            }

            a {
                width: 5.5em;
                height: 5em;
                margin: 0.5em 0 0.5em 0.5em;
                border-radius: 0.25em 0 0 0.25em;
                text-decoration: none;
                color: #fff;
            }

            a.active {
                background-color: #fff;
                color: rgba(0, 0, 0, 0.8);
            }

            button[mat-icon-button] {
                border: 1px solid #fff;
                color: #fff;
                border-radius: 0.25em;
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

    public readonly buildings = this._org.building_list;
    public readonly active_building = this._org.active_building;
    public readonly setBuilding = (b) => (this._org.building = b);

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}
}
