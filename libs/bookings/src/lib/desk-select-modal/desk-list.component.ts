import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingFormService, BookingAsset } from '../booking-form.service';

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
        <h3 class="font-bold" i18n>Results</h3>
        <p count class="text-sm opacity-60 mb-4" i18n>
            {{ (desks | async)?.length || 0 }} result(s) found
        </p>
        <ng-container *ngIf="!(loading | async)?.length; else load_state">
            <ul
                class="list-style-none space-y-2"
                *ngIf="(desks | async)?.length; else empty_state"
            >
                <li
                    desk
                    *ngFor="let desk of desks | async"
                    class="relative rounded-lg w-full shadow border bg-base-100 border-base-200 overflow-hidden"
                    [class.!border-info]="active === desk.id"
                >
                    <button
                        name="select-desk"
                        matRipple
                        class="w-full h-full flex p-2"
                        (click)="selectDesk(desk)"
                    >
                        <div
                            class="relative w-20 h-20 rounded-xl bg-base-200 mr-4 flex items-center justify-center"
                        >
                            <div
                                class="absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white"
                                *ngIf="selected.includes(desk.id)"
                            >
                                <app-icon>done</app-icon>
                            </div>
                            <img
                                auth
                                *ngIf="desk.images?.length; else placeholder"
                                class="object-cover h-full"
                                [source]="desk.images[0]"
                            />
                            <ng-template #placeholder>
                                <img
                                    class="m-auto"
                                    src="assets/icons/desk-placeholder.svg"
                                />
                            </ng-template>
                        </div>
                        <div class="space-y-2 pt-2 flex-1 text-left">
                            <span class="font-medium">
                                {{ desk.name || desk.id || 'Desk' }}
                            </span>
                            <div class="flex items-center text-sm space-x-2">
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
                        class="absolute top-1 right-1"
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
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">Finding available desks...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div
                empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30 text-center">
                    No available desk for selected time and/or filters
                </p>
            </div>
        </ng-template>
    `,
})
export class DeskListComponent {
    @Input() public active: string = '';
    @Input() public selected: string = '';
    @Input() public favorites: string[] = [];
    @Output() public onSelect = new EventEmitter<BookingAsset>();
    @Output() public toggleFav = new EventEmitter<BookingAsset>();

    public readonly desks = combineLatest([
        this._state.options,
        this._state.available_resources,
    ]).pipe(
        map(([{ show_fav }, _]) =>
            _.filter((i) => !show_fav || this.isFavourite(i.id))
        )
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
