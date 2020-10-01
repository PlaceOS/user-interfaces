import { Component, OnInit } from '@angular/core';
import { BaseClass } from 'src/app/common/base.class';
import { SettingsService } from 'src/app/common/settings.service';
import { ApplicationLink } from 'src/app/common/types';


@Component({
    selector: 'a-footer-menu',
    templateUrl: './footer-menu.component.html',
    styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent extends BaseClass implements OnInit {

    /** Tiles to display on the home page */
    public tiles: ApplicationLink[] = [];

    constructor(private _settings: SettingsService) {
        super();
    }

    /** Angular Component initialisation lifecycle hook */
    public ngOnInit(): void {
        this.tiles = this._settings.get('app.home.tiles') || [];
    }
}
