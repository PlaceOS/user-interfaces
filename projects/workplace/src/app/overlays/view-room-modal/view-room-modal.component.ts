import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MapPinComponent, IMapFeature, IStyleMappings } from '@acaprojects/ngx-interactive-map';

import { BaseClass } from 'src/app/common/base.class';
import { BuildingLevel } from 'src/app/organisation/level.class';
import { Space } from 'src/app/spaces/space.class';

@Component({
    selector: 'view-room-modal',
    templateUrl: './view-room-modal.component.html',
    styleUrls: ['./view-room-modal.component.scss'],
})
export class ViewRoomModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter();
    /** Space to show the location of on the map */
    public space: Space;
    /** Features of the map */
    public features: IMapFeature[];
    /** Mapping of elements to CSS styles */
    public style_map: IStyleMappings = {};

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
        const styles: IStyleMappings = {};
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
        const focus: IMapFeature = {
            id: this.space.map_id,
            content: MapPinComponent,
            data: {
                name: this.space.name,
            },
            zoom: 100,
        };
        this.features = [focus];
    }

    public close() {
        this.event.emit(null);
    }
}
