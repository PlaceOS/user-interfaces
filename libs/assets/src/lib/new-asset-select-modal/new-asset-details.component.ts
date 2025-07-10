import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    input,
    output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { AssetGroup } from '../asset.class';

@Component({
    selector: 'new-asset-details',
    template: `
        @if (item()) {
            <section image class="relative h-64 w-full bg-base-200 sm:h-40">
                <image-carousel
                    [images]="item().images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    icon
                    matRipple
                    close
                    (click)="close.emit()"
                    class="absolute left-2 top-2 bg-base-100 lg:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    fav
                    [class.text-info-content]="fav()"
                    (click)="toggleFav.emit()"
                    class="absolute right-2 top-2 bg-base-100"
                >
                    <icon
                        [className]="
                            fav()
                                ? 'material-symbols-rounded'
                                : 'material-symbols-outlined'
                        "
                        >favorite</icon
                    >
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-4 p-2">
                <h2 class="my-2 px-2 text-xl font-medium">
                    {{ item().name }}
                </h2>
                <section actions class="z-0 flex items-center justify-between">
                    <p class="px-2">
                        {{
                            (item().available != null
                                ? item().available
                                : item().assets?.length) || 0
                        }}
                        Available
                    </p>
                    <a-counter
                        [(ngModel)]="item().quantity"
                        (ngModelChange)="countChange.emit($event)"
                        [min]="1"
                        [max]="
                            (item().available != null
                                ? item().available
                                : item().assets?.length) || 1
                        "
                    ></a-counter>
                </section>
                <section
                    details
                    class="relative space-y-2 rounded border border-base-400 px-3 pb-2 pt-2"
                >
                    <h2
                        class="absolute left-2 top-0 -translate-y-1/2 bg-base-100 px-2 text-lg font-medium"
                    >
                        Details
                    </h2>
                    <div class="flex items-center space-x-2 px-2 pb-1">
                        <p>{{ item().description }}</p>
                        @if (!item().description) {
                            <div class="w-full text-center opacity-30">
                                {{ 'COMMON.NO_DESCRIPTION' | translate }}
                            </div>
                        }
                    </div>
                </section>
            </div>
        } @else {
            <div
                empty
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.ASSETS_SELECT' | translate }}
                </p>
            </div>
        }
    `,
    styles: [``],
    imports: [
        ImageCarouselComponent,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        CounterComponent,
        FormsModule,
    ],
})
export class NewAssetDetailsComponent implements OnInit, OnChanges {
    public readonly item = input<AssetGroup>(undefined);
    public readonly active = input(false);
    public readonly fav = input(false);

    public readonly toggleFav = output<void>();
    public readonly activeChange = output<boolean>();
    public readonly countChange = output<number>();
    public readonly close = output<void>();

    public ngOnInit() {
        const item = this.item();
        if (item && !item.quantity) item.quantity = 1;
    }

    public ngOnChanges(changes: SimpleChanges) {
        const item = this.item();
        if (changes.item && item) {
            if (!item.quantity) item.quantity = 1;
        }
    }
}
