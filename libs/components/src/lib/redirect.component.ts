import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SettingsService } from "@placeos/common";
import { OrganisationService } from "@placeos/organisation";
import { take } from "rxjs/operators";

@Component({
    selector: 'page-redirect',
    template: ``,
    styles: [``]
})
export class RedirectComponent implements OnInit {
    constructor(private _settings: SettingsService, private _org: OrganisationService, private _router: Router) {}

    public async ngOnInit() {
        await this._settings.initialised.pipe(take(1)).toPromise();
        await this._org.initialised.pipe(take(1)).toPromise();
        if (!this._settings.get('app.default_route')) return;
        this._router.navigate(this._settings.get('app.default_route').split('/'));
    }
}
