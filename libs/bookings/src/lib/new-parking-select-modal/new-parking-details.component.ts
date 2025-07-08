import { Component, SimpleChanges, inject, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MapPinComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { ViewerFeature } from '@placeos/svg-viewer';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingAsset } from '../booking-form.service';

@Component({
    selector: `new-parking-space-details`,
    template: `
        @if (space()) {
            <section
                image
                class="relative w-full bg-base-200"
                [class.sm:h-40]="space().images?.length"
                [class.h-64]="space().images?.length"
                [class.sm:h-0]="!space().images?.length"
                [class.h-12]="!space().images?.length"
                [class.!bg-transparent]="!space().images?.length"
            >
                @if (space().images?.length) {
                    <image-carousel
                        [images]="space().images"
                        class="absolute inset-0"
                    ></image-carousel>
                }
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
                    <icon>{{ fav() ? 'favorite' : 'favorite_border' }}</icon>
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 p-2">
                <section actions class="z-0">
                    <h2 class="mb-2 mt-4 text-xl font-medium">
                        {{ space().display_name || space().name }}
                    </h2>
                </section>
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium">
                        {{ 'BOOKINGS.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <icon>meeting_room</icon>
                        <p>
                            {{ level?.display_name || level?.name }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <p>
                            {{
                                building?.address ||
                                    building?.display_name ||
                                    building?.name
                            }}
                        </p>
                    </div>
                </section>
                <hr />
                @if (!hide_map()) {
                    <section
                        map
                        class="relative mx-auto h-64 w-full overflow-hidden rounded border border-base-200 sm:h-48"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="map_url"
                            [focus]="space().map_id"
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
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.PARKING_SELECT_MSG' | translate }}
                </p>
            </div>
        }
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        MatRippleModule,
        InteractiveMapComponent,
        IconComponent,
        ImageCarouselComponent,
    ],
})
export class NewParkingDetailsComponent {
    private _org = inject(OrganisationService);

    public readonly hide_map = input(false);
    public readonly space = input<BookingAsset>(undefined);
    public readonly fav = input(false);
    public readonly active = input(false);

    public readonly activeChange = output<boolean>();
    public readonly close = output<void>();
    public readonly toggleFav = output<void>();

    public map_url = '';
    public features: ViewerFeature[] = [];

    public get level() {
        const space = this.space();
        return this._org.levelWithID([space?.zone.id]) || space?.zone;
    }

    public get building() {
        const space = this.space();
        return this._org.buildings.find(
            (_) => space?.zone.id === _.id || space?.zone.parent_id === _.id,
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.space && this.space()) {
            this._updateFeature();
        }
    }

    private _updateFeature() {
        this.map_url = this.level?.map_id;
        this.features = [
            {
                location: this.space()?.map_id,
                content: MapPinComponent,
            },
        ];
    }
}
