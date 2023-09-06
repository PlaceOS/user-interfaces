import { Injectable } from '@angular/core';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { Space } from 'libs/spaces/src/lib/space.class';
import { first } from 'rxjs/operators';

declare let mapsindoors: any;

@Injectable({
    providedIn: 'root',
})
export class RoomStatusService {
    public space: Space;
    public readonly available_spaces = this._event_form.available_spaces;

    public readonly available_spaceIDs: string[] = [];
    public available_external_IDs: string[] = [];

    constructor(private _event_form: EventFormService) {}

    public async getAvailableSpaceIDs(): Promise<string[]> {
        const spaces = await this.available_spaces
            .pipe(first((_: any) => _))
            .toPromise();
        spaces.forEach((space) => this.available_spaceIDs.push(space.id));
        return this.available_spaceIDs;
    }

    public async getLocationIDs(): Promise<string[]> {
        const promises = this.available_spaceIDs.map(async (spaceID) => {
            const locations =
                await mapsindoors.services.LocationsService.getLocationsByExternalId(
                    spaceID
                );
            locations.map((location) =>
                this.available_external_IDs.push(location.id || '')
            );
        });
        await Promise.all(promises);
        return this.available_external_IDs;
    }
}
