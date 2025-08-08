import {
    Component,
    OnChanges,
    SimpleChanges,
    input,
    output,
} from '@angular/core';
import { ViewerFeature } from '@placeos/svg-viewer';

import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingAsset } from '../booking-form.service';

@Component({
    selector: 'new-desk-details',
    styles: [
        `
            :host {
                position: relative;
            }
        `,
    ],
    template: `
        @if (desk()) {
            @if (desk().images?.length) {
                <section class="relative h-40 w-full">
                    @if (desk().images?.length) {
                        <image-carousel
                            [images]="desk().images"
                            class="absolute inset-0"
                        ></image-carousel>
                    }
                </section>
            } @else {
                <section class="h-10 w-full lg:hidden"></section>
            }
            <button
                icon
                matRipple
                name="close-desk-details"
                (click)="close.emit()"
                class="absolute left-2 top-2 z-20 bg-base-200 text-base-content lg:hidden"
            >
                <icon>arrow_back</icon>
            </button>
            <button
                icon
                matRipple
                name="toggle-desk-favourite-details"
                class="absolute right-2 top-2 z-20 bg-base-200"
                [class.text-info-content]="fav()"
                [class.!bg-info]="fav()"
                (click)="toggleFav.emit()"
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
            <div class="space-y-2 px-2 pb-2 pt-0">
                @if (!desk().images?.length) {
                    <div class="h-8 w-full"></div>
                }
                <section actions class="z-0 p-2">
                    <h2 class="mb-2 mt-4 text-2xl font-medium">
                        {{ desk().display_name || desk().name || desk().id }}
                    </h2>
                </section>
                <section
                    details
                    class="relative space-y-2 rounded border border-base-400 px-3 pb-2 pt-4"
                >
                    <h2
                        class="absolute left-2 top-0 -translate-y-1/2 bg-base-100 px-2 text-lg font-medium"
                    >
                        {{ 'BOOKINGS.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <icon>person</icon>
                        <p>{{ 'BOOKINGS.DESK_COUNT_LONE' | translate }}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>desk</icon>
                        <p>
                            {{
                                desk().display_name || desk().name || desk().id
                            }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <p>
                            {{ desk().zone?.display_name || desk().zone?.name }}
                        </p>
                    </div>
                </section>
                @if (desk().features?.length) {
                    <section
                        facilities
                        class="relative !mt-4 space-y-2 rounded border border-base-400 px-2 pb-1 pt-1"
                    >
                        <h2
                            class="absolute left-2 top-0 -translate-y-1/2 bg-base-100 px-2 text-lg font-medium"
                        >
                            {{ 'COMMON.FEATURES' | translate }}
                        </h2>
                        @for (feat of desk().features || []; track feat) {
                            <div class="flex flex-wrap items-center">
                                <div
                                    for="feat"
                                    class="m-1 rounded-full border border-base-300 px-4 py-2 text-sm capitalize"
                                >
                                    {{ feat }}
                                </div>
                            </div>
                        }
                    </section>
                }
                @if (!hide_map()) {
                    <section
                        map
                        class="relative mx-auto h-64 w-full overflow-hidden rounded bg-base-200 sm:h-48"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="map_url"
                            [focus]="desk().map_id || desk().id"
                            [features]="features"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                    </section>
                }
            </div>
        } @else {
            <div
                empty
                class="flex h-full w-full flex-col items-center justify-center space-y-2"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.DESK_SELECT_MSG' | translate }}
                </p>
            </div>
        }
    `,
    imports: [
        TranslatePipe,
        IconComponent,
        InteractiveMapComponent,
        ImageCarouselComponent,
        MatRippleModule,
    ],
})
export class NewDeskDetailsComponent implements OnChanges {
    public readonly desk = input<BookingAsset>(undefined);
    public readonly fav = input(false);
    public readonly active = input(false);
    public readonly hide_map = input(false);

    public readonly close = output<void>();
    public readonly toggleFav = output<void>();
    public readonly activeChange = output<void>();

    public map_url = '';
    public features: ViewerFeature[] = [];

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.desk && this.desk()) {
            this.updateFeature();
        }
    }

    private updateFeature() {
        this.map_url = this.desk().zone.map_id;
        const desk = this.desk();
        this.features = [
            {
                location: desk.map_id || desk.id,
                content: MapPinComponent,
            },
        ];
    }
}
