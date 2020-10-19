import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewerFeature, ViewerStyles } from '@yuion/svg-viewer';

import { BaseClass } from '@user-interfaces/common';
import { BuildingLevel } from '@user-interfaces/organisation';
import { Space } from '@user-interfaces/spaces';

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
            content: null,
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
