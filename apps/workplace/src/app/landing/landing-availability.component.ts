import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { settingSignal, Space } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    BuildingPipe,
    IconComponent,
    LevelPipe,
    TranslatePipe,
} from '@placeos/components';
import { ExploreSpacesService } from '@placeos/explore';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-availability',
    template: `
        <div class="py-2">
            @if (!hide_rooms() || !hide_spaces()) {
                <div class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
                    {{ 'APP.WORKPLACE.AVAILABLE_LIST_HEADER' | translate }}
                </div>
            }
            @if (!hide_spaces()) {
                <div
                    class="flex items-center space-x-2 px-4 text-sm sm:text-base"
                >
                    <div>
                        {{ 'APP.WORKPLACE.AVAILABLE_LIST_SPACES' | translate }}
                    </div>
                </div>
            }
            @if (!hide_spaces()) {
                <div
                    class="mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2"
                    [class.mb-4]="!hide_rooms()"
                >
                    @for (lvl of levels_free(); track lvl) {
                        <button
                            name="landing-view-space"
                            matRipple
                            class="border-base-200 bg-base-100 flex w-64 snap-start items-center space-x-2 rounded-sm border p-2 shadow-sm"
                            [routerLink]="['/explore']"
                            [queryParams]="{ level: lvl.id }"
                        >
                            <div
                                class="bg-base-200 flex h-16 w-16 min-w-16 items-center justify-center overflow-hidden rounded-sm"
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
                            <div class="w-1/2 flex-1 space-y-1 text-left">
                                <div
                                    class="max-w-full truncate px-1.5 font-medium"
                                >
                                    {{ lvl.display_name || lvl.name }}
                                </div>
                                <div
                                    class="flex max-w-full items-center truncate text-sm opacity-60"
                                >
                                    <icon class="text-lg text-blue-500"
                                        >place</icon
                                    >
                                    @let building = lvl.parent_id | building;
                                    <div class="flex-1 truncate">
                                        {{
                                            building?.display_name ||
                                                building?.name
                                        }}
                                    </div>
                                </div>
                            </div>
                        </button>
                    }
                    @if (!levels_free().length) {
                        <span class="mb-2 text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.AVAILABLE_LIST_SPACES_EMPTY'
                                    | translate
                            }}
                        </span>
                    }
                </div>
            }
            @if (!hide_rooms()) {
                <div
                    class="flex items-center space-x-2 px-4 text-sm sm:text-base"
                >
                    <div>
                        {{ 'RESOURCE.ROOMS' | translate }}
                    </div>
                    @if (loading_spaces()) {
                        <mat-spinner diameter="24"></mat-spinner>
                    }
                </div>
            }
            @if (!hide_rooms()) {
                <div
                    class="mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2"
                >
                    @for (
                        space of space_list();
                        track trackBySpaceId($index, space)
                    ) {
                        <button
                            name="landing-book-room"
                            matRipple
                            class="border-base-200 bg-base-100 flex w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                            (click)="book(space)"
                        >
                            <div
                                class="bg-base-200 flex h-16 w-16 min-w-16 items-center justify-center overflow-hidden rounded-sm"
                            >
                                @if (space.images?.length) {
                                    <img
                                        auth
                                        [source]="space.images[0]"
                                        class="h-full w-full object-cover object-center"
                                    />
                                } @else {
                                    <img
                                        class="h-1/2 w-1/2 object-contain object-center"
                                        src="assets/icons/room-placeholder.svg"
                                    />
                                }
                            </div>
                            <div class="w-1/2 flex-1 space-y-1 text-left">
                                <div
                                    class="max-w-full truncate px-1.5 font-medium"
                                >
                                    {{ space.display_name || space.name }}
                                </div>
                                <div
                                    class="flex max-w-full items-center truncate text-sm opacity-60"
                                >
                                    <icon class="text-lg text-blue-500"
                                        >place</icon
                                    >
                                    @let level = space.zones | level;
                                    <div class="flex-1 truncate">
                                        {{ level?.display_name || level?.name }}
                                    </div>
                                </div>
                            </div>
                        </button>
                    }
                    @if (!space_list().length) {
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
                shrink: 0;
            }
        `,
    ],
    providers: [ExploreSpacesService],
    imports: [
        CommonModule,
        TranslatePipe,
        LevelPipe,
        BuildingPipe,
        MatProgressSpinnerModule,
        RouterModule,
        IconComponent,
        AuthenticatedImageDirective,
    ],
})
export class LandingAvailabilityComponent {
    private _state = inject(LandingStateService);
    private _explore = inject(ExploreSpacesService);

    public readonly space_list = this._state.free_space_list;
    public readonly loading_spaces = this._state.loading_spaces;
    public readonly levels_free = this._state.level_occupancy;
    public readonly hide_spaces = settingSignal<boolean>('hide_landing_spaces');
    public readonly hide_rooms = settingSignal<boolean>('hide_landing_rooms');

    public book = (s) => this._explore.bookSpace(s, true);

    public trackBySpaceId(index: number, space: Space) {
        return space.id;
    }
}
