import { Pipe, PipeTransform, inject } from '@angular/core';
import { Building, OrganisationService } from '@placeos/organisation';

@Pipe({
    name: 'building',
})
export class BuildingPipe implements PipeTransform {
    private _org = inject(OrganisationService);

    public transform(id: string | string[]): Building {
        return this._org.buildings.find((bld) =>
            id instanceof Array ? id.includes(bld.id) : bld.id === id,
        );
    }
}
