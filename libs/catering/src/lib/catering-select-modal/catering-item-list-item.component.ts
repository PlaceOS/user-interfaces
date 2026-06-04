import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { CateringItem } from '@placeos/common';

import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: 'catering-item-list-item',
    template: `
        <li
            item
            [class.border-info!]="active()"
            [class.ring-2]="active()"
            [class.ring-info]="active()"
            matRipple
            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
        >
            <button
                name="select-catering-item"
                class="z-0 flex h-full w-full items-center"
                (click)="select.emit()"
            >
                <div
                    class="border-base-200 bg-neutral relative mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border"
                >
                    @if (item().quantity && show_count()) {
                        <div
                            class="bg-neutral absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border border-white text-xs text-white"
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
                            <p class="bg-base-100 w-px flex-1 rounded-sm">
                                {{ item().unit_price / 100 | currency: code() }}
                            </p>
                        }
                        @if (item().option_list?.length) {
                            <div
                                class="border-base-200 rounded-2xl border px-2 py-1 text-xs shadow-sm"
                            >
                                {{ options }}
                            </div>
                        }
                        @if (item().tags?.includes('Gluten Free')) {
                            <div
                                class="bg-success flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                GF
                            </div>
                        }
                        @if (item().tags?.includes('Vegan')) {
                            <div
                                class="bg-info flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                VG
                            </div>
                        }
                        @if (item().tags?.includes('Vegetarian')) {
                            <div
                                class="bg-info flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                V
                            </div>
                        }
                        @if (item().tags?.includes('Contains Dairy')) {
                            <div
                                class="bg-warning flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                D
                            </div>
                        }
                        @if (item().tags?.includes('Contains Nuts')) {
                            <div
                                class="flex h-5 w-7 items-center justify-center rounded-xl bg-orange-600 text-xs shadow-sm"
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
                class="absolute top-1 right-1"
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
    public readonly show_count = input(false);
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
