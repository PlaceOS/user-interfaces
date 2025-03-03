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
import { debounceTime, map } from 'rxjs/operators';

@Component({
    selector: 'sidebar',
    template: `
        <div class="flex h-full w-48 flex-col bg-secondary text-white">
            <div class="logo mb-4 flex w-full items-center justify-center p-3">
                <img
                    auth
                    class="w-full"
                    [source]="(logo | async)?.src || (logo | async)"
                />
            </div>
            <div class="flex-1 space-y-2 overflow-auto">
                <ng-container *ngFor="let tile of links">
                    <a
                        class="hover:bg-base-100/20 mx-2 flex items-center space-x-2 rounded px-2 py-1"
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
                class="border-base-200-500 hover:bg-base-100/20 flex w-full items-center space-x-2 border-t p-3"
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
                class="border-base-200-500 hover:bg-base-100/20 flex w-full items-center space-x-2 border-t p-3"
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
            <div class="border-base-200-500 border-t p-2">
                <div class="w-full text-xs opacity-60">
                    <ng-container>Version: </ng-container>
                    <button
                        class="m-0 border-none bg-none p-0 text-xs underline"
                        (click)="viewChangelog()"
                    >
                        {{ version.hash }}
                    </button>
                </div>
                <div class="w-full text-xs opacity-60">
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
    standalone: false,
})
export class SidebarComponent {
    public get links(): ApplicationLinkInternal[] {
        return this._settings.get('app.general.menu') || [];
    }

    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.get('theme') === 'dark'
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );

    public readonly regions = this._org.region_list.pipe(
        map((l) =>
            l.sort((a, b) => a.display_name?.localeCompare(b.display_name)),
        ),
    );
    public readonly buildings = this._org.building_list.pipe(
        map((l) =>
            l.sort((a, b) => a.display_name?.localeCompare(b.display_name)),
        ),
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
                'https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md',
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
        private _dialog: MatDialog,
    ) {}
}
