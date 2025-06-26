import { Component, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { ExploreSpacesService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-availability',
    template: `
        <div class="py-2">
            @if (!hide_rooms || !hide_spaces) {
                <div class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
                    {{ 'APP.WORKPLACE.AVAILABLE_LIST_HEADER' | translate }}
                </div>
            }
            @if (!hide_spaces) {
                <div
                    class="flex items-center space-x-2 px-4 text-sm sm:text-base"
                >
                    <div>
                        {{ 'APP.WORKPLACE.AVAILABLE_LIST_SPACES' | translate }}
                    </div>
                </div>
            }
            @if (!hide_spaces) {
                <div
                    class="mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2"
                    [class.mb-4]="!hide_rooms"
                >
                    @for (lvl of levels_free | async; track lvl) {
                        <button
                            name="landing-view-space"
                            matRipple
                            class="flex w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                            [routerLink]="['/explore']"
                            [queryParams]="{ level: lvl.id }"
                        >
                            <div
                                class="flex h-16 w-16 min-w-[4rem] items-center justify-center overflow-hidden rounded bg-base-200"
                            >
                                @if (lvl?.images?.length) {
                                    <img
                                        auth
                                        [source]="lvl?.images[0]"
                                        class="h-full w-full object-cover object-center"
                                    />
                                } @else {
                                    <img
                                        class="h-1/2 w-1/2 object-contain object-center"
                                        src="assets/icons/desk-placeholder.svg"
                                    />
                                }
                            </div>
                            <div class="text-left">
                                <div
                                    class="max-w-full truncate px-1.5 font-medium"
                                >
                                    {{ lvl.display_name || lvl.name }}
                                </div>
                                <div
                                    class="flex max-w-full items-center truncate text-sm opacity-60"
                                >
                                    <icon class="text-blue-500 text-lg"
                                        >place</icon
                                    >
                                    <span>{{
                                        building(lvl.parent_id)?.display_name ||
                                            building(lvl.parent_id)?.name
                                    }}</span>
                                </div>
                            </div>
                        </button>
                    }
                    @if (!(levels_free | async).length) {
                        <span class="mb-2 text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.AVAILABLE_LIST_SPACES_EMPTY'
                                    | translate
                            }}
                        </span>
                    }
                </div>
            }
            @if (!hide_rooms) {
                <div
                    class="flex items-center space-x-2 px-4 text-sm sm:text-base"
                >
                    <div>
                        {{ 'APP.WORKPLACE.AVAILABLE_LIST_ROOMS' | translate }}
                    </div>
                    @if (loading_spaces | async) {
                        <mat-spinner diameter="24"></mat-spinner>
                    }
                </div>
            }
            @if (!hide_rooms) {
                <div
                    class="mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2"
                >
                    @for (
                        space of space_list | async;
                        track trackBySpaceId($index, space)
                    ) {
                        <button
                            name="landing-book-room"
                            matRipple
                            class="flex w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                            (click)="book(space)"
                        >
                            <div
                                class="flex h-16 w-16 min-w-[4rem] items-center justify-center overflow-hidden rounded bg-base-200"
                            >
                                @if (
                                    (space.id | space | async)?.images?.length
                                ) {
                                    <img
                                        auth
                                        [source]="
                                            (space.id | space | async)
                                                ?.images[0]
                                        "
                                        class="h-full w-full object-cover object-center"
                                    />
                                } @else {
                                    <img
                                        class="h-1/2 w-1/2 object-contain object-center"
                                        src="assets/icons/room-placeholder.svg"
                                    />
                                }
                            </div>
                            <div class="text-left">
                                <div
                                    class="max-w-full truncate px-1.5 font-medium"
                                >
                                    {{ space.display_name || space.name }}
                                </div>
                                <div
                                    class="flex max-w-full items-center truncate text-sm opacity-60"
                                >
                                    <icon class="text-blue-500 text-lg"
                                        >place</icon
                                    >
                                    <span>{{
                                        level(space.zones)?.display_name ||
                                            level(space.zones)?.name
                                    }}</span>
                                </div>
                            </div>
                        </button>
                    }
                    @if (!(space_list | async)?.length) {
                        <span class="mb-2 text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.AVAILABLE_LIST_ROOMS_EMPTY'
                                    | translate
                            }}
                        </span>
                    }
                </div>
            }
        </div>
    `,
    styles: [
        `
            * {
                flex-shrink: 0;
            }
        `,
    ],
    providers: [ExploreSpacesService],
    standalone: false,
})
export class LandingAvailabilityComponent {
    private _state = inject(LandingStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _explore = inject(ExploreSpacesService);

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
}
