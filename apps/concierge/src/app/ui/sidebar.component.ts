import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    ApplicationIcon,
    ApplicationLinkInternal,
    SettingsService,
    VERSION,
} from '@placeos/common';
import { ChangelogModalComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { map } from 'rxjs/operators';

@Component({
    selector: 'sidebar',
    template: `
        <div class="flex flex-col bg-secondary w-48 text-white h-full">
            <div class="logo w-full flex items-center justify-center p-3 mb-4">
                <img class="w-full" [src]="logo.src" />
            </div>
            <div class="flex-1 overflow-auto space-y-2">
                <ng-container *ngFor="let tile of links">
                    <a
                        class="flex items-center mx-2 space-x-2 hover:bg-base-100/20 px-2 py-1 rounded"
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
                class="w-full flex items-center space-x-2 p-3 border-t border-base-200-500 hover:bg-base-100/20"
                *ngIf="(regions | async).length > 1"
                [matMenuTriggerFor]="region"
            >
                <app-icon>place</app-icon>
                <div class="truncate">
                    {{
                        (active_region | async)?.display_name ||
                            (active_region | async)?.name
                    }}
                </div>
            </button>
            <button
                mat-ripple
                class="w-full flex items-center space-x-2 p-3 border-t border-base-200-500 hover:bg-base-100/20"
                *ngIf="(buildings | async).length > 1"
                [matMenuTriggerFor]="menu"
            >
                <app-icon>business</app-icon>
                <div class="truncate">
                    {{
                        (active_building | async)?.display_name ||
                            (active_building | async)?.name
                    }}
                </div>
            </button>
            <div class="p-2 border-t border-base-200-500">
                <div class="text-xs opacity-60 w-full">
                    <ng-container i18n>Version: </ng-container>
                    <button
                        class="underline p-0 m-0 bg-none border-none text-xs"
                        (click)="viewChangelog()"
                    >
                        {{ version.hash }}
                    </button>
                </div>
                <div class="text-xs opacity-60 w-full">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: time_format }})
                </div>
            </div>
        </div>
        <mat-menu #menu="matMenu">
            <div class="w-64">
                <mat-radio-group
                    aria-label="Select a building"
                    class="flex flex-col"
                    [ngModel]="(active_building | async)?.id"
                >
                    <mat-radio-button
                        [value]="building.id"
                        *ngFor="let building of buildings | async"
                        (click)="setBuilding(building)"
                    >
                        {{ building.display_name || building.name }}
                    </mat-radio-button>
                </mat-radio-group>
            </div>
        </mat-menu>
        <mat-menu #region="matMenu">
            <div class="w-64">
                <mat-radio-group
                    aria-label="Select a region"
                    class="flex flex-col"
                    [ngModel]="(active_region | async)?.id"
                >
                    <mat-radio-button
                        [value]="region?.id"
                        *ngFor="let region of regions | async"
                        (click)="setRegion(region)"
                    >
                        {{ region?.display_name || region?.name }}
                    </mat-radio-button>
                </mat-radio-group>
            </div>
        </mat-menu>
    `,
    styles: [
        `
            a.active {
                background-color: var(--p) !important;
                color: var(--pc) !important;
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

    public readonly regions = this._org.region_list.pipe(
        map((l) =>
            l.sort((a, b) => a.display_name?.localeCompare(b.display_name))
        )
    );
    public readonly buildings = this._org.building_list.pipe(
        map((l) =>
            l.sort((a, b) => a.display_name?.localeCompare(b.display_name))
        )
    );
    public readonly active_region = this._org.active_region;
    public readonly active_building = this._org.active_building;
    public readonly setBuilding = (b) => (this._org.building = b);
    public readonly setRegion = (r) => (this._org.region = r);

    public get version() {
        return VERSION;
    }

    public async viewChangelog() {
        const changelog = await (
            await fetch(
                'https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md'
            )
        ).text();
        this._dialog.open(ChangelogModalComponent, { data: { changelog } });
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}
}
