import { Injectable } from '@angular/core';
import { querySystems } from '@placeos/ts-client';
import { first, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Space } from './space.class';
import { OrganisationService } from '@user-interfaces/organisation';

@Injectable({
    providedIn: 'root',
})
export class SpacesService {
    /** Subject which stores the initialised state of the object */
    protected readonly _initialised = new BehaviorSubject<boolean>(false);
    /** Observable of the initialised state of the object */
    public readonly initialised = this._initialised.asObservable();
    /** Subject to store list of spaces */
    private _list = new BehaviorSubject<Space[]>([]);
    /** Default predicate for filter method */
    protected _compare = (space: Space) => space.zones.includes(this._org.building.id);
    /** Observable for list of spaces */
    public readonly list = this._list.asObservable();

    /** List of available spaces */
    public get space_list(): Space[] {
        return this._list.getValue();
    }

    constructor(private _org: OrganisationService) {
        this._org.initialised.pipe(first((_) => _)).subscribe(() => this.loadSpaces());
    }

    /**
     * Get a filtered list of the available spaces
     * @param predicate Predicate for filtering spaces
     */
    public filter(predicate: (_: Space) => boolean = this._compare) {
        return this._list.getValue().filter((_) => predicate(_));
    }

    /**
     * Find space with given id/email
     * @param id ID/Email address associated with the space
     */
    public find(id: string) {
        return this._list.getValue().find((space) => space.id === id || space.email === id);
    }

    private async loadSpaces(): Promise<void> {
        const systems = await querySystems({
            zone_id: this._org.organisation.id,
            limit: 5000,
        })
            .pipe(map((i) => i.data))
            .toPromise();
        const space_list = systems.map(
            (sys) => new Space({ ...(sys as any), level: this._org.levelWithID([...sys.zones]) })
        );
        // Remove spaces without a map ID
        const valid_spaces = space_list.filter((space) => space.map_id);
        this._list.next(valid_spaces);
        this._initialised.next(true);
    }
}
