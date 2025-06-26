import { Component, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { startOfMinute } from 'date-fns';
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
                class="flex h-full flex-col justify-center px-4"
            >
                <img
                    auth
                    class="my-2 h-10"
                    alt="Logo"
                    [source]="(logo | async)?.src || (logo | async)"
                />
            </a>
            <div
                class="ml-auto flex h-full flex-col justify-center px-4 text-white"
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
    standalone: false,
})
export class TopbarHeaderComponent {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public date: number;

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
        return startOfMinute(Date.now());
    }
}
