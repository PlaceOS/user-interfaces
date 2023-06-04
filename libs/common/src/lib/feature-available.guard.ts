import { Injectable } from '@angular/core';
import { UrlTree, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

export abstract class PLACEOS_APP_ACCESS {
    public readonly group: string;
}

@Injectable({
    providedIn: 'root',
})
export class FeatureAvailableGuard  {
    constructor(
        private _router: Router,
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}

    public async canActivate(): Promise<boolean | UrlTree> {
        return this.checkFeature();
    }

    public async canLoad(): Promise<boolean> {
        return this.checkFeature();
    }

    private async checkFeature() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        const features = this._settings.get('app.disabled_features') || [];
        const can_activate = !features.find((_) =>
            this._router.url.includes(_)
        );
        if (!can_activate) {
            this._router.navigate(['/']);
        }
        return !!can_activate;
    }
}
