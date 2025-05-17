import { Pipe, PipeTransform } from '@angular/core';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';

@Pipe({
    name: 'level',
})
export class LevelPipe implements PipeTransform {
    constructor(private _org: OrganisationService) {}

    public transform(id: string | string[]): BuildingLevel {
        return this._org.levelWithID(id instanceof Array ? id : [id]);
    }
}
