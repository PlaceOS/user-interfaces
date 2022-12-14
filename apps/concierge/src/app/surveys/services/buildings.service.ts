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
                name: 'ellwood',
                display_name: 'Ellwood Tower',
                zone_id: '',
                address: '9 Ellwood Square, Sydney NSW, Australia',
                levels: ['lvl-G', 'lvl-1'],
                zones: [''],
                image: 'assets/mocks/building1.jpg',
            },
            {
                id: 'bld-02',
                name: 'glemsford',
                display_name: 'Glemsford Building',
                zone_id: '',
                address: '299 Queen Street, Brisbane, Queensland',
                levels: ['lvl-G', 'lvl-1', 'lvl-2'],
                zones: [''],
                image: 'assets/mocks/building2.jpg',
            },
            {
                id: 'bld-03',
                name: 'clarke',
                display_name: 'Clarke Group Building',
                zone_id: '',
                address: '18 Elizabeth Street, Hobart, Tasmania',
                levels: ['lvl-G', 'lvl-1'],
                zones: [''],
                image: 'assets/mocks/building3.jpg',
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
