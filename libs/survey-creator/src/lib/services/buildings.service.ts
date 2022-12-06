import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Building } from '@placeos/organisation';

@Injectable({
    providedIn: 'root',
})
export class BuildingsService {
    private _buildings: BehaviorSubject<any> = new BehaviorSubject<any>({});

    buildings$: Observable<any> = this._buildings.asObservable();

    set buildings(buildings: any) {
        this._buildings.next(buildings);
    }

    get buildings() {
        return this._buildings.getValue();
    }
    constructor() {
        this.buildings = [
            {
                id: 'bld-01',
                name: 'Building1',
                display_name: 'Building1',
                zone_id: '',
                address: 'Tasmania',
                levels: ['lvl-G', 'lvl-1'],
                zones: [''],
            },
            {
                id: 'bld-02',
                name: 'Building2',
                display_name: 'Building2',
                zone_id: '',
                address: 'Brisbane',
                levels: ['lvl-G', 'lvl-1'],
                zones: [''],
            },
            {
                id: 'bld-03',
                name: 'Building3',
                display_name: 'Building3',
                zone_id: '',
                address: 'Tasmania',
                levels: ['lvl-G', 'lvl-1'],
                zones: [''],
            },
        ];
    }

    addBuilding(building: any) {
        this.buildings.push(building);
    }

    deleteBuilding(building: any) {
        this.buildings = this.buildings.filter(
            (item) => item.name !== building.name
        );
    }
}
