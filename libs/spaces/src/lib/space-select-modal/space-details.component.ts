import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { MapPinComponent } from '@placeos/components';
import { ViewerFeature } from '@placeos/svg-viewer';
import { Space } from '../space.class';

@Component({
    selector: `space-details`,
    template: `
        <ng-container *ngIf="space; else empty_state">
            <section image class="relative w-full h-64 sm:h-40 bg-black/20">
                <image-carousel
                    [images]="space.images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    mat-icon-button
                    close
                    (click)="close.emit()"
                    class="absolute top-2 left-2 bg-black/40 sm:hidden text-white"
                >
                    <app-icon>arrow_back</app-icon>
                </button>
                <button
                    mat-icon-button
                    fav
                    [class.text-white]="!fav"
                    [class.text-blue-400]="fav"
                    (click)="toggleFav.emit()"
                    class="absolute top-2 right-2 bg-black/40"
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
                    <h2 class="text-xl font-medium">Details</h2>
                    <div class="flex items-center space-x-2">
                        <app-icon>people</app-icon>
                        <p>{{ space.capacity }} People</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>meeting_room</app-icon>
                        <p>
                            {{ space.level?.display_name || space.level?.name }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>place</app-icon>
                        <p>BLD 1</p>
                    </div>
                </section>
                <hr />
                <section facilities class="space-y-2">
                    <h2 class="text-xl font-medium">Room Facilities</h2>
                    <div class="flex items-center space-x-2">
                        <app-icon>people</app-icon>
                        <p>WiFi Available</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>restaurant</app-icon>
                        <p>Catering Available</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>edit</app-icon>
                        <p>Whiteboard</p>
                    </div>
                </section>
                <section
                    map
                    class="w-full mx-auto h-64 sm:h-48 relative border border-gray-200 overflow-hidden rounded"
                >
                    <interactive-map
                        class="pointer-events-none"
                        [src]="map_url"
                        [features]="features"
                        [options]="{ disable_pan: true, disable_zoom: true }"
                    ></interactive-map>
                </section>
            </div>
            <div class="p-2 border-t border-gray-200 shadow sm:hidden">
                <button
                    mat-button
                    [class.inverse]="active"
                    class="w-full"
                    (click)="active = !active; activeChange.emit(active)"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-2xl">{{ active ? 'remove' : 'add' }}</app-icon>
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
                <p class="opacity-30 text-center">
                    Select a room to view it's details
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

                background: white;
            }
        `,
    ],
})
export class SpaceDetailsComponent {
    @Input() public space?: Space;
    @Input() public fav: boolean = false;
    @Input() public active: boolean = false;

    @Output() public activeChange = new EventEmitter<boolean>();
    @Output() public close = new EventEmitter<void>();
    @Output() public toggleFav = new EventEmitter<void>();

    public map_url = '';
    public features: ViewerFeature[] = [];

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.space && this.space) {
            this._updateFeature();
        }
    }

    private _updateFeature() {
        this.map_url = this.space.level.map_id;
        this.features = [
            {
                location: this.space.map_id,
                content: MapPinComponent,
            },
        ];
    }
}
