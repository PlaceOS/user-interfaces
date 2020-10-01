import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MapPinComponent, IMapFeature } from '@acaprojects/ngx-interactive-map';

import { BaseClass } from 'src/app/common/base.class';
import { Space } from 'src/app/spaces/space.class';
import { BuildingLevel } from 'src/app/organisation/level.class';


@Component({
    selector: 'view-room-modal',
    templateUrl: './view-room-modal.component.html',
    styleUrls: ['./view-room-modal.component.scss']
})
export class ViewRoomModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter();
    /** Space to show the location of on the map */
    public space: Space;

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
        }
    }

    /**  */
    public get features(): IMapFeature[] {
        return [this.focus];
    }

    /** Point on map to focus on */
    public get focus(): IMapFeature {
        if (!this.space) {
            return null;
        }
        return {
            id: `area-${this.space.map_id}-status`,
            content: MapPinComponent,
            data: {
                back: '#fff',
                fore: '#E0301E'
            },
            zoom: 100
        };
    }
}
