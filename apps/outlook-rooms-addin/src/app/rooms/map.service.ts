import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
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
    public locatable_spaces: Locatable[] = [];
    public maps_arr: any[] = [];

    //Store of map_id urls & level names for available_spaces
    private _maps_list: BehaviorSubject<[]> = new BehaviorSubject<any>([]);

    maps_list$: Observable<any> = this._maps_list.asObservable();

    set maps_list(map) {
        this._maps_list.next(map);
    }

    get maps_list() {
        return this._maps_list.getValue();
    }

    constructor() {}

    //filter available_spaces into Locatable_spaces

    async locateSpaces(available_spaces: Observable<Space[]>) {
        await available_spaces.pipe(take(1)).toPromise();
        await available_spaces.subscribe((spaces) =>
            spaces?.map((space) => {
                this.locatable_spaces.push({
                    id: space.id,
                    name: space.name,
                    map_id: space.level.map_id,
                    level: space.level,
                });
            })
        );

        this.locatable_spaces = [
            ...new Set(this.locatable_spaces.map((space) => space)),
        ];

        this.maps_arr = this.locatable_spaces.map((map) => ({
            map_id: map.map_id,
            level: map.level.name,
        }));

        //filter maps_list to remove same maps
        this.maps_arr = [
            ...new Map(this.maps_arr.map((v) => [v.map_id, v])).values(),
        ];

        this.maps_list = this.maps_arr as any;

        console.log(this.maps_list$, 'maps list');
    }
}
