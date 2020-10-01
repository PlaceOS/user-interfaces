import { Component, OnInit } from '@angular/core';

import { BaseClass } from 'src/app/common/base.class';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss']
})
export class HelpComponent extends BaseClass implements OnInit {
    /** Whether to show the overlay menu */
    public show_menu: boolean;

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Help';
    }
}
