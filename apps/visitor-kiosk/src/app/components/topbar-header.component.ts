import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { format, startOfMinute } from 'date-fns';
import { debounceTime, map } from 'rxjs/operators';

@Component({
    selector: 'a-topbar-header',
    template: `
        <div
            class="flex items-center justify-between bg-[hsl(237,37%,10%)] shadow"
        >
            <a
                matRipple
                [routerLink]="['/']"
                class="h-full flex flex-col justify-center px-4"
            >
                <img
                    auth
                    class="h-10 my-2"
                    alt="Logo"
                    [source]="(logo | async)?.src || (logo | async)"
                />
            </a>
            <div
                class="ml-auto h-full flex flex-col justify-center text-white px-4"
            >
                {{ time | date: 'fullDate' }}
            </div>
        </div>
    `,
    styles: [
        `
            :host > div {
                height: 3.5rem;
            }

            a {
                border-radius: 0;
            }

            img {
                max-height: 2.5rem;
                max-width: 50vw;
            }
        `,
    ],
})
export class TopbarHeaderComponent {
    public date: number;

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
        return startOfMinute(Date.now());
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {}
}
