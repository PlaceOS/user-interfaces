import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewerFeature, ViewerStyles } from '@placeos/svg-viewer';

import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { MapPinComponent } from './map-pin.component';

export interface Locatable {
    id: string;
    name: string;
    map_id: string;
    level: BuildingLevel;
    zones?: string[];
}

@Component({
    selector: 'map-locate-modal',
    template: `
        <header class="h-12 px-2">
            <app-icon>place</app-icon>
            <h1 class="ml-2">{{ item.name }}</h1>
        </header>
        <div
            body
            class="relative overflow-hidden pointer-events-none"
            *ngIf="level"
        >
            <i-map
                [src]="level.map_id"
                [styles]="style_map"
                [features]="features"
            >
                <mat-spinner diameter="64"></mat-spinner>
            </i-map>
            <div
                class="absolute top-2 right-2 py-2 px-4 bg-white rounded-3xl shadow"
            >
                {{ level?.name }}
            </div>
        </div>
        <footer
            class="w-full border-t border-gray-200 flex items-center justify-center p-2"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                Close
            </button>
        </footer>
    `,
    styles: [
        `
            [body] {
                min-width: 80vw !important;
                width: 80vw;
                height: 65vh;
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
