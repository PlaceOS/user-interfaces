import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { differenceInDays } from 'date-fns';
import { Space } from '../space.class';

@Component({
    selector: `space-list`,
    template: `
        <h3 class="font-bold">Results</h3>
        <p count class="text-sm opacity-60 mb-4" i18n>
            {{ (available_spaces | async)?.length || 0 }} result(s) found
        </p>
        <ng-container *ngIf="!(loading | async); else load_state">
            <ul
                class="list-style-none space-y-2"
                *ngIf="(available_spaces | async)?.length; else empty_state"
            >
                <li
                    space
                    *ngFor="let space of available_spaces | async"
                    [class.!border-blue-400]="active === space.id"
                    class="relative p-2 rounded-lg w-full shadow border bg-white dark:bg-neutral-700 border-gray-200 dark:border-neutral-500"
                >
                    <button
                        matRipple
                        select
                        class="w-full h-full flex items-center"
                        (click)="selectSpace(space)"
                    >
                        <div
                            class="relative w-20 h-20 rounded-xl bg-black/20 dark:bg-white/30 mr-4 overflow-hidden flex items-center justify-center"
                        >
                            <div
                                class="absolute top-1 left-1 border border-white bg-black/50 rounded-full h-6 w-6 flex items-center justify-center text-white"
                                *ngIf="selected.includes(space.id)"
                            >
                                <app-icon>done</app-icon>
                            </div>
                            <img
                                *ngIf="
                                    space.images?.length;
                                    else space_placeholder
                                "
                                class="object-cover h-full"
                                [src]="space.images[0]"
                            />
                            <ng-template #space_placeholder>
                                <img
                                    class="m-auto"
                                    src="assets/icons/room-placeholder.svg"
                                />
                            </ng-template>
                        </div>
                        <div class="space-y-2">
                            <div class="font-medium truncate mr-10">
                                {{
                                    space.display_name ||
                                        space.name ||
                                        'Meeting Space'
                                }}
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-blue-500">place</app-icon>
                                <p>
                                    {{
                                        space.location ||
                                            level(space.zones)?.display_name ||
                                            level(space.zones)?.name
                                    }}
                                </p>
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-blue-500"
                                    >people</app-icon
                                >
                                <p i18n>
                                    {{
                                        space.capacity < 1 ? 2 : space.capacity
                                    }}
                                    People
                                </p>
                            </div>
                        </div>
                    </button>
                    <button
                        icon
                        matRipple
                        fav
                        class="absolute top-1 right-1"
                        [class.text-blue-400]="isFavourite(space.id)"
                        (click)="toggleFav.emit(space)"
                    >
                        <app-icon>{{
                            isFavourite(space.id)
                                ? 'favorite'
                                : 'favorite_border'
                        }}</app-icon>
                    </button>
                </li>
            </ul>
        </ng-container>
        <ng-template #empty_state>
            <div
                empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30 text-center" i18n>
                    No available spaces for selected time and/or filters
                </p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                loading
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30" i18n>Finding available spaces...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                padding: 0.5rem;
                overflow: auto;
            }
        `,
    ],
})
export class SpaceListComponent {
    @Input() public active: string = '';
    @Input() public selected: string = '';
    @Input() public favorites: string[] = [];
    @Output() public onSelect = new EventEmitter<Space>();
    @Output() public toggleFav = new EventEmitter<Space>();
    public readonly loading = this._event_form.loading;

    public readonly available_spaces = this._event_form.available_spaces;

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService
    ) {}

    public level(zones: string[]) {
        return this._org.levelWithID(zones);
    }

    public ngOnInit() {
        this._event_form.setView('find');
    }

    public isFavourite(space_id: string) {
        return this.favorites.includes(space_id);
    }

    public selectSpace(space: Space) {
        this.onSelect.emit(space);
    }
}
