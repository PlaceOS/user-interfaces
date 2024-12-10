import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { ExploreSpacesService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-availability',
    template: `
        <div class="py-2">
            <div
                class="sm:text-lg font-medium mb-2 sm:mb-4 px-4"
                *ngIf="!hide_rooms || !hide_spaces"
            >
                {{ 'WPA.AVAILABLE_NOW' | translate }}
            </div>
            <div
                class="flex items-center text-sm sm:text-base px-4 space-x-2"
                *ngIf="!hide_spaces"
            >
                <div>{{ 'WPA.SPACES' | translate }}</div>
            </div>
            <div
                class="w-[calc(100%-2rem)] overflow-auto flex items-center space-x-2 mx-4 py-2 snap-x"
                [class.mb-4]="!hide_rooms"
                *ngIf="!hide_spaces"
            >
                <button
                    name="landing-view-space"
                    matRipple
                    *ngFor="let lvl of levels_free | async"
                    class="w-64 p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100 snap-start"
                    [routerLink]="['/explore']"
                    [queryParams]="{ level: lvl.id }"
                >
                    <div
                        class="min-w-[4rem] w-16 h-16 rounded bg-base-200 flex items-center justify-center overflow-hidden"
                    >
                        <img
                            auth
                            *ngIf="lvl?.images?.length; else placeholder"
                            [source]="lvl?.images[0]"
                            class="h-full w-full object-cover object-center"
                        />
                        <ng-template #placeholder>
                            <img
                                class="h-1/2 w-1/2 object-contain object-center"
                                src="assets/icons/desk-placeholder.svg"
                            />
                        </ng-template>
                    </div>
                    <div class="text-left">
                        <div class="max-w-full truncate px-1.5 font-medium">
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
                >
                    {{ 'WPA.NO_FREE_SPACES' | translate }}
                </span>
            </div>
            <div
                class="flex items-center text-sm sm:text-base px-4 space-x-2"
                *ngIf="!hide_rooms"
            >
                <div>{{ 'WPA.ROOMS' | translate }}</div>
                <mat-spinner
                    diameter="24"
                    *ngIf="loading_spaces | async"
                ></mat-spinner>
            </div>
            <div
                class="w-[calc(100%-2rem)] overflow-auto flex items-center space-x-2 mx-4 py-2 snap-x"
                *ngIf="!hide_rooms"
            >
                <button
                    name="landing-book-room"
                    matRipple
                    *ngFor="
                        let space of space_list | async;
                        trackBy: trackBySpaceId
                    "
                    class="w-64 p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100 snap-start"
                    (click)="book(space)"
                >
                    <div
                        class="min-w-[4rem] w-16 h-16 rounded bg-base-200 flex items-center justify-center overflow-hidden"
                    >
                        <img
                            auth
                            *ngIf="
                                (space.id | space | async)?.images?.length;
                                else space_placeholder
                            "
                            [source]="(space.id | space | async)?.images[0]"
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div class="text-left">
                        <div class="max-w-full truncate px-1.5 font-medium">
                            {{ space.display_name || space.name }}
                        </div>
                        <div
                            class="max-w-full truncate text-sm opacity-60 flex items-center"
                        >
                            <app-icon class="text-blue-500 text-lg"
                                >place</app-icon
                            >
                            <span>{{
                                level(space.zones)?.display_name ||
                                    level(space.zones)?.name
                            }}</span>
                        </div>
                    </div>
                </button>
                <span
                    *ngIf="!(space_list | async)?.length"
                    class="opacity-60 text-sm mb-2"
                >
                    {{ 'WPA.NO_FREE_ROOMS' | translate }}
                </span>
            </div>
        </div>
        <ng-template #space_placeholder>
            <img
                class="h-1/2 w-1/2 object-contain object-center"
                src="assets/icons/room-placeholder.svg"
            />
        </ng-template>
    `,
    styles: [
        `
            * {
                flex-shrink: 0;
            }
        `,
    ],
    providers: [ExploreSpacesService],
})
export class LandingAvailabilityComponent {
    public readonly space_list = this._state.free_space_list;
    public readonly loading_spaces = this._state.loading_spaces;
    public readonly levels_free = this._state.level_occupancy;

    public book = (s) => this._explore.bookSpace(s, true);

    public trackBySpaceId(index: number, space: Space) {
        return space.id;
    }

    public level(zones: string[]) {
        return this._org.levelWithID(zones);
    }

    public building(id: string) {
        return this._org.buildings.find((bld) => bld.id === id);
    }

    public get hide_spaces() {
        return this._settings.get('app.hide_landing_spaces');
    }

    public get hide_rooms() {
        return this._settings.get('app.hide_landing_rooms');
    }

    constructor(
        private _state: LandingStateService,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _explore: ExploreSpacesService,
    ) {}
}
