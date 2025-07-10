import { Component, SimpleChanges, input, output } from '@angular/core';
import { ViewerFeature } from '@placeos/svg-viewer';

import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingAsset } from '../booking-form.service';

@Component({
    selector: 'desk-details',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 30%;
                min-width: 20rem;
                height: 100%;
                min-height: 65vh;
                background: white;
            }
        `,
    ],
    template: `
        @if (desk()) {
            <section
                image
                class="relative w-full bg-base-300"
                [class.sm:h-64]="desk().images?.length"
                [class.h-40]="desk().images?.length"
                [class.sm:h-0]="!desk().images?.length"
                [class.h-12]="!desk().images?.length"
                [class.!bg-transparent]="!desk().images?.length"
            >
                @if (desk().images?.length) {
                    <image-carousel
                        [images]="desk().images"
                        class="absolute inset-0"
                    ></image-carousel>
                }
                <button
                    icon
                    matRipple
                    name="close-desk-details"
                    (click)="close.emit()"
                    class="absolute left-2 top-2 bg-base-200 text-base-content sm:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-desk-favourite-details"
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
            <div
                class="h-[calc(100%-19.75rem)] flex-1 space-y-2 overflow-auto p-2"
            >
                <section actions class="z-0 border-b pb-2">
                    <h2 class="mb-2 mt-4 text-xl font-medium">
                        {{ desk().display_name || desk().name || desk().id }}
                    </h2>
                </section>
                <section details class="space-y-2 border-b pb-2">
                    <h2 class="text-xl font-medium">
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
                    <section facilities class="space-y-2 border-b pb-2">
                        <h2 class="text-xl font-medium">
                            {{ 'COMMON.FEATURES' | translate }}
                        </h2>
                        @for (feat of desk().features || []; track feat) {
                            <div class="flex flex-wrap items-center space-x-2">
                                <div for="feat" class="w-1/2 flex-1">
                                    {{ feat }}
                                </div>
                            </div>
                        }
                    </section>
                }
                @if (!hide_map()) {
                    <section
                        map
                        class="relative mx-auto h-64 w-full overflow-hidden rounded border border-base-200 sm:h-48"
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
            <div
                class="border-t border-base-200 px-2 pb-[5.5rem] pt-2 shadow sm:hidden"
            >
                <button
                    btn
                    matRipple
                    name="toggle-desk-details"
                    [class.inverse]="active()"
                    class="w-full"
                    (click)="active = !active(); activeChange.emit(active())"
                >
                    <div class="flex items-center justify-center">
                        <icon class="text-2xl">{{
                            active() ? 'remove' : 'add'
                        }}</icon>
                        <p>
                            {{
                                (active()
                                    ? 'COMMON.REMOVE_FROM'
                                    : 'COMMON.ADD_TO'
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
export class DeskDetailsComponent {
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
