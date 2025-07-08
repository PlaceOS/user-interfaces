import { Component, OnInit, inject, output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewerFeature, ViewerStyles } from '@placeos/svg-viewer';

import { AsyncHandler } from '@placeos/common';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
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
            <header class="p-4">
                <icon class="text-2xl">place</icon>
                <h1 class="ml-2 text-xl font-medium">
                    {{ item.display_name || item.name }}
                </h1>
            </header>
            @if (level) {
                <div
                    body
                    class="relative h-[65vh] w-full overflow-hidden sm:max-h-[65vh]"
                >
                    <interactive-map
                        class="pointer-events-none"
                        [src]="level?.map_id"
                        [focus]="item?.map_id"
                        [features]="features"
                        [options]="{
                            disable_pan: true,
                            disable_zoom: true,
                        }"
                    >
                        <mat-spinner diameter="64"></mat-spinner
                    ></interactive-map>
                    <div
                        class="absolute right-2 top-2 rounded-3xl border border-base-200 bg-base-100 px-4 py-2 shadow"
                    >
                        {{ level?.display_name || level?.name }}
                    </div>
                </div>
            }
            <footer
                class="flex w-full items-center justify-center border-t border-base-200 p-2"
            >
                <button btn matRipple class="inverse w-32" mat-dialog-close>
                    {{ 'COMMON.BACK' | translate }}
                </button>
            </footer>
        </div>
    `,
    styles: [
        `
            [body] {
                min-width: 80vw !important;
            }
        `,
    ],
    standalone: false,
})
export class MapLocateModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        item: Locatable;
    }>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);

    /** Emitter for user action on the modal */
    public readonly event = output();
    /** Space to show the location of on the map */
    public item: Locatable = this._data.item;
    /** Features of the map */
    public features: ViewerFeature[];
    /** Mapping of elements to CSS styles */
    public style_map: ViewerStyles = {};

    public get level(): BuildingLevel {
        return this.item.level || this._org.levelWithID(this.item.zones || []);
    }

    constructor() {
        super();
        if (!this.item.level?.id) {
            delete this.item.level;
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
        if (this.item?.map_id) {
            styles[`#zones`] = { display: 'none' };
            styles[`#Zones`] = { display: 'none' };
        }
        this.style_map = styles;
    }

    /** Point on map to focus on */
    public processFeature(): void {
        if (!this.item) return null;
        const focus = {
            location: this.item.map_id,
            track_id: `focus_item`,
            content: MapPinComponent,
            data: {
                name: this.item.name,
            },
            z_index: 99,
            zoom: 100,
        };
        this.features = [focus];
    }
}
