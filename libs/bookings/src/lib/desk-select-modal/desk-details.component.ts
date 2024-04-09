import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { ViewerFeature } from '@placeos/svg-viewer';

import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
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
        <ng-container *ngIf="desk; else emptyState">
            <section
                image
                class="relative w-full bg-base-300"
                [class.sm:h-64]="desk.images?.length"
                [class.h-40]="desk.images?.length"
                [class.sm:h-0]="!desk.images?.length"
                [class.h-12]="!desk.images?.length"
                [class.!bg-transparent]="!desk.images?.length"
            >
                <image-carousel
                    [images]="desk.images"
                    *ngIf="desk.images?.length"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    icon
                    matRipple
                    name="close-desk-details"
                    (click)="close.emit()"
                    class="absolute top-2 left-2 bg-base-200 sm:hidden text-base-content"
                >
                    <app-icon>arrow_back</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-desk-favourite-details"
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
            <div
                class="p-2 space-y-2 flex-1 h-[calc(100%-19.75rem)] overflow-auto"
            >
                <section actions class="z-0 pb-2 border-b">
                    <h2 class="text-xl font-medium mb-2 mt-4">
                        {{ desk.display_name || desk.name || desk.id }}
                    </h2>
                </section>
                <section details class="space-y-2 pb-2 border-b">
                    <h2 class="text-xl font-medium">Details</h2>
                    <div class="flex items-center space-x-2">
                        <app-icon>person</app-icon>
                        <p i18n>Single desk</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>desk</app-icon>
                        <p>
                            {{ desk.display_name || desk.name || desk.id }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>place</app-icon>
                        <p>{{ desk.zone?.display_name || desk.zone?.name }}</p>
                    </div>
                </section>
                <section
                    facilities
                    *ngIf="desk.features?.length"
                    class="space-y-2 pb-2 border-b"
                >
                    <h2 class="text-xl font-medium" i18n>Facilities</h2>
                    <div
                        *ngFor="let feat of desk.features || []"
                        class="flex items-center flex-wrap space-x-2"
                    >
                        <div for="feat" class="flex-1 w-1/2">{{ feat }}</div>
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
                        [focus]="desk.map_id || desk.id"
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
                    name="toggle-desk-details"
                    [class.inverse]="active"
                    class="w-full"
                    (click)="active = !active; activeChange.emit(active)"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-2xl">{{
                            active ? 'remove' : 'add'
                        }}</app-icon>
                        <p i18n>
                            { active, select, true { Remove from booking } false
                            { Add to booking } }
                        </p>
                    </div>
                </button>
            </div>
        </ng-container>
        <ng-template #emptyState>
            <div
                empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30 text-center" i18n>
                    Select a desk to view it's details
                </p>
            </div>
        </ng-template>
    `,
})
export class DeskDetailsComponent {
    @Input() public desk?: BookingAsset;
    @Input() public fav: boolean = false;
    @Input() public active: boolean = false;
    @Input() public hide_map: boolean = false;

    @Output() public close = new EventEmitter<void>();
    @Output() public toggleFav = new EventEmitter<void>();
    @Output() public activeChange = new EventEmitter<void>();

    public map_url = '';
    public features: ViewerFeature[] = [];

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.desk && this.desk) {
            this.updateFeature();
        }
    }

    private updateFeature() {
        this.map_url = this.desk.zone.map_id;
        this.features = [
            {
                location: this.desk.map_id || this.desk.id,
                content: MapPinComponent,
            },
        ];
    }
}
