import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { MapPinComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { ViewerFeature } from '@placeos/svg-viewer';
import { BookingAsset } from '../booking-form.service';

@Component({
    selector: `parking-space-details`,
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
                    class="absolute top-2 left-2 bg-base-200 sm:hidden"
                >
                    <app-icon>arrow_back</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    fav
                    [class.text-info-content]="fav"
                    [class.!bg-info]="fav"
                    (click)="toggleFav.emit()"
                    class="absolute top-2 right-2 bg-base-200"
                >
                    <app-icon>{{
                        fav ? 'favorite' : 'favorite_border'
                    }}</app-icon>
                </button>
            </section>
            <div class="p-2 space-y-2 flex-1 h-1/2 overflow-auto">
                <section actions class="z-0">
                    <h2 class="text-xl font-medium mb-2 mt-4">
                        {{ space.display_name || space.name }}
                    </h2>
                </section>
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium" i18n>Details</h2>
                    <div class="flex items-center space-x-2">
                        <app-icon>people</app-icon>
                        <p i18n>{{ space.capacity }} People</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>meeting_room</app-icon>
                        <p>
                            {{ level?.display_name || level?.name }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>place</app-icon>
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
                <section facilities class="space-y-2">
                    <h2 class="text-xl font-medium" i18n>Room Facilities</h2>
                    <div class="flex items-center space-x-2">
                        <app-icon>people</app-icon>
                        <p i18n>WiFi Available</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>restaurant</app-icon>
                        <p i18n>Catering Available</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>edit</app-icon>
                        <p i18n>Whiteboard</p>
                    </div>
                </section>
                <section
                    map
                    class="w-full mx-auto h-64 sm:h-48 relative border border-base-200 overflow-hidden rounded"
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
            <div class="p-2 border-t border-base-200 shadow sm:hidden">
                <button
                    btn
                    matRipple
                    [class.inverse]="active"
                    class="w-full"
                    (click)="active = !active; activeChange.emit(active)"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-2xl">{{
                            active ? 'remove' : 'add'
                        }}</app-icon>
                        <p>
                            {{ active ? 'Remove this room' : 'Add this room' }}
                        </p>
                    </div>
                </button>
            </div>
        </ng-container>
        <ng-template #empty_state>
            <div
                empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30 text-center" i18n>
                    Select a space to view it's details
                </p>
            </div>
        </ng-template>
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
})
export class ParkingSpaceDetailsComponent {
    @Input() public space?: BookingAsset;
    @Input() public fav: boolean = false;
    @Input() public active: boolean = false;

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
                this.space?.zone.parent_id === _.id
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
