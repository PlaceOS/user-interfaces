import { Component, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { getUnixTime } from 'date-fns';
import { debounceTime, map } from 'rxjs/operators';

@Component({
    selector: 'panel-topbar',
    template: `
        <div
            class="flex h-16 w-full items-center justify-between border-b border-base-200 bg-secondary text-white"
        >
            <img
                [src]="(logo | async)?.src || (logo | async)"
                alt="Logo"
                class="mx-2 h-12"
            />
            <div time class="mx-4 flex items-center space-x-2 text-xl">
                <span>{{ time | date: 'shortTime' }}</span>
                <span> • </span>
                <span>{{ time | date: 'mediumDate' }}</span>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class PanelTopbarComponent {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.theme === 'dark'
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );

    public get time() {
        return getUnixTime(new Date()) * 1000;
    }
}
