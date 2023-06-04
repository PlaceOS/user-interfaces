import { Pipe, PipeTransform } from '@angular/core';
import { Building, OrganisationService } from '@placeos/organisation';

@Pipe({
    name: 'building',
})
export class BuildingPipe implements PipeTransform {
    constructor(private _org: OrganisationService) {}

    public transform(id: string | string[]): Building {
        return this._org.buildings.find((bld) =>
            id instanceof Array ? id.includes(bld.id) : bld.id === id
        );
    }
}
