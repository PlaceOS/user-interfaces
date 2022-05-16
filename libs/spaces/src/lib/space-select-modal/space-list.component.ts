import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { Space } from '../space.class';

@Component({
    selector: `space-list`,
    template: `
        <h3 class="font-bold">Results</h3>
        <p count class="text-sm opacity-60">
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
                    class="relative p-2 rounded-lg w-full shadow border border-gray-200"
                >
                    <button
                        matRipple
                        select
                        class="absolute inset-0 flex items-center"
                        (click)="selectSpace(space)"
                    >
                        <div
                            class="relative w-24 h-24 rounded-xl bg-black/20 mr-4"
                        >
                            <div
                                class="absolute top-1 left-1 border border-white bg-black/50 rounded-full h-12 w-12 flex items-center justify-center text-white"
                            >
                                <app-icon>done</app-icon>
                            </div>
                        </div>
                        <div class="space-y-2 pb-4">
                            <div class="font-medium">
                                {{ space.name || 'Meeting Space' }}
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-blue-500">place</app-icon>
                                <p>{{ space.location }}</p>
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-blue-500"
                                    >people</app-icon
                                >
                                <p>
                                    {{
                                        space.capacity < 1 ? 2 : space.capacity
                                    }}
                                    People
                                </p>
                            </div>
                        </div>
                    </button>
                    <button
                        mat-icon-button
                        fav
                        class="absolute top-1 right-1"
                        (click)="toggleFavourite(space)"
                    >
                        <app-icon>favorite_border</app-icon>
                    </button>
                </li>
            </ul>
        </ng-container>
        <ng-template #empty_state>
            <div empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30">No available spaces for selected time and/or filters</p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div loading
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">Finding available spaces...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                padding: 0.5rem;
            }
        `,
    ],
})
export class SpaceListComponent {
    @Input() public selected: string[] = [];
    @Output() public onSelect = new EventEmitter<Space>();

    public readonly available_spaces = this._event_form.available_spaces;
    public readonly loading = this._event_form.loading;
    constructor(
        private _event_form: EventFormService,
        private _settings: SettingsService
    ) {}

    public ngOnInit() {
        this._event_form.setView('find');
    }

    public isFavourite(space_id: string) {
        const fav_list =
            this._settings.get<string[]>('user.favourite_spaces') || [];
        return fav_list.includes(space_id);
    }

    public selectSpace(space: Space) {
        this.onSelect.emit(space);
    }

    public toggleFavourite(space: Space) {
        const fav_list =
            this._settings.get<string[]>('user.favourite_spaces') || [];
        const new_state = !fav_list.includes(space.id);
        if (new_state) {
            this._settings.saveUserSetting('user.favourite_spaces', [
                ...fav_list,
                space.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                'user.favourite_spaces',
                fav_list.filter((_) => _ !== space.id)
            );
        }
    }
}
