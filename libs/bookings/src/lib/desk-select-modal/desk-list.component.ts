import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingAsset, BookingFormService } from '../booking-form.service';

@Component({
    selector: 'desk-list',
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                padding: 0.5rem;
                background: rgba(0, 0, 0, 0.05);
                overflow-y: auto;
            }
        `,
    ],
    template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: (desks | async)?.length || 0 }
            }}
        </p>
        <ng-container *ngIf="!(loading | async)?.length; else load_state">
            <ul
                class="list-style-none space-y-2"
                *ngIf="(desks | async)?.length; else empty_state"
            >
                <li
                    desk
                    *ngFor="let desk of desks | async"
                    class="relative w-full overflow-hidden rounded-lg border border-base-200 bg-base-100 shadow"
                    [class.!border-info]="active === desk.id"
                >
                    <button
                        name="select-desk"
                        matRipple
                        class="flex h-full w-full p-2"
                        (click)="selectDesk(desk)"
                    >
                        <div
                            class="relative mr-4 flex h-20 w-20 items-center justify-center rounded-xl bg-base-200"
                        >
                            <div
                                class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white"
                                *ngIf="selected.includes(desk.id)"
                            >
                                <app-icon>done</app-icon>
                            </div>
                            <img
                                auth
                                *ngIf="desk.images?.length; else placeholder"
                                class="h-full object-cover"
                                [source]="desk.images[0]"
                            />
                            <ng-template #placeholder>
                                <img
                                    class="m-auto"
                                    src="assets/icons/desk-placeholder.svg"
                                />
                            </ng-template>
                        </div>
                        <div class="flex-1 space-y-2 pt-2 text-left">
                            <span class="font-medium">
                                {{ desk.name || desk.id || 'Desk' }}
                            </span>
                            <div class="flex items-center space-x-2 text-sm">
                                <app-icon class="text-info">place</app-icon>
                                <p class="text-xs">
                                    {{
                                        desk.zone?.display_name ||
                                            desk.zone?.name ||
                                            '&lt;No Level&gt;'
                                    }}
                                </p>
                            </div>
                        </div>
                    </button>
                    <button
                        icon
                        matRipple
                        name="toggle-desk-favourite"
                        class="absolute right-1 top-1"
                        [class.text-info]="isFavourite(desk.id)"
                        (click)="toggleFav.emit(desk)"
                    >
                        <app-icon>{{
                            isFavourite(desk.id)
                                ? 'favorite'
                                : 'favorite_border'
                        }}</app-icon>
                    </button>
                </li>
            </ul>
        </ng-container>
        <ng-template #load_state>
            <div
                loading
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'BOOKINGS.DESK_LIST_LOADING' | translate }}
                </p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.DESK_LIST_EMPTY' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    standalone: false,
})
export class DeskListComponent {
    @Input() public active = '';
    @Input() public selected = '';
    @Input() public favorites: string[] = [];
    @Output() public onSelect = new EventEmitter<BookingAsset>();
    @Output() public toggleFav = new EventEmitter<BookingAsset>();

    public readonly desks = combineLatest([
        this._state.options,
        this._state.available_resources,
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
    public readonly loading = this._state.loading;

    constructor(private _state: BookingFormService) {}

    public isFavourite(desk_id: string) {
        return this.favorites.includes(desk_id);
    }

    public selectDesk(desk: BookingAsset) {
        this.onSelect.emit(desk);
    }
}
