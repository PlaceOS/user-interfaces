import { Component, Input } from '@angular/core';

import { SettingsService } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';
import { Space } from '@user-interfaces/spaces';


@Component({
    selector: 'a-control-space-list-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ControlSpaceListItemComponent {
    /** Space to display */
    @Input() public space: Space;

    public get show_image() {
        return this._settings.get('app.space_display.show_images');
    }

    /** Display location of the space */
    public get location(): string {
        if (!this.space) {
            return 'Unable to determine location';
        }
        const level = this.space.level;
        const bld = this._org.buildings.find(building => building.id === level.parent_id);
        return `${bld ? bld.name + ', ' : ''}${level.name}`;
    }

    constructor(private _settings: SettingsService, private _org: OrganisationService) { }
}
