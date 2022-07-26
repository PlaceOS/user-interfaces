import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';
import { Desk } from '@placeos/organisation';

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
        <h3 class="font-bold">Results</h3>
        <p count class="text-sm opacity-60 mb-4">
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
                    class="relative p-2 rounded-lg w-full shadow border bg-white border-gray-200"
                >
                    <button
                        select
                        matRipple
                        class="w-full h-full flex"
                        (click)="selectDesk(desk)"
                    >
                        <div
                            class="relative w-20 h-20 rounded-xl bg-black/20 mr-4"
                        ></div>
                        <div class="space-y-2 pt-2 flex-1 text-left">
                            <span class="font-medium">
                                {{ desk.name || desk.id || 'Desk' }}
                            </span>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-blue-500">place</app-icon>
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
                        mat-icon-button
                        fav
                        class="absolute top-1 right-1"
                        [class.text-blue-400]="isFavourite(desk.id)"
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
    @Input() public selected: string = '';
    @Input() public favorites: string[] = [];
    @Output() public onSelect = new EventEmitter<Desk>();
    @Output() public toggleFav = new EventEmitter<Desk>();

    public readonly desks = this._state.available_assets;
    public readonly loading = this._state.loading;

    constructor(private _state: BookingFormService) {}

    public isFavourite(desk_id: string) {
        return this.favorites.includes(desk_id);
    }

    public selectDesk(desk: Desk) {
        this.onSelect.emit(desk);
    }
}
