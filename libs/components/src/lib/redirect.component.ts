import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { SettingsService } from '@placeos/common';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

@Component({
    selector: 'page-redirect',
    template: ``,
    styles: [``],
    standalone: false,
})
export class RedirectComponent implements OnInit {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _router = inject(Router);

    public async ngOnInit() {
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        if (!this._settings.get('app.default_route')) return;
        this._router.navigate(
            this._settings.get('app.default_route').split('/'),
        );
    }
}
