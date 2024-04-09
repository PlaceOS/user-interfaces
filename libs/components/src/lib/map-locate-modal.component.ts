import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewerFeature, ViewerStyles } from '@placeos/svg-viewer';

import { AsyncHandler, MapsPeopleService } from '@placeos/common';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
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
                <app-icon class="text-2xl">place</app-icon>
                <h1 class="ml-2 text-xl font-medium">
                    {{ item.display_name || item.name }}
                </h1>
            </header>
            <div
                body
                class="relative overflow-hidden h-[65vh] w-full sm:max-h-[65vh]"
                *ngIf="level"
            >
                <interactive-map
                    class="pointer-events-none"
                    [src]="level?.map_id"
                    [focus]="item?.map_id"
                    [features]="features"
                    [options]="{
                        disable_pan: true,
                        disable_zoom: true
                    }"
                >
                    <mat-spinner diameter="64"></mat-spinner
                ></interactive-map>
                <div
                    class="absolute top-2 right-2 py-2 px-4 bg-base-100 rounded-3xl shadow border border-base-200"
                >
                    {{ level?.display_name || level?.name }}
                </div>
            </div>
            <footer
                class="w-full border-t border-base-200 flex items-center justify-center p-2"
            >
                <button btn matRipple class="inverse w-32" mat-dialog-close>
                    Close
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
})
export class MapLocateModalComponent extends AsyncHandler implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter();
    /** Space to show the location of on the map */
    public item: Locatable = this._data.item;
    /** Features of the map */
    public features: ViewerFeature[];
    /** Mapping of elements to CSS styles */
    public style_map: ViewerStyles = {};

    public get level(): BuildingLevel {
        return this.item.level || this._org.levelWithID(this.item.zones || []);
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { item: Locatable },
        private _org: OrganisationService
    ) {
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
            1000
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
