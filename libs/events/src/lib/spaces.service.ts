import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { querySystems, showSystem } from '@placeos/ts-client';

import { OrganisationService } from '@placeos/common';

import { flatten, SettingsService, Space, unique } from '@placeos/common';
import { SpacePipe } from './space.pipe';

let SPACE_PIPE: SpacePipe;

@Injectable({
    providedIn: 'root',
})
export class SpacesService {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    /** Subject to store list of spaces */
    private _all_spaces = signal<Space[]>([]);
    /** Subject which stores the initialised state of the object */
    protected readonly _initialised = signal<boolean>(false);
    /** Signal of the initialised state of the object */
    public readonly initialised = this._initialised.asReadonly();
    /** Signal of all spaces */
    public readonly all_spaces = this._all_spaces.asReadonly();
    /** Signal for list of spaces */
    public readonly list = computed(() =>
        this._all_spaces().filter((space) => space.map_id),
    );
    /** List of available features */
    public readonly features = computed(() =>
        unique(
            flatten(
                this.list().map((i) => i.features.filter((_) => _.trim())),
            ),
        ),
    );
    /** Default predicate for filter method */
    protected _compare = (space: Space) =>
        space.zones.includes(this._org.building.id);

    /** List of available spaces */
    public get space_list(): Space[] {
        return this._all_spaces().filter((s) => s.map_id);
    }

    constructor() {
        SPACE_PIPE = new SpacePipe();
        if (!SPACE_PIPE.org) SPACE_PIPE.org = this._org;
        effect(() => {
            if (!this._org.initialised()) return;
            this._init();
        });
    }

    private _init() {
        if (!this._settings.get('app.prevent_space_init')) this.loadSpaces();
        else this._initialised.set(true);
    }

    /**
     * Get a filtered list of the available spaces
     * @param predicate Predicate for filtering spaces
     */
    public filter(predicate: (_: Space) => boolean = this._compare) {
        return this.space_list.filter((_) => predicate(_));
    }

    public async loadSpace(space_id: string) {
        const system = await showSystem(space_id);
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
        return this.space_list.find(
            ({ id, email }) => space_id === id || space_id === email,
        );
    }

    private async loadSpaces(): Promise<void> {
        const systems = (
            await querySystems({
                zone_id: this._org.organisation?.id,
                limit: 5000,
            })
        ).data;
        const space_list = systems.map(
            (sys) =>
                new Space({
                    ...(sys as any),
                    level: this._org.levelWithID([...sys.zones]),
                }),
        );
        this._all_spaces.set(space_list);
        // Remove spaces without a map ID
        SPACE_PIPE.updateSpaceList(this.space_list);
        this._initialised.set(true);
    }
}
