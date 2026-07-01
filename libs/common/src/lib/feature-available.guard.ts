import { Injectable, inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { first } from 'rxjs/operators';

import { OrganisationService, SettingsService } from '@placeos/common';

export abstract class PLACEOS_APP_ACCESS {
    public readonly group: string;
}

@Injectable({
    providedIn: 'root',
})
export class FeatureAvailableGuard {
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public async canActivate(): Promise<boolean | UrlTree> {
        return this.checkFeature();
    }

    public async canLoad(): Promise<boolean> {
        return this.checkFeature();
    }

    private async checkFeature() {
        await this._org.waitUntilInitialised();
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        const features = this._settings.get('app.disabled_features') || [];
        const can_activate = !features.find((_) =>
            this._router.url.includes(_),
        );
        if (!can_activate) {
            this._router.navigate(['/']);
        }
        return !!can_activate;
    }
}
