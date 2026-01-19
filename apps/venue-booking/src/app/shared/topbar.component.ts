import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { OrganisationService, SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { debounceTime, map } from 'rxjs';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="bg-secondary text-secondary-content p-2">
            <a [routerLink]="['/']">
                <img
                    auth
                    class="h-12"
                    alt="Logo"
                    [source]="logo()?.src || logo()"
                />
            </a>
        </div>
    `,
    styles: [``],
    imports: [AuthenticatedImageDirective, RouterLink],
})
export class TopbarComponent {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly logo = toSignal(
        this._org.active_building.pipe(
            debounceTime(500),
            map(
                () =>
                    (this._settings.theme === 'dark'
                        ? this._settings.get('app.logo_dark')
                        : this._settings.get('app.logo_light')) || {},
            ),
        ),
    );
}
