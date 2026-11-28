import { Pipe } from '@angular/core';
import { type Asset, assets } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';

const PARKING_SPACE_LIST: Asset[] = [];

const EMPTY_PARKING_SPACE: Asset = {} as Asset;
const UNALLOCATED_PARKING_SPACE: Asset = {
    identifier: 'Unallocated',
} as Asset;

@Pipe({
    name: 'parkingSpace',
})
export class ParkingSpacePipe {
    /**
     * Resolve a parking space asset_id into its Asset
     * @param asset_id ID of the parking space asset
     */
    public async transform(asset_id: string): Promise<Asset> {
        if (!asset_id) return EMPTY_PARKING_SPACE;
        if (asset_id.startsWith('unallocated'))
            return UNALLOCATED_PARKING_SPACE;
        const cached = PARKING_SPACE_LIST.find(({ id }) => id === asset_id);
        if (cached) return cached;
        const space = await assets
            .show({ id: asset_id })
            .then(orThrow)
            .catch(() => null);
        if (space) {
            PARKING_SPACE_LIST.push(space);
            return space;
        }
        return EMPTY_PARKING_SPACE;
    }
}
