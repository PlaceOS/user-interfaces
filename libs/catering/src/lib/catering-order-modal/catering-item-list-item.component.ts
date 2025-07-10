import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { CateringItem } from '../catering-item.class';

@Component({
    selector: 'catering-item-list-item',
    template: `
        <li
            item
            [class.!border-base-200]="active()"
            matRipple
            class="relative w-full rounded-lg border border-base-200 bg-base-100 p-2 shadow sm:w-[20rem]"
        >
            <button
                name="select-catering-item"
                class="z-0 flex h-full w-full items-center"
                (click)="select.emit()"
            >
                <div
                    class="relative mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-base-200 bg-neutral"
                >
                    @if (item().quantity && selected()) {
                        <div
                            class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-white bg-neutral text-xs text-white"
                        >
                            {{ item().quantity || '1' }}
                        </div>
                    }
                    @if (item().images?.length) {
                        <img
                            auth
                            class="min-h-full min-w-full object-cover"
                            [source]="item().images[0]"
                        />
                    } @else {
                        <img
                            class="m-auto"
                            src="assets/icons/catering-placeholder.svg"
                        />
                    }
                </div>
                <div class="flex-1 space-y-2 text-left">
                    <div class="flex flex-col pr-10 font-medium">
                        <div>{{ item().name || 'Item' }}</div>
                        <div class="text-xs opacity-60">
                            {{ item().category }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-1 text-sm">
                        @if (item().unit_price) {
                            <p class="w-px flex-1 rounded bg-base-100">
                                {{ item().unit_price / 100 | currency: code() }}
                            </p>
                        }
                        @if (item().option_list?.length) {
                            <div
                                class="rounded-2xl border border-base-200 px-2 py-1 text-xs shadow"
                            >
                                {{ options }}
                            </div>
                        }
                        @if (item().tags?.includes('Gluten Free')) {
                            <div
                                class="flex h-5 w-7 items-center justify-center rounded-xl bg-success text-xs shadow"
                            >
                                GF
                            </div>
                        }
                        @if (item().tags?.includes('Vegan')) {
                            <div
                                class="flex h-5 w-7 items-center justify-center rounded-xl bg-info text-xs shadow"
                            >
                                VG
                            </div>
                        }
                        @if (item().tags?.includes('Vegetarian')) {
                            <div
                                class="flex h-5 w-7 items-center justify-center rounded-xl bg-info text-xs shadow"
                            >
                                V
                            </div>
                        }
                        @if (item().tags?.includes('Contains Dairy')) {
                            <div
                                class="flex h-5 w-7 items-center justify-center rounded-xl bg-warning text-xs shadow"
                            >
                                D
                            </div>
                        }
                        @if (item().tags?.includes('Contains Nuts')) {
                            <div
                                class="bg-orange-600 flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow"
                            >
                                N
                            </div>
                        }
                    </div>
                </div>
            </button>
            <button
                icon
                matRipple
                name="toggle-catering-item-favourite"
                class="absolute right-1 top-1"
                [class.text-info]="favourite()"
                (click)="toggleFav.emit()"
            >
                <icon
                    [className]="
                        favourite()
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
export class CateringItemListItemComponent {
    public readonly item = input<CateringItem>(undefined);
    public readonly active = input(false);
    public readonly selected = input(false);
    public readonly favourite = input(false);
    public readonly code = input('USD');
    public readonly toggleFav = output();
    public readonly select = output();

    public get options() {
        return this.item()
            .option_list?.map((_) => _.name)
            .join(', ');
    }
}
