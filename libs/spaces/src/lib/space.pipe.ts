import { Optional, Pipe } from '@angular/core';
import { showSystem, querySystemsWithEmails } from '@placeos/ts-client';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Space } from './space.class';
import { first } from 'rxjs/operators';

const SPACE_LIST: Space[] = [];
const ATTEMPT_COUNT: Record<string, number> = {};

const EMPTY_SPACE = new Space({ email: 'empty.space@place.os' });

export function updateSpaceList(space_list: Space[]) {
    for (const space of space_list) {
        if (!SPACE_LIST.find(({ id }) => id === space.id)) {
            SPACE_LIST.push(space);
        }
    }
}

setInterval(() => {
    for (const id in ATTEMPT_COUNT) {
        ATTEMPT_COUNT[id] = ATTEMPT_COUNT[id] - 1;
        if (ATTEMPT_COUNT[id] <= 0) {
            delete ATTEMPT_COUNT[id];
        }
    }
}, 10 * 1000);

@Pipe({
    name: 'space',
})
export class SpacePipe {
    constructor(@Optional() private _org?: OrganisationService) {}
    /**
     * Get details of the space with the given ID
     * @param space_id ID or Email of the space
     */
    public async transform(space_id: string): Promise<Space> {
        if (this._org) {
            await this._org.initialised.pipe(first((_) => _)).toPromise();
        }
        const is_email = space_id?.includes('@');
        if (!space_id) return EMPTY_SPACE;
        let space = SPACE_LIST.find(
            ({ id, email }) => id === space_id || email === space_id
        );
        if (space) return space;
        if (ATTEMPT_COUNT[space_id]) return EMPTY_SPACE;
        if (!is_email) {
            const system = await showSystem(space_id)
                .toPromise()
                .catch((_) => null);
            if (system) {
                space = new Space({
                    ...(system as any),
                    level: this._org?.levelWithID([...system.zones]),
                });
                SPACE_LIST.push(space);
                return space;
            }
        }
        const systems = (
            await querySystemsWithEmails({
                in: space_id,
                zone_id: this._org?.organisation.id,
            }).toPromise()
        ).data;
        if (systems.length === 1) {
            space = new Space({
                ...(systems[0] as any),
                level: this._org?.levelWithID([...systems[0].zones]),
            });
            SPACE_LIST.push(space);
            return space;
        }
        return EMPTY_SPACE;
    }

    public updateSpaceList(space_list: Space[]) {
        updateSpaceList(space_list);
    }
}
