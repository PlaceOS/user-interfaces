import { inject, Injectable } from '@angular/core';
import { querySystems, showSystem } from '@placeos/ts-client';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { first, map, shareReplay } from 'rxjs/operators';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { flatten, SettingsService, unique } from '@placeos/common';
import { Space } from './space.class';
import { SpacePipe } from './space.pipe';

let SPACE_PIPE: SpacePipe;

@Injectable({
    providedIn: 'root',
})
export class SpacesService {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    /** Subject to store list of spaces */
    private _all_spaces = new BehaviorSubject<Space[]>([]);
    /** Subject which stores the initialised state of the object */
    protected readonly _initialised = new BehaviorSubject<boolean>(false);
    /** Observable of the initialised state of the object */
    public readonly initialised = this._initialised.asObservable();
    /** Observable of all spaces */
    public readonly all_spaces = this._all_spaces.asObservable();
    /** Observable for list of spaces */
    public readonly list = this._all_spaces.pipe(
        map((spaces) => spaces.filter((space) => space.map_id)),
        shareReplay(1),
    );
    /** List of available features */
    public readonly features = this.list.pipe(
        map((_) => unique(flatten(_.map((i) => i.features)))),
    );
    /** Default predicate for filter method */
    protected _compare = (space: Space) =>
        space.zones.includes(this._org.building.id);

    /** List of available spaces */
    public get space_list(): Space[] {
        return this._all_spaces.getValue().filter((s) => s.map_id);
    }

    constructor() {
        SPACE_PIPE = new SpacePipe();
        if (!SPACE_PIPE.org) SPACE_PIPE.org = this._org;
        this._init();
    }

    private async _init() {
        await lastValueFrom(this._org.initialised.pipe(first((_) => _)));
        if (!this._settings.get('app.prevent_space_init')) this.loadSpaces();
        else this._initialised.next(true);
    }

    /**
     * Get a filtered list of the available spaces
     * @param predicate Predicate for filtering spaces
     */
    public filter(predicate: (_: Space) => boolean = this._compare) {
        return this.space_list.filter((_) => predicate(_));
    }

    public async loadSpace(space_id: string) {
        const system = await lastValueFrom(showSystem(space_id));
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
        return this.space_list.find(({ id }) => space_id === id);
    }

    private async loadSpaces(): Promise<void> {
        const systems = await lastValueFrom(
            querySystems({
                zone_id: this._org.organisation.id,
                limit: 5000,
            })?.pipe(map((i) => i.data)),
        );
        const space_list = systems.map(
            (sys) =>
                new Space({
                    ...(sys as any),
                    level: this._org.levelWithID([...sys.zones]),
                }),
        );
        this._all_spaces.next(space_list);
        // Remove spaces without a map ID
        SPACE_PIPE.updateSpaceList(this.space_list);
        this._initialised.next(true);
    }
}
