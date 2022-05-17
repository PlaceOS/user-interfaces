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
            <section image class="relative w-full h-64 z-10">
                <image-carousel
                    [images]="space.images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    mat-icon-button
                    fav
                    [class.text-blue-600]="fav"
                    (click)="toggleFav.emit()"
                    class="absolute bottom-0 left-2 translate-y-1/2 bg-white rounded shadow"
                >
                    <app-icon>{{
                        fav ? 'favorite' : 'favorite_border'
                    }}</app-icon>
                </button>
            </section>
            <section actions class="z-0">
                <h2>{{ space.display_name || space.name }}</h2>
                <button
                    mat-button
                    [class.inverse]="active"
                    (click)="active = !active; activeChange.emit(active)"
                >
                    <div class="flex items-center">
                        <app-icon>{{ active ? 'remove' : 'add' }}</app-icon>
                        <p>
                            {{ active ? 'Remove this room' : 'Add this room' }}
                        </p>
                    </div>
                </button>
            </section>
            <section details>
                <h2>Details</h2>
                <div class="flex items-center space-x-2">
                    <app-icon>people</app-icon>
                    <p>{{ space.capacity }} People</p>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon>meeting_room</app-icon>
                    <p>{{ space.level?.display_name || space.level?.name }}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon>place</app-icon>
                    <p>BLD 1</p>
                </div>
            </section>
            <section facilities>
                <h2>Details</h2>
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
            <section map class="w-[calc(100vw-2rem)] h-64 relative border border-gray-200 overflow-hidden rounded">
                <interactive-map
                    [src]="map_url"
                    [features]="features"
                    [options]="{ disable_pan: true, disable_zoom: true }"
                ></interactive-map>
            </section>
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
            }
        `,
    ],
})
export class SpaceDetailsComponent {
    @Input() public space?: Space;
    @Input() public fav: boolean = false;
    @Input() public active: boolean = false;

    @Output() public activeChange = new EventEmitter<boolean>();
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
