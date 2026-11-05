import {
    Component,
    computed,
    inject,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ViewerFeature, ViewerStyles } from '@placeos/common';

import { MatRippleModule } from '@angular/material/core';
import {
    AsyncHandler,
    BuildingLevel,
    OrganisationService,
} from '@placeos/common';
import { DIALOG_TITLE_STYLES } from './confirm-modal.component';
import { IconComponent } from './icon.component';
import { InteractiveMapComponent } from './interactive-map.component';
import { MapPinComponent } from './map-pin.component';
import { TranslatePipe } from './translate.pipe';

export interface Locatable {
    id: string;
    name: string;
    display_name?: string;
    map_id: string;
    level: BuildingLevel;
    zones?: string[];
}

@Component({
    selector: 'map-locate-modal',
    template: `
        <div class="h-[calc(100vh-4rem)] w-screen sm:h-auto sm:w-auto">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center space-x-2 rounded border-none p-2"
            >
                <icon class="text-2xl">place</icon>
                <h2 mat-dialog-title class="text-xl font-medium">
                    {{ item().display_name || item().name }}
                </h2>
                <div class="flex-1"></div>
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon>close</icon>
                </button>
            </header>
            <div class="px-2 pb-2">
                @if (level()) {
                    <div
                        body
                        class="border-base-300 relative h-[65vh] w-full overflow-hidden rounded-lg border sm:max-h-[65vh]"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="level().map_id"
                            [focus]="item().map_id"
                            [features]="features()"
                            [styles]="style_map()"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                        <div
                            class="border-base-300 bg-base-200 absolute top-2 right-2 rounded-xl border px-4 py-2 font-medium"
                        >
                            {{ level().display_name || level().name }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        DIALOG_TITLE_STYLES,
        `
            [body] {
                min-width: 80vw !important;
            }
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        InteractiveMapComponent,
        TranslatePipe,
    ],
})
export class MapLocateModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        item: Locatable;
    }>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);

    /** Emitter for user action on the modal */
    public readonly event = output();
    /** Space to show the location of on the map */
    public readonly item = signal(this._data.item);
    /** Features of the map */
    public readonly features = signal<ViewerFeature[]>([]);
    /** Mapping of elements to CSS styles */
    public style_map = signal<ViewerStyles>({});

    public readonly level = computed<BuildingLevel>(
        () =>
            this.item().level || this._org.levelWithID(this.item().zones || []),
    );

    constructor() {
        super();
        if (!this.item().level?.id) {
            this.item.update((item) => {
                delete item.level;
                return item;
            });
        }
    }

    public ngOnInit(): void {
        this.timeout(
            'init',
            () => {
                this.processFeature();
                this.processStyles();
            },
            1000,
        );
    }

    public processStyles(): void {
        const styles: ViewerStyles = {};
        if (this.item()?.map_id) {
            styles[`#zones`] = { display: 'none' };
            styles[`#Zones`] = { display: 'none' };
        }
        this.style_map.set(styles);
    }

    /** Point on map to focus on */
    public processFeature(): void {
        const item = this.item();
        if (!item) return null;
        const focus = {
            location: item.map_id,
            track_id: `focus_item`,
            content: MapPinComponent,
            data: {
                message: item.name,
            },
            z_index: 99,
            zoom: 100,
        };
        this.features.set([focus]);
    }
}
