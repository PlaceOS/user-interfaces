import { Component, Input } from '@angular/core';

import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';

@Component({
    selector: 'a-control-space-list-item',
    template: `
        <div
            class="flex flex-wrap items-center sm:space-x-4 bg-base-100 hover:bg-base-200 overflow-hidden p-2 pl-4 mb-2"
            *ngIf="space"
            [class.with-image]="show_image"
        >
            <div class="flex flex-col flex-1">
                <div class="text-xl">{{ space.name }}</div>
                <div class="flex items-center w-full text-sm">
                    <div class="flex-1">{{ location }}</div>
                    <div class="flex items-center text-lg">
                        <app-icon>account_circle</app-icon>
                        {{ space.capacity || '0' }}
                    </div>
                </div>
            </div>
            <div
                class="flex w-full sm:w-auto sm:flex-col items-center space-x-2 sm:space-x-0 sm:space-y-2 mt-4 sm:mt-0"
            >
                <a
                    btn
                    matRipple
                    control
                    class="w-32 flex-1 sm:flex-none"
                    [href]="space.support_url | safe: 'url'"
                >
                    Control
                </a>
                <a
                    btn
                    matRipple
                    locate
                    class="w-32 flex-1 sm:flex-none inverse"
                    [routerLink]="['/explore']"
                    [queryParams]="{ space: space.id }"
                >
                    Find
                </a>
            </div>
        </div>
    `,
    styles: [``],
})
export class ControlSpaceListItemComponent {
    /** Space to display */
    @Input() public space: Space;

    public get show_image() {
        return this._settings.get('app.spaces.show_images');
    }

    /** Display location of the space */
    public get location(): string {
        if (!this.space) {
            return 'Unable to determine location';
        }
        const level = this.space.level;
        const bld = this._org.buildings.find(
            (building) => building.id === level.parent_id
        );
        return `${bld ? (bld.display_name || bld.name) + ', ' : ''}${
            level?.display_name || level?.name || '<No Level>'
        }`;
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}
}
