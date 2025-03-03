import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { BookingAsset, BookingFormService } from '../booking-form.service';

@Component({
    selector: `parking-space-list`,
    template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: (assets | async)?.length || 0 }
            }}
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
                    class="relative w-full rounded-lg border border-base-200 bg-base-100 p-2 shadow"
                >
                    <button
                        matRipple
                        select
                        class="flex h-full w-full items-center"
                        (click)="selectSpace(space)"
                    >
                        <div
                            class="relative mr-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl bg-base-200"
                        >
                            <div
                                class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white"
                                *ngIf="selected.includes(space.id)"
                            >
                                <app-icon>done</app-icon>
                            </div>
                            <img
                                auth
                                *ngIf="space.images?.length; else placeholder"
                                class="h-full object-cover"
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
                            <div class="mr-10 truncate font-medium">
                                {{ space.name || 'Meeting Space' }}
                            </div>
                            <div class="flex items-center space-x-2 text-sm">
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
                        </div>
                    </button>
                    <button
                        icon
                        matRipple
                        fav
                        class="absolute right-1 top-1"
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
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.PARKING_LIST_EMPTY' | translate }}
                </p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                loading
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'BOOKINGS.PARKING_LIST_LOADING' | translate }}
                </p>
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
    standalone: false,
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
            _.filter((i) => !show_fav || this.isFavourite(i.id)),
        ),
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
