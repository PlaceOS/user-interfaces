import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseClass } from 'src/app/common/base.class';
import { ApplicationLink } from '../../utilities/settings.interfaces';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: 'a-footer-menu',
    templateUrl: './footer-menu.component.html',
    styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent extends BaseClass implements OnInit {
    /** Tiles to display on the home page */
    public tiles: ApplicationLink[] = [];

    constructor(private _settings: SettingsService, private _router: Router) {
        super();
    }

    /** Angular Component initialisation lifecycle hook */
    public ngOnInit(): void {
        this.tiles = this._settings.get('app.home.footer') || [];
    }

    public isLinkActive(url): boolean {
        const queryParamsIndex = this._router.url.indexOf('?');
        const baseUrl =
            queryParamsIndex === -1
                ? this._router.url
                : this._router.url.slice(0, queryParamsIndex);
        return baseUrl === url;
    }
}
