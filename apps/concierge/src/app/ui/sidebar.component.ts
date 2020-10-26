import { Component } from '@angular/core';

import { SettingsService, ApplicationLinkInternal, ApplicationIcon } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';

@Component({
    selector: 'sidebar',
    template: `
        <div class="logo w-full">
            <img class="object-center object-contain" [src]="logo.src" />
        </div>
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
        <button
            mat-icon-button
            *ngIf="(buildings | async).length > 1"
            [matTooltip]="(active_building | async).display_name || (active_building | async).name"
            matTooltipPosition="right"
            [matMenuTriggerFor]="menu"
        >
            <app-icon [icon]="{ class: 'material-icons', content: 'business' }"></app-icon>
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
                background-color: #004b86;
            }

            .logo {
                height: 6em;
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
                position: absolute;
                bottom: 1em;
                left: 50%;
                transform: translateX(-50%);
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
        return this._settings.get('app.logo-light') || {};
    }

    public readonly buildings = this._org.building_list;
    public readonly active_building = this._org.active_building;
    public readonly setBuilding = (b) => (this._org.building = b);

    constructor(private _settings: SettingsService, private _org: OrganisationService) {}
}
