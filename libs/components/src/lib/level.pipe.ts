import { Pipe, PipeTransform, inject } from '@angular/core';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';

@Pipe({
    name: 'level',
})
export class LevelPipe implements PipeTransform {
    private _org = inject(OrganisationService);

    public transform(id: string | string[]): BuildingLevel {
        return this._org.levelWithID(id instanceof Array ? id : [id]);
    }
}
