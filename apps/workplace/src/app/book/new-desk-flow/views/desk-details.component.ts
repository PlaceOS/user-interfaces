import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { MapPinComponent } from '@placeos/components';
import { Desk } from '@placeos/organisation';
import { ViewerFeature } from '@placeos/svg-viewer';

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
            <section image class="relative w-full h-64 bg-black/20">
                <image-carousel
                    [images]="desk.images"
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
                <section actions class="z-0 pb-2 border-b">
                    <h2 class="text-xl font-medium mb-2 mt-4">
                        {{ desk.display_name || desk.name || desk.id }}
                    </h2>
                </section>
                <section details class="space-y-2 pb-2 border-b">
                    <h2 class="text-xl font-medium">Details</h2>
                    <div class="flex items-center space-x-2">
                        <app-icon>person</app-icon>
                        <p>Single desk</p>
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
                    type
                    *ngIf="desk.features?.length"
                    class="space-y-2 pb-2 border-b"
                >
                    <h2 class="text-xl font-medium">Type</h2>
                    <div
                        *ngFor="let feat of desk.features || []"
                        class="flex items-center flex-wrap space-x-2"
                    >
                        <div for="feat" class="flex-1 w-1/2">{{ feat }}</div>
                    </div>
                </section>
                <section facilities class="space-y-2">
                    <h2 class="text-xl font-medium">Facilities</h2>
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
                    class="w-[calc(100vw-2rem)] mx-auto h-64 relative border border-gray-200 overflow-hidden rounded"
                >
                    <interactive-map
                        class="pointer-events-none"
                        [src]="map_url"
                        [features]="features"
                        [options]="{ disable_pan: true, disable_zoom: true }"
                    ></interactive-map>
                </section>
            </div>
            <div class="p-2 border-t border-gray-200 shadow">
                <button
                    mat-button
                    [class.inverse]="active"
                    class="w-full"
                    (click)="onSelect.emit()"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-2xl">{{
                            active ? 'remove' : 'add'
                        }}</app-icon>
                        <p>
                            {{
                                active
                                    ? 'Remove from booking'
                                    : 'Add to booking'
                            }}
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
                <p class="opacity-30 text-center">
                    Select a desk to view it's details
                </p>
            </div>
        </ng-template>
    `,
})
export class DeskDetailsComponent {
    @Input() public desk?: Desk;
    @Input() public fav: boolean = false;
    @Input() public active: boolean = false;

    @Output() public close = new EventEmitter<void>();
    @Output() public toggleFav = new EventEmitter<void>();
    @Output() public onSelect = new EventEmitter<void>();

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
