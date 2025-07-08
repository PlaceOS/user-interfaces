import { Component, inject, input } from '@angular/core';

import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';

@Component({
    selector: 'a-control-space-list-item',
    template: `
        @if (space()) {
            <div
                class="mx-auto mb-2 flex max-w-[40rem] flex-wrap items-center overflow-hidden rounded border border-base-200 bg-base-100 p-2 pl-4 hover:border-info sm:space-x-4"
                [class.with-image]="show_image"
            >
                <div class="flex flex-1 flex-col">
                    <div class="text-xl">
                        {{ space().display_name || space().name }}
                    </div>
                    <div class="flex w-full items-center text-sm">
                        <div class="flex-1">{{ location }}</div>
                        <div class="flex items-center space-x-2 text-lg">
                            <icon class="text-2xl">account_circle</icon>
                            <div>{{ space().capacity || '0' }}</div>
                        </div>
                    </div>
                </div>
                <div
                    class="mt-4 flex w-full items-center space-x-2 sm:mt-0 sm:w-auto sm:flex-col sm:space-x-0 sm:space-y-2"
                >
                    <a
                        btn
                        matRipple
                        control
                        class="w-32 flex-1 sm:flex-none"
                        [href]="space().support_url | safe: 'url'"
                    >
                        Control
                    </a>
                    @if (allow_locate) {
                        <a
                            btn
                            matRipple
                            locate
                            class="inverse w-32 flex-1 sm:flex-none"
                            [routerLink]="['/explore']"
                            [queryParams]="{ space: space().id }"
                        >
                            Find
                        </a>
                    }
                </div>
            </div>
        }
    `,
    styles: [``],
    standalone: false,
})
export class ControlSpaceListItemComponent {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    /** Space to display */
    public readonly space = input<Space>(undefined);

    public get show_image() {
        return this._settings.get('app.spaces.show_images');
    }

    public get allow_locate() {
        return (this._settings.get('app.features') || []).includes('explore');
    }

    /** Display location of the space */
    public get location(): string {
        const space = this.space();
        if (!space) {
            return 'Unable to determine location';
        }
        const level = space.level;
        const bld = this._org.buildings.find(
            (building) => building.id === level.parent_id,
        );
        return `${bld ? (bld.display_name || bld.name) + ', ' : ''}${
            level?.display_name || level?.name || '<No Level>'
        }`;
    }
}
