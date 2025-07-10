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
    selector: `space-details`,
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
                    class="absolute left-2 top-2 bg-neutral text-white sm:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-space-favourite-details"
                    [class.text-white]="!fav()"
                    [class.text-info]="fav()"
                    (click)="toggleFav.emit()"
                    class="absolute right-2 top-2 bg-neutral"
                >
                    <icon>{{ fav() ? 'favorite' : 'favorite_border' }}</icon>
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 overflow-auto p-2">
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
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium">
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
                <hr />
                @if (space().features?.length) {
                    <section facilities class="space-y-2">
                        <h2 class="text-xl font-medium">
                            {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                        </h2>
                        @for (feature of space().features; track feature) {
                            <div class="flex items-center space-x-2">
                                <!-- <icon>people</icon> -->
                                <p>{{ feature }}</p>
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
            <div
                class="border-t border-base-200 px-2 pb-[5.5rem] pt-2 shadow sm:hidden"
            >
                <button
                    btn
                    matRipple
                    name="toggle-space-details"
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
                                    ? 'CALENDAR_EVENT.SPACE_REMOVE'
                                    : 'CALENDAR_EVENT.SPACE_ADD_TO'
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
                    {{ 'CALENDAR_EVENT.SPACE_LIST_INFO' | translate }}
                </p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                position: relative;
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
        TranslatePipe,
        MatRippleModule,
        InteractiveMapComponent,
        ImageCarouselComponent,
        IconComponent,
    ],
})
export class SpaceDetailsComponent implements OnChanges {
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
