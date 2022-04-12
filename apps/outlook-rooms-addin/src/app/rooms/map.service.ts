import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BuildingLevel } from '@placeos/organisation';
import { ViewerFeature, ViewerStyles } from '@placeos/svg-viewer';
import { MapPinComponent } from '@placeos/components';
import { Space } from '@placeos/spaces';

export interface Locatable {
    id: string;
    name: string;
    map_id: string;
    level: BuildingLevel;
    zones?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class MapService {
    public level: BuildingLevel;
    public style_map: ViewerStyles = {};
    public item: Locatable;
    public features: ViewerFeature[];
    public svg_list: string[] = [];

    constructor() {}

    public processStyles(): void {
        const styles: ViewerStyles = {};
        if (this.item?.map_id) {
            styles[`#zones`] = { display: 'none' };
            styles[`#Zones`] = { display: 'none' };
        }
        this.style_map = styles;
    }

    public processFeature(): void {
        if (!this.item) return null;
        const focus = {
            location: this.item.map_id,
            content: MapPinComponent,
            data: {
                name: this.item.name,
            },
            z_index: 99,
            zoom: 100,
        };
        this.features = [focus];
    }

    locateMaps(spaceList: Observable<Space[]>) {
        spaceList.subscribe((spaces) =>
            spaces.map((space) => this.svg_list.push(space.level.map_id))
        );
        this.svg_list = [...new Set(this.svg_list)];
    }
}
