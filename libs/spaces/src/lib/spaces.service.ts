import { Injectable } from '@angular/core';
import { querySystems, showSystem } from '@placeos/ts-client';
import { first, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { Space } from './space.class';
import { flatten, SettingsService, unique } from '@placeos/common';
import { SpacePipe } from './space.pipe';

let SPACE_PIPE: SpacePipe;

@Injectable({
    providedIn: 'root',
})
export class SpacesService {
    /** Subject to store list of spaces */
    private _list = new BehaviorSubject<Space[]>([]);
    /** Subject which stores the initialised state of the object */
    protected readonly _initialised = new BehaviorSubject<boolean>(false);
    /** Observable of the initialised state of the object */
    public readonly initialised = this._initialised.asObservable();
    /** Observable for list of spaces */
    public readonly list = this._list.asObservable();
    /** List of available features */
    public readonly features = this.list.pipe(
        map((_) => unique(flatten(_.map((i) => i.features))))
    );
    /** Default predicate for filter method */
    protected _compare = (space: Space) =>
        space.zones.includes(this._org.building.id);

    /** List of available spaces */
    public get space_list(): Space[] {
        return this._list.getValue();
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        SPACE_PIPE = new SpacePipe(_org);
        this._init();
    }

    private async _init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        if (!this._settings.get('app.prevent_space_init')) this.loadSpaces();
        else this._initialised.next(true);
    }

    /**
     * Get a filtered list of the available spaces
     * @param predicate Predicate for filtering spaces
     */
    public filter(predicate: (_: Space) => boolean = this._compare) {
        return this._list.getValue().filter((_) => predicate(_));
    }

    public async loadSpace(space_id: string) {
        const system = await showSystem(space_id).toPromise();
        const space = new Space({
            ...(system as any),
            level: this._org.levelWithID([...system.zones]),
        });
        SPACE_PIPE.updateSpaceList([space]);
    }

    /**
     * Find space with given id/email
     * @param space_id ID/Email address associated with the space
     */
    public find(space_id: string) {
        return this._list.getValue().find(({ id }) => space_id === id);
    }

    private async loadSpaces(): Promise<void> {
        const systems = await querySystems({
            zone_id: this._org.organisation.id,
            limit: 5000,
        })
            .pipe(map((i) => i.data))
            .toPromise();
        const space_list = systems.map(
            (sys) =>
                new Space({
                    ...(sys as any),
                    level: this._org.levelWithID([...sys.zones]),
                })
        );
        // Remove spaces without a map ID
        const valid_spaces = space_list.filter((space) => space.map_id);
        this._list.next(valid_spaces);
        SPACE_PIPE.updateSpaceList(valid_spaces);
        this._initialised.next(true);
    }
}
