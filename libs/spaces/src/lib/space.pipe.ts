import { Pipe } from "@angular/core";
import { querySystems, showSystem } from "@placeos/ts-client";

import { OrganisationService } from "libs/organisation/src/lib/organisation.service";
import { Space } from "./space.class";

const SPACE_LIST: Space[] = [];

const EMPTY_SPACE = new Space();

@Pipe({
    name: 'space'
})
export class SpacePipe {

    constructor(private _org: OrganisationService) {}
    /**
     * Get details of the space with the given ID
     * @param space_id ID or Email of the space
     */
    public async transform(space_id: string): Promise<Space> {
        if (!space_id) return EMPTY_SPACE;
        let space = SPACE_LIST.find(({ id, email }) => id === space_id || email === space_id);
        if (space) return space;
        const system = await showSystem(space_id).toPromise();
        if (system) {
            space = new Space({
                ...system as any,
                level: this._org.levelWithID([...system.zones]),
            });
            SPACE_LIST.push(space);
            return space;
        }
        const systems = (await querySystems({ q: space_id }).toPromise()).data;
        if (systems.length === 1) {
            space = new Space({
                ...systems[0] as any,
                level: this._org.levelWithID([...systems[0].zones]),
            });
            SPACE_LIST.push(space);
            return space;
        }
        return EMPTY_SPACE;
    }

    public updateSpaceList(space_list: Space[]) {
        for (const space of space_list) {
            if (!SPACE_LIST.find(({ id }) => id === space.id)) {
                SPACE_LIST.push(space);
            }
        }
    }
}
