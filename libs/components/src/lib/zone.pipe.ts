import { Pipe, PipeTransform } from '@angular/core';
import { PlaceZone, showZone } from '@placeos/ts-client';

const ZONE_LIST: Record<string, PlaceZone> = {};
const EMPTY_ZONE = new PlaceZone();

@Pipe({
    name: 'zone',
})
export class ZonePipe implements PipeTransform {
    public async transform(id: string): Promise<PlaceZone> {
        if (ZONE_LIST[id]) return ZONE_LIST[id];
        const zone = await showZone(id)
            .toPromise()
            .catch((_) => null);
        if (!zone) return EMPTY_ZONE;
        ZONE_LIST[id] = zone;
        return zone;
    }
}
