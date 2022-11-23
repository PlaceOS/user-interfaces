import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-availability',
    template: `
        <div class="py-2">
            <div
                class="sm:text-lg font-medium mb-2 sm:mb-4 px-4"
                i18n
                *ngIf="!hide_rooms || !hide_spaces"
            >
                Available Now
            </div>
            <div
                class="flex items-center text-sm sm:text-base px-4 space-x-2"
                *ngIf="!hide_spaces"
            >
                <div i18n>Spaces</div>
            </div>
            <div
                class="w-full overflow-auto flex items-center space-x-4 px-4 py-2"
                *ngIf="!hide_spaces"
            >
                <button
                    matRipple
                    *ngFor="let lvl of levels_free | async"
                    class="flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-[#1F2021] shadow p-4 space-x-2"
                    [routerLink]="['/explore']"
                    [queryParams]="{ level: lvl.id }"
                >
                    <div
                        class="min-w-[4.5rem] h-[4.5rem] rounded bg-gray-200 dark:bg-neutral-800 flex items-center justify-center"
                    >
                        <img
                            class="m-auto"
                            src="assets/icons/desk-placeholder.svg"
                        />
                    </div>
                    <div class="text-left">
                        <div class="max-w-full truncate px-1.5">
                            {{ lvl.display_name || lvl.name }}
                        </div>
                        <div
                            class="max-w-full truncate text-sm opacity-60 flex items-center"
                        >
                            <app-icon class="text-blue-500 text-lg"
                                >place</app-icon
                            >
                            <span>{{
                                building(lvl.parent_id)?.display_name ||
                                    building(lvl.parent_id)?.name
                            }}</span>
                        </div>
                    </div>
                </button>
                <span
                    *ngIf="!(levels_free | async).length"
                    class="opacity-60 text-sm mb-2"
                    i18n
                >
                    No free spaces
                </span>
            </div>
            <div
                class="flex items-center text-sm sm:text-base px-4 space-x-2"
                *ngIf="!hide_rooms"
            >
                <div i18n>Rooms</div>
                <mat-spinner
                    diameter="24"
                    *ngIf="loading_spaces | async"
                ></mat-spinner>
            </div>
            <div
                class="w-full overflow-auto flex items-center space-x-4 px-4 py-2"
                *ngIf="!hide_rooms"
            >
                <button
                    matRipple
                    *ngFor="let space of space_list | async"
                    class="flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-[#1F2021] shadow p-4 space-x-2"
                    [routerLink]="['/explore']"
                    [queryParams]="{ space: space.email }"
                >
                    <div
                        class="w-[4.5rem] h-[4.5rem] rounded bg-gray-200 dark:bg-neutral-800 overflow-hidden flex items-center justify-center"
                    >
                        <img
                            *ngIf="
                                (space.id | space | async)?.images?.length;
                                else space_placeholder
                            "
                            [src]="(space.id | space | async)?.images[0]"
                            class="min-h-full object-cover"
                        />
                    </div>
                    <div class="text-left">
                        <div class="max-w-full truncate px-1.5">
                            {{ space.display_name || space.name }}
                        </div>
                        <div
                            class="max-w-full truncate text-sm opacity-60 flex items-center"
                        >
                            <app-icon class="text-blue-500 text-lg"
                                >place</app-icon
                            >
                            <span>{{
                                space.level.display_name || space.level.name
                            }}</span>
                        </div>
                    </div>
                </button>
                <span
                    *ngIf="!(space_list | async).length"
                    class="opacity-60 text-sm mb-2"
                    i18n
                >
                    No free rooms
                </span>
            </div>
        </div>
        <ng-template #space_placeholder>
            <img class="m-auto" src="assets/icons/room-placeholder.svg" />
        </ng-template>
    `,
    styles: [
        `
            * {
                flex-shrink: 0;
            }
        `,
    ],
})
export class LandingAvailabilityComponent {
    public readonly space_list = this._state.free_spaces;
    public readonly loading_spaces = this._state.loading_spaces;
    public readonly levels_free = this._state.level_occupancy;

    public building(id: string) {
        return this._org.buildings.find((bld) => bld.id === id);
    }

    public get hide_spaces() {
        return this._settings.get('app.general.hide_spaces');
    }

    public get hide_rooms() {
        return this._settings.get('app.general.hide_rooms');
    }

    constructor(
        private _state: LandingStateService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

    public async ngOnInit() {
        this._state.pollFreeSpaces();
    }

    public ngOnDestroy() {
        this._state.stopPollingFreeSpaces();
    }
}
