import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'facilities-map',
    template: `
        <a-map [src]="map_url | async">
            <mat-spinner [diameter]="32"></mat-spinner>
        </a-map>
    `,
    styles: [``],
})
export class FacilitiesMapComponent {
    public readonly map_url = this._state.zones.pipe(
        map((zones) => {
            return this._org.levelWithID(zones)?.map_id;
        })
    );

    constructor(private _state: EventsStateService, private _org: OrganisationService) {}
}
