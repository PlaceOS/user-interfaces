import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewerFeature } from '@yuion/svg-viewer';

import { BaseClass } from '@user-interfaces/common';
import { BuildingLevel } from '@user-interfaces/organisation';
import { Space } from '@user-interfaces/spaces';

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
    public get features(): ViewerFeature[] {
        return [this.focus];
    }

    /** Point on map to focus on */
    public get focus(): ViewerFeature {
        if (!this.space) {
            return null;
        }
        return {
            location: `area-${this.space.map_id}-status`,
            content: null, // MapPinComponent,
            data: {
                back: '#fff',
                fore: '#E0301E'
            },
            zoom: 100
        } as any;
    }
}
