import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { ExploreSpacesService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { LandingStateService } from './landing-state.service';
import { CalendarEventQueryParams } from '@placeos/events';
import { from, Observable } from 'rxjs';


@Component({
    selector: 'landing-availability',
    template: `
        <div class="py-2">



            <!-- ADDED BY: Mohamad Itani -->
            <!-- DATE: 2025-03-20 -->
            <!-- Date Picker -->
            <div class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
                <label for="date" class="mr-2"
                    >{{ 'FORM.DATE' | translate }}:</label
                >
                <mat-form-field appearance="fill">
                    <input
                        matInput
                        [matDatepicker]="picker"
                        [(ngModel)]="selectedDate"
                        (ngModelChange)="onDateChange($event)"
                    />
                    <mat-datepicker-toggle
                        matSuffix
                        [for]="picker"
                    ></mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                </mat-form-field>
            </div>





            <div
                class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg"
                *ngIf="!hide_rooms || !hide_spaces"
            >
                {{ 'APP.WORKPLACE.AVAILABLE_LIST_HEADER' | translate }}
            </div>
            <!-- MDI TASK: Remove available spaces due to client request-->
            <!--
            <div
                class="flex items-center space-x-2 px-4 text-sm sm:text-base"
                *ngIf="!hide_spaces"
            >
                <div>
                    {{ 'APP.WORKPLACE.AVAILABLE_LIST_SPACES' | translate }}
                </div>
            </div>
             <div
                class="mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2"
                [class.mb-4]="!hide_rooms"
                *ngIf="!hide_spaces"
            >
                <button
                    name="landing-view-space"
                    matRipple
                    *ngFor="let lvl of levels_free | async"
                    class="flex w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                    [routerLink]="['/explore']"
                    [queryParams]="{ level: lvl.id }"
                >
                    <div
                        class="flex h-16 w-16 min-w-[4rem] items-center justify-center overflow-hidden rounded bg-base-200"
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
                            class="flex max-w-full items-center truncate text-sm opacity-60"
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
                    class="mb-2 text-sm opacity-60"
                >
                    {{
                        'APP.WORKPLACE.AVAILABLE_LIST_SPACES_EMPTY' | translate
                    }}
                </span>
            </div> -->
            <div
                class="flex items-center space-x-2 px-4 text-sm sm:text-base"
                *ngIf="!hide_rooms"
            >
                <div>
                    {{ 'APP.WORKPLACE.AVAILABLE_LIST_ROOMS' | translate }}
                </div>
                <mat-spinner
                    diameter="24"
                    *ngIf="loading_spaces | async"
                ></mat-spinner>
            </div>
            <!-- MDI TASK: Convert Rooms Available from horizontal to vertical -->
            <div
                class="mx-4 flex w-[calc(100%-2rem)] snap-y flex-col space-y-2 overflow-auto py-2"
                *ngIf="!hide_rooms"
            >
            <!-- <div
                class="mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2"
                *ngIf="!hide_rooms"
            > -->

                <!-- MDI TASK: Convert Button class from w-64 to w-full to fix design -->
                <button
                    name="landing-book-room"
                    matRipple
                    *ngFor="
                        let space of space_list | async;
                        trackBy: trackBySpaceId
                    "
                    class="flex w-full snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                    (click)="book(space)"
                >
                    <div
                        class="flex h-16 w-16 min-w-[4rem] items-center justify-center overflow-hidden rounded bg-base-200"
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
                            class="flex max-w-full items-center truncate text-sm opacity-60"
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
                    class="mb-2 text-sm opacity-60"
                >
                    {{ 'APP.WORKPLACE.AVAILABLE_LIST_ROOMS_EMPTY' | translate }}
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
    standalone: false,
})
export class LandingAvailabilityComponent {

    // ADDED BY: Mohamad Itani
    // DATE: 2025-03-20
    selectedDate: Date | null = null; // Initialize with null or a default date

    public space_list = this._state.free_space_list;
    
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

    // Method to get the list of spaces as an array
    public getSpaces(newDate: number): Observable<Space[]> {
        return from(this._state.getAvailable(newDate));
    }

    // ADDED BY: Mohamad Itani
    // DATE: 2025-03-20
    public onDateChange(newDate: Date) {
        this.space_list = this.getSpaces(newDate.getTime());
    }
    
}
