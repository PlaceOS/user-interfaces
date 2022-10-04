import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CateringItem } from '../catering-item.class';
import { CateringStateService } from '../catering-state.service';
import { CateringOrderStateService } from './catering-order-state.service';

@Component({
    selector: 'catering-item-list',
    template: `
    <div class="w-full h-full overflow-auto py-2">
        <h3 class="font-bold px-2">Results</h3>
        <p count class="text-sm opacity-60 mb-4 px-2">
            {{ (item_list | async)?.length || 0 }} result(s) found
        </p>
        <ng-container *ngIf="!(loading | async); else load_state">
            <ul
                class="list-style-none space-y-2 p-2"
                *ngIf="(item_list | async)?.length; else empty_state"
            >
                <li
                    item
                    *ngFor="let item of item_list | async"
                    [class.!border-black]="active === item.id"
                    class="relative p-2 rounded-lg w-full shadow border bg-white dark:bg-neutral-600 border-gray-200 dark:border-neutral-500"
                >
                    <button
                        matRipple
                        select
                        class="w-full h-full flex items-center pr-10"
                        (click)="selectItem(item)"
                    >
                        <div
                            class="relative w-16 h-16 rounded-xl bg-black/20 mr-4"
                        >
                            <div
                                class="absolute top-1 left-1 border border-white bg-black/50 rounded-full h-6 w-6 flex items-center justify-center text-white text-xs"
                                *ngIf="selected.includes(item.id)"
                            >
                                {{ item.quantity || '1' }}
                            </div>
                        </div>
                        <div class="space-y-2 text-left flex-1">
                            <div class="font-medium flex items-center justify-between">
                                <div>{{ item.name || 'Item' }}</div>
                                <div class="opacity-60 text-xs">{{ item.category }}</div>
                            </div>
                            <div
                                class="flex items-center text-sm space-x-2"
                            >
                                <p *ngIf="item.unit_price">
                                    {{ item.unit_price / 100 | currency:code }}
                                </p>
                            </div>
                        </div>
                    </button>
                    <button
                        mat-icon-button
                        fav
                        class="absolute top-1 right-1"
                        [class.text-blue-400]="isFavourite(item.id)"
                        (click)="toggleFav.emit(item)"
                    >
                        <app-icon>{{
                            isFavourite(item.id)
                                ? 'favorite'
                                : 'favorite_border'
                        }}</app-icon>
                    </button>
                </li>
            </ul>
        </ng-container>
    </div>
    <ng-template #empty_state>
        <div
            empty
            class="p-16 flex flex-col items-center justify-center space-y-2"
        >
            <p class="opacity-30 text-center">
                No available items for selected time and/or filters
            </p>
        </div>
    </ng-template>
    <ng-template #load_state>
        <div
            loading
            class="p-16 flex flex-col items-center justify-center space-y-2"
        >
            <mat-spinner [diameter]="32"></mat-spinner>
            <p class="opacity-30">Finding available items...</p>
        </div>
    </ng-template>
    `,
    styles: [``],
})
export class CateringItemListComponent {
    @Input() public active: string = '';
    @Input() public selected: string = '';
    @Input() public favorites: string[] = [];
    @Output() public toggleFav = new EventEmitter<CateringItem>();
    @Output() public onSelect = new EventEmitter<CateringItem>();

    public readonly loading = this._state.loading;
    public readonly item_list = this._state.filtered_menu;

    public get code() {
        return this._state.currency_code;
    }

    constructor(private _state: CateringOrderStateService) {}

    public isFavourite(item_id: string) {
        return this.favorites.includes(item_id);
    }

    public selectItem(item: CateringItem) {
        this.onSelect.emit(item);
    }
}
