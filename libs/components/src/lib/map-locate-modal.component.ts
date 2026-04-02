import { Component, inject, OnInit, output, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ViewerFeature, ViewerStyles } from '@placeos/svg-viewer';

import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    AsyncHandler,
    BuildingLevel,
    OrganisationService,
} from '@placeos/common';
import { IconComponent } from './icon.component';
import { InteractiveMapComponent } from './interactive-map.component';
import { MapPinComponent } from './map-pin.component';

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
                <h2 class="text-xl font-medium">
                    {{ item().display_name || item().name }}
                </h2>
                <div class="flex-1"></div>
                <button icon matRipple mat-dialog-close>
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
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        >
                            <mat-spinner diameter="64"></mat-spinner
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
        `
            [body] {
                min-width: 80vw !important;
            }
        `,
    ],
    imports: [
        MatRippleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        IconComponent,
        InteractiveMapComponent,
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
    public readonly item = signal<Locatable>({} as any);
    /** Features of the map */
    public readonly features = signal<ViewerFeature[]>([]);
    /** Mapping of elements to CSS styles */
    public readonly style_map = signal<ViewerStyles>({});
    /** Level that the locatable item is to be on **/
    public readonly level = signal<BuildingLevel>(new BuildingLevel());

    public ngOnInit(): void {
        this.item.set(this._data.item);
        this.level.set(
            this.item().level || this._org.levelWithID(this.item().zones || []),
        );
        if (!this.level().id) {
            this.level.set(this._org.levelWithID(this.item().zones || []));
        }
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
        if (this.item().map_id) {
            styles[`#zones`] = { display: 'none' };
            styles[`#Zones`] = { display: 'none' };
        }
        this.style_map.set(styles);
    }

    /** Point on map to focus on */
    public processFeature(): void {
        if (!this.item()) return null;
        const focus = {
            location: this.item().map_id,
            track_id: `focus_item`,
            content: MapPinComponent,
            data: {
                name: this.item().name,
            },
            z_index: 99,
            zoom: 100,
        };
        this.features.set([focus]);
    }
}
