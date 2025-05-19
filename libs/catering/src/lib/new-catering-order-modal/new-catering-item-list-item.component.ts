import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { CateringItem } from '../catering-item.class';

@Component({
    selector: 'new-catering-item-list-item',
    template: `
        <li
            item
            [class.!border-base-200]="active"
            matRipple
            class="relative w-full rounded-lg border border-base-200 bg-base-100 p-2 shadow"
        >
            <button
                name="select-catering-item"
                class="z-0 flex h-full w-full items-center"
                (click)="select.emit()"
            >
                <div
                    class="relative mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-base-200 bg-neutral"
                >
                    <div
                        class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-white bg-neutral text-xs text-white"
                        *ngIf="item.quantity && selected"
                    >
                        {{ item.quantity || '1' }}
                    </div>
                    <img
                        auth
                        *ngIf="item.images?.length; else placeholder"
                        class="min-h-full min-w-full object-cover"
                        [source]="item.images[0]"
                    />
                    <ng-template #placeholder>
                        <img
                            class="m-auto"
                            src="assets/icons/catering-placeholder.svg"
                        />
                    </ng-template>
                </div>
                <div class="flex-1 space-y-2 text-left">
                    <div class="flex flex-col pr-10 font-medium">
                        <div>{{ item.name || 'Item' }}</div>
                        <div class="text-xs opacity-60">
                            {{ item.category }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-1 text-sm">
                        <p
                            class="w-px flex-1 rounded bg-base-100"
                            *ngIf="item.unit_price"
                        >
                            {{ item.unit_price / 100 | currency: code }}
                        </p>
                        <div
                            class="rounded-2xl border border-base-200 px-2 py-1 text-xs shadow"
                            *ngIf="item.option_list?.length"
                        >
                            {{ options }}
                        </div>
                        <div
                            class="flex h-5 w-7 items-center justify-center rounded-xl bg-success text-xs shadow"
                            *ngIf="item.tags?.includes('Gluten Free')"
                        >
                            GF
                        </div>
                        <div
                            class="flex h-5 w-7 items-center justify-center rounded-xl bg-info text-xs shadow"
                            *ngIf="item.tags?.includes('Vegan')"
                        >
                            VG
                        </div>
                        <div
                            class="flex h-5 w-7 items-center justify-center rounded-xl bg-info text-xs shadow"
                            *ngIf="item.tags?.includes('Vegetarian')"
                        >
                            V
                        </div>
                        <div
                            class="flex h-5 w-7 items-center justify-center rounded-xl bg-warning text-xs shadow"
                            *ngIf="item.tags?.includes('Contains Dairy')"
                        >
                            D
                        </div>
                        <div
                            class="bg-orange-600 flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow"
                            *ngIf="item.tags?.includes('Contains Nuts')"
                        >
                            N
                        </div>
                    </div>
                </div>
            </button>
            <button
                icon
                matRipple
                name="toggle-catering-item-favourite"
                class="absolute right-1 top-1"
                [class.text-info]="favourite"
                (click)="toggleFav.emit()"
            >
                <icon
                    [className]="
                        favourite
                            ? 'material-symbols-rounded'
                            : 'material-symbols-outlined'
                    "
                    >favorite</icon
                >
            </button>
        </li>
    `,
    styles: [``],
    imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        AuthenticatedImageDirective,
    ],
})
export class NewCateringItemListItemComponent {
    @Input() public item: CateringItem;
    @Input() public active = false;
    @Input() public selected = false;
    @Input() public favourite = false;
    @Input() public code = 'USD';
    @Output() public toggleFav = new EventEmitter();
    @Output() public select = new EventEmitter();

    public get options() {
        return this.item.option_list?.map((_) => _.name).join(', ');
    }
}
