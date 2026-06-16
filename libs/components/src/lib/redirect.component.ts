import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
    firstTruthyValueFrom,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

@Component({
    selector: 'page-redirect',
    template: ``,
    styles: [``],
})
export class RedirectComponent implements OnInit {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _router = inject(Router);

    public async ngOnInit() {
        await firstTruthyValueFrom(this._settings.initialised);
        await this._org.waitUntilInitialised();
        if (!this._settings.get('app.default_route')) return;
        this._router.navigate(
            this._settings.get('app.default_route').split('/'),
            { replaceUrl: true },
        );
    }
}
