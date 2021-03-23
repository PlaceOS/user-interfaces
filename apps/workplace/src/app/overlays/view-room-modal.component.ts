import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewerFeature, ViewerStyles } from '@placeos/svg-viewer';

import { BaseClass } from '@user-interfaces/common';
import { BuildingLevel } from '@user-interfaces/organisation';
import { Space } from '@user-interfaces/spaces';
import { MapPinComponent } from '@user-interfaces/components';

@Component({
    selector: 'view-room-modal',
    template: `
        <header class="h-12 px-2">
            <app-icon>place</app-icon>
            <h1 class="ml-2">{{ space.name }}</h1>
        </header>
        <div body class="relative overflow-hidden pointer-events-none" *ngIf="level">
            <i-map
                [src]="level.map_id"
                [styles]="style_map"
                [features]="features"
            >
                <mat-spinner diameter="64"></mat-spinner>
            </i-map>
            <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-3xl shadow">{{ level?.name }}</div>
        </div>
        <footer class="w-full border-t border-gray-200 flex items-center justify-center p-2">
            <button mat-button class="inverse w-32" mat-dialog-close>Close</button>
        </footer>
    `,
    styles: [
        `
            [body] {
                width: 80vw;
                height: 65vh;
            }
        `,
    ],
})
export class ViewRoomModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter();
    /** Space to show the location of on the map */
    public space: Space;
    /** Features of the map */
    public features: ViewerFeature[];
    /** Mapping of elements to CSS styles */
    public style_map: ViewerStyles = {};

    public get level(): BuildingLevel {
        return this.space.level;
    }

    constructor(@Inject(MAT_DIALOG_DATA) private _data: { space: Space }) {
        super();
    }

    public ngOnInit(): void {
        const data = this._data;
        if (data) {
            this.space = data.space;
            this.processFeature();
            this.processStyles();
        }
    }

    public processStyles(): void {
        const styles: ViewerStyles = {};
        if (this.space.map_id) {
            styles[`#zones`] = { display: 'none' };
            styles[`#Zones`] = { display: 'none' };
        }
        this.style_map = styles;
    }

    /** Point on map to focus on */
    public processFeature(): void {
        if (!this.space) {
            return null;
        }
        const focus = {
            location: this.space.map_id,
            content: MapPinComponent,
            data: {
                name: this.space.name,
            },
            zoom: 100,
        };
        this.features = [focus];
    }
}
