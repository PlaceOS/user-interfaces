import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
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
        <ng-container *ngIf="space; else empty_state">
            <section
                image
                class="relative w-full bg-base-200"
                [class.sm:h-40]="space.images?.length"
                [class.h-64]="space.images?.length"
                [class.sm:h-0]="!space.images?.length"
                [class.h-12]="!space.images?.length"
                [class.!bg-transparent]="!space.images?.length"
            >
                <image-carousel
                    [images]="space.images"
                    *ngIf="space.images?.length"
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
                    [class.text-info-content]="fav"
                    [class.!bg-info]="fav"
                    (click)="toggleFav.emit()"
                    class="absolute right-2 top-2 bg-base-200"
                >
                    <icon>{{ fav ? 'favorite' : 'favorite_border' }}</icon>
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 p-2">
                <section actions class="z-0">
                    <h2 class="mb-2 mt-4 text-xl font-medium">
                        {{ space.display_name || space.name }}
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
                <section
                    map
                    class="relative mx-auto h-64 w-full overflow-hidden rounded border border-base-200 sm:h-48"
                    *ngIf="!hide_map"
                >
                    <interactive-map
                        class="pointer-events-none"
                        [src]="map_url"
                        [focus]="space.map_id"
                        [features]="features"
                        [options]="{ disable_pan: true, disable_zoom: true }"
                    ></interactive-map>
                </section>
            </div>
        </ng-container>
        <ng-template #empty_state>
            <div
                empty
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'BOOKINGS.PARKING_SELECT_MSG' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        InteractiveMapComponent,
        IconComponent,
        ImageCarouselComponent,
    ],
})
export class NewParkingDetailsComponent {
    @Input() public hide_map = false;
    @Input() public space?: BookingAsset;
    @Input() public fav = false;
    @Input() public active = false;

    @Output() public activeChange = new EventEmitter<boolean>();
    @Output() public close = new EventEmitter<void>();
    @Output() public toggleFav = new EventEmitter<void>();

    public map_url = '';
    public features: ViewerFeature[] = [];

    public get level() {
        return this._org.levelWithID([this.space?.zone.id]) || this.space?.zone;
    }

    public get building() {
        return this._org.buildings.find(
            (_) =>
                this.space?.zone.id === _.id ||
                this.space?.zone.parent_id === _.id,
        );
    }

    constructor(private _org: OrganisationService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.space && this.space) {
            this._updateFeature();
        }
    }

    private _updateFeature() {
        this.map_url = this.level?.map_id;
        this.features = [
            {
                location: this.space?.map_id,
                content: MapPinComponent,
            },
        ];
    }
}
