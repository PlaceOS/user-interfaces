import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { getUnixTime } from 'date-fns';
import { debounceTime, map } from 'rxjs/operators';

@Component({
    selector: 'panel-topbar',
    template: `
        <div
            class="w-full flex items-center justify-between h-16 border-b border-base-200 bg-secondary text-white"
        >
            <img
                [src]="(logo | async)?.src || (logo | async)"
                alt="Logo"
                class="h-12 mx-2"
            />
            <div time class="flex items-center space-x-2 mx-4 text-xl">
                <span>{{ time | date: 'shortTime' }}</span>
                <span> • </span>
                <span>{{ time | date: 'mediumDate' }}</span>
            </div>
        </div>
    `,
    styles: [``],
})
export class PanelTopbarComponent {
    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.get('theme') === 'dark'
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );

    public get time() {
        return getUnixTime(new Date()) * 1000;
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {}
}
