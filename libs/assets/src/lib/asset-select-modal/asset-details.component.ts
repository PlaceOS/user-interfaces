import { Component, SimpleChanges, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { AssetGroup } from '../asset.class';

@Component({
    selector: 'asset-details',
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
                    class="absolute left-2 top-2 bg-base-200 sm:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    fav
                    [class.text-info-content]="fav()"
                    [class.!bg-info]="fav()"
                    (click)="toggleFav.emit()"
                    class="absolute right-2 top-2 bg-base-200"
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
            <div class="h-1/2 flex-1 space-y-2 overflow-auto p-2">
                <section actions class="z-0 flex items-center justify-between">
                    <div>
                        <h2 class="mb-2 mt-4 text-xl font-medium">
                            {{ item().name }}
                        </h2>
                        <p>
                            {{
                                (item().available != null
                                    ? item().available
                                    : item().assets?.length) || 0
                            }}
                            Available
                        </p>
                    </div>
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
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium">Details</h2>
                    <div class="flex items-center space-x-2">
                        <p>{{ item().description || 'No description' }}</p>
                    </div>
                </section>
            </div>
            <div class="border-t border-base-200 p-2 shadow sm:hidden">
                <button
                    btn
                    matRipple
                    select
                    [class.inverse]="active()"
                    class="w-full"
                    (click)="active = !active(); activeChange.emit(active())"
                >
                    <div class="flex items-center justify-center">
                        <icon class="text-2xl">
                            {{ active() ? 'remove' : 'add' }}
                        </icon>
                        <p>
                            {{
                                (active()
                                    ? 'BOOKINGS.ASSETS_REMOVE'
                                    : 'BOOKINGS.ASSETS_ADD'
                                ) | translate
                            }}
                        </p>
                    </div>
                </button>
            </div>
        } @else {
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.ASSETS_SELECT' | translate }}
                </p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 30%;
                min-width: 20rem;
                height: 100%;
                min-height: 65vh;
            }
        `,
    ],
    imports: [
        ImageCarouselComponent,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
    ],
})
export class AssetDetailsComponent {
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
