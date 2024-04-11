import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { ViewerFeature } from '@placeos/svg-viewer';
import { Space } from '../space.class';

@Component({
    selector: `space-details`,
    template: `
        <ng-container *ngIf="space; else empty_state">
            <section
                image
                class="relative w-full bg-neutral"
                [class.sm:h-64]="space.images?.length"
                [class.h-40]="space.images?.length"
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
                    name="close-space-details"
                    (click)="close.emit()"
                    class="absolute top-2 left-2 bg-neutral sm:hidden text-white"
                >
                    <app-icon>arrow_back</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-space-favourite-details"
                    [class.text-white]="!fav"
                    [class.text-blue-400]="fav"
                    (click)="toggleFav.emit()"
                    class="absolute top-2 right-2 bg-neutral"
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
                <section
                    facilities
                    class="space-y-2"
                    *ngIf="space.features?.length"
                >
                    <h2 class="text-xl font-medium" i18n>Room Facilities</h2>
                    <div
                        class="flex items-center space-x-2"
                        *ngFor="let feature of space.features"
                    >
                        <!-- <app-icon>people</app-icon> -->
                        <p i18n>{{ feature }}</p>
                    </div>
                </section>
                <section
                    map
                    class="w-full mx-auto h-64 sm:h-48 relative border border-base-200 overflow-hidden rounded"
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
            <div
                class="px-2 pt-2 pb-[5.5rem] border-t border-base-200 shadow sm:hidden"
            >
                <button
                    btn
                    matRipple
                    name="toggle-space-details"
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
                    Select a room to view it's details
                </p>
            </div>
        </ng-template>
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
})
export class SpaceDetailsComponent {
    @Input() public space?: Space;
    @Input() public fav: boolean = false;
    @Input() public active: boolean = false;
    @Input() public hide_map: boolean = false;

    @Output() public activeChange = new EventEmitter<boolean>();
    @Output() public close = new EventEmitter<void>();
    @Output() public toggleFav = new EventEmitter<void>();

    public map_url = '';
    public features: ViewerFeature[] = [];

    public get level() {
        return this._org.levelWithID(this.space?.zones) || this.space?.level;
    }

    public get building() {
        return this._org.buildings.find((_) =>
            this.space?.zones.includes(_.id)
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
