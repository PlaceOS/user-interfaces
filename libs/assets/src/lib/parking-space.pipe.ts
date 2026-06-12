import { Pipe } from '@angular/core';
import { PlaceAsset, showAsset } from '@placeos/ts-client';

const PARKING_SPACE_LIST: PlaceAsset[] = [];

const EMPTY_PARKING_SPACE: PlaceAsset = {} as PlaceAsset;

export function updateParkingSpaceList(spaces: PlaceAsset[]) {
    for (const space of spaces) {
        if (!PARKING_SPACE_LIST.find(({ id }) => id === space.id)) {
            PARKING_SPACE_LIST.push(space);
        }
    }
}

@Pipe({
    name: 'parkingSpace',
})
export class ParkingSpacePipe {
    /**
     * Resolve a parking space asset_id into its PlaceAsset
     * @param asset_id ID of the parking space asset
     */
    public async transform(asset_id: string): Promise<PlaceAsset> {
        if (!asset_id || asset_id.startsWith('unallocated'))
            return EMPTY_PARKING_SPACE;
        const cached = PARKING_SPACE_LIST.find(({ id }) => id === asset_id);
        if (cached) return cached;
        const space = await showAsset(asset_id).catch(() => null);
        if (space) {
            PARKING_SPACE_LIST.push(space);
            return space;
        }
        return EMPTY_PARKING_SPACE;
    }
}
