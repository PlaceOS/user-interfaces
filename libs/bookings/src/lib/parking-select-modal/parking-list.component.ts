import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventFormService } from '@placeos/events';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingAsset, BookingFormService } from '../booking-form.service';

@Component({
    selector: `parking-space-list`,
    template: `
        <h3 class="font-bold" i18n>Results</h3>
        <p count class="text-sm opacity-60 mb-4" i18n>
            {{ (assets | async)?.length || 0 }} result(s) found
        </p>
        <ng-container *ngIf="!(loading | async); else load_state">
            <ul
                class="list-style-none space-y-2"
                *ngIf="(assets | async)?.length; else empty_state"
            >
                <li
                    space
                    *ngFor="let space of assets | async"
                    [class.!border-info]="active === space.id"
                    class="relative p-2 rounded-lg w-full shadow border bg-base-100 border-base-200"
                >
                    <button
                        matRipple
                        select
                        class="w-full h-full flex items-center"
                        (click)="selectSpace(space)"
                    >
                        <div
                            class="relative w-20 h-20 rounded-xl bg-base-200 mr-4 overflow-hidden flex items-center justify-center"
                        >
                            <div
                                class="absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white"
                                *ngIf="selected.includes(space.id)"
                            >
                                <app-icon>done</app-icon>
                            </div>
                            <img
                                auth
                                *ngIf="space.images?.length; else placeholder"
                                class="object-cover h-full"
                                [source]="space.images[0]"
                            />
                            <ng-template #placeholder>
                                <img
                                    class="m-auto"
                                    src="assets/icons/car-placeholder.svg"
                                />
                            </ng-template>
                        </div>
                        <div class="space-y-2">
                            <div class="font-medium truncate mr-10">
                                {{ space.name || 'Meeting Space' }}
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-info">place</app-icon>
                                <p>
                                    {{
                                        space.location ||
                                            space.level?.display_name ||
                                            space.level?.name ||
                                            space.zone?.display_name ||
                                            space.zone?.name
                                    }}
                                </p>
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-info">people</app-icon>
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
                        [class.text-info]="isFavourite(space.id)"
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
export class ParkingSpaceListComponent {
    @Input() public active: string = '';
    @Input() public selected: string = '';
    @Input() public favorites: string[] = [];
    @Output() public onSelect = new EventEmitter<BookingAsset>();
    @Output() public toggleFav = new EventEmitter<BookingAsset>();

    public readonly assets = combineLatest([
        this._form.options,
        this._form.available_resources,
    ]).pipe(
        map(([{ show_fav }, _]) =>
            _.filter((i) => !show_fav || this.isFavourite(i.id))
        )
    );
    public readonly loading = this._form.loading;

    constructor(private _form: BookingFormService) {}

    public isFavourite(space_id: string) {
        return this.favorites.includes(space_id);
    }

    public selectSpace(space: BookingAsset) {
        this.onSelect.emit(space);
    }
}
