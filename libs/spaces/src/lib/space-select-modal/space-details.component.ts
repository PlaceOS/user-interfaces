import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
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
                    class="absolute left-2 top-2 bg-neutral text-white sm:hidden"
                >
                    <app-icon>arrow_back</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-space-favourite-details"
                    [class.text-white]="!fav"
                    [class.text-info]="fav"
                    (click)="toggleFav.emit()"
                    class="absolute right-2 top-2 bg-neutral"
                >
                    <app-icon>{{
                        fav ? 'favorite' : 'favorite_border'
                    }}</app-icon>
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 overflow-auto p-2">
                <section actions class="z-0">
                    <h2 class="mb-2 mt-4 text-xl font-medium">
                        {{ space.display_name || space.name }}
                    </h2>
                </section>
                <div
                    class="my-2 rounded px-2 py-1 text-xs"
                    *ngIf="alert"
                    [class.bg-info]="alert[0] === 'info'"
                    [class.text-info-content]="alert[0] === 'info'"
                    [class.bg-warning]="alert[0] === 'warn'"
                    [class.text-warning-content]="alert[0] === 'warn'"
                    [class.bg-error]="alert[0] === 'closed'"
                    [class.text-error-content]="alert[0] === 'closed'"
                >
                    {{ alert[1] }}
                </div>
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium">
                        {{ 'CALENDAR_EVENT.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <app-icon>people</app-icon>
                        <p>
                            {{
                                'CALENDAR_EVENT.CAPACITY_COUNT'
                                    | translate: { count: space.capacity }
                            }}
                        </p>
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
                    <h2 class="text-xl font-medium">
                        {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                    </h2>
                    <div
                        class="flex items-center space-x-2"
                        *ngFor="let feature of space.features"
                    >
                        <!-- <app-icon>people</app-icon> -->
                        <p>{{ feature }}</p>
                    </div>
                </section>
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
            <div
                class="border-t border-base-200 px-2 pb-[5.5rem] pt-2 shadow sm:hidden"
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
                            {{
                                (active
                                    ? 'CALENDAR_EVENT.SPACE_REMOVE'
                                    : 'CALENDAR_EVENT.SPACE_ADD_TO'
                                ) | translate
                            }}
                        </p>
                    </div>
                </button>
            </div>
        </ng-container>
        <ng-template #empty_state>
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'CALENDAR_EVENT.SPACE_LIST_INFO' | translate }}
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
    standalone: false,
})
export class SpaceDetailsComponent implements OnChanges {
    @Input() public space?: Space;
    @Input() public fav = false;
    @Input() public active = false;
    @Input() public hide_map = false;
    @Input() public alert?: [string, string];

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
            this.space?.zones.includes(_.id),
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
