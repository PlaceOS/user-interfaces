import { Component, inject, input, output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
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
        @if (!(loading | async)) {
            @if ((assets | async)?.length) {
                <ul class="list-style-none space-y-2">
                    @for (space of assets | async; track space) {
                        <li
                            space
                            [class.!border-info]="active() === space.id"
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
                                    @if (selected().includes(space.id)) {
                                        <div
                                            class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (space.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="space.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/car-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="space-y-2">
                                    <div class="mr-10 truncate font-medium">
                                        {{ space.name || 'Meeting Space' }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
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
                                <icon
                                    [className]="
                                        isFavourite(space.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.PARKING_LIST_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div
                loading
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'BOOKINGS.PARKING_LIST_LOADING' | translate }}
                </p>
            </div>
        }
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
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        AuthenticatedImageDirective,
    ],
})
export class ParkingSpaceListComponent {
    private _form = inject(BookingFormService);

    public readonly active = input('');
    public readonly selected = input('');
    public readonly favorites = input<string[]>([]);
    public readonly onSelect = output<BookingAsset>();
    public readonly toggleFav = output<BookingAsset>();

    public readonly assets = combineLatest([
        this._form.options,
        this._form.available_resources,
    ]).pipe(
        map(([{ show_fav }, _]) =>
            _.filter((i) => !show_fav || this.isFavourite(i.id)).sort(
                (a, b) => {
                    const a_fav = this.isFavourite(a.id) ? 1 : 0;
                    const b_fav = this.isFavourite(b.id) ? 1 : 0;
                    return b_fav - a_fav;
                },
            ),
        ),
    );
    public readonly loading = this._form.loading;

    public isFavourite(space_id: string) {
        return this.favorites().includes(space_id);
    }

    public selectSpace(space: BookingAsset) {
        this.onSelect.emit(space);
    }
}
