import {
    Component,
    OnChanges,
    SimpleChanges,
    inject,
    input,
    output,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ViewerFeature } from '@placeos/svg-viewer';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Space } from '../space.class';

@Component({
    selector: `new-space-details`,
    template: `
        @if (space()) {
            <section
                image
                class="relative w-full bg-neutral"
                [class.sm:h-64]="space().images?.length"
                [class.h-40]="space().images?.length"
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
                    name="close-space-details"
                    (click)="close.emit()"
                    class="absolute left-2 top-2 bg-base-100 lg:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-space-favourite-details"
                    [class.text-info]="fav()"
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
            <div class="h-1/2 flex-1 space-y-2 p-2">
                <section actions class="z-0">
                    <h2 class="mb-2 mt-4 text-xl font-medium">
                        {{ space().display_name || space().name }}
                    </h2>
                </section>
                @if (alert()) {
                    <div
                        class="my-2 rounded px-2 py-1 text-xs"
                        [class.bg-info]="alert()[0] === 'info'"
                        [class.text-info-content]="alert()[0] === 'info'"
                        [class.bg-warning]="alert()[0] === 'warn'"
                        [class.text-warning-content]="alert()[0] === 'warn'"
                        [class.bg-error]="alert()[0] === 'closed'"
                        [class.text-error-content]="alert()[0] === 'closed'"
                    >
                        {{ alert()[1] }}
                    </div>
                }
                <section
                    details
                    class="relative !mt-4 space-y-2 rounded border border-base-400 px-2 pb-1 pt-1"
                >
                    <h2
                        class="absolute left-2 top-0 -translate-y-1/2 bg-base-100 px-2 text-lg font-medium"
                    >
                        {{ 'CALENDAR_EVENT.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <icon>people</icon>
                        <p>
                            {{
                                'CALENDAR_EVENT.CAPACITY_COUNT'
                                    | translate: { count: space().capacity }
                            }}
                        </p>
                    </div>
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
                @if (space().features?.length) {
                    <section
                        facilities
                        class="relative !mt-4 space-y-2 rounded border border-base-400 px-2 pb-1 pt-1"
                    >
                        <h2
                            class="absolute left-2 top-0 -translate-y-1/2 bg-base-100 px-2 text-lg font-medium"
                        >
                            {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                        </h2>
                        <div class="flex flex-wrap items-center">
                            @for (feature of space().features; track feature) {
                                <div
                                    for="feat"
                                    class="m-1 rounded-full border border-base-300 px-4 py-2 text-sm capitalize"
                                >
                                    {{ feature }}
                                </div>
                            }
                        </div>
                    </section>
                }
                @if (!hide_map()) {
                    <section
                        map
                        class="relative mx-auto !mb-2 h-64 w-full overflow-hidden rounded bg-base-200 sm:h-48"
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
                    {{ 'CALENDAR_EVENT.SPACE_LIST_INFO' | translate }}
                </p>
            </div>
        }
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        MatRippleModule,
        InteractiveMapComponent,
        ImageCarouselComponent,
        IconComponent,
    ],
})
export class NewSpaceDetailsComponent implements OnChanges {
    private _org = inject(OrganisationService);

    public readonly space = input<Space>(undefined);
    public readonly fav = input(false);
    public readonly active = input(false);
    public readonly hide_map = input(false);
    public readonly alert = input<[string, string]>(undefined);

    public readonly activeChange = output<boolean>();
    public readonly close = output<void>();
    public readonly toggleFav = output<void>();

    public map_url = '';
    public features: ViewerFeature[] = [];

    public get level() {
        const space = this.space();
        return this._org.levelWithID(space?.zones) || space?.level;
    }

    public get building() {
        return this._org.buildings.find((_) =>
            this.space()?.zones.includes(_.id),
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
