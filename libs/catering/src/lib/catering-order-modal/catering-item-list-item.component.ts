import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CateringItem } from '../catering-item.class';

@Component({
    selector: 'catering-item-list-item',
    template: `
        <li
            item
            [class.!border-black]="active"
            class="relative p-2 rounded-lg w-full shadow border bg-white dark:bg-neutral-600 border-gray-200 dark:border-neutral-500 sm:w-[20rem]"
        >
            <button
                matRipple
                select
                class="w-full h-full flex items-center"
                (click)="select.emit()"
            >
                <div
                    class="relative w-16 h-16 rounded-xl bg-black/20 mr-4 overflow-hidden border border-gray-100 dark:border-neutral-600"
                >
                    <div
                        class="absolute top-1 left-1 border border-white bg-black/50 rounded-full h-6 w-6 flex items-center justify-center text-white text-xs"
                        *ngIf="item.quantity && selected"
                    >
                        {{ item.quantity || '1' }}
                    </div>
                    <img
                        *ngIf="item.images?.length"
                        class="object-cover min-h-full min-w-full"
                        [src]="item.images[0]"
                    />
                </div>
                <div class="space-y-2 text-left flex-1">
                    <div class="font-medium flex flex-col pr-10">
                        <div>{{ item.name || 'Item' }}</div>
                        <div class="opacity-60 text-xs">
                            {{ item.category }}
                        </div>
                    </div>
                    <div class="flex items-center text-sm space-x-1">
                        <p class="flex-1 w-px" *ngIf="item.unit_price">
                            {{ item.unit_price / 100 | currency: code }}
                        </p>
                        <div
                            class="text-xs h-5 w-7 rounded-xl shadow bg-green-500 flex items-center justify-center"
                            *ngIf="item.tags?.includes('Gluten Free')"
                        >
                            GF
                        </div>
                        <div
                            class="text-xs h-5 w-7 rounded-xl shadow bg-blue-600 flex items-center justify-center"
                            *ngIf="item.tags?.includes('Vegan')"
                        >
                            VG
                        </div>
                        <div
                            class="text-xs h-5 w-7 rounded-xl shadow bg-blue-400 flex items-center justify-center"
                            *ngIf="item.tags?.includes('Vegetarian')"
                        >
                            V
                        </div>
                        <div
                            class="text-xs h-5 w-7 rounded-xl shadow bg-yellow-500 flex items-center justify-center"
                            *ngIf="item.tags?.includes('Contains Dairy')"
                        >
                            D
                        </div>
                        <div
                            class="text-xs h-5 w-7 rounded-xl shadow bg-orange-600 flex items-center justify-center"
                            *ngIf="item.tags?.includes('Contains Nuts')"
                        >
                            N
                        </div>
                    </div>
                </div>
            </button>
            <button
                mat-icon-button
                fav
                class="absolute top-1 right-1"
                [class.text-blue-400]="favourite"
                (click)="toggleFav.emit()"
            >
                <app-icon>{{
                    favourite ? 'favorite' : 'favorite_border'
                }}</app-icon>
            </button>
        </li>
    `,
    styles: [``],
})
export class CateringItemListItemComponent {
    @Input() public item: CateringItem;
    @Input() public active = false;
    @Input() public selected = false;
    @Input() public favourite = false;
    @Output() public toggleFav = new EventEmitter();
    @Output() public select = new EventEmitter();
}
